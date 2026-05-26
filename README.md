# Portfolio — React + Vite

Mijn persoonlijke portfolio website voor Professional Networking (Howest TI).
Gebouwd met React, Vite en zonder design framework (puur eigen CSS).

## Quick start

### 1. Installeer Node.js
Download van [nodejs.org](https://nodejs.org/) (LTS versie, 20.x of hoger).
Check of het werkt:
```bash
node --version
npm --version
```

### 2. Clone en install
```bash
git clone https://github.com/JOUW-USERNAME/JOUW-USERNAME.github.io.git
cd JOUW-USERNAME.github.io
npm install
```

### 3. Run lokaal
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### 4. Build voor productie
```bash
npm run build
```
De output staat in `dist/`.

## Project structuur

```
src/
├── components/       # Reusable UI components
│   ├── StatusBar.jsx
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx      # Homepage
│   └── BlogPost.jsx  # Individual blog post page
├── data/             # ← Hier voeg je content toe!
│   ├── projects.js
│   └── posts.js
├── styles/
│   └── globals.css
├── App.jsx
└── main.jsx
```

## Content toevoegen

### Nieuwe blog post (event reflectie, podcast, etc.)
Open `src/data/posts.js` en voeg een object toe aan het begin van de array:

```javascript
{
  slug: 'mijn-nieuwe-post',           // wordt /post/mijn-nieuwe-post
  date: '2026.05.26',
  title: 'Titel van de post',
  excerpt: 'Korte samenvatting voor de homepage.',
  tag: 'event',                       // 'event' | 'podcast' | 'hw' | ''
  tagLabel: 'hackathon',
  content: `
    <p>HTML inhoud van de post hier.</p>
    <h2>Een subtitel</h2>
    <p>Meer tekst...</p>
  `,
}
```

### Nieuw project
Open `src/data/projects.js`:

```javascript
{
  id: 'IC_007',
  title: 'mijn_project',
  status: 'shipped',                  // 'shipped' | 'wip' | 'archived'
  description: 'Beschrijving...',
  tags: ['React', 'TypeScript'],
  link: 'https://github.com/...',
  linkText: 'view repo',
}
```

## Deploy naar GitHub Pages

### Eerste keer:

1. Maak repository op GitHub met naam **`JOUW-USERNAME.github.io`**
2. Push deze code naar de repo:
```bash
git init
git add .
git commit -m "initial portfolio"
git branch -M main
git remote add origin https://github.com/JOUW-USERNAME/JOUW-USERNAME.github.io.git
git push -u origin main
```

3. Deploy:
```bash
npm run deploy
```

Dit publiceert naar de `gh-pages` branch automatisch.

4. Op GitHub: **Settings → Pages → Source: `gh-pages` branch**
5. Wacht 1-2 min → bereikbaar op `https://JOUW-USERNAME.github.io`

### Updates pushen:

```bash
git add .
git commit -m "added new event post"
git push
npm run deploy
```

## Tweaken design

Alle kleuren en variabelen staan boven in `src/styles/globals.css`:

```css
:root {
  --bg: #06090d;          /* hoofdachtergrond */
  --accent: #00ff88;      /* LED green */
  --accent-amber: #ffb000; /* power LED */
  --accent-blue: #4cc9f0;  /* signaal */
  ...
}
```

## Voor de "Hoe is deze site gemaakt?" blogpost

Tech stack: React 18, Vite, React Router, vanilla CSS (geen framework).
Hosting: GitHub Pages (gratis, statisch). Custom domein optioneel via Combell DNS.
Deploy workflow: `npm run deploy` build en pusht naar `gh-pages` branch.
Nieuwe content toevoegen kost ~30 seconden: edit `posts.js`, commit, push.

---