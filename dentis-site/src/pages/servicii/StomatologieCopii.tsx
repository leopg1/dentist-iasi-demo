import { Gamepad2, HeartHandshake, Sparkles } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'

const sfaturi = [
  {
    title: 'Nu folosi cuvinte care sperie',
    text: 'Evită „nu doare”, „injecție”, „scoate”. Creierul copilului reține exact cuvântul de care voiai să-l ferești.',
  },
  {
    title: 'Nu promite recompense mari',
    text: 'O recompensă uriașă îi spune copilului că urmează ceva groaznic. Mai bine tratezi vizita ca pe ceva obișnuit.',
  },
  {
    title: 'Prima vizită poate fi doar de cunoaștere',
    text: 'Se urcă în scaun, se uită la instrumente, numărăm dinții. Atât. Data viitoare vine deja relaxat.',
  },
  {
    title: 'Vino tu întâi, dacă poți',
    text: 'Copiii copiază reacțiile părinților. Dacă te vede pe tine calm în scaun, e jumătate de treabă făcută.',
  },
]

export default function StomatologieCopii() {
  return (
    <ServiceLayout
      slug="stomatologie-copii"
      metaTitle="Stomatolog pentru copii Iași — Dentis, Str. Crișului"
      metaDescription="Stomatologie pentru copii la Dentis Iași: prima vizită fără frică, cu răbdare și explicații pe limba lor. ☎ 0332 408 243"
      eyebrow="Stomatologie pentru copii"
      title={
        <>
          Dentist = joacă? <span className="text-coral-600">La noi, da.</span>
        </>
      }
      intro="Aici transformăm teama de necunoscut în curiozitate. Iar curiozitatea… în zâmbete. Mergem în ritmul copilului, îi explicăm pe limba lui ce urmează și nu forțăm nimic. De cele mai multe ori, a doua vizită e deja ușoară."
      heroImage="/media/services/copii-prima-vizita.jpg"
      heroImageAlt="Prima vizită la stomatolog pentru copii, la clinica Dentis din Iași"
      highlights={[
        'Prima vizită poate fi doar de acomodare',
        'Explicații pe înțelesul celor mici',
        'Părinții stau lângă scaun, dacă asta îl liniștește',
      ]}
      ctaTitle="Programează prima vizită a celui mic"
    >
      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">De ce contează primele vizite</h2>
          <p className="mt-4 leading-relaxed text-plum-900/70">
            Adulții care se tem de dentist au aproape întotdeauna o amintire urâtă din
            copilărie. Invers e la fel de adevărat: un copil care s-a simțit bine la primele
            vizite va merge liniștit la dentist toată viața. De asta nu ne grăbim niciodată
            cu cei mici.
          </p>
        </Reveal>
        <div className="mt-7 grid gap-6 sm:grid-cols-3">
          <Reveal>
            <div className="card-surface h-full card-pad">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-100 text-coral-600">
                <Gamepad2 className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 card-title">Facem cunoștință</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">
                Scaunul care se mișcă, oglinjoara, aspiratorul care „bea apă”. Totul devine
                mai puțin înfricoșător când îl vezi de aproape.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-surface h-full card-pad">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-100 text-coral-600">
                <HeartHandshake className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 card-title">Mergem în ritmul lui</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">
                Dacă azi nu vrea, nu insistăm. Mai bine două vizite scurte și reușite decât
                una lungă și traumatizantă.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="card-surface h-full card-pad">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-100 text-coral-600">
                <Sparkles className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 card-title">Prevenție înainte de toate</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">
                Periaj, fluorizare, sigilarea șanțurilor. Lucruri mici care scutesc de
                tratamente mari peste câțiva ani.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <figure>
          <img
            src="/media/clinic/cabinet-1.jpg"
            alt="Cabinetul 1 de tratament de la clinica Dentis din Iași"
            className="aspect-[16/10] w-full rounded-3xl object-cover object-[center_35%] shadow-lift"
            loading="lazy"
          />
          <figcaption className="mt-3.5 text-center text-xs font-medium text-plum-900/70">
            „Aici transformăm teama de necunoscut în curiozitate.”
          </figcaption>
        </figure>
      </Reveal>

      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">Patru sfaturi pentru părinți</h2>
          <p className="mt-4 leading-relaxed text-plum-900/70">
            Cum îți pregătești copilul acasă contează mai mult decât crezi.
          </p>
        </Reveal>
        <div className="mt-7 grid gap-6 sm:grid-cols-2">
          {sfaturi.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.08}>
              <div className="card-surface h-full card-pad">
                <h3 className="card-title">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="rounded-3xl bg-plum-50 card-pad-lg">
          <blockquote>
            <p className="quote-serif">
              „Lucrează impecabil și cu copiii, copiii mei iubesc doctorițele. Mergem mereu la
              Dentis cu încredere!”
            </p>
            <footer className="mt-3 text-sm font-semibold text-plum-900/70">
              Andreea O. · recenzie Google
            </footer>
          </blockquote>
        </div>
      </Reveal>
    </ServiceLayout>
  )
}
