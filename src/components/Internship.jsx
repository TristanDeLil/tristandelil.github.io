const internships = [
  {
    id: 'ST_001',
    company: 'TE Connectivity Oostkamp',
    role: 'Software / Netwerk Developer',
    period: 'feb 2023 — juni 2023',
    location: 'Oostkamp, BE',
    project: {
      title: 'gecentraliseerde machine connectiviteit',
      description:
        'Het ontwikkelen van meerdere proof of concepts die verschillende soorten machines kan verbinden met AWS cloud.',
      tags: ['Python', 'AWS', 'JAVA','AWS cloud', 'REST API','KepWare'],
    },
    learnings: [
      'networking, het correct opzetten van VLANs',
      'Euromap 63, OPC UA en MQTT protocollen voor machine connectiviteit',
    ],
  },
  {
    id: 'ST_002',
    company: 'DPTechnics',
    role: 'Software / Embedded Developer',
    period: 'feb 2026 — mei 2026',
    location: 'Knokke-Heist, BE',
    project: {
      title: 'Otter tracker/rmg sensor platform/Walter photoframe',
      description:
        'walterphotoframe: POC met Walter om de LTE-M/NB-IoT connectiviteit te testen. rmg sensors: meerdere soorten sensoren uitlezen met verschillende protocollen modbus,i2c,SPI,...enz .ottertracker: via gnss, locatie tracken met nadruk op battery saving en energy harvesting.',
        tags: ['C','C++','Golang','Angular','React/Preact', 'Docker', 'REST API','MQTT'],
    },
    learnings: [
      'coderen in ESP-IDF framework voor ESP32, inclusief Wi-Fi, Bluetooth en low-power features.',
      'Bluecherry cloud platform, inclusief device management, data logging en custom dashboards.',
      'custom partitions,energy management en power haversting.',
    ],
  },
]

export default function Internship() {
  return (
    <section id="internship">
      <div className="section-label">0x05 / stage</div>
      <h2>Internship <span className="italic">experience</span>.</h2>
      <div className="internship-grid" style={{ marginTop: 40 }}>
        {internships.map(s => (
          <article className="internship-card" key={s.id}>
            <div className="internship-card-header">
              <div>
                <div className="internship-id">// {s.id}</div>
                <h3 className="internship-company">{s.company}</h3>
                <div className="internship-meta">
                  <span>{s.role}</span>
                  <span className="sep">·</span>
                  <span>{s.period}</span>
                  <span className="sep">·</span>
                  <span>{s.location}</span>
                </div>
              </div>
            </div>

            <div className="internship-project">
              <div className="internship-project-label">PROJECT</div>
              <div className="internship-project-title">{s.project.title}</div>
              <p>{s.project.description}</p>
              <div className="project-tags" style={{ marginBottom: 0, marginTop: 12 }}>
                {s.project.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>

            <div className="internship-learnings">
              <div className="internship-project-label">LEERERVARINGEN</div>
              <ul>
                {s.learnings.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
