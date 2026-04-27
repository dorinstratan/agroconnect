'use client'
import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) { setError(error.message); setLoading(false); return }
    router.push('/dashboard/fermier')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF8F3] px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="font-serif text-2xl font-bold text-earth-900">
            Agro<span className="text-green-400">Connect</span>
          </Link>
          <p className="text-earth-400 text-sm mt-2">Intră în contul tău</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#2C2416]/8 p-8">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-earth-900 mb-1.5">Email</label>
              <input
                type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder="ion@exemplu.md"
                className="w-full px-4 py-2.5 rounded-xl border border-[#2C2416]/15 bg-[#FAF8F3] text-sm focus:outline-none focus:border-green-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-earth-900 mb-1.5">Parolă</label>
              <input
                type="password" required value={password} onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl border border-[#2C2416]/15 bg-[#FAF8F3] text-sm focus:outline-none focus:border-green-400 transition-colors"
              />
            </div>
            {error && <p className="text-xs text-red-500 bg-red-50 px-3 py-2 rounded-lg">{error}</p>}
            <Button type="submit" loading={loading} className="w-full" size="lg">
              Intră în cont
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-earth-400 mt-6">
          Nu ai cont?{' '}
          <Link href="/auth/register" className="text-green-400 font-medium hover:underline">
            Înregistrează-te gratuit
          </Link>
        </p>
      </div>
    </div>
  )
}
