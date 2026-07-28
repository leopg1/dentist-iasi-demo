import { Link } from 'react-router-dom'
import {
  ArrowRight,
  GraduationCap,
  MapPin,
  MessagesSquare,
  Phone,
  ScanLine,
  ShieldCheck,
  Star,
  Trophy,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { site } from '../lib/site'
import { usePageMeta } from '../lib/seo'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

type Principle = { icon: LucideIcon; title: string; text: string }

const principles: Principle[] = [
  {
    icon: MessagesSquare,
    title: 'Întâi înțelegi, apoi tratăm.',
    text: 'E principiul pe care pacienții îl remarcă cel mai des în recenzii. Îți spunem ce am găsit, ce se poate face, în ce ordine și cât costă — înainte să atingem ceva.',
  },
  {
    icon: ScanLine,
    title: 'Digital acolo unde chiar ajută.',
    text: 'Scanarea intraorală 3D înlocuiește amprenta clasică: mai comod pentru tine, mai precis pentru lucrare. Nu tehnologie de dragul tehnologiei.',
  },
  {
    icon: ShieldCheck,
    title: 'Fără grabă și fără presiune.',
    text: 'Dacă ți-e frică, mergem mai încet. Dacă vrei să te gândești, îți dăm planul în scris și aștepți cât ai nevoie. Nu vindem tratamente, recomandăm.',
  },
  {
    icon: GraduationCap,
    title: 'Învățăm în continuare.',
    text: 'Numai în iunie 2026, Dr. Bârlescu a petrecut trei zile la The Core Meeting, plus cursuri separate pe ocluzie și pe medicina somnului. Stomatologia se schimbă; noi ținem pasul.',
  },
]

const consultSteps = [
  {
    title: 'Stăm de vorbă, fără grabă',
    text: 'Ne spui ce te supără și de cât timp. Îți examinăm apoi dinții și gingiile, dinte cu dinte.',
  },
  {
    title: 'Vedem exact situația',
    text: 'Dacă e nevoie, facem radiografia și ți-o arătăm pe ecran. Adăugăm scanarea 3D acolo unde ajută la planificare.',
  },
  {
    title: 'Pleci cu planul complet',
    text: 'Îți explicăm opțiunile fără jargon și primești planul pe etape, cu costuri clare. Tu alegi cu ce începem.',
  },
]

const recognition = [
  {
    icon: Star,
    iconClass: 'bg-gold-400/15 text-gold-500',
    title: '4,8 din 5 pe Google',
    text: 'Din 45 de recenzii, 43 sunt de cinci stele. Zero recenzii negative cu text.',
  },
  {
    icon: Trophy,
    iconClass: 'bg-coral-100 text-coral-600',
    title: 'Firma de Aur, 3 ani la rând',
    text: 'Distincție acordată în 2024, 2025 și 2026, pe baza recenziilor reale ale pacienților.',
  },
  {
    icon: MapPin,
    iconClass: 'bg-teal-100 text-teal-700',
    title: 'Din 2016, în același loc',
    text: 'Strada Crișului nr. 19, la parterul blocului C21. Zece ani în care ne-am făcut pacienți fideli, nu clienți de o dată.',
  },
]

export default function Despre() {
  usePageMeta(
    'Despre noi — Dentis Iași, cabinet stomatologic din 2016',
    'Povestea cabinetului Dentis din Iași: 10 ani pe Strada Crișului, 4,8★ din 45 de recenzii Google și un principiu simplu — îți explicăm înainte să tratăm.',
  )

  return (
    <>
      {/* Hero */}
      <section className="bg-plum-50">
        <div className="container-site hero-pad">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow">Despre noi</p>
              <h1 className="h-display mt-3 text-4xl md:text-[52px]">
                Zece ani pe Strada Crișului
              </h1>
              <blockquote className="mt-7 border-l-2 border-coral-400 pl-6">
                <p className="font-display text-2xl font-medium leading-snug text-plum-900 md:text-[1.7rem]">
                  „Dentis a devenit mai mult decât un cabinet, a devenit locul în care am
                  crescut, am învățat și am întâlnit oameni care mi-au rămas în suflet.”
                </p>
                <footer className="mt-4 text-sm font-semibold text-plum-900/70">
                  Dr. Denisa Bârlescu, fondator
                </footer>
              </blockquote>
              <p className="mt-6 text-lg leading-relaxed text-plum-900/75">
                Am deschis în 2016 un cabinet mic, la parterul unui bloc din Podu Roș. De atunci
                am rămas în același loc și cu aceeași idee: oamenii se întorc acolo unde li se
                explică ce li se face și unde nu se simt grăbiți.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={site.phoneHref} className="btn-primary">
                  <Phone className="h-4 w-4" aria-hidden="true" /> {site.phone}
                </a>
                <Link to="/echipa" className="btn-secondary">
                  Cunoaște echipa <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <img
                src="/media/clinic/receptie.jpg"
                alt="Recepția clinicii Dentis din Iași, cu logo-ul auriu pe perete"
                loading="eager"
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Recunoaștere */}
      <section className="section-pad">
        <div className="container-site">
          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {recognition.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <article className="card-surface card-pad-lg h-full text-center">
                  <div
                    className={`mx-auto grid h-14 w-14 place-items-center rounded-2xl ${r.iconClass}`}
                  >
                    <r.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h2 className="card-title mt-5">{r.title}</h2>
                  <p className="mt-3 leading-relaxed text-plum-900/70">{r.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principii */}
      <section className="section-pad bg-plum-50">
        <div className="container-site">
          <SectionHeading
            eyebrow="Cum lucrăm"
            title="Patru lucruri la care nu facem rabat"
            intro="Nu sunt sloganuri de site. Sunt exact lucrurile pe care pacienții le scriu despre noi în recenzii."
          />
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:gap-8">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <article className="card-surface card-pad-lg h-full">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-coral-100 text-coral-600">
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

      {/* Cum decurge consultația */}
      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src="/media/clinic/cabinet-1.jpg"
              alt="Cabinetul 1 de tratament de la clinica Dentis din Iași"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Prima vizită"
              title="Ce se întâmplă când vii la noi"
            />
            <ol className="mt-9 space-y-7">
              {consultSteps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.08}>
                  <li className="flex gap-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-plum-950 font-display text-lg font-semibold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="card-title">{step.title}</h3>
                      <p className="mt-2 leading-relaxed text-plum-900/70">{step.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={0.3}>
              <Link to="/prima-vizita" className="btn-secondary mt-9">
                Mai multe despre prima vizită <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Unde ne găsești */}
      <section className="section-pad bg-plum-50">
        <div className="container-site">
          <Reveal>
            <div className="grid overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-plum-100 lg:grid-cols-[1.25fr_1fr]">
              <div className="flex flex-col items-start justify-center gap-5 card-pad-lg">
                <p className="eyebrow !text-teal-600">Unde ne găsești</p>
                <h2 className="h-display text-3xl md:text-4xl">
                  Un cabinet de cartier, la parter
                </h2>
                <p className="max-w-xl leading-relaxed text-plum-900/70">
                  {site.address}. Suntem la parterul blocului, pe scara A — fără scări de urcat,
                  ceea ce contează dacă vii cu căruciorul sau dacă mersul îți e greu. Zona e Podu
                  Roș, aproape de Podu de Piatră.
                </p>
                <div className="mt-2 flex flex-wrap gap-3.5">
                  <a href={site.mapsQuery} target="_blank" rel="noreferrer" className="btn-primary">
                    <MapPin className="h-4 w-4" aria-hidden="true" /> Deschide harta
                  </a>
                  <Link to="/contact" className="btn-secondary">
                    Date de contact
                  </Link>
                </div>
              </div>
              <img
                src="/media/clinic/sala-asteptare.jpg"
                alt="Sala de așteptare a clinicii Dentis din Iași"
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  )
}
