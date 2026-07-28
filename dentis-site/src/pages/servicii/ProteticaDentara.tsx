import { Layers, Ruler, Scan } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'

const lucrari = [
  {
    title: 'Coroane dentare',
    text: 'Pentru un dinte prea distrus ca să mai țină o plombă, sau după un tratament de canal. Îl îmbrăcăm și îi redăm forma și rezistența.',
  },
  {
    title: 'Punți dentare',
    text: 'Când lipsește un dinte între alți doi sănătoși, puntea umple golul și îți redă mușcătura.',
  },
  {
    title: 'Proteze',
    text: 'Parțiale sau totale, pentru cazurile în care lipsesc mai mulți dinți. Se ajustează până stau bine — nu te trimitem acasă cu ceva care te freacă.',
  },
]

export default function ProteticaDentara() {
  return (
    <ServiceLayout
      slug="protetica-dentara"
      metaTitle="Protetică dentară Iași — coroane, punți, proteze | Dentis"
      metaDescription="Coroane, punți și proteze la Dentis Iași, planificate digital și potrivite până la ultimul detaliu de ocluzie. ☎ 0332 408 243"
      eyebrow="Protetică dentară"
      title={
        <>
          Îți punem la loc <span className="text-coral-600">ce lipsește</span>
        </>
      }
      intro="Un dinte lipsă nu e doar o problemă de estetică. Ceilalți încep să se miște către gol, mușcătura se schimbă, iar în câțiva ani apar probleme care costă mult mai mult de reparat. Protetica pune lucrurile la loc — și le pune să se potrivească."
      heroImage="/media/clinic/cabinet-2.jpg"
      heroImageAlt="Al doilea cabinet de tratament de la clinica Dentis Iași"
      heroImageClassName="object-[center_45%]"
      highlights={[
        'Coroane, punți și proteze',
        'Amprentă digitală — lucrări care vin bine din prima',
        'Atenție la ocluzie, nu doar la cum arată',
      ]}
      ctaTitle="Vino să vedem ce soluție ți se potrivește"
    >
      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">Ce fel de lucrări facem</h2>
        </Reveal>
        <div className="mt-7 grid gap-6 sm:grid-cols-3">
          {lucrari.map((l, i) => (
            <Reveal key={l.title} delay={i * 0.08}>
              <div className="card-surface h-full card-pad">
                <h3 className="card-title">{l.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">{l.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">De ce contează ocluzia</h2>
          <p className="mt-4 leading-relaxed text-plum-900/70">
            Ocluzia e felul în care dinții de sus se întâlnesc cu cei de jos. O lucrare care
            arată perfect, dar e cu o fracțiune de milimetru mai înaltă, îți poate da dureri
            de maxilar, uzură pe ceilalți dinți sau chiar dureri de cap. De asta petrecem
            timp la potrivire — și de asta Dr. Bârlescu merge la cursuri dedicate special
            acestui subiect.
          </p>
        </Reveal>
        <div className="mt-7 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="card-surface h-full card-pad">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                <Scan className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 card-title">Planificare digitală</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">
                Scanăm digital în loc de amprenta clasică. Modelul e mai precis, iar
                laboratorul primește exact ce trebuie.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-surface h-full card-pad">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-100 text-coral-600">
                <Ruler className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 card-title">Probă și ajustare</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">
                Lucrarea se probează înainte de a fi fixată definitiv. Dacă ceva nu e cum
                trebuie, se ajustează — asta face parte din tratament.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div className="rounded-3xl bg-plum-50 card-pad-lg">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-coral-600 shadow-hair">
              <Layers className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="h-display text-3xl md:text-4xl">Cât durează</h2>
              <p className="mt-4 leading-relaxed text-plum-900/75">
                O coroană înseamnă de regulă două-trei vizite: pregătirea dintelui și
                scanarea, proba, apoi fixarea. Între ele porți o lucrare provizorie, ca să
                nu umbli cu dintele șlefuit. Îți dăm calendarul complet de la prima vizită.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </ServiceLayout>
  )
}
