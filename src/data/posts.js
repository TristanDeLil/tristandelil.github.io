// Voeg nieuwe blog posts hier toe. De 'slug' bepaalt de URL: /post/slug
// Tag types: 'event' | 'podcast' | 'hw' | 'meta' (of leeg)
export const posts = [
  {
    slug: "podcast Wonderlijke wereld van Walter",
    date: "2026.05.20",
    title:
      "Howest Student IT Podcast — de wonderlijke wereld van Walter met Daan Pape",
    excerpt: "Een gesprek met daan over de walter en bluecherry.",
    tag: "podcast",
    tagLabel: "podcast",
    content: `
      <p>In deze aflevering van de Howest Student IT podcast nodigde ik Daan Pape uit
      om te praten over de walter en bluecherry. Hun eigen hardware module die de kracht van de esp32-S3.</p>

      <h2>Wat besproken werd</h2>
      <p>podcast over de walter module, de techstack, firmware en features en de 
      keuze om opensource te gaan en de voordelen van deze beslissing.</p>

      <h3>Drie key takeaways</h3>
      <p>1. Wat is de Walter module en bluecherry platform.<br>
      2. Opensource is krachtig.<br>
      3. Energy harvesting.</p>

      <h2>Beluister de aflevering</h2>
      <iframe data-testid="embed-iframe" style="border-radius:12px" 
      src="https://open.spotify.com/embed/show/7HVRINnrOMwIpJrvJMojTx?utm_source=generator" 
      width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; 
      clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
      </iframe>
    `,
  },
  {
    slug: "Advanced engeneering expo 2026",
    date: "2026.05.07",
    title: "Advanced engeneering expo 2026, mijn ervaring",
    excerpt:
      "Een reflectie over mijn deelname aan de Advanced Engineering Expo 2026.",
    tag: "event",
    tagLabel: "event",
    content: `
      <p>Dankzij DPTehncis heb ik deel uitgemaakt van de Advanced Engineering Expo 2026. 
      Het was een geweldig evenement met veel interessante standen,presentaties en goede netwerkingen.
      hoewel het meer naar de elektronica en firmware kan uitging raad dit zeker aan, 
      voornamelijk als je een eigen product wilt maken die custom hardware nodig heeft.</p>
      <img src="/img/exp1.jpg" alt="foto van mijn stand op de expo" style="width:100%;border-radius:8px;margin-top:20px;" />
      <img src="/img/exp2.jpg" alt="foto van mijn stand op de expo" style="width:100%;border-radius:8px;margin-top:20px;" />
    `,
  },
  {
    slug: "how-this-site-was-built",
    date: "2025.12.26",
    title: "Hoe deze site werd gemaakt",
    excerpt:
      "De technologie, de keuzes en hoeveel moeite het kost om hier een nieuwe post toe te voegen.",
    tag: "",
    tagLabel: "meta",
    content: `
      <p>Deze blogpost is verplicht volgens het draaiboek. Hier is hoe deze portfolio gemaakt is.</p>

      <h2>De stack</h2>
      <p>Deze site is gebouwd met <code>React</code> en <code>Vite</code> als build tool.
      Geen CMS, geen WordPress — gewoon clean JSX en CSS.</p>

      <h3>Waarom React?</h3>
      <p>Omdat ik als software dev student React toch al moest leren, en zo combineer ik
      portfolio bouwen met skills opbouwen. Twee vliegen in één klap.</p>

      <h3>Waarom Vite?</h3>
      <p>Snel. Hot module reload binnen milliseconden en het build naar statische
      bestanden die ik gratis kan hosten op GitHub Pages.</p>

      <h2>Hosting</h2>
      <p>De site staat op GitHub Pages. Custom domein erop koppelen
      is een kwestie van wat DNS records aanpassen.</p>

      <h2>Een nieuwe post toevoegen</h2>
      <p>Ik open <code>src/data/posts.js</code>, voeg een nieuw object toe aan de array,
      en push naar GitHub. Binnen een paar minuten staat de nieuwe post live. Best efficiënt.</p>
    `,
  },
  {
    slug: "hack-the-future-2025",
    date: "2025.11.12",
    title: "Hack The Future — Antwerpen",
    excerpt: "Mijn eerste fysieke hackathon.",
    tag: "event",
    tagLabel: "event",
    content: `
      <p>Mijn eerste fysieke hackathon met het theme aqua topia. onze opdracht was involved. iedere groep kreeg een duikbootje om zich te verplaatsen naar de opdrachten die we moesten besturen via een api.
       we kregen puzzels die we moeten algoritmies via dotnet oplossen en ons resultaat doorsturen naar een api.het eten was goedvoorzien en het kort bezoek aan de zoo was plezant.</p>
      <img src="/img/ant.jpg" alt="foto op de hackathon" style="width:100%;border-radius:8px;margin-top:20px;" />
      <img src="/img/ant2.jpg" alt="foto van mijn stand op de expo" style="width:100%;border-radius:8px;margin-top:20px;" />
      <img src="/img/ant3.jpg" alt="foto van mijn stand op de expo" style="width:100%;border-radius:8px;margin-top:20px;" />
    `,
  },
  
  {
    slug: "DeepSeek Uncovered: The Open-Source AI Challenger from the East",
    date: "2025.12.16",
    title: "DeepSeek Uncovered: The Open-Source AI Challenger from the East",
    excerpt: "DeepSeek als open-source alternatief voor GPT-4 en Claude — mogelijkheden, beperkingen en de geopolitieke context erachter.",
    tag: "tech & meet",
    tagLabel: "tech & meet",
    content: `
      <p>In het snel evoluerende AI-landschap van 2025 is DeepSeek uitgegroeid tot een van
      de meest besproken open-source alternatieven voor GPT-4 en Claude. Ontwikkeld in China,
      biedt DeepSeek multimodale en code-gerichte modellen die toonaangevende proprietaire
      systemen evenaren in benchmarks — terwijl ze transparant en toegankelijk blijven.</p>

      <h2>Wat behandeld werd</h2>
      <p>Wat is DeepSeek en hoe verhoudt het zich tot de grote AI-modellen? We bekeken
      live demo’s van DeepSeek’s mogelijkheden in redeneren, codegeneratie en multimodaliteit,
      en bespraken toepassingen in business, onderwijs en onderzoek. Tot slot stonden we
      kritisch stil bij de ethiek, transparantie en geopolitieke implicaties van open-source AI.</p>

      <h2>Spreker</h2>
      <p><strong>Dimitri Casier</strong> — Lector Software Development and AI, Howest</p>

      <h2>Mijn takeaway</h2>
      <p>DeepSeek toont aan dat state-of-the-art AI niet langer exclusief in handen is van
      een handvol Amerikaanse techreuzen. De geopolitieke dimensie — een Chinees model dat
      westerse benchmarks haalt — maakt het gesprek rond open-source AI complexer en
      interessanter dan ooit.</p>
      <img src="/img/deepseek.jpg" alt="foto van mijn stand op de expo" style="width:100%;border-radius:8px;margin-top:20px;" />
      <img src="/img/deepseek2.jpg" alt="foto van mijn stand op de expo" style="width:100%;border-radius:8px;margin-top:20px;" />
      <img src="/img/deepseek3.jpg" alt="foto van mijn stand op de expo" style="width:100%;border-radius:8px;margin-top:20px;" />
      `,
  },
  {
    slug: "Protecting Belgium: Play a Role in Active Cyber Protection",
    date: "2025.12.16",
    title: "Protecting Belgium: Play a Role in Active Cyber Protection",
    excerpt:
      "Een overzicht van het Belgische cybersecurity landschap — van CCB tot CyberCommand — en de carrièrepaden die erbij horen.",
    tag: "tech & meet",
    tagLabel: "tech & meet",
    content: `
      <p>De wereld wordt gevaarlijker en cybercriminaliteit stijgt snel, mede dankzij AI.
      Gelukkig groeit ook de Belgische cybersecurity-sector: nieuwe initiatieven, nieuwe
      organisaties en dus nieuwe jobmogelijkheden. Tijdens deze Tech&amp;Meet kregen we een
      helder overzicht van de belangrijkste spelers in het Belgische cyberveiligheidslandschap.</p>

      <h2>Het Belgische cybersecurity ecosysteem</h2>
      <p>Acroniemen als CCB, CDF, CERT, FCCU, NCCN, SGRS en VSSE — ze vlogen door de zaal.
      Na deze avond had elk afkorting een gezicht en een missie. De rode draad: cybersecurity
      is niet alleen voor "hackers". België heeft ook analisten, beleidsspecialisten,
      developers, forensic experts, threat hunters en nog veel meer nodig.</p>

      <h2>Programma</h2>
      <p><strong>Het cybersecurity landschap in België</strong> — Wie zijn de belangrijkste
      spelers en wat zijn hun rollen?</p>
      <p><strong>Centre for Cybersecurity Belgium (CCB) &amp; Cyber Force</strong> — Hun rol
      in de bescherming van België, gevraagde skills en carrièrepaden.</p>
      <p><strong>EgovSelect</strong> — Rekruteringspartner voor CCB en CyberCommand: hoe het
      wervingsproces werkt en hoe je solliciteert.</p>
      <p><strong>Q&amp;A</strong> — Direct in gesprek met experts, recruiters en mensen die
      al in het veld werken.</p>

      <h2>Sprekers</h2>
      <p><strong>Tom Hermant</strong> — IT Recruiter bij EgovSelect<br>
      <strong>Sandro Manzo</strong> — Lead Fusion Centre, Centre for CyberSecurity Belgium / CyTRIS<br>
      <strong>Lt Kol Timmie Bonneu</strong> — Cyber Security Specialist, Belgian Cyber Force / CyberCommand</p>

      <h2>Mijn takeaway</h2>
      <p>Wat me vooral bijbleef: de omvang van wat "cybersecurity" eigenlijk inhoudt.
      Het gaat ver voorbij pentesting en ethical hacking — er is ruimte voor bijna elk
      IT-profiel. En het besef dat deze organisaties actief op zoek zijn naar jonge
      profielen maakt de drempel een stuk lager dan verwacht.</p>
      <img src="/img/cb1.jpg" alt="foto van mijn stand op de expo" style="width:100%;border-radius:8px;margin-top:20px;" />
      <img src="/img/cb2.jpg" alt="foto van mijn stand op de expo" style="width:100%;border-radius:8px;margin-top:20px;" />
    `,
  },
  {
    slug: "Transitioning to IPv6",
    date: "2025.11.25",
    title: "Transitioning to IPv6 — Dual Stack in de praktijk",
    excerpt: "Waarom de overstap naar IPv6 niet langer uitgesteld kan worden, en hoe je vandaag al dual stack implementeert.",
    tag: "tech & meet",
    tagLabel: "tech & meet",
    content: `
      <p>De transitie naar IPv6 is onvermijdelijk. Tijdens deze gespecialiseerde avond
      verkenden we de essentie van IPv6-adoptie: de kansen, uitdagingen en concrete stappen
      om vandaag al te starten met de overgang naar IPv6 en dual stack. Praktische kennis
      met een sterke focus op security by design.</p>

      <h2>Programma</h2>
      <p><strong>Introductie: Waarom IPv6?</strong> — Voordelen, beperkingen en waarom de
      transitie niet langer uitgesteld kan worden. ISPs en grote organisaties zijn al volop
      bezig; nu beginnen ook KMO's aan deze reis.</p>

      <p><strong>Transitie naar IPv6-only</strong> — Strategieën, risico's en toekomstscenario's
      wanneer IPv4 niet langer ondersteund wordt.</p>

      <p><strong>Dual Stack in de praktijk</strong> — IPv6 deployen in je infrastructuur vandaag:
      concrete configuraties, routing, firewalls en security-overwegingen.</p>

      <h2>Spreker</h2>
      <p><strong>Nico Declerck</strong> — Netwerkbeheerder, Linux sysadmin en lector Bachelor
      Toegepaste Informatica &amp; Bachelor CyberSecurity aan Howest. Cisco Networking Instructor
      en Instructor Trainer, onderzoeker binnen Cluster IT en adviseur voor BiASC.</p>

      <h2>Mijn takeaway</h2>
      <p>IPv6 voelt nog ver weg totdat je ziet hoe ver de uitrol al gevorderd is bij ISPs.
      De dual stack aanpak — waarbij IPv4 en IPv6 naast elkaar draaien — is de meest
      pragmatische weg voorwaarts. Security by design van bij de start is geen optie maar
      een vereiste: IPv6 brengt nieuwe aanvalsoppervlakken mee die je niet zomaar kunt
      kopiëren vanuit IPv4-kennis.</p>
      <img src="/img/ipv6.jpg" alt="foto van mijn stand op de expo" style="width:100%;border-radius:8px;margin-top:20px;" />
      <img src="/img/ipv6_2.jpg" alt="foto van mijn stand op de expo" style="width:100%;border-radius:8px;margin-top:20px;" />
    `,
  },
  {
    slug: "Cross-Platform App Development with Flutter",
    date: "2025.11.5",
    title: "Cross-Platform App Development with Flutter",
    excerpt: "Een reflectie over cross-platform app development met Flutter.",
    tag: "tech & meet",
    tagLabel: "tech & meet",
    content: `
      <p>Apps bouwen die vlot draaien op elk toestel vereist niet langer meerdere codebases.
      Tijdens deze hands-on avond meetup toonde expert <strong>Thijs Pirmez</strong> de kracht
      en mogelijkheden van een van de toonaangevende cross-platform frameworks van vandaag.</p>

      <h2>Wat behandeld werd</h2>
      <p>We ontdekten hoe Flutter omgaat met UI, performantie, integratie en deployment.
      Met de sterktes en zwaktes, typische use cases, en wat er nodig is aan skills en effort
      om cross-platform applicaties te bouwen met Flutter.</p>

      <h2>Programma</h2>
      <p><strong>19u00–19u15</strong> — Introductie tot Cross-Platform App Development<br>
      <strong>19u15–20u15</strong> — Het Flutter Framework (Thijs Pirmez, Howest Cyber3Lab)<br>
      <strong>20u15–20u30</strong> — Q&amp;A gevolgd door netwerken</p>

      <h3>Flutter topics</h3>
      <p>Mooie, high-performance UI’s bouwen met Flutter’s widget systeem · Hot reload en
      snelle iteratie · Integratie met native code en plugins · Case studies die Flutter’s
      ecosysteem en tooling in de praktijk tonen.</p>

      <h2>Speaker</h2>
      <p><strong>Thijs Pirmez</strong> is Android- en iOS-ontwikkelaar en AI-onderzoeker.
      Hij begon als zelfgeleerde coder en werkt hoofdzakelijk met het Flutter Framework,
      maar heeft ook ervaring met native Android development en front-end webdevelopment.</p>

      <h2>Mijn takeaway</h2>
      <p>"Build once, deploy everywhere" klinkt mooi, maar Flutter maakt het ook echt waar.
      De widget-aanpak en hot reload maken het een aangenaam framework om mee te werken —
      ook als je gewend bent aan native development.</p>
      <img src="/img/flut1.jpg" alt="foto van mijn stand op de expo" style="width:100%;border-radius:8px;margin-top:20px;" />
      <img src="/img/flut2.jpg" alt="foto van mijn stand op de expo" style="width:100%;border-radius:8px;margin-top:20px;" />
    `,
  },
    {
    slug: "Open Minds, Open Models: Exploring the Open-Source AI Ecosystem",
    date: "2025.10.28",
    title: "Open Minds, Open Models: Exploring the Open-Source AI Ecosystem",
    excerpt: "Een reflectie over de open-source AI ecosystem.",
    tag: "tech & meet",
    tagLabel: "tech & meet",
    content: `
      <p>Artificiële intelligentie evolueert razendsnel — en niet alle innovatie zit achter
      gesloten deuren. Tijdens deze Tech&amp;Meet doken we in de wereld van open-source AI en
      onderzochten we hoe die de toekomst van technologie vormgeeft. We ontdekten de
      verschillen tussen open- en closed-source AI, hun voor- en nadelen, en hoe organisaties
      van beide kunnen profiteren.</p>

      <h2>Hugging Face ecosysteem</h2>
      <p>We namen een diepere kijk op het Hugging Face ecosysteem, een van de meest levendige
      hubs voor open-source AI. Concreet werd getoond hoe je zelf aan de slag kan met tools,
      modellen en datasets om je eigen AI-projecten op te starten.</p>

      <h2>Speaker</h2>
      <p><strong>Niels Rogge</strong> — ML6 &amp; Hugging Face</p>
      <p>Niels werkt als senior machine learning engineer bij ML6, een Belgisch AI-consultingbedrijf
      dat generatieve AI-toepassingen implementeert voor grote bedrijven in de Benelux, Duitsland
      en daarbuiten. Daarnaast werkt hij deeltijds bij Hugging Face, waar hij deel uitmaakt van
      het open-source team om AI toegankelijker te maken.</p>

      <h2>Mijn takeaway</h2>
      <p>Open-source AI is geen tweede keuze meer. Modellen op Hugging Face halen het niveau
      van commerciële alternatieven, en de mogelijkheid om alles lokaal te draaien of zelf
      te finetunen geeft een vrijheid die closed-source simpelweg niet biedt.</p>
      <img src="/img/ml1.jpg" alt="foto van mijn stand op de expo" style="width:100%;border-radius:8px;margin-top:20px;" />
      <img src="/img/ml2.jpg" alt="foto van mijn stand op de expo" style="width:100%;border-radius:8px;margin-top:20px;" />
    `,
  },
];
