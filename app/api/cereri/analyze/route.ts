import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 500,
        system: `Ești un asistent agricol. Extrage din mesajul fermierului: serviciu, suprafata, locatie, cultura, perioada, buget.
Răspunde DOAR cu JSON valid, fără markdown, fără explicații.
Exemplu: {"serviciu":"arat","suprafata":"20 ha","locatie":"Orhei","cultura":"porumb","perioada":"mai","buget":"~17000 lei"}
Dacă un câmp lipsește, pune null.`,
        messages: [{ role: 'user', content: message }],
      }),
    })

    const data = await response.json()
    const text = data.content?.[0]?.text || '{}'

    let parsed: Record<string, string | null> = {}
    try {
      parsed = JSON.parse(text.replace(/```json|```/g, '').trim())
    } catch {
      return NextResponse.json({ error: 'Nu am putut interpreta mesajul.' }, { status: 422 })
    }

    return NextResponse.json(parsed)
  } catch (err) {
    return NextResponse.json({ error: 'Eroare server.' }, { status: 500 })
  }
}
