import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { services, site } from '../lib/site'
import { usePageMeta } from '../lib/seo'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'

export default function ServiciiIndex() {
  usePageMeta(
    'Servicii stomatologice Iași — Dentis, Str. Crișului',
    'Toate serviciile Dentis Iași: stomatologie generală, estetică dentară, scanare digitală, ortodonție, endodonție, protetică, chirurgie, stomatologie pentru copii și igienizare.',
  )

  return (
    <>
      {/* Hero index servicii */}
      <section className="bg-plum-50">
        <div className="container-site hero-pad text-center">
          <Reveal>
            <p className="eyebrow justify-center">Dentis Iași — Clinică stomatologică</p>
            <h1 className="h-display mx-auto mt-4 max-w-3xl text-4xl md:text-[52px]">
              Serviciile noastre
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-plum-900/75">
              De la o consultație de rutină și igienizare, până la aparate dentare și lucrări
              protetice: nouă servicii, într-un singur cabinet, cu aceeași echipă care te
              cunoaște de la prima vizită. Alege ce te interesează sau sună-ne și te îndrumăm noi.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a href={site.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" /> Sună: {site.phone}
              </a>
              <Link to="/contact#formular" className="btn-secondary">
                Cere o programare online
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grila celor 9 servicii */}
      <section className="section-pad">
        <div className="container-site">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} delay={(i % 3) * 0.08} />
            ))}
          </div>

          {/* Bandă „nu știi de unde să începi” */}
          <Reveal className="mt-16">
            <div className="grid overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-plum-100 lg:grid-cols-[1fr_1.25fr]">
              <img
                src="/media/clinic/receptie.jpg"
                alt="Recepția clinicii Dentis din Iași"
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover object-[center_40%] lg:aspect-auto"
              />
              <div className="flex flex-col items-start justify-center gap-5 card-pad-lg">
                <p className="eyebrow !text-teal-600">Nu știi de unde să începi?</p>
                <h2 className="h-display text-3xl md:text-4xl">Începe cu o consultație</h2>
                <p className="max-w-xl leading-relaxed text-plum-900/70">
                  Nu trebuie să știi tu ce ai nevoie — asta e treaba noastră. Vii la o
                  consultație, ne uităm la tot, îți spunem ce am găsit și facem un plan pe
                  etape: ce e urgent, ce mai poate aștepta și cât costă fiecare pas.
                </p>
                <div className="mt-2 flex flex-wrap gap-3.5">
                  <a href={site.phoneHref} className="btn-primary">
                    <Phone className="h-4 w-4" aria-hidden="true" /> {site.phone}
                  </a>
                  <Link to="/prima-vizita" className="btn-secondary">
                    Cum decurge prima vizită
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  )
}
