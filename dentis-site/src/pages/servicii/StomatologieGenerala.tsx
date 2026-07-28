import { CalendarCheck, MessageSquare, ShieldCheck } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'

const situatii = [
  'Te doare un dinte și nu știi de la ce',
  'Ai o carie pe care o amâni de luni bune',
  'S-a spart o plombă veche sau o bucată de dinte',
  'Îți sângerează gingiile când te speli pe dinți',
  'Simți sensibilitate la rece, la cald sau la dulce',
  'Nu ai mai fost la dentist de câțiva ani și nu știi de unde să începi',
]

const pasi = [
  {
    icon: MessageSquare,
    title: '1. Stăm de vorbă',
    text: 'Ne spui ce te supără și de cât timp. Te ascultăm până la capăt, fără să ne grăbim.',
  },
  {
    icon: ShieldCheck,
    title: '2. Consultația',
    text: 'Verificăm fiecare dinte și gingiile. Dacă e nevoie de o radiografie, o facem și ți-o arătăm pe ecran.',
  },
  {
    icon: CalendarCheck,
    title: '3. Planul de tratament',
    text: 'Îți explicăm ce am găsit, ce e urgent și ce mai poate aștepta. Tu decizi cu ce începem.',
  },
]

export default function StomatologieGenerala() {
  return (
    <ServiceLayout
      slug="stomatologie-generala"
      metaTitle="Stomatologie generală Iași — Dentis, Str. Crișului"
      metaDescription="Consultații, carii, plombe și dureri dentare la Dentis Iași. Îți explicăm fiecare pas înainte să îl facem. 4,8★ pe Google. ☎ 0332 408 243"
      eyebrow="Stomatologie generală"
      title={
        <>
          Grija de zi cu zi pentru <span className="text-coral-600">dinții tăi</span>
        </>
      }
      intro="Consultații, carii, plombe, urgențe apărute peste noapte. Stomatologia obișnuită, făcută bine — și, mai ales, explicată. Cel mai des lăudat lucru în recenziile noastre nu e o tehnologie, ci faptul că oamenii pleacă de la cabinet înțelegând exact ce li s-a făcut."
      heroImage="/media/clinic/cabinet-1.jpg"
      heroImageAlt="Cabinetul 1 de tratament de la clinica Dentis din Iași"
      heroImageClassName="object-[center_35%]"
      highlights={[
        'Consultație completă, cu radiografie dacă e nevoie',
        'Plan de tratament pe pași, în ordinea urgenței',
        'Fiecare procedură explicată înainte să înceapă',
      ]}
      ctaTitle="Hai să vedem întâi ce ai de făcut"
    >
      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">Cu ce vin oamenii la noi</h2>
          <p className="mt-4 leading-relaxed text-plum-900/70">
            Nu trebuie să ai o problemă gravă ca să vii. De multe ori, cu cât ajungi mai devreme,
            cu atât tratamentul e mai simplu și mai ieftin.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {situatii.map((s) => (
              <li key={s} className="card-mini flex items-start gap-3 text-sm text-plum-900/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">Cum decurge prima vizită</h2>
        </Reveal>
        <div className="mt-7 grid gap-6 sm:grid-cols-3">
          {pasi.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="card-surface h-full card-pad">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                  <p.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 card-title">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="rounded-3xl bg-plum-50 card-pad-lg">
          <h2 className="h-display text-3xl md:text-4xl">Ți-e frică de dentist?</h2>
          <p className="mt-4 leading-relaxed text-plum-900/75">
            Spune-ne din prima. Nu e nimic de care să-ți fie rușine — jumătate dintre pacienții
            noștri au venit prima dată cu strângere de inimă. Mergem mai încet, îți explicăm ce
            urmează înainte de fiecare pas și ne oprim oricând ridici mâna.
          </p>
          <blockquote className="mt-6 border-l-2 border-coral-400 pl-6">
            <p className="quote-serif">
              „Îmi era frică, nu știam ce înseamnă nici măcar detartrajul. Servicii excelente,
              personal impresionant.”
            </p>
            <footer className="mt-2.5 text-sm font-semibold text-plum-900/70">
              Andreea R. · recenzie Google
            </footer>
          </blockquote>
        </div>
      </Reveal>
    </ServiceLayout>
  )
}
