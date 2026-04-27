'use client'
import { useState, Suspense } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase'
import { useRouter, useSearchParams } from 'next/navigation'
import Button from '@/components/ui/Button'

const roles = [
  { id: 'fermier', label: '🌾 Sunt fermier', desc: 'Caut utilaje și servicii agricole' },
  { id: 'prestator', label: '🚜 Am utilaje/servicii', desc: 'Vreau să ofer servicii agricole' },
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
    router.push(`/dashboard/${role}`)
  }

  return (
    <div className="bg-white rounded-2xl border border-[#2C2416]/8 p-8">
      <div className="grid grid-cols-2 gap-2 mb-6">
        {roles.map(r => (
          <button key={r.id} type="button" onClick={() => setRole(r.id)}
            className={`text-left p-3 rounded-xl border text-sm transition-all ${role === r.id ? 'border-green-400 bg-green-50' : 'border-[#2C2416]/10'}`}>
            <div className="font-medium text-earth-900">{r.label}</div>
            <div className="text-xs text-earth-400 mt-0.5">{r.desc}</div>
          </button>
        ))}
      </div>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-earth-900 mb-1.5">Nume complet</label>
          <input requi