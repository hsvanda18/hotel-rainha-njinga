export default async function handler(req, res) {
  const { code } = req.query

  if (!code) {
    return res.status(400).send('Parâmetro "code" em falta.')
  }

  const r = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  })

  const { access_token: token, error, error_description } = await r.json()

  if (error || !token) {
    return res.status(400).send(`Erro OAuth: ${error_description || error}`)
  }

  const payload = JSON.stringify({ token, provider: 'github' })

  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!doctype html><html><body><script>
(function () {
  var p = ${JSON.stringify(payload)};
  function receive(e) {
    window.opener.postMessage('authorization:github:success:' + p, e.origin);
  }
  window.addEventListener('message', receive, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script></body></html>`)
}
