import { usePageMeta } from '../lib/seo'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

type Foto = {
  src: string
  alt: string
  caption: string
  /** Cadre mai înalte pentru fotografiile verticale, ca grila să respire. */
  tall?: boolean
}

const fotografii: Foto[] = [
  {
    src: '/media/clinic/receptie.jpg',
    alt: 'Recepția clinicii Dentis Iași, cu logo-ul auriu pe perete și scaune bleumarin de catifea',
    caption: 'Recepția — logo-ul auriu, scaunele bleumarin și ceasul-soare',
    tall: true,
  },
  {
    src: '/media/clinic/cabinet-1.jpg',
    alt: 'Cabinetul 1 de tratament de la Dentis Iași, cu unit dentar și decor cu oglinzi rotunde',
    caption: 'Cabinetul 1',
    tall: true,
  },
  {
    src: '/media/clinic/sala-asteptare.jpg',
    alt: 'Sala de așteptare a clinicii Dentis Iași, cu pardoseală marmorată și iluminat liniar',
    caption: 'Sala de așteptare',
    tall: true,
  },
  {
    src: '/media/clinic/cabinet-2.jpg',
    alt: 'Al doilea cabinet de tratament de la Dentis Iași',
    caption: 'Cabinetul 2',
    tall: true,
  },
  {
    src: '/media/clinic/unit-dentar.jpg',
    alt: 'Unit dentar Chirana cu instrumentarul pregătit, la Dentis Iași',
    caption: 'Unitul dentar și instrumentarul',
  },
  {
    src: '/media/team/echipa-completa.webp',
    alt: 'Echipa clinicii Dentis Iași, fotografie de grup din 2026',
    caption: 'Echipa Dentis, 2026',
    tall: true,
  },
  {
    src: '/media/services/scanare-digitala.jpg',
    alt: 'Scanare intraorală digitală 3D la Dentis Iași',
    caption: 'Scanarea digitală, în locul amprentei clasice',
    tall: true,
  },
]

export default function Galerie() {
  usePageMeta(
    'Galerie foto — Cabinetul Dentis Iași, Str. Crișului',
    'Vezi cum arată cabinetul stomatologic Dentis din Iași: recepția, cele două cabinete de tratament, sala de așteptare și echipa.',
  )

  return (
    <>
      {/* Hero */}
      <section className="bg-plum-50">
        <div className="container-site hero-pad text-center">
          <Reveal>
            <p className="eyebrow justify-center">Galerie</p>
            <h1 className="h-display mx-auto mt-3 max-w-3xl text-4xl md:text-[52px]">
              Vezi unde vii înainte să ajungi
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-plum-900/75">
              Un cabinet la parterul unui bloc poate suna neconvingător până îl vezi. Astea sunt
              fotografii reale din Strada Crișului nr. 19 — nimic pus în scenă.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grilă foto */}
      <section className="section-pad">
        <div className="container-site">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 lg:gap-8">
            {fotografii.map((foto, i) => (
              <Reveal
                key={foto.src + i}
                delay={Math.min(i * 0.05, 0.25)}
                className="mb-6 break-inside-avoid lg:mb-8"
              >
                <figure className="card-surface overflow-hidden">
                  <img
                    src={foto.src}
                    alt={foto.alt}
                    loading="lazy"
                    className={`w-full object-cover ${foto.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
                  />
                  <figcaption className="px-5 py-4 text-sm font-medium text-plum-900/75">
                    {foto.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Notă despre dotare */}
      <section className="pb-16 md:pb-24">
        <div className="container-site">
          <Reveal>
            <div className="rounded-3xl bg-plum-50 card-pad-lg">
              <SectionHeading
                align="left"
                eyebrow="Dotare"
                title="Ce vezi în fotografii"
                intro="Două cabinete de tratament, unit dentar Chirana, scanner intraoral pentru amprenta digitală, radiografie digitală și monitor în cabinet, ca să îți putem arăta pe ecran ce vedem noi. Recepția are WiFi pentru pacienți, iar plata se poate face și cu cardul."
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Vino să vezi cabinetul cu ochii tăi"
        text="Programează o consultație. Suntem la parterul blocului C21, pe Strada Crișului nr. 19."
      />
    </>
  )
}
