/** Întrebări frecvente — folosite pe Contact (subset) și pe alte pagini. */

export type FaqItem = { q: string; a: string }

export const faqItems: FaqItem[] = [
  {
    q: 'Cât costă o consultație?',
    a: 'Sună-ne la 0332 408 243 pentru tariful actual. La consultație primești evaluarea completă și planul de tratament, cu toate costurile explicate transparent, înainte să începem ceva.',
  },
  {
    q: 'Tratamentele dor?',
    a: 'Folosim anestezie locală și nu începem până nu ești complet amorțit. Dacă simți ceva pe parcurs, ridici mâna și ne oprim. Mulți pacienți ne scriu în recenzii că aici au scăpat de frica de dentist.',
  },
  {
    q: 'Nu am mai fost la dentist de ani buni. E o problemă?',
    a: 'Nu, și nu o să auzi niciun reproș. Începem cu o consultație, îți spunem ce am găsit și facem un plan pe etape — ce e urgent și ce mai poate aștepta. Tu decizi cu ce începem și în ce ritm mergem.',
  },
  {
    q: 'Tratați și copii?',
    a: 'Da. Prima vizită poate fi doar de acomodare: se urcă în scaun, se uită la instrumente, numărăm dinții. Fără tratament și fără presiune, ca să vină relaxat data viitoare.',
  },
  {
    q: 'Trebuie să fac amprentă clasică?',
    a: 'Nu. Folosim scanarea digitală 3D — fără pastă în gură, fără disconfort. Durează câteva minute, iar modelul apare pe ecran în timp real. E deosebit de util dacă porți aparat dentar.',
  },
  {
    q: 'Cum ajung la cabinet?',
    a: 'Strada Crișului nr. 19, blocul C21, scara A — la parter, în zona Podu Roș. Nu ai scări de urcat, deci accesul e comod și cu căruciorul.',
  },
]

/** Subsetul afișat pe pagina de Contact, lângă formular. */
export const contactFaq = faqItems.slice(0, 4)
