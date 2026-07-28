import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'

const Despre = lazy(() => import('./pages/Despre'))
const Echipa = lazy(() => import('./pages/Echipa'))
const ServiciiIndex = lazy(() => import('./pages/ServiciiIndex'))
const StomatologieGenerala = lazy(() => import('./pages/servicii/StomatologieGenerala'))
const EsteticaDentara = lazy(() => import('./pages/servicii/EsteticaDentara'))
const ScanareDigitala = lazy(() => import('./pages/servicii/ScanareDigitala'))
const Ortodontie = lazy(() => import('./pages/servicii/Ortodontie'))
const Endodontie = lazy(() => import('./pages/servicii/Endodontie'))
const ProteticaDentara = lazy(() => import('./pages/servicii/ProteticaDentara'))
const ChirurgieDentoAlveolara = lazy(() => import('./pages/servicii/ChirurgieDentoAlveolara'))
const StomatologieCopii = lazy(() => import('./pages/servicii/StomatologieCopii'))
const Igienizare = lazy(() => import('./pages/servicii/Igienizare'))
const Galerie = lazy(() => import('./pages/Galerie'))
const Testimoniale = lazy(() => import('./pages/Testimoniale'))
const PrimaVizita = lazy(() => import('./pages/PrimaVizita'))
const Contact = lazy(() => import('./pages/Contact'))
const Confidentialitate = lazy(() => import('./pages/Confidentialitate'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <a
        href="#continut"
        className="btn-primary sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
      >
        Sari la conținut
      </a>
      <Header />
      <main id="continut" tabIndex={-1} className="flex-1">
        <Suspense fallback={<div className="section-pad container-site" aria-busy="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/despre" element={<Despre />} />
            <Route path="/echipa" element={<Echipa />} />
            <Route path="/servicii" element={<ServiciiIndex />} />
            <Route path="/servicii/stomatologie-generala" element={<StomatologieGenerala />} />
            <Route path="/servicii/estetica-dentara" element={<EsteticaDentara />} />
            <Route path="/servicii/scanare-digitala" element={<ScanareDigitala />} />
            <Route path="/servicii/ortodontie" element={<Ortodontie />} />
            <Route path="/servicii/endodontie" element={<Endodontie />} />
            <Route path="/servicii/protetica-dentara" element={<ProteticaDentara />} />
            <Route
              path="/servicii/chirurgie-dento-alveolara"
              element={<ChirurgieDentoAlveolara />}
            />
            <Route path="/servicii/stomatologie-copii" element={<StomatologieCopii />} />
            <Route path="/servicii/igienizare" element={<Igienizare />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/testimoniale" element={<Testimoniale />} />
            <Route path="/prima-vizita" element={<PrimaVizita />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/confidentialitate" element={<Confidentialitate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
