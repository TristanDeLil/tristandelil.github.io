/**
 * export-pdf.mjs
 * Renders every page of the portfolio (home + alle blog posts)
 * en voegt ze samen tot één PDF: portfolio-backup.pdf
 *
 * Gebruik:
 *   1. Start de preview server in een andere terminal:  npm run preview
 *   2. Run dit script:                                  npm run export-pdf
 *
 * Of tegen de live site:
 *   BASE_URL=https://tristandelil.github.io npm run export-pdf
 */

import puppeteer from 'puppeteer'
import { PDFDocument } from 'pdf-lib'
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BASE = process.env.BASE_URL ?? 'http://localhost:4173'

// Haal alle slugs op uit posts.js via regex
const postsFile = readFileSync(join(__dirname, '../src/data/posts.js'), 'utf-8')
const slugs = [...postsFile.matchAll(/slug:\s*["'`]([^"'`\n]+)["'`]/g)].map(m => m[1])

const pages = [
  { label: 'home', url: BASE },
  ...slugs.map(slug => ({
    label: `post: ${slug}`,
    url: `${BASE}/post/${encodeURIComponent(slug)}`,
  })),
]

async function renderPage(browser, url) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 900 })
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
  // Wacht tot animaties klaar zijn
  await new Promise(r => setTimeout(r, 1200))
  const pdf = await page.pdf({
    format: 'A4',
    printBackground: true,
    margin: { top: '15mm', bottom: '15mm', left: '12mm', right: '12mm' },
  })
  await page.close()
  return pdf
}

async function main() {
  console.log(`\n🚀 Portfolio PDF export → ${BASE}\n`)

  const browser = await puppeteer.launch({ headless: 'new' })
  const buffers = []

  for (const { label, url } of pages) {
    process.stdout.write(`  📄 ${label.padEnd(52)}`)
    try {
      const buf = await renderPage(browser, url)
      buffers.push(buf)
      console.log('✓')
    } catch (err) {
      console.log(`✗  (${err.message})`)
    }
  }

  await browser.close()

  // Samenvoegen
  console.log('\n🔗 Merging pages...')
  const merged = await PDFDocument.create()
  for (const buf of buffers) {
    const doc = await PDFDocument.load(buf)
    const copied = await merged.copyPages(doc, doc.getPageIndices())
    copied.forEach(p => merged.addPage(p))
  }

  const outPath = join(__dirname, '../portfolio-backup.pdf')
  writeFileSync(outPath, await merged.save())
  console.log(`\n✅ Klaar: portfolio-backup.pdf (${buffers.length} pagina's)\n`)
}

main().catch(err => { console.error(err); process.exit(1) })
