// Voeg nieuwe blog posts hier toe. De 'slug' bepaalt de URL: /post/slug
// Tag types: 'event' | 'podcast' | 'hw' | 'meta' (of leeg)
export const posts = [
  {
    slug: 'podcast-ep-12',
    date: '2026.05.20',
    title: 'Howest Student IT Podcast — ep. 12',
    excerpt: 'Een gesprek met [naam expert] over embedded security en de uitdagingen van firmware updates in IoT.',
    tag: 'podcast',
    tagLabel: 'podcast',
    content: `
      <p>In deze aflevering van de Howest Student IT podcast nodigde ik [naam expert] uit
      om te praten over embedded security — een topic dat steeds belangrijker wordt nu
      bijna elk apparaat in huis een netwerkverbinding heeft.</p>

      <h2>Wat besproken werd</h2>
      <p>We doken in onder andere secure boot, over-the-air updates en het verschil tussen
      hobbyist-projecten en wat er écht nodig is in productie.</p>

      <h3>Drie key takeaways</h3>
      <p>1. Security is geen feature, het is een proces.<br>
      2. OTA-updates zijn een must, geen luxe.<br>
      3. Hardware en software security horen samen ontworpen te worden.</p>

      <h2>Beluister de aflevering</h2>
      <p>De volledige aflevering is binnenkort beschikbaar op het Howest podcast platform.
      Vervang deze link met de echte link wanneer die er is.</p>
    `,
  },
  {
    slug: 'pcb-design-from-zero',
    date: '2026.04.02',
    title: 'Een PCB ontwerpen van nul tot prototype',
    excerpt: 'Van schematic naar gerber files naar gesoldeerde prototype. Wat ging goed, wat ging fout, en wat ik volgende keer anders doe.',
    tag: 'hw',
    tagLabel: 'hardware',
    content: `
      <p>PCBs ontwerpen leek me altijd magie. Tot ik er zelf één maakte. Hier is het volledige
      verhaal van mijn eerste echte custom PCB — van idee tot werkend prototype.</p>

      <h2>Het idee</h2>
      <p>Ik wilde een kleine breakout board voor een sensor die ik vaak gebruik. Niets te
      ambitieus voor de eerste keer.</p>

      <h2>Tools</h2>
      <p>Ik gebruikte <code>KiCad</code> omdat het open source is en uitstekende tutorials heeft.
      Voor productie ging het naar JLCPCB — €5 voor 5 boards.</p>

      <h2>Wat ik leerde</h2>
      <p>Vergeet niet om je footprints dubbel te checken. Echt. Doe het.</p>
    `,
  },
  {
    slug: 'hackhowest-2026',
    date: '2026.03.15',
    title: 'HackHowest 2026 — reflectie',
    excerpt: '48 uur, een team, en een idee dat tussen embedded en web zat. Lessons in scope, sleep en stack-keuzes.',
    tag: 'event',
    tagLabel: 'hackathon',
    content: `
      <p>Mijn tweede hackathon, en deze keer met een veel beter plan. Hier is wat 48 uur
      coderen, debuggen en pizza eten me leerde.</p>

      <h2>Het project</h2>
      <p>Onze pitch was [beschrijf wat jullie bouwden]. Het zat op het snijpunt van embedded
      (ESP32 met sensoren) en web (een real-time dashboard).</p>

      <h2>Wat goed ging</h2>
      <p>Vroeg een MVP definiëren. We wisten al na 6 uur wat het minimum was om te
      demonstreren.</p>

      <h2>Wat fout ging</h2>
      <p>We hebben te lang gespendeerd aan styling van het dashboard terwijl de core feature
      nog buggy was.</p>
    `,
  },
  {
    slug: 'embedded-world-2025',
    date: '2025.11.18',
    title: 'Embedded World Conference — recap',
    excerpt: 'Drie key takeaways van de sessies rond Rust in embedded, secure boot en de toekomst van RISC-V.',
    tag: 'event',
    tagLabel: 'event',
    content: `
      <p>Vervang dit met je echte reflectie van het event (300–500 woorden zoals het draaiboek vraagt).</p>

      <h2>Over het event</h2>
      <p>Beschrijf het event: hoelang, doelpubliek, sprekers.</p>

      <h2>Highlights</h2>
      <p>Wat heb je geleerd? Wat verraste je? Welke sessie sprong eruit?</p>
    `,
  },
  {
    slug: 'hack-the-future-2025',
    date: '2025.11.12',
    title: 'Hack The Future — Antwerpen',
    excerpt: 'Mijn eerste fysieke hackathon. Drie key takeaways en waarom ik volgend jaar zeker terugkom.',
    tag: 'event',
    tagLabel: 'event',
    content: `
      <p>Vervang dit met je echte reflectie (300–500 woorden).</p>
    `,
  },
  {
    slug: 'how-this-site-was-built',
    date: '2025.09.30',
    title: 'Hoe deze site werd gemaakt',
    excerpt: 'De technologie, de keuzes en hoeveel moeite het kost om hier een nieuwe post toe te voegen.',
    tag: '',
    tagLabel: 'meta',
    content: `
      <p>Deze blogpost is verplicht volgens het draaiboek, en eigenlijk best leuk om te schrijven.
      Hier is hoe deze portfolio gemaakt is.</p>

      <h2>De stack</h2>
      <p>Deze site is gebouwd met <code>React</code> en <code>Vite</code> als build tool.
      Geen CMS, geen WordPress — gewoon clean JSX en CSS.</p>

      <h3>Waarom React?</h3>
      <p>Omdat ik als software dev student React toch al moest leren, en zo combineer ik
      portfolio bouwen met skills opbouwen. Twee vliegen in één klap.</p>

      <h3>Waarom Vite?</h3>
      <p>Snel. Echt snel. Hot module reload binnen milliseconden. En het build naar statische
      bestanden die ik gratis kan hosten op GitHub Pages.</p>

      <h2>Hosting</h2>
      <p>De site staat op GitHub Pages, gratis en voor altijd. Custom domein erop koppelen
      is een kwestie van wat DNS records aanpassen.</p>

      <h2>Een nieuwe post toevoegen</h2>
      <p>Ik open <code>src/data/posts.js</code>, voeg een nieuw object toe aan de array,
      en push naar GitHub. Binnen 1 minuut staat de nieuwe post live. Best efficiënt.</p>
    `,
  },
]
