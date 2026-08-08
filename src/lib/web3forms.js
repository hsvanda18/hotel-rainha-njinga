const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export async function submitToWeb3Forms(data, subject) {
  if (!ACCESS_KEY) {
    throw new Error('missing-access-key')
  }

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject,
      from_name: 'Hotel Rainha Njinga — Site',
      replyto: data.email,
      ...data,
    }),
  })

  const result = await res.json()
  if (!result.success) {
    throw new Error(result.message || 'submit-failed')
  }
  return result
}
