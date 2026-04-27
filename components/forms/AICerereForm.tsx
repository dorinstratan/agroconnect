'use client'
import { useState } from 'react'
import { Sparkles, Send } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

interface ParsedRequest {
  serviciu?: string
  suprafata?: string
  locatie?: string
  cultura?: string
  perioada?: string
  buget?: string
}

export default function AICerereForm() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [parsed, setParsed] = useState<ParsedRequest | null>(null)
  const [error, setError] = useState('')

  async function analyze() {
    if (!input.trim()) return
    setLoading(true)
    setError('')
    setParsed(null)

    try {
      const res = await fetch('/api/cereri/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setParsed(data)
    } catch (e: any) {
      setError(e.message || 'Eroare la procesare. Încearcă din nou.')
    } finally {
      setLoading(false)
    }
  }

  const tagColors: Record<string, 'green' | 'blue' | 'amber'> = {
    serviciu: 'green', suprafata: 'blue', locatie: 'amber',
    cultura: 'green', perioada: 'blue', buget: 'amber',
  }
  const tagLabels: Record<string, string> = {
    serviciu: 'Serviciu', suprafata: 'Suprafată', locatie: 'Locație',
    cultura: 'Cultură', perioada: 'Perioadă', buget: 'Buget',
  }

  return (
    <div className="bg-white rounded-2xl border border-[#2C2416]/8 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" />
        <span className="text-xs text-earth-400">Asistent AI — descrie ce ai nevoie</span>
      </div>

      {/* Textarea */}
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && e.metaKey && analyze()}
        placeholder="Ex: Am 20 ha la Orhei și am nevoie de pregătire teren pentru porumb în mai..."
        rows={3}
        className="w-full resize-none text-sm bg-[#FAF8F3] border border-[#2C2416]/10 rounded-xl px-4 py-3 focus:outline-none focus:border-green-400 transition-colors placeholder:text-earth-400 text-earth-900"
      />

      {/* Analyze button */}
      <div className="flex justify-end mt-3">
        <Button onClick={analyze} loading={loading} size="sm">
          <Sparkles size={14} className="mr-1.5" />
          Analizează
        </Button>
      </div>

      {/* Error */}
      {error && (
        <p className="mt-3 text-xs text-red-500 bg-red-50 px-3 py-2 rounded-lg">{error}</p>
      )}

      {/* Result tags */}
      {parsed && (
        <div className="mt-4 pt-4 border-t border-[#2C2416]/6">
          <p className="text-xs text-earth-400 mb-2">Cerere structurată automat:</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(parsed).map(([key, value]) =>
              value ? (
                <Badge key={key} color={tagColors[key] || 'green'}>
                  {tagLabels[key] || key}: {value}
                </Badge>
              ) : null
            )}
          </div>
          <Button className="mt-4 w-full" size="sm">
            <Send size={14} className="mr-1.5" />
            Trimite cererea și primește oferte
          </Button>
        </div>
      )}
    </div>
  )
}
