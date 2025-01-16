'use server'

import { redirect } from 'next/navigation'

export async function signInWithGithub() {
  const url = new URL('login/oauth/authorize', 'https://github.com')

  url.searchParams.set('client_id', 'Ov23lij7HRJPqZcDSSzE')
  url.searchParams.set(
    'redirect_uri',
    'http://localhost:3000/api/auth/callback',
  )
  url.searchParams.set('scope', 'user')

  redirect(url.toString())
}
