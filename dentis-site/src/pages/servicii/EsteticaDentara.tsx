import { Palette, Sparkles, Sun } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'

const tratamente = [
  {
    icon: Palette,
    title: 'Fațete și reconstrucții estetice',
    text: 'Refacem forma și culoarea dintelui strat cu strat, până când lucrarea nu se mai deosebește de dinții din jur. Alegerea nuanței se face pe metode moderne, nu din ochi.',
  },
  {
    icon: Sun,
    title: 'Albire profesională',
    text: 'Câteva nuanțe mai deschis, în cabinet, cu protecția gingiei și a smalțului. Îți spunem sincer de la început ce rezultat e realist în cazul tău.',
  },
  {
    icon: Sparkles,
    title: 'Corectarea detaliilor mici',
    text: 'Un colț ciobit, un spațiu între dinții din față, o plombă veche care s-a îngălbenit. De multe ori, o ședință e de ajuns.',
  },
]

export default function EsteticaDentara() {
  return (
    <ServiceLayout
      slug="estetica-dentara"
      metaTitle="Estetică dentară și albire Iași — Dentis"
      metaDescription="Fațete, reconstrucții estetice și albire profesională la Dentis Iași. Specialitatea Dr. Denisa Bârlescu. ☎ 0332 408 243"
      eyebrow="Estetică dentară"
      title={
        <>
          Un zâmbet care arată a <span className="text-coral-600">al tău</span>
        </>
      }
      intro="Estetica dentară e domeniul în care Dr. Denisa Bârlescu se perfecționează constant — de la stratificări avansate până la selecția modernă a nuanțelor. Scopul nu e un zâmbet de reclamă, ci unul care ți se potrivește: aceeași față, aceeași personalitate, doar fără lucrurile care te deranjau."
      heroImage="/media/services/estetica-lucru.jpg"
      heroImageAlt="Medic stomatolog lucrând cu lupe de magnificație la clinica Dentis Iași"
      heroImageClassName="object-[center_20%]"
      badge="Lucru de precizie, cu lupe de magnificație"
      highlights={[
        'Fațete și reconstrucții din compozit stratificat',
        'Albire profesională în cabinet',
        'Alegerea nuanței prin metode moderne, nu aproximativ',
      ]}
      ctaTitle="Hai să vorbim despre ce te-ar face să zâmbești mai des"
    >
      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">Ce putem face</h2>
        </Reveal>
        <div className="mt-7 grid gap-6 sm:grid-cols-3">
          {tratamente.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <div className="card-surface h-full card-pad">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-100 text-coral-600">
                  <t.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 card-title">{t.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <figure>
          <img
            src="/media/clinic/receptie.jpg"
            alt="Recepția clinicii Dentis din Iași, cu logo-ul auriu pe perete"
            className="aspect-[16/10] w-full rounded-3xl object-cover object-[center_40%] shadow-lift"
            loading="lazy"
          />
          <figcaption className="mt-3.5 text-center text-xs font-medium text-plum-900/70">
            Cabinetul din Strada Crișului nr. 19, la parterul blocului C21.
          </figcaption>
        </figure>
      </Reveal>

      <Reveal>
        <div className="rounded-3xl bg-plum-50 card-pad-lg">
          <h2 className="h-display text-3xl md:text-4xl">Cum lucrăm</h2>
          <p className="mt-4 leading-relaxed text-plum-900/75">
            Începem cu o discuție despre ce te deranjează, nu cu o listă de proceduri. Apoi
            scanăm digital, ca să vedem situația exactă, și îți arătăm pe ecran ce se poate face.
            Abia după ce ești tu lămurit trecem la treabă — cu un preț știut dinainte, nu unul
            care crește pe parcurs.
          </p>
          <p className="mt-4 leading-relaxed text-plum-900/75">
            Dacă ai nevoie întâi de o igienizare sau de tratarea unei carii, îți spunem asta
            de la început. Estetica se așază pe dinți sănătoși, nu invers.
          </p>
        </div>
      </Reveal>
    </ServiceLayout>
  )
}
