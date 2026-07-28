import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  Baby,
  HeartHandshake,
  MessageSquare,
  Phone,
  Scan,
  Star,
  Trophy,
} from 'lucide-react'
import { services, site, testimonials } from '../lib/site'
import { usePageMeta } from '../lib/seo'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import Stars from '../components/Stars'

/* ─────────────────────────── Date locale secțiuni ─────────────────────────── */

const whyCards = [
  {
    icon: MessageSquare,
    title: 'Îți explicăm, nu doar îți facem',
    text: 'E lucrul pe care pacienții îl scriu cel mai des în recenzii: „explică pas cu pas orice procedură”. Pleci de la cabinet știind exact ce ți s-a făcut și ce urmează.',
    iconClass: 'bg-coral-100 text-coral-600',
    span: 'lg:col-span-3',
  },
  {
    icon: Scan,
    title: 'Scanare digitală, nu amprentă clasică',
    text: 'Fără pasta care se întărește în gură și fără senzația de sufocare. Scanăm în câteva minute și vezi modelul 3D pe ecran, în timp real.',
    iconClass: 'bg-teal-100 text-teal-700',
    span: 'lg:col-span-3',
  },
  {
    icon: HeartHandshake,
    title: 'Dacă ți-e frică, spune-ne',
    text: 'Mergem mai încet, îți explicăm înainte de fiecare pas și ne oprim când ridici mâna. Mulți pacienți au ajuns aici tocmai după experiențe neplăcute în altă parte.',
    iconClass: 'bg-coral-100 text-coral-600',
    span: 'lg:col-span-2',
  },
  {
    icon: Baby,
    title: 'Cabinet de familie',
    text: 'De la primii dinți de lapte până la lucrările bunicilor. Prima vizită a celui mic poate fi doar de acomodare — fără tratament, fără presiune.',
    iconClass: 'bg-teal-100 text-teal-700',
    span: 'lg:col-span-2',
  },
  {
    icon: Award,
    title: 'La parter, fără scări',
    text: 'Cabinetul e la parterul blocului C21, pe Strada Crișului. Acces comod și dacă vii cu căruciorul, și dacă urcatul scărilor e o problemă.',
    iconClass: 'bg-coral-100 text-coral-600',
    span: 'md:col-span-2 lg:col-span-2',
  },
]

/* ─────────────────────────────────── Pagina ─────────────────────────────────── */

export default function Home() {
  usePageMeta(
    'Dentis Iași — Cabinet stomatologic pe Str. Crișului · 4,8★ pe Google',
    'Cabinet stomatologic în Iași, Podu Roș: consultații, estetică dentară, ortodonție, stomatologie pentru copii. Scanare digitală, fără amprentă clasică. ☎ 0332 408 243',
  )

  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[calc(100svh-76px)] items-center overflow-hidden bg-plum-950 lg:min-h-[88svh]">
        <img
          src="/media/clinic/hero-poster.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
          fetchPriority="high"
        />
        {/* Scrim de bază — fotografia recepției e luminoasă, fără el textul alb nu trece AA */}
        <div className="absolute inset-0 bg-plum-950/60" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-plum-950/90 via-plum-950/70 to-plum-950/25"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-plum-950/85 to-transparent"
          aria-hidden="true"
        />

        <div className="container-site relative hero-pad">
          <Reveal initialVisible>
            <p className="eyebrow !text-coral-300">Cabinet stomatologic · Iași, Podu Roș</p>
            <h1 className="h-display mt-3 max-w-3xl text-[40px] !text-white sm:text-5xl md:mt-4 md:text-6xl lg:text-7xl">
              Stomatologie explicată pe înțelesul tău.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 md:mt-6 md:text-xl">
              Din 2016, pe Strada Crișului. Îți spunem ce ai, ce se poate face și cât costă —
              înainte să începem. Fără termeni complicați și fără grabă.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-9 md:gap-4">
              <a href={site.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" /> Sună acum: {site.phone}
              </a>
              <Link to="/contact#formular" className="btn-ghost-light">
                Cere o programare <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          {/* Trust bar */}
          <Reveal delay={0.2}>
            <ul className="mt-8 flex max-w-4xl flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-5 text-xs font-semibold text-white/85 md:mt-14 md:gap-x-10 md:gap-y-4 md:pt-7 md:text-sm">
              <li className="inline-flex items-center gap-2.5">
                <Star className="h-5 w-5 fill-gold-400 text-gold-400" aria-hidden="true" />
                {site.rating}/5 din {site.reviewCount} de recenzii Google
              </li>
              <li className="inline-flex items-center gap-2.5">
                <Trophy className="h-5 w-5 text-gold-400" aria-hidden="true" />
                Firma de Aur 2024, 2025, 2026
              </li>
              <li className="inline-flex items-center gap-2.5">
                <Scan className="h-5 w-5 text-teal-300" aria-hidden="true" />
                Scanare digitală, fără amprentă clasică
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── 2. Preview servicii ────────────────────────────────────────────── */}
      <section className="section-pad bg-plum-50">
        <div className="container-site">
          <SectionHeading
            eyebrow="Serviciile noastre"
            title="Cu ce te putem ajuta"
            intro="De la o consultație de rutină până la lucrări protetice și aparat dentar — nouă servicii, într-un singur cabinet, pe Strada Crișului nr. 19."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:mt-16 lg:gap-8">
            {services.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.slug} service={service} delay={(i % 3) * 0.08} />
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link to="/servicii" className="btn-secondary">
              Vezi toate serviciile <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 3. Preview „Despre” ────────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-lift">
              <img
                src="/media/team/echipa-completa.webp"
                alt="Echipa clinicii Dentis din Iași, fotografie de grup din 2026"
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="card-surface absolute -bottom-6 -right-4 flex items-center gap-3.5 p-5 sm:-right-8">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold-400/20 text-gold-500">
                <Trophy className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold text-plum-950">Firma de Aur</p>
                <p className="text-xs font-medium text-plum-900/70">3 ani consecutiv</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading align="left" eyebrow="Despre noi" title="10 ani pe Strada Crișului" />
            <Reveal delay={0.1}>
              <blockquote className="mt-7 border-l-2 border-coral-400 pl-6">
                <p className="font-display text-2xl font-medium leading-snug text-plum-900 md:text-[1.7rem]">
                  „Dentis a devenit mai mult decât un cabinet, a devenit locul în care am
                  crescut, am învățat și am întâlnit oameni care mi-au rămas în suflet.”
                </p>
                <footer className="mt-4 text-sm font-semibold text-plum-900/70">
                  Dr. Denisa Bârlescu, fondator
                </footer>
              </blockquote>
              <p className="mt-6 text-lg leading-relaxed text-plum-900/70">
                Zece ani de emoții, provocări și mii de zâmbete. Suntem o echipă mică, într-un
                cabinet la parterul blocului — genul de loc în care ajungi să cunoști pe nume
                oamenii care te tratează.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/echipa" className="btn-secondary">
                  Cunoaște-ne echipa <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. Testimoniale preview ────────────────────────────────────────── */}
      <section className="section-pad bg-plum-50">
        <div className="container-site">
          <SectionHeading
            eyebrow="Recenzii"
            title="Ce spun pacienții noștri"
            intro={`${site.rating} din 5 stele, din ${site.reviewCount} de recenzii pe Google — dintre care 43 sunt de cinci stele. Aproape toate pomenesc același lucru: că li s-a explicat.`}
          />
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 lg:gap-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.author} delay={i * 0.08} className="h-full">
                <figure className="card-surface relative flex h-full flex-col p-7 pt-9 md:p-8 md:pt-10">
                  <span
                    className="pointer-events-none absolute -top-1 left-6 select-none font-display text-[5.5rem] leading-none text-plum-200"
                    aria-hidden="true"
                  >
                    „
                  </span>
                  <Stars className="justify-end" />
                  <blockquote className="mt-4 flex-1">
                    <p className="leading-relaxed text-plum-900/80">{t.text}</p>
                  </blockquote>
                  <figcaption className="mt-6 border-t border-plum-100 pt-4 text-sm">
                    <span className="font-bold text-plum-950">{t.author}</span>
                    <span className="text-plum-900/70"> · recenzie {t.source}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link to="/testimoniale" className="btn-secondary">
              Vezi toate recenziile <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 5. De ce Dentis ────────────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading eyebrow="De ce Dentis" title="De ce rămân pacienții la noi" />
          <div className="mt-12 grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-6 md:mt-16">
            {whyCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.06} className={card.span}>
                <article className="card-surface card-pad-lg h-full transition hover:border-plum-200">
                  <div className={`grid h-12 w-12 place-items-center rounded-2xl ${card.iconClass}`}>
                    <card.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="card-title mt-5">{card.title}</h3>
                  <p className="mt-3 leading-relaxed text-plum-900/70">{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Banda „prima vizită” ────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-plum-50 via-white to-teal-50/60 shadow-soft ring-1 ring-plum-100">
              <div className="relative grid gap-10 px-7 py-12 md:px-12 md:py-16 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16 lg:px-16">
                <div>
                  <p className="eyebrow !text-teal-600">Prima dată la noi?</p>
                  <h2 className="h-display mt-3 text-4xl md:text-5xl">
                    Nu ai mai fost demult la dentist?
                  </h2>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-plum-900/70">
                    E în regulă. Nu ești primul și nu o să auzi niciun reproș. Începem cu o
                    consultație, îți spunem ce am găsit și facem un plan pe pași — în ordinea
                    urgenței, nu toată odată.
                  </p>
                  <ul className="mt-7 space-y-3.5">
                    {[
                      'Consultație completă, cu radiografie dacă e nevoie',
                      'Plan de tratament pe etape, cu prețuri știute dinainte',
                      'Tu decizi cu ce începem și în ce ritm mergem',
                    ].map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 font-semibold text-plum-950"
                      >
                        <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal-100 text-teal-600">
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="rounded-3xl border border-plum-100 bg-white card-pad shadow-hair">
                    <div className="flex items-center gap-3.5">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-coral-100 text-coral-600">
                        <Baby className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="font-bold text-plum-950">Vii cu cel mic?</p>
                    </div>
                    <p className="mt-3.5 leading-relaxed text-plum-900/70">
                      Prima vizită poate fi doar de acomodare: se urcă în scaun, se uită la
                      instrumente, numărăm dinții. Atât. Data viitoare vine deja relaxat.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a href={site.phoneHref} className="btn-primary">
                      <Phone className="h-4 w-4" aria-hidden="true" /> {site.phone}
                    </a>
                    <Link to="/prima-vizita" className="btn-secondary">
                      Cum decurge prima vizită
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7. CTA final ───────────────────────────────────────────────────── */}
      <CTABand />
    </>
  )
}
