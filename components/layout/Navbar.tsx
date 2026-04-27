'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F3]/90 backdrop-blur-md border-b border-[#2C2416]/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="font-serif text-xl font-bold text-earth-900">
          Agro<span className="text-green-400">Connect</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {[
            ['#cum-functioneaza', 'Cum funcționează'],
            ['#pentru-cine', 'Pentru cine'],
            ['#ai', 'Asistent AI'],
            ['#preturi', 'Prețuri'],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-sm text-earth-400 hover:text-green-400 transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/auth/login" className="text-sm text-earth-400 hover:text-earth-900 transition-colors">
            Intră în cont
          </Link>
          <Link
            href="/auth/register"
            className="bg-green-400 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors"
          >
            Înregistrează-te
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FAF8F3] border-t border-[#2C2416]/10 px-6 py-4 flex flex-col gap-4">
          {[
            ['#cum-functioneaza', 'Cum funcționează'],
            ['#pentru-cine', 'Pentru cine'],
            ['#ai', 'Asistent AI'],
            ['#preturi', 'Prețuri'],
          ].map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-earth-400" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <Link href="/auth/register" className="bg-green-400 text-white text-center py-2 rounded-full text-sm font-medium">
            Înregistrează-te gratuit
          </Link>
        </div>
      )}
    </nav>
  )
}
