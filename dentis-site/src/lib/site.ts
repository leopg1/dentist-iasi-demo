/**
 * Datele centrale ale site-ului Dentis Iași.
 * Sursa de adevăr: DENTIS-IASI-DOSAR.md (cercetare 28.07.2026).
 *
 * NU inventați date noi. Tot ce e marcat în dosar drept „[DE ÎNTREBAT]”
 * este formulat prudent aici sau lăsat pe dinafară intenționat:
 *   · implantologia NU apare pe site — nu e confirmată de clinică;
 *   · apneea în somn și laserul NU apar — sunt teme de curs, nu servicii;
 *   · în afară de Dr. Bârlescu, niciun medic nu e numit — lista scrisă
 *     a echipei trebuie primită de la clinică.
 */

export const site = {
  name: 'Dentis Iași',
  tagline: 'Clinică stomatologică',
  legalName: 'BÂRLESCU V. MARIA-DENISA — C.M.I. DENTIS',
  cui: 'CUI 32007660',
  /** Cabinet Medical Individual — nu are număr de Registrul Comerțului. */
  regCom: 'Cabinet Medical Individual · Registrul Unic al Cabinetelor Medicale, DSP Iași',
  phone: '0332 408 243',
  phoneHref: 'tel:+40332408243',
  mobile: '0770 625 167',
  mobileHref: 'tel:+40770625167',
  whatsappHref: 'https://wa.me/40770625167',
  email: 'dentis.iasi@yahoo.com',
  address: 'Strada Crișului nr. 19, Bl. C21, Sc. A, parter, Iași 700694',
  addressShort: 'Str. Crișului nr. 19 — Podu Roș, Iași',
  addressHint: 'La parterul blocului C21, scara A. Fără scări de urcat, acces direct.',
  schedule: 'Luni – Vineri: 9:00 – 20:00 · Sâmbătă: 9:00 – 12:00',
  scheduleWeek: 'Luni – Vineri: 9:00 – 20:00',
  scheduleSaturday: 'Sâmbătă: 9:00 – 12:00',
  scheduleNote: 'Duminică închis. Sună-ne pentru confirmarea disponibilității.',
  rating: '4,8',
  reviewCount: 45,
  yearsActive: 10,
  foundedYear: 2016,
  googleReviewUrl:
    'https://www.google.com/maps/place/Dentis+Cabinet+Stomatologic+Dr.+Barlescu+Denisa/@47.1544034,27.5705856,17z',
  facebook: 'https://www.facebook.com/profile.php?id=100063583031684',
  instagram: 'https://www.instagram.com/cabinet_dentis_iasi/',
  mapsQuery:
    'https://www.google.com/maps/search/?api=1&query=Dentis+Cabinet+Stomatologic+Dr.+Barlescu+Denisa+Ia%C8%99i',
  mapsEmbed:
    'https://www.google.com/maps?q=Dentis+Cabinet+Stomatologic+Dr.+Barlescu+Denisa+Strada+Crisului+19+Iasi&output=embed',
} as const

export type Service = {
  slug: string
  title: string
  menuTitle: string
  short: string
  image: string
  imageAlt: string
}

export const services: Service[] = [
  {
    slug: 'stomatologie-generala',
    title: 'Stomatologie generală',
    menuTitle: 'Stomatologie generală',
    short:
      'Consultații, carii, plombe, dureri apărute peste noapte — stomatologia de zi cu zi, făcută cu răbdare și explicată pe înțelesul tău.',
    image: '/media/clinic/cabinet-1.jpg',
    imageAlt: 'Cabinetul 1 de tratament de la Dentis Iași, cu unit dentar modern',
  },
  {
    slug: 'estetica-dentara',
    title: 'Estetică dentară & Albire',
    menuTitle: 'Estetică dentară',
    short:
      'Fațete, reconstrucții estetice și albire profesională. Specialitatea în care Dr. Denisa Bârlescu se perfecționează constant.',
    image: '/media/services/estetica-lucru.jpg',
    imageAlt: 'Medic stomatolog lucrând cu lupe de magnificație la clinica Dentis Iași',
  },
  {
    slug: 'scanare-digitala',
    title: 'Scanare digitală 3D',
    menuTitle: 'Scanare digitală',
    short:
      'Fără pastă de amprentă, fără disconfort. Scanăm digital și vezi rezultatul pe ecran înainte să înceapă tratamentul.',
    image: '/media/services/scanare-digitala.jpg',
    imageAlt: 'Scanare intraorală digitală 3D la Dentis Iași',
  },
  {
    slug: 'ortodontie',
    title: 'Ortodonție — aparate dentare',
    menuTitle: 'Ortodonție',
    short:
      'Aparate dentare pentru copii și adulți, cu amprentă digitală în locul celei clasice — mult mai comod, mai ales cu brackets.',
    image: '/media/services/ortodontie-scanare.jpg',
    imageAlt: 'Scanare digitală pentru pacient cu aparat dentar la Dentis Iași',
  },
  {
    slug: 'endodontie',
    title: 'Endodonție — tratament de canal',
    menuTitle: 'Endodonție',
    short:
      'Tratăm dintele la rădăcină și îl păstrăm pe al tău. Îți explicăm fiecare pas înainte să îl facem.',
    image: '/media/clinic/unit-dentar.jpg',
    imageAlt: 'Unit dentar Chirana cu instrumentar pregătit, cabinetul Dentis Iași',
  },
  {
    slug: 'protetica-dentara',
    title: 'Protetică dentară',
    menuTitle: 'Protetică',
    short:
      'Coroane, punți și lucrări care îți redau dinții lipsă — planificate digital, potrivite până la ultimul detaliu de ocluzie.',
    image: '/media/clinic/cabinet-2.jpg',
    imageAlt: 'Al doilea cabinet de tratament de la Dentis Iași',
  },
  {
    slug: 'chirurgie-dento-alveolara',
    title: 'Chirurgie dento-alveolară',
    menuTitle: 'Chirurgie',
    short:
      'Extracții simple și chirurgicale, inclusiv măselele de minte — cu anestezie bine făcută și recomandări clare după.',
    image: '/media/clinic/receptie.jpg',
    imageAlt: 'Recepția clinicii Dentis din Iași, Strada Crișului nr. 19',
  },
  {
    slug: 'stomatologie-copii',
    title: 'Stomatologie pentru copii',
    menuTitle: 'Stomatologie copii',
    short:
      'Prima vizită fără panică. Transformăm teama de necunoscut în curiozitate — și curiozitatea în zâmbete.',
    image: '/media/services/copii-prima-vizita.jpg',
    imageAlt: 'Prima vizită la stomatolog pentru copii, Dentis Iași',
  },
  {
    slug: 'igienizare',
    title: 'Igienizare & Profilaxie',
    menuTitle: 'Igienizare',
    short:
      'Detartraj, periaj profesional și air-flow, o dată la șase luni. Cea mai ieftină investiție în dinții tăi.',
    image: '/media/clinic/sala-asteptare.jpg',
    imageAlt: 'Sala de așteptare a clinicii Dentis Iași',
  },
]

export type TeamMember = {
  slug: string
  name: string
  role: string
  photo: string
  bio: string
  areas: string[]
  quote?: string
  quoteAuthor?: string
}

/**
 * ATENȚIE: singurul medic pe care îl putem numi public cu certitudine este
 * Dr. Denisa Bârlescu (registre oficiale + recenzii + postări proprii).
 * Dr. Buzatu apare în recenzii Google și pe firmadeaur.ro, dar fără prenume.
 * Restul echipei — de completat după ce clinica trimite lista scrisă.
 */
export const doctors: TeamMember[] = [
  {
    slug: 'dr-denisa-barlescu',
    name: 'Dr. Denisa Bârlescu',
    role: 'Medic stomatolog · Fondator',
    photo: '', // TODO: portret individual — de cerut clinicii (vezi §15 din dosar)
    bio: 'A deschis Dentis în 2016, iar de atunci cabinetul a devenit, cum spune chiar ea, „mai mult decât un cabinet — locul în care am crescut, am învățat și am întâlnit oameni care mi-au rămas în suflet”. Se ocupă de estetica dentară și investește constant în formare: în iunie 2026 a petrecut trei zile la The Core Meeting, la Iași, pe stratificări avansate și selecția modernă a nuanțelor. Pacienții o descriu în recenzii ca pe medicul care explică pas cu pas fiecare procedură și te ajută să treci peste frica de stomatolog.',
    areas: ['Estetică dentară', 'Stomatologie generală', 'Endodonție', 'Protetică dentară'],
    quote:
      'Dna doctor Denisa Barlescu se comportă super cu pacienții, explică pas cu pas orice procedură și te ajută să depășești sentimentul de teamă.',
    quoteAuthor: 'Stefi G., recenzie Google',
  },
  {
    slug: 'dr-buzatu',
    name: 'Dr. Buzatu',
    role: 'Medic stomatolog',
    photo: '', // TODO: portret individual — de cerut clinicii (vezi §15 din dosar)
    bio: 'Pacienții îl remarcă pentru un lucru anume: nu începe nimic fără să îți spună întâi ce urmează și de ce e nevoie. E genul de medic de la care pleci știind exact ce ți s-a făcut și ce urmează data viitoare.',
    areas: ['Stomatologie generală'],
    quote:
      'Un cabinet de nota 10. Domnul Dr. Buzatu lucrează excelent. Cel mai mult mi-a plăcut faptul că explică fiecare procedură care urmează să fie făcută și de ce trebuie să fie făcută.',
    quoteAuthor: 'Beatrice A., recenzie Google',
  },
]

export const assistants: TeamMember[] = []

export type Testimonial = {
  text: string
  author: string
  source: string
}

/** Recenzii reale de pe Google Maps, citate cuvânt cu cuvânt (28.07.2026). */
export const testimonials: Testimonial[] = [
  {
    text: 'Recomand din tot sufletul! Cabinet curat, primire caldă, echipă minunată! Doamna doctor Denisa Bârlescu extrem de atentă, dedicată. Dispun de aparatură modernă și oferă servicii profesionale. Lucrează impecabil și cu copiii.',
    author: 'Andreea O.',
    source: 'Google',
  },
  {
    text: 'Dna doctor Denisa Barlescu se comportă super cu pacienții, explică pas cu pas orice procedură și te ajută să depășești sentimentul de teamă.',
    author: 'Stefi G.',
    source: 'Google',
  },
  {
    text: 'Am ajuns la acest cabinet în urma multor experiențe neplăcute și am decis să rămână cabinetul preferat pentru toată familia. Super experiență, cu o echipă foarte comunicativă în care ți se explică tot.',
    author: 'Cartoon Tv',
    source: 'Google',
  },
  {
    text: 'Un cabinet de nota 10. Domnul Dr. Buzatu lucrează excelent. Cel mai mult mi-a plăcut faptul că explică fiecare procedură care urmează să fie făcută și de ce trebuie să fie făcută.',
    author: 'Beatrice A.',
    source: 'Google',
  },
  {
    text: 'Experiență foarte bună! Personal amabil, profesionist și atent. Tratamentele au fost realizate cu grijă, iar atmosfera este plăcută. Recomand cu încredere!',
    author: 'Mishu M.',
    source: 'Google',
  },
  {
    text: 'Profesionalism și amabilitate! Nota 10+ pentru întreaga echipă! Doamnele doctor sunt profesioniste, amabile și explică în detaliu procedurile. Recomand cu căldură!',
    author: 'Marian Traian O.',
    source: 'Google',
  },
  {
    text: 'Vin cu entuziasm la acest cabinet de câțiva ani și de fiecare dată experiența a fost excelentă. Doamna doctor Bârlescu este mereu foarte atentă la detalii, extrem de profesionistă și dedicată.',
    author: 'Bendas A.',
    source: 'Google',
  },
  {
    text: 'Foarte foarte mulțumită. Servicii excelente, personal impresionant. Îmi era frică, nu știam ce înseamnă nici măcar detartrajul.',
    author: 'Andreea R.',
    source: 'Google',
  },
  {
    text: 'Servicii top. Personalul și doamna doctor la cel mai înalt nivel de profesionalism. Mulțumesc pentru tot.',
    author: 'Bogdan P.',
    source: 'Google',
  },
]
