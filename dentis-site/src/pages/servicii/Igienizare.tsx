import { Droplets, Sparkles, Wind } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'

const etape = [
  {
    icon: Droplets,
    title: 'Detartraj cu ultrasunete',
    text: 'Îndepărtăm tartrul de pe dinți și de sub gingie — exact acolo unde periuța nu ajunge, oricât de bine te-ai spăla.',
  },
  {
    icon: Wind,
    title: 'Air-flow',
    text: 'Un jet fin de pudră și apă care scoate petele de cafea, ceai și țigară din șanțurile smalțului.',
  },
  {
    icon: Sparkles,
    title: 'Periaj profesional',
    text: 'Lustruim suprafața dintelui. Netedă, se depune mai greu placa bacteriană — deci rezistă mai mult curat.',
  },
]

export default function Igienizare() {
  return (
    <ServiceLayout
      slug="igienizare"
      metaTitle="Detartraj și igienizare dentară Iași — Dentis"
      metaDescription="Detartraj, air-flow și periaj profesional la Dentis Iași. O ședință la șase luni previne majoritatea problemelor. ☎ 0332 408 243"
      eyebrow="Igienizare & Profilaxie"
      title={
        <>
          Cea mai ieftină investiție în <span className="text-coral-600">dinții tăi</span>
        </>
      }
      intro="O ședință de igienizare la șase luni costă cât o fracțiune dintr-un tratament de canal — și previne majoritatea motivelor pentru care ai ajunge la unul. Dacă amâni de ani buni, nu e nicio problemă: începem de unde suntem, fără reproșuri."
      heroImage="/media/clinic/sala-asteptare.jpg"
      heroImageAlt="Sala de așteptare a clinicii Dentis din Iași"
      heroImageClassName="object-[center_60%]"
      highlights={[
        'Detartraj, air-flow și periaj într-o singură ședință',
        'Recomandat o dată la șase luni',
        'Îți arătăm și cum să te speli corect acasă',
      ]}
      ctaTitle="Programează-ți igienizarea"
    >
      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">Ce cuprinde o ședință</h2>
        </Reveal>
        <div className="mt-7 grid gap-6 sm:grid-cols-3">
          {etape.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <div className="card-surface h-full card-pad">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                  <e.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 card-title">{e.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">{e.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="rounded-3xl bg-plum-50 card-pad-lg">
          <h2 className="h-display text-3xl md:text-4xl">Doare?</h2>
          <p className="mt-4 leading-relaxed text-plum-900/75">
            În mod normal, nu. Poate fi ușor sensibil dacă ai gingii inflamate sau dacă a
            trecut mult timp de la ultima igienizare — tocmai pentru că e mult tartru de
            scos. Spune-ne dacă simți disconfort și ajustăm intensitatea. Mulți pacienți ne
            spun că singura senzație e apa rece.
          </p>
        </div>
      </Reveal>

      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">De ce nu e de ajuns periajul de acasă</h2>
          <p className="mt-4 leading-relaxed text-plum-900/70">
            Placa bacteriană se transformă în tartru în 24–72 de ore, iar tartrul nu se mai
            poate scoate cu periuța — s-a mineralizat, e practic piatră. De acolo încep
            gingiile care sângerează, respirația urât mirositoare și, în timp, retracția
            gingivală și dinții care se mișcă.
          </p>
          <p className="mt-4 leading-relaxed text-plum-900/70">
            La final îți arătăm concret unde rămâne placă la tine — fiecare are zonele lui —
            și cum să ajungi acolo cu periuța și cu ața dentară.
          </p>
        </Reveal>
      </div>
    </ServiceLayout>
  )
}
