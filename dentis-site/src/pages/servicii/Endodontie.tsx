import { HeartPulse, ShieldCheck, Syringe } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'

const semne = [
  'Durere care apare noaptea sau te trezește din somn',
  'Sensibilitate puternică la cald, care ține minute întregi',
  'Un dinte care s-a închis la culoare',
  'Umflătură sau sensibilitate la apăsat pe gingie',
  'O carie veche, adâncă, pe care ai tot amânat-o',
]

export default function Endodontie() {
  return (
    <ServiceLayout
      slug="endodontie"
      metaTitle="Tratament de canal (endodonție) Iași — Dentis"
      metaDescription="Tratament de canal la Dentis Iași: îți păstrăm dintele tău, cu anestezie bine făcută și fiecare pas explicat. ☎ 0332 408 243"
      eyebrow="Endodonție"
      title={
        <>
          Îți păstrăm <span className="text-coral-600">dintele tău</span>
        </>
      }
      intro="Tratamentul de canal are o reputație proastă pe care de mult nu o mai merită. E procedura care salvează un dinte pe care altfel l-ai pierde — și, făcută cu anestezie ca lumea, nu doare. Ce simți cel mai des e ușurarea că a trecut durerea cu care ai venit."
      heroImage="/media/clinic/unit-dentar.jpg"
      heroImageAlt="Unit dentar Chirana cu instrumentarul pregătit, cabinetul Dentis Iași"
      highlights={[
        'Anestezie înainte de orice, fără compromisuri',
        'Îți explicăm fiecare etapă înainte să o facem',
        'Dintele natural păstrat, în loc de extracție',
      ]}
      ctaTitle="Te doare un dinte? Sună-ne azi."
    >
      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">Semne că ai putea avea nevoie</h2>
          <p className="mt-4 leading-relaxed text-plum-900/70">
            Nu toate durerile de dinți înseamnă tratament de canal. Dar dacă recunoști ceva
            din lista de mai jos, merită o consultație cât mai repede — cu cât mai devreme,
            cu atât mai simplu.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {semne.map((s) => (
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
          <h2 className="h-display text-3xl md:text-4xl">Ce facem, pe scurt</h2>
        </Reveal>
        <div className="mt-7 grid gap-6 sm:grid-cols-3">
          <Reveal>
            <div className="card-surface h-full card-pad">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                <Syringe className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 card-title">Anesteziem bine</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">
                Nu începem până nu ești complet amorțit. Dacă simți ceva pe parcurs, ridici
                mâna și ne oprim.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-surface h-full card-pad">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                <HeartPulse className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 card-title">Curățăm canalele</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">
                Scoatem nervul inflamat, curățăm și dezinfectăm canalele, apoi le sigilăm ca
                să nu mai intre bacterii.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="card-surface h-full card-pad">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 card-title">Refacem dintele</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">
                La final îl reconstruim — obturație sau coroană, în funcție de cât a mai
                rămas din dinte. Îți spunem dinainte care variantă ține mai mult.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div className="rounded-3xl bg-plum-50 card-pad-lg">
          <h2 className="h-display text-3xl md:text-4xl">Cât ține un dinte tratat</h2>
          <p className="mt-4 leading-relaxed text-plum-900/75">
            Un tratament de canal făcut corect și un dinte refăcut cum trebuie pot ține zeci
            de ani. Condiția e ca dintele să fie protejat după — de aceea insistăm pe
            reconstrucția finală și nu ne oprim la o plombă provizorie.
          </p>
        </div>
      </Reveal>
    </ServiceLayout>
  )
}
