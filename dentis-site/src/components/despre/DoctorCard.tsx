import { Quote } from 'lucide-react'
import type { TeamMember } from '../../lib/site'
import Reveal from '../Reveal'

type Props = {
  doctor: TeamMember
  index?: number
}

/** Inițialele medicului, pentru monogramă (ignoră titulatura „Dr.”). */
function initials(name: string) {
  return name
    .replace(/^Dr\.?\s*/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

/**
 * Card de medic pentru pagina Echipa: portret, bio, arii de expertiză și citat din recenzii.
 * Dacă nu avem încă portretul individual (clinica nu ni l-a trimis), afișăm o monogramă
 * pe fundal bleumarin în locul unei poze generice — vezi §15 din dosar.
 */
export default function DoctorCard({ doctor, index = 0 }: Props) {
  return (
    <Reveal delay={(index % 2) * 0.12} className="h-full">
      <article className="card-surface flex h-full flex-col transition hover:border-plum-200">
        <div className="card-pad-lg flex flex-1 flex-col">
          {doctor.photo ? (
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-plum-100 ring-1 ring-plum-100">
              <img
                src={doctor.photo}
                alt={`${doctor.name} — medic la clinica Dentis din Iași`}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
          ) : (
            <div
              className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-2xl bg-plum-950 ring-1 ring-plum-100"
              role="img"
              aria-label={`${doctor.name} — fotografie în curs de adăugare`}
            >
              <span
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-coral-400/10 blur-2xl"
                aria-hidden="true"
              />
              <span className="font-display text-6xl font-semibold tracking-wide text-coral-300 md:text-7xl">
                {initials(doctor.name)}
              </span>
            </div>
          )}

          <h3 className="card-title mt-6">{doctor.name}</h3>
          <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.16em] text-coral-600">
            {doctor.role}
          </p>

          <p className="mt-4 text-base leading-relaxed text-plum-900/75">{doctor.bio}</p>

          {doctor.areas.length > 0 && (
            <ul
              className="mt-5 flex flex-wrap gap-2"
              aria-label={`Arii de expertiză — ${doctor.name}`}
            >
              {doctor.areas.map((area) => (
                <li
                  key={area}
                  className="rounded-full bg-plum-50 px-3.5 py-1.5 text-xs font-bold text-plum-700"
                >
                  {area}
                </li>
              ))}
            </ul>
          )}

          {doctor.quote && (
            <figure className="mt-auto border-l-2 border-coral-300 pl-4 pt-6">
              <Quote className="h-4 w-4 text-coral-300" aria-hidden="true" />
              <blockquote className="quote-serif mt-1.5">„{doctor.quote}”</blockquote>
              {doctor.quoteAuthor && (
                <figcaption className="mt-2 text-xs font-semibold text-plum-900/70">
                  — {doctor.quoteAuthor}
                </figcaption>
              )}
            </figure>
          )}
        </div>
      </article>
    </Reveal>
  )
}
