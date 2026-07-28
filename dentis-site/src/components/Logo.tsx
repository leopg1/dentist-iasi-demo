import { Link } from 'react-router-dom'

/**
 * Logo Dentis: dinte stilizat prins într-o buclă aurie — reinterpretare a
 * logo-ului real de pe peretele recepției. La livrare se înlocuiește cu
 * fișierul vectorial primit de la clinică.
 */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5" aria-label="Dentis Iași — Acasă">
      <svg viewBox="0 0 64 64" className="h-10 w-10 shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E3C87E" />
            <stop offset="1" stopColor="#B58C3A" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill={light ? 'rgba(255,255,255,0.12)' : '#121A3A'} />
        <path
          fill="url(#logo-g)"
          d="M30 16c-3.6 0-4.9 1.9-8.2 1.9-2.7 0-6.4 1.4-6.4 7.3 0 6.6 3.5 12.5 5.3 18.1.8 2.4 1.9 4.2 3.5 4.2 3.1 0 1.6-9.1 5.8-9.1s2.5 9.1 5.7 9.1c1.7 0 2.8-1.8 3.6-4.2 1.8-5.6 5.3-11.5 5.3-18.1 0-5.9-3.7-7.3-6.4-7.3-3.3 0-4.6-1.9-8.2-1.9z"
        />
        <path
          fill="none"
          stroke="url(#logo-g)"
          strokeWidth="2.4"
          strokeLinecap="round"
          d="M42 19.5c6.2 2.4 9.4 7.2 7.6 11.7-2.3 5.8-11.6 8.2-20.8 5.4"
        />
      </svg>
      <span className="leading-none">
        <span
          className={`block font-display text-[26px] font-semibold tracking-tight ${light ? 'text-white' : 'text-plum-950'}`}
        >
          Denti<span className="text-coral-600">S</span>
        </span>
        <span
          className={`mt-0.5 block text-[10px] font-bold uppercase tracking-[0.32em] ${light ? 'text-white/70' : 'text-plum-500'}`}
        >
          Clinică · Iași
        </span>
      </span>
    </Link>
  )
}
