import { HeartHandshake, Sparkles, Stethoscope } from 'lucide-react'
import { doctors } from '../lib/site'
import { usePageMeta } from '../lib/seo'
import CTABand from '../components/CTABand'
import RatingBadge from '../components/RatingBadge'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import DoctorCard from '../components/despre/DoctorCard'

const heroBadges = [
  { icon: Stethoscope, label: 'Echipă de 7 oameni' },
  { icon: HeartHandshake, label: 'Cabinet de familie, din 2016' },
]

export default function Echipa() {
  usePageMeta(
    'Echipa medicală — Dentis Iași, Dr. Denisa Bârlescu',
    'Dr. Denisa Bârlescu și echipa Dentis Iași. Șapte oameni într-un cabinet de cartier, pe Strada Crișului nr. 19.',
  )

  return (
    <>
      {/* Hero */}
      <section className="bg-plum-50">
        <div className="container-site hero-pad text-center">
          <Reveal>
            <p className="eyebrow justify-center">Echipa</p>
            <h1 className="h-display mx-auto mt-3 max-w-3xl text-4xl md:text-[52px]">
              Echipa Dentis
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-plum-900/75">
              Șapte oameni într-un cabinet de cartier. Suficient de puțini cât să te știm pe
              nume, suficient de mulți cât să nu aștepți săptămâni pentru o programare.
            </p>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {heroBadges.map((badge) => (
                <li
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-plum-100 bg-white px-4 py-2 text-xs font-bold text-plum-800 shadow-soft"
                >
                  <badge.icon className="h-4 w-4 text-coral-600" aria-hidden="true" />
                  {badge.label}
                </li>
              ))}
              <li className="inline-flex items-center rounded-full border border-plum-100 bg-white px-4 py-2 shadow-soft">
                <RatingBadge variant="star" className="!text-xs !font-bold" />
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Fotografia de echipă */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl">
            <figure>
              <img
                src="/media/team/echipa-completa.webp"
                alt="Echipa clinicii Dentis din Iași — fotografie de grup, 2026"
                loading="lazy"
                className="w-full rounded-3xl object-cover shadow-lift"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Medicii */}
      <section className="section-pad bg-plum-50">
        <div className="container-site">
          <SectionHeading
            align="left"
            eyebrow="Medicii"
            title="Cine te tratează"
            intro="Pacienții îi laudă în recenzii pe nume — semn că oamenii țin minte cine i-a tratat și cum s-au simțit."
          />
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:gap-8">
            {doctors.map((doctor, i) => (
              <DoctorCard key={doctor.slug} doctor={doctor} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Restul echipei */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-coral-50 text-coral-600">
              <Sparkles className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="h-display mt-6 text-3xl md:text-4xl">Echipa din spatele echipei</h2>
            <p className="mx-auto mt-5 text-lg leading-relaxed text-plum-900/70">
              În spatele fiecărui tratament stau colegii care răspund la telefon, pregătesc
              cabinetele și au grijă ca totul să fie steril și la locul lui. În aprilie 2026,
              echipa scria despre „colegi care revin, colegi care pornesc în noi capitole și o
              energie proaspătă care se simte în tot cabinetul”.
            </p>
            <blockquote className="mt-8 border-l-2 border-coral-400 pl-6 text-left">
              <p className="quote-serif">
                „Suntem aceeași echipă unită, cu aceleași valori și aceeași grijă mare pentru
                voi. Schimbări mici, aceeași dedicare.”
              </p>
              <footer className="mt-3 text-sm font-semibold text-plum-900/70">
                Echipa Dentis, aprilie 2026
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Vino să ne cunoști personal"
        text="Programează o consultație. Te întâmpinăm cu explicații clare, cu răbdare și cu un plan de tratament construit pentru tine."
      />
    </>
  )
}
