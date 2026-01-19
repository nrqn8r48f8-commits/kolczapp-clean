'use client'
export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')

  const handleLogin = async () => {
    setStatus('Logowanie...')
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setStatus(error.message)
    } else {
      setStatus('Zalogowano ✅')
      window.location.href = '/'
    }
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Logowanie</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Zaloguj</button>

      <p>{status}</p>
    </main>
  )
}
