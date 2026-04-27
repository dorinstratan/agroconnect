'use client'
import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase'
import { useRouter, useSearchParams } from 'next/navigation'
import Button from '@/components/ui/Button'

const roles = [
  { id: 'fermier',   label: '🌾 Sunt fermier',      desc: 'Caut utilaje și servicii agricole' },
  { id: 'prestator', label: '🚜 Am utilaje/servicii', desc: 'Vreau să ofer servicii agricole' },
]

export default function RegisterPage() {
  const router = useRouter()
  const params = useSearchParams()
  const [role, setRole] = useState<string>(params.get('rol') || 'fermier')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { data, error: signUpError } = await supabase.auth.signUp({ email, password })
    if (signUpError) { setError(signUpError.message); setLoading(false); return }
    if (data.user) {
      await supabase.from('profiles').upsert({
        id: data.user.id, full_name: name, role,
      })
    }
    router.push(`/dashboard/${role}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF8F3] px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="font-serif text-2xl font-bold text-earth-900">
            Agro<span className="text-green-400">Connect</span>
          </Link>
          <p className="text-earth-400 text-sm mt-2">Creează un cont gratuit</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#2C2416]/8 p-8">
          {/* Role selector */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {roles.map(r => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRole(r.id)}
                className={`text-left p-3 rounded-xl border text-sm transition-all
                  ${role === r.id
                    ? 'border-green-400 bg-green-50'
                    : 'border-[#2C2416]/10 hover:border-[#2C2416]/20'
                  }`}
              >
                <div className="font-medium text-earth-900">{r.label}</div>
                <div className="text-xs text-earth-400 mt-0.5">{r.desc}</div>
              </button>
            ))}
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-earth-900 mb-1.5">Nume complet</label>
              <input
                required value={name} onChange={e => setName(e.target.value)}
                placeholder="Ion Moldovan"
                className="w-full px-4 py-2.5 rounded-xl border border-[#2C2416]/15 bg-[#FAF8F3] text-sm focus:outline-none focus:border-green-400 transition-colors"
              />
            </div>
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
                placeholder="Minim 8 caractere"
                className="w-full px-4 py-2.5 rounded-xl border border-[#2C2416]/15 bg-[#FAF8F3] text-sm focus:outline-none focus:border-green-400 transition-colors"
              />
            </div>
            {error && <p className="text-xs text-red-500 bg-red-50 px-3 py-2 rounded-lg">{error}</p>}
            <Button type="submit" loading={loading} className="w-full" size="lg">
              Creează cont gratuit
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-earth-400 mt-6">
          Ai deja cont?{' '}
          <Link href="/auth/login" className="text-green-400 font-medium hover:underline">
            Intră în cont
          </Link>
        </p>
      </div>
    </div>
  )
}
