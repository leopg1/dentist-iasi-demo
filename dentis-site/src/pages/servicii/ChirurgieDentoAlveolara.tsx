import { ClipboardList, Syringe, Wind } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'

const cazuri = [
  'Măsele de minte care te dor sau împing ceilalți dinți',
  'Dinți care nu mai pot fi salvați',
  'Rădăcini rămase după ce dintele s-a rupt',
  'Dinți de lapte care nu vor să cadă',
  'Extracții recomandate înainte de un tratament ortodontic',
]

const dupa = [
  'Mușcă ferm pe compresă 30–45 de minute, fără să o schimbi des',
  'Nu clăti gura și nu scuipa în prima zi — cheagul trebuie să rămână pe loc',
  'Fără fumat, alcool sau efort fizic în ziua respectivă',
  'Mâncare moale și călduță, nu fierbinte',
  'Antiinflamator la nevoie, exact cum ți-am spus la cabinet',
  'Sună-ne dacă durerea crește după a doua zi în loc să scadă',
]

export default function ChirurgieDentoAlveolara() {
  return (
    <ServiceLayout
      slug="chirurgie-dento-alveolara"
      metaTitle="Extracții dentare și chirurgie Iași — Dentis"
      metaDescription="Extracții simple și chirurgicale, inclusiv măsele de minte, la Dentis Iași. Anestezie bine făcută și instrucțiuni clare după. ☎ 0332 408 243"
      eyebrow="Chirurgie dento-alveolară"
      title={
        <>
          Extracții făcute <span className="text-coral-600">calm și corect</span>
        </>
      }
      intro="Extracția e ultima variantă, nu prima. Dacă dintele poate fi salvat, îți spunem asta și îți dăm opțiunile. Dar când chiar trebuie scos, contează două lucruri: să nu simți nimic în timpul intervenției și să știi exact ce ai de făcut după."
      heroImage="/media/clinic/receptie.jpg"
      heroImageAlt="Recepția clinicii Dentis din Iași, Strada Crișului nr. 19"
      heroImageClassName="object-[center_70%]"
      highlights={[
        'Extracții simple și chirurgicale, inclusiv măsele de minte',
        'Anestezie verificată înainte de a începe',
        'Instrucțiuni scrise pentru acasă, nu doar spuse în grabă',
      ]}
      ctaTitle="Te doare o măsea de minte? Hai să ne uităm."
    >
      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">Când e nevoie de extracție</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {cazuri.map((c) => (
              <li key={c} className="card-mini flex items-start gap-3 text-sm text-plum-900/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">Cum decurge</h2>
        </Reveal>
        <div className="mt-7 grid gap-6 sm:grid-cols-3">
          <Reveal>
            <div className="card-surface h-full card-pad">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                <ClipboardList className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 card-title">Evaluarea</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">
                Radiografie și discuție. Îți spunem dacă e extracție simplă sau chirurgicală
                și cam cât durează.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-surface h-full card-pad">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                <Syringe className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 card-title">Anestezia</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">
                Verificăm că zona e complet amorțită înainte de orice. Asta nu se grăbește
                niciodată.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="card-surface h-full card-pad">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                <Wind className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 card-title">Intervenția</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">
                De cele mai multe ori durează mult mai puțin decât își imaginează pacientul.
                Simți presiune, nu durere.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div className="rounded-3xl bg-plum-50 card-pad-lg">
          <h2 className="h-display text-3xl md:text-4xl">Ce faci acasă după</h2>
          <p className="mt-4 leading-relaxed text-plum-900/75">
            Vindecarea depinde în bună măsură de primele 24 de ore. Îți dăm indicațiile și
            în scris, ca să nu te bazezi pe ce ai reținut în drum spre casă.
          </p>
          <ul className="mt-6 space-y-3">
            {dupa.map((d) => (
              <li key={d} className="flex items-start gap-3 text-sm text-plum-900/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </ServiceLayout>
  )
}
