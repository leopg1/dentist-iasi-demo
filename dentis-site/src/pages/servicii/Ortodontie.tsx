import { Baby, Scan, Smile } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'

const motive = [
  'Dinți înghesuiți sau strâmbi',
  'Spații între dinți',
  'Mușcătura care nu se potrivește cum trebuie',
  'Un dinte ieșit din rând care te încurcă la periaj',
  'Recomandare de la medicul care ți-a făcut consultația',
]

export default function Ortodontie() {
  return (
    <ServiceLayout
      slug="ortodontie"
      metaTitle="Ortodonție și aparate dentare Iași — Dentis"
      metaDescription="Aparate dentare pentru copii și adulți la Dentis Iași, cu amprentă digitală în locul celei clasice. ☎ 0332 408 243"
      eyebrow="Ortodonție"
      title={
        <>
          Dinți drepți, cu <span className="text-coral-600">mai puțin disconfort</span>
        </>
      }
      intro="Aparatul dentar nu mai înseamnă ce însemna acum zece ani. Partea care sperie cel mai tare — amprentarea — o facem digital: fără pastă care se lipește de brackets, fără disconfort. Restul e răbdare și controale la timp."
      heroImage="/media/services/ortodontie-scanare.jpg"
      heroImageAlt="Scanare digitală pentru un pacient cu aparat dentar la Dentis Iași"
      highlights={[
        'Aparate dentare pentru copii și pentru adulți',
        'Amprentă digitală în loc de cea clasică',
        'Controale programate din timp, ca să nu se lungească tratamentul',
      ]}
      ctaTitle="Vino la o consultație și vedem ce ți se potrivește"
    >
      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">Când merită să vii</h2>
          <p className="mt-4 leading-relaxed text-plum-900/70">
            Ortodonția nu e doar despre cum arată. Dinții aliniați se spală mai ușor, se
            uzează mai uniform și fac mai puține probleme peste ani.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {motive.map((m) => (
              <li key={m} className="card-mini flex items-start gap-3 text-sm text-plum-900/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" aria-hidden="true" />
                {m}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">Cum începe tratamentul</h2>
        </Reveal>
        <div className="mt-7 grid gap-6 sm:grid-cols-3">
          <Reveal>
            <div className="card-surface h-full card-pad">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                <Smile className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 card-title">Consultația</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">
                Ne uităm la dinți și la mușcătură și îți spunem dacă e cazul de aparat, ce
                fel și cam cât ar dura.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-surface h-full card-pad">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                <Scan className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 card-title">Scanarea digitală</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">
                Câteva minute cu camera de scanare și avem modelul 3D. Fără amprenta clasică
                și fără senzația neplăcută care vine cu ea.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="card-surface h-full card-pad">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                <Baby className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 card-title">Și pentru cei mici</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">
                La copii, uneori e de ajuns o intervenție mică la momentul potrivit ca să
                eviți un tratament lung mai târziu.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div className="rounded-3xl bg-plum-50 card-pad-lg">
          <h2 className="h-display text-3xl md:text-4xl">Cât durează?</h2>
          <p className="mt-4 leading-relaxed text-plum-900/75">
            Depinde de cât de mult au de mers dinții — de la câteva luni la doi ani. Îți dăm
            o estimare realistă la consultație, nu una optimistă ca să sune bine. Ce ține de
            noi e să nu pierdem timp între controale; ce ține de tine e să vii la ele.
          </p>
        </div>
      </Reveal>
    </ServiceLayout>
  )
}
