import { Eye, Ruler, Scan, Timer } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'

const beneficii = [
  {
    icon: Timer,
    title: 'Câteva minute, nu o ședință',
    text: 'Scanarea durează câteva minute. Fără pastă în gură, fără senzația de sufocare, fără reflexul de vomă.',
  },
  {
    icon: Eye,
    title: 'Vezi și tu ce vedem noi',
    text: 'Modelul 3D apare pe ecran în timp real. Îți arătăm exact unde e problema, în loc să ți-o descriem.',
  },
  {
    icon: Ruler,
    title: 'Lucrări care se potrivesc din prima',
    text: 'Precizia digitală înseamnă coroane și aparate care vin bine de la început — mai puține probe, mai puține drumuri.',
  },
]

export default function ScanareDigitala() {
  return (
    <ServiceLayout
      slug="scanare-digitala"
      metaTitle="Scanare digitală 3D dentară Iași — Dentis"
      metaDescription="Amprentă dentară digitală 3D la Dentis Iași: fără pastă, fără disconfort, doar precizie. Vezi modelul pe ecran în timp real. ☎ 0332 408 243"
      eyebrow="Tehnologie"
      title={
        <>
          Amprenta clasică? <span className="text-coral-600">Nu mai e nevoie.</span>
        </>
      }
      intro="Dacă ai trecut vreodată prin amprentarea clasică, știi despre ce vorbim: pasta aia care se întărește în gură, senzația că nu mai poți respira, iar la final materialul care se lipește de aparatul dentar. Scanarea digitală înlocuiește tot procesul cu o cameră mică, plimbată câteva minute peste dinți."
      heroImage="/media/services/scanare-digitala.jpg"
      heroImageAlt="Scanare intraorală digitală 3D la clinica Dentis Iași"
      badge="Scanare intraorală 3D"
      highlights={[
        'Fără pastă de amprentă și fără disconfort',
        'Modelul 3D apare pe ecran în timp real',
        'Deosebit de util dacă porți aparat dentar',
      ]}
      ctaTitle="Vino să vezi cum arată dinții tăi în 3D"
    >
      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">De ce contează</h2>
          <p className="mt-4 leading-relaxed text-plum-900/70">
            Nu e o jucărie tehnologică. Schimbă concret trei lucruri: cât de comod îți e ție,
            cât de precis lucrăm noi și cât de repede ajungi la rezultatul final.
          </p>
        </Reveal>
        <div className="mt-7 grid gap-6 sm:grid-cols-3">
          {beneficii.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="card-surface h-full card-pad">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                  <b.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 card-title">{b.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <figure>
          <img
            src="/media/services/ortodontie-scanare.jpg"
            alt="Scanare digitală pentru un pacient cu aparat dentar, la Dentis Iași"
            className="aspect-[16/10] w-full rounded-3xl object-cover shadow-lift"
            loading="lazy"
          />
          <figcaption className="mt-3.5 text-center text-xs font-medium text-plum-900/70">
            Cu aparat dentar, diferența față de amprenta clasică se simte cel mai tare.
          </figcaption>
        </figure>
      </Reveal>

      <Reveal>
        <div className="rounded-3xl bg-plum-50 card-pad-lg">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-coral-600 shadow-hair">
              <Scan className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="h-display text-3xl md:text-4xl">Pentru ce o folosim</h2>
              <p className="mt-4 leading-relaxed text-plum-900/75">
                Pentru aparate dentare și gutiere, pentru coroane și lucrări protetice, pentru
                planificarea tratamentelor de estetică și, de multe ori, pur și simplu ca să
                putem urmări în timp cum evoluează dinții tăi. Modelul rămâne salvat digital —
                nu se pierde și nu se deformează, cum se întâmpla cu mulajele de gips.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </ServiceLayout>
  )
}
