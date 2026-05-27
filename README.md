# TristanDeLil.github.io — E-Portfolio

Persoonlijk e-portfolio voor het vak Professional Networking (Howest TI, 3e jaar).
Gebouwd met React + Vite, puur eigen CSS, geen design framework.

Live: [tristandelil.github.io](https://tristandelil.github.io)

---

## Quick start

```bash
npm install
npm run dev        # -> http://localhost:5173
```

---

## Project structuur

```
src/
├── components/
│   ├── StatusBar.jsx     # bovenbalk met uptime + LEDs
│   ├── Nav.jsx           # navigatie
│   ├── Hero.jsx          # hero met oscilloscoop + terminal widget
│   ├── About.jsx         # over mij + tech stack
│   ├── Internship.jsx    # stage ervaringen
│   ├── Projects.jsx      # projecten grid
│   ├── Blog.jsx          # post lijst
│   ├── Contact.jsx       # contact + git log + hex dump
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx          # homepage (alle secties)
│   └── BlogPost.jsx      # individuele post pagina
├── data/                 # content hier aanpassen
│   ├── posts.js          # blog posts / event reflecties
│   └── projects.js       # projecten
├── styles/
│   └── globals.css
├── App.jsx
└── main.jsx

public/
├── img/                  # afbeeldingen voor posts
├── 404.html              # SPA routing fix voor GitHub Pages
└── .nojekyll             # skip Jekyll build

docs/                     # gebouwde site (gecommit naar main)
scripts/
└── export-pdf.mjs        # PDF export script
```

---

## Content toevoegen

### Nieuwe blog post

Open `src/data/posts.js` en voeg toe aan het begin van de array:

```javascript
{
  slug: 'mijn-event',              // URL wordt /post/mijn-event
  date: '2026.05.27',
  title: 'Titel van het event',
  excerpt: 'Korte samenvatting voor de lijst.',
  tag: 'event',                    // 'event' | 'podcast' | 'hw' | 'tech & meet' | ''
  tagLabel: 'hackathon',
  content: `
    <p>HTML inhoud hier.</p>
    <img src="/img/foto.jpg" alt="beschrijving"
         style="width:100%;border-radius:8px;margin-top:20px;" />
  `,
}
```

> Let op: gebruik `style="..."` (HTML string), niet `style={{ }}` (JSX) in de content.

### Afbeeldingen in posts

Zet foto's in `public/img/` en gebruik ze als:
```html
<img src="/img/bestandsnaam.jpg" alt="..." style="width:100%;" />
```

### Nieuw project

Open `src/data/projects.js`:

```javascript
{
  id: 'IC_009',
  title: 'project_naam',
  status: 'shipped',               // 'shipped' | 'wip' | 'archived'
  description: 'Wat het doet.',
  tags: ['React', 'TypeScript'],
  link: 'https://github.com/TristanDeLil/...',
  linkText: 'github repo',
}
```

### Stage toevoegen

Open `src/components/Internship.jsx` en bewerk het `internships` array bovenaan het bestand.

---

## Deploy naar GitHub Pages

De gebouwde site staat in de `docs/` map die gecommit is op `main`.
GitHub Pages serveert automatisch vanuit `main` -> `/docs`.

### Na elke wijziging:

```bash
npm run build          # bouwt naar docs/
git add docs/
git commit -m "update portfolio"
git push
```

### Settings op GitHub (eenmalig):

Settings -> Pages -> Source: `Deploy from a branch` -> Branch: `main` -> Folder: `/docs`

---

## PDF backup exporteren

Exporteert alle pagina's (home + elke blog post) als één samengevoegd PDF-bestand.
Output wordt opgeslagen als `portfolio-backup.pdf` in de root van het project.

```bash
# Terminal 1 — start preview server
npm run build && npm run preview

# Terminal 2 — genereer PDF
npm run export-pdf
```

Of rechtstreeks tegen de live site:

```bash
BASE_URL=https://tristandelil.github.io npm run export-pdf
```

---

## Design aanpassen

Kleuren in `src/styles/globals.css`:

```css
:root {
  --bg:           #06090d;   /* hoofdachtergrond */
  --accent:       #00ff88;   /* groen (LED, highlights) */
  --accent-amber: #ffb000;   /* amber (power LED) */
  --accent-blue:  #4cc9f0;   /* blauw (signaal) */
  --accent-red:   #ff3344;   /* rood (error LED) */
}
```

---

## Tech stack

| | |
|---|---|
| Framework | React 18 + Vite |
| Routing | React Router v6 |
| Styling | Vanilla CSS (geen framework) |
| Hosting | GitHub Pages (gratis) |
| Fonts | JetBrains Mono + Fraunces (Google Fonts) |
| Deploy | `docs/` folder op `main` branch |
