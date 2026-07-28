import { Clock, ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { site } from '../lib/site'
import { contactFaq } from '../lib/faq'
import { usePageMeta } from '../lib/seo'
import Reveal from '../components/Reveal'
import ContactForm from '../components/contact/ContactForm'
import FaqItem from '../components/contact/FaqItem'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21.9v-7.4h2.5l.4-2.9h-2.9V9.7c0-.8.2-1.4 1.4-1.4h1.6V5.7c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.1H7.9v2.9h2.5v7.4h3.1Z" />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14 0-.31-.01-.47-.01-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.47-.29Z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Contact() {
  usePageMeta(
    'Contact & programări — Dentis Iași, Str. Crișului nr. 19',
    'Programează-te la Dentis Iași: Strada Crișului nr. 19, bl. C21, parter, Podu Roș. ☎ 0332 408 243 · L–V 9:00–20:00, Sâ 9:00–12:00.',
  )

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-plum-50">
        <div className="container-site relative hero-pad text-center">
          <Reveal>
            <p className="eyebrow justify-center">Contact & programare</p>
            <h1 className="h-display mt-3 text-4xl md:text-[52px]">Hai să ne cunoaștem</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-plum-900/70">
              Sună-ne, scrie-ne sau treci direct pe la cabinet — suntem pe Strada Crișului nr. 19,
              la parterul blocului C21, în Podu Roș. Găsim împreună ora care ți se potrivește.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Formular (primul pe mobil) + date de contact */}
      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.05fr]">
          {/* Formular — primul în DOM, ca pe mobil să fie imediat sub hero */}
          <Reveal className="min-w-0 lg:order-2">
            <ContactForm />
          </Reveal>

          {/* Date de contact + hartă */}
          <div className="min-w-0 lg:order-1">
            <Reveal>
              <h2 className="h-display text-3xl md:text-4xl">Date de contact</h2>
            </Reveal>
            <div className="mt-6 grid gap-6 lg:gap-8 sm:grid-cols-2">
              <Reveal className="sm:col-span-2">
                <div className="card-surface flex items-start gap-4 card-pad">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-coral-50 text-coral-600">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-plum-900/70">
                      Adresă
                    </h3>
                    <p className="mt-1.5 text-base font-semibold leading-snug text-plum-950">
                      {site.address}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-plum-900/70">
                      {site.addressHint}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="card-surface flex h-full items-start gap-4 card-pad">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-plum-900/70">
                      Telefon / programări
                    </h3>
                    {/* Ținte de atingere de min. 44px — sunt acțiunea principală pe mobil */}
                    <a
                      href={site.phoneHref}
                      className="-mx-2 mt-0.5 flex min-h-11 items-center rounded-xl px-2 text-lg font-bold text-plum-950 transition hover:bg-plum-50 hover:text-coral-700"
                    >
                      {site.phone}
                    </a>
                    <a
                      href={site.mobileHref}
                      className="-mx-2 flex min-h-11 items-center rounded-xl px-2 text-lg font-bold text-plum-950 transition hover:bg-plum-50 hover:text-coral-700"
                    >
                      {site.mobile}
                    </a>
                    <p className="mt-1 text-xs text-plum-900/70">Apasă pentru apel direct.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="card-surface flex h-full items-start gap-4 card-pad">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-plum-50 text-plum-600">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-plum-900/70">
                      E-mail
                    </h3>
                    <a
                      href={`mailto:${site.email}`}
                      className="-mx-2 mt-0.5 flex min-h-11 items-center whitespace-nowrap rounded-xl px-2 text-sm font-semibold text-plum-950 transition [overflow-wrap:normal] hover:bg-plum-50 hover:text-coral-700 md:text-base"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="card-surface flex h-full items-start gap-4 card-pad">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-plum-50 text-gold-500">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-plum-900/70">
                      Program
                    </h3>
                    <p className="mt-1.5 text-base font-semibold text-plum-950">{site.schedule}</p>
                    <p className="mt-1 text-xs text-plum-900/70">{site.scheduleNote}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="card-surface flex h-full items-start gap-4 card-pad">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-coral-50 text-coral-600">
                    <InstagramIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-plum-900/70">
                      Social
                    </h3>
                    <div className="mt-1.5 space-y-1.5">
                      <a
                        href={site.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="-mx-2 flex min-h-11 items-center gap-2 rounded-xl px-2 text-sm font-semibold text-plum-900/80 transition hover:bg-plum-50 hover:text-coral-700"
                      >
                        <FacebookIcon className="h-4 w-4" /> Dentis Iași
                      </a>
                      <a
                        href={site.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="-mx-2 flex min-h-11 items-center gap-2 rounded-xl px-2 text-sm font-semibold text-plum-900/80 transition hover:bg-plum-50 hover:text-coral-700"
                      >
                        <InstagramIcon className="h-4 w-4" /> @cabinet_dentis_iasi
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="mt-6">
              <iframe
                src={site.mapsEmbed}
                title="Harta — Dentis Iași, Strada Crișului nr. 19"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-video w-full rounded-3xl border-0 shadow-soft"
              />
              <a
                href={site.mapsQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="-mx-2 mt-1 inline-flex min-h-11 items-center gap-1.5 rounded-xl px-2 text-sm font-bold text-coral-600 transition hover:bg-plum-50 hover:text-coral-700"
              >
                Deschide în Google Maps <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Întrebări frecvente — obiecțiile de dinaintea programării */}
      <section className="pb-16 md:pb-20">
        <div className="container-site max-w-3xl">
          <Reveal>
            <h2 className="h-display text-center text-3xl md:text-4xl">
              Întrebări puse des la telefon
            </h2>
          </Reveal>
          <div className="mt-8 space-y-4">
            {contactFaq.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.05}>
                <FaqItem question={item.q}>{item.a}</FaqItem>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Urgențe — blocul de închidere al paginii */}
      <section className="pt-0 pb-16 md:pb-24">
        <div className="container-site">
          <Reveal>
            <div className="isolate relative overflow-hidden rounded-3xl border border-coral-100 bg-coral-50 px-6 py-12 text-center md:px-16 md:py-16">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-coral-200/50 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <p className="eyebrow justify-center">Urgențe</p>
                <h2 className="h-display mt-3 text-3xl md:text-4xl">Ai o urgență stomatologică?</h2>
                <p className="mx-auto mt-3 max-w-xl text-lg leading-relaxed text-plum-900/75">
                  Sună-ne direct — facem tot posibilul să te primim cât mai repede.
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-6 inline-flex items-center gap-3 font-display text-4xl font-semibold text-coral-600 transition hover:text-coral-700 md:text-5xl"
                >
                  <Phone className="h-8 w-8 md:h-9 md:w-9" aria-hidden="true" /> {site.phone}
                </a>
                <p className="mt-5 text-sm font-medium text-plum-900/70">
                  Preferi să scrii? Trimite-ne un mesaj pe WhatsApp — poți atașa și o poză.
                </p>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary mt-4"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Scrie-ne pe WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
