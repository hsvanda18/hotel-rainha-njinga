export default function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID
  if (!clientId) {
    return res.status(500).send('GITHUB_CLIENT_ID não configurado nas variáveis de ambiente do Vercel.')
  }

  const proto = req.headers['x-forwarded-proto'] || 'https'
  const host = req.headers['x-forwarded-host'] || req.headers.host
  const redirectUri = `${proto}://${host}/api/callback`

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: req.query.scope || 'repo',
    state: 'github',
  })

  res.redirect(`https://github.com/login/oauth/authorize?${params}`)
}
