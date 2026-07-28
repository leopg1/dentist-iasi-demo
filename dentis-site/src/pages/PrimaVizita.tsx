import { Link } from 'react-router-dom'
import { Baby, CalendarCheck, ClipboardList, MapPin, MessageSquare, Phone, Stethoscope } from 'lucide-react'
import { site } from '../lib/site'
import { usePageMeta } from '../lib/seo'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const pasi = [
  {
    icon: Phone,
    title: '1. Ne suni',
    text: 'Ne spui pe scurt ce te supără și găsim împreună o oră care ți se potrivește. Dacă e o urgență, încercăm să te primim cât mai repede.',
  },
  {
    icon: MessageSquare,
    title: '2. Stăm de vorbă',
    text: 'Înainte de orice, discutăm. Ce te doare, de când, ce tratamente ai mai făcut, ce te sperie. Fără grabă și fără reproșuri, indiferent de când ai fost ultima dată la dentist.',
  },
  {
    icon: Stethoscope,
    title: '3. Consultația',
    text: 'Verificăm fiecare dinte și gingiile. Dacă e nevoie de o radiografie, o facem și ți-o arătăm pe ecran, explicându-ți ce se vede.',
  },
  {
    icon: ClipboardList,
    title: '4. Planul de tratament',
    text: 'Îți spunem ce am găsit, ce e urgent și ce mai poate aștepta, cu costurile aferente. Tu decizi cu ce începem și în ce ritm mergem.',
  },
]

const deStiut = [
  {
    q: 'Cât durează prima vizită?',
    a: 'De regulă între 30 și 45 de minute. Dacă e nevoie de radiografie și de un plan mai amplu, poate dura puțin mai mult — de aceea îți recomandăm să nu programezi ceva urgent imediat după.',
  },
  {
    q: 'Ce aduc cu mine?',
    a: 'Buletinul și, dacă ai, radiografii sau documente de la tratamente anterioare. Dacă iei medicamente în mod constant sau ai o afecțiune cronică, spune-ne — contează pentru anestezie și pentru tratament.',
  },
  {
    q: 'Se face tratament din prima vizită?',
    a: 'Depinde. Dacă ai o durere acută, intervenim ca să o oprim. Altfel, prima vizită e de regulă pentru evaluare și plan — ca să știi exact în ce te bagi înainte să începem.',
  },
  {
    q: 'Mi-e foarte frică. Ce fac?',
    a: 'Spune-ne din prima, la telefon sau când intri pe ușă. Mergem mai încet, îți explicăm fiecare pas înainte să îl facem și ne oprim oricând ridici mâna. Mulți dintre pacienții noștri au ajuns aici tocmai după experiențe neplăcute în altă parte.',
  },
  {
    q: 'Pot veni cu copilul?',
    a: 'Sigur. Iar dacă e prima lui vizită, poate fi doar de acomodare: se urcă în scaun, se uită la instrumente, numărăm dinții. Fără tratament și fără presiune.',
  },
  {
    q: 'Cum ajung la cabinet?',
    a: 'Strada Crișului nr. 19, blocul C21, scara A — la parter. Nu ai scări de urcat. Zona e Podu Roș, aproape de Podu de Piatră.',
  },
]

export default function PrimaVizita() {
  usePageMeta(
    'Prima vizită la Dentis Iași — cum decurge',
    'Cum decurge prima vizită la cabinetul stomatologic Dentis din Iași: discuție, consultație, radiografie și plan de tratament cu costuri clare. ☎ 0332 408 243',
  )

  return (
    <>
      {/* Hero */}
      <section className="bg-plum-50">
        <div className="container-site hero-pad text-center">
          <Reveal>
            <p className="eyebrow justify-center">Prima vizită</p>
            <h1 className="h-display mx-auto mt-3 max-w-3xl text-4xl md:text-[52px]">
              Ce se întâmplă când vii prima dată
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-plum-900/75">
              Dacă nu ai mai fost demult la dentist, cel mai greu e să faci programarea. Restul e
              mai simplu decât îți imaginezi — și îți explicăm fiecare pas înainte să îl facem.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a href={site.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" /> Sună: {site.phone}
              </a>
              <Link to="/contact#formular" className="btn-secondary">
                <CalendarCheck className="h-4 w-4" aria-hidden="true" /> Cere o programare
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cei 4 pași */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="Pas cu pas"
            title="Cum decurge"
            intro="Patru pași, în aceeași ordine de fiecare dată. Nimic surprinzător."
          />
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:gap-8">
            {pasi.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <article className="card-surface card-pad-lg h-full">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-100 text-teal-700">
                    <p.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="card-title mt-5">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-plum-900/70">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Întrebări */}
      <section className="section-pad bg-plum-50">
        <div className="container-site">
          <SectionHeading eyebrow="Bine de știut" title="Întrebările pe care le primim cel mai des" />
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:gap-8">
            {deStiut.map((item, i) => (
              <Reveal key={item.q} delay={(i % 2) * 0.08}>
                <article className="card-surface card-pad h-full">
                  <h3 className="card-title">{item.q}</h3>
                  <p className="mt-3 leading-relaxed text-plum-900/70">{item.a}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bandă acces + copii */}
      <section className="section-pad">
        <div className="container-site grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <div className="card-surface card-pad-lg h-full">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-coral-100 text-coral-600">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="h-display mt-5 text-2xl md:text-3xl">Cum ne găsești</h2>
              <p className="mt-4 leading-relaxed text-plum-900/70">
                {site.address}. Suntem la parterul blocului, pe scara A — nu ai scări de urcat,
                așa că accesul e comod și cu căruciorul, și dacă mersul îți e greu.
              </p>
              <a
                href={site.mapsQuery}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary mt-6"
              >
                Deschide harta
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-surface card-pad-lg h-full">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-coral-100 text-coral-600">
                <Baby className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="h-display mt-5 text-2xl md:text-3xl">Dacă vii cu cel mic</h2>
              <p className="mt-4 leading-relaxed text-plum-900/70">
                Evită cuvintele care sperie („nu doare”, „injecție”) și nu promite recompense
                mari — copilul deduce că urmează ceva groaznic. Cel mai bine funcționează o
                primă vizită scurtă, doar de cunoaștere.
              </p>
              <Link to="/servicii/stomatologie-copii" className="btn-secondary mt-6">
                Stomatologie pentru copii
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Primul pas e un telefon"
        text="Sună-ne și găsim împreună o oră care ți se potrivește. Dacă preferi, scrie-ne și te contactăm noi."
      />
    </>
  )
}
