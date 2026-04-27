'use client'
import { useState, Suspense } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase'
import { useRouter, useSearchParams } from 'next/navigation'
import Button from '@/components/ui/Button'

const roles = [
  { id: 'fermier', label: 'Sunt fermier', desc: 'Caut utilaje si servicii agricole' },
  { id: 'prestator', label: 'Am utilaje/servicii', desc: 'Vreau sa ofer servicii agricole' },
]

function RegisterForm() {
  const router = useRouter()
  const params = useSearchParams()
  const [role, setRole] = useState(params.get('rol') || 'fermier')
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
      await supabase.from('profiles').upsert({ id: data.user.id, full_name: name, role })
    }
    router.push('/dashboard/' + role)
  }

  return (
    <div className="bg-white rounded-2xl border p-8">
      <div className="grid grid-cols-2 gap-2 mb-6">
        {roles.map(r => (
          <button key={r.id} type="button" onClick={() => setRole(r.id)}
            className={`text-left p-3 rounded-xl border text-sm ${role === r.id ? 'border-green-400 bg-green-50' : 'border-gray-200'}`}>
            <div className="font-medium">{r.label}</div>
            <div className="text-xs text-gray-400 mt-0.5">{r.desc}</div>
          </button>
        ))}
      </div>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nume complet</label>
          <input required value={name} onChange={e => setName(e.target.value)}
            placeholder="Ion Moldovan"
            className="w-full px-4 py-2.5 rounded-xl border bg-gray-50 text-sm focus:outline-none focus:border-green-400" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
            placeholder="ion@exemplu.md"
            className="w-full px-4 py-2.5 rounded-xl border bg-gray-50 text-sm focus:outline-none focus:border-green-400" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Parola</label>
          <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
            placeholder="Minim 8 caractere"
            className="w-full px-4 py-2.5 rounded-xl border bg-gray-50 text-sm focus:outline-none focus:border-green-400" />
        </div>
        {error && <p className="text-xs text-red-500 bg-red-50 px-3 py-2 rounded-lg">{error}</p>}
        <Button type="submit" loading={loading} className="w-full" size="lg">Creeaza cont gratuit</Button>
      </form>
    </div>
  )
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold">
            AgroConnect
          </Link>
          <p className="text-gray-400 text-sm mt-2">Creeaza un cont gratuit</p>
        </div>
        <Suspense fallback={<div className="p-8 text-center text-sm">Se incarca...</div>}>
          <RegisterForm />
        </Suspense>
        <p className="text-center text-sm text-gray-400 mt-6">
          Ai deja cont?{' '}
          <Link href="/auth/login" className="text-green-500 font-medium hover:underline">Intra in cont</Link>
        </p>
      </div>
    </div>
  )
}