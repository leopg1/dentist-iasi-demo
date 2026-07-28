# Dentis Iași — site de prezentare

Site de prezentare pentru **Dentis Iași** (CMI Dentis — Dr. Bârlescu Maria-Denisa), cabinet
stomatologic pe Strada Crișului nr. 19, la parterul blocului C21, zona Podu Roș.

Conținutul e construit pe baza cercetării din [`../DENTIS-IASI-DOSAR.md`](../DENTIS-IASI-DOSAR.md)
(28 iulie 2026). Structura și componentele sunt reutilizate din proiectul DentaLine.

## Comenzi

```bash
npm install
npm run dev      # server local pe portul din .claude/launch.json (5190)
npm run build    # tsc -b && vite build → dist/
npm run lint     # oxlint
```

## Stack

React 19 · Vite 8 · TypeScript · Tailwind v4 · react-router-dom 7 · lucide-react
Fonturi: Manrope (corp) + Cormorant Garamond (titluri).

## Unde se schimbă conținutul

Aproape tot conținutul stă într-un singur loc: **[`src/lib/site.ts`](src/lib/site.ts)** — date de
contact, program, cele 9 servicii, echipa, recenziile. Întrebările frecvente sunt în
[`src/lib/faq.ts`](src/lib/faq.ts).

## Culori

Paleta e definită în `@theme` din [`src/index.css`](src/index.css). Numele scărilor sunt moștenite
din scheletul de proiect, dar **valorile sunt cele reale ale brandului Dentis**, extrase din
fotografiile cabinetului:

| Scară | Ce e de fapt | Unde apare |
|---|---|---|
| `plum-*` | bleumarin `#121A3A` → `#F4F6FB` | culoarea dominantă, hero, footer |
| `coral-*` | auriu/bronz `#94681F` → `#FDFAF1` | butoane, accente, eyebrow |
| `teal-*` | albastru cabinet `#2F5CA0` | iconuri secundare |

`coral-600` și `coral-700` sunt intenționat închise: pe ele stă text alb și trec contrastul AA.

## ⚠️ Înainte de a pune site-ul live

1. **Domeniu** — recomandat `dentisiasi.ro` (liber la data cercetării). După cumpărare, actualizează
   URL-urile absolute din: `index.html` (og:* + JSON-LD), `src/lib/seo.ts` (`BASE_URL`),
   `public/robots.txt`, `public/sitemap.xml`.
2. **Formularul de contact nu trimite nimic** — `src/components/contact/ContactForm.tsx` simulează
   trimiterea. De legat la un backend/serviciu de email înainte de lansare.
3. **Portretele medicilor lipsesc** — `doctors[].photo` e gol în `site.ts`, iar cardurile afișează o
   monogramă. Se completează după ce clinica trimite pozele individuale.
4. **Logo vectorial** — logo-ul din `src/components/Logo.tsx` e o reinterpretare SVG. De înlocuit cu
   fișierul original al clinicii.
5. **De confirmat cu clientul** înainte de publicare (detalii în §15 din dosar): programul, numărul
   principal de telefon, emailul, lista reală de servicii, grafia numelui („Bârlescu” vs „Bărlescu”).

## Ce NU e pe site, intenționat

- **Implantologie** — apare în directorul medatlas, dar profilul e nerevendicat și registrul DSP
  înregistrează cabinetul doar cu „stomatologie generală”. Nu promovăm un serviciu neconfirmat.
- **Tratament pentru apnee/sforăit și laser** — sunt teme de cursuri la care a participat doamna
  doctor, nu servicii declarate ale cabinetului.
- **Prețuri** — clinica nu are nicio listă publicată. De cerut de la client.
