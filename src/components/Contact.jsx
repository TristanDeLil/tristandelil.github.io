const contactLinks = [
  { label: 'EMAIL', value: 'tristan.de.lil@student.howest.be', href: 'mailto:tristan.de.lil@student.howest.be' },
  { label: 'LINKEDIN', value: '/in/tristan-de-lil', href: 'https://www.linkedin.com/in/tristan-de-lil-a19738231/' },
  { label: 'GITHUB', value: '@tristandelil', href: 'https://github.com/tristandelil' },
]

const hexLines = [
  { addr: '00000000', hex: '48 65 6c 6c 6f 20 66 72 6f 6d 20 42 72 75 67 65', ascii: 'Hello from Bruge' },
  { addr: '00000010', hex: '73 21 20 54 68 61 6e 6b 73 20 66 6f 72 20 73 63', ascii: 's! Thanks for sc' },
  { addr: '00000020', hex: '72 6f 6c 6c 69 6e 67 20 74 6f 20 74 68 65 20 65', ascii: 'rolling to the e' },
  { addr: '00000030', hex: '6e 64 2e 20 4c 65 74 27 73 20 74 61 6c 6b 2e 00', ascii: "nd. Let's talk.\xb7" },
]

const gitLog = [
  { hash: 'a3f91c2', ref: 'HEAD → main', msg: 'feat: finish e-portfolio & deploy to GitHub Pages' },
  { hash: 'b82e014', ref: null,          msg: 'feat: add internship stage @ TE Connectivity + DPTechnics' },
  { hash: '4d1cc87', ref: null,          msg: 'fix: uart buffer overflow on ESP32 sensor node' },
  { hash: '9e2aa31', ref: null,          msg: 'feat: MQTT broker integration for home automation' },
  { hash: '1c3f509', ref: null,          msg: 'chore: init — first commit, first blink' },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-label">0x04 / contact</div>
      <div className="contact">
        <div className="contact-content">
          <h2>Let's <span className="italic">build</span> something.</h2>
          <p>
            Open voor opportuniteiten in embedded, IoT, of full-stack development.
            Goeie gesprekken over solder fumes, clean code of formule 1 zijn altijd welkom.
          </p>
          <div className="contact-links">
            {contactLinks.map(link => (
              <a href={link.href} className="contact-link" key={link.label}>
                <div className="label">{link.label} <span className="arrow">↗</span></div>
                <div className="value">{link.value}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-footer-panels">
        <div className="hex-dump">
          <div className="hex-dump-title">// memory dump · 0x00000000</div>
          {hexLines.map(line => (
            <div key={line.addr}>
              <span className="addr">{line.addr}</span> &nbsp;
              <span className="hex">{line.hex}</span> &nbsp;
              <span className="ascii">{line.ascii}</span>
            </div>
          ))}
        </div>

        <div className="git-log">
          <div className="git-log-title">// git log --oneline</div>
          {gitLog.map(entry => (
            <div className="git-log-entry" key={entry.hash}>
              <span className="git-hash">{entry.hash}</span>
              {entry.ref && <span className="git-ref">{entry.ref}</span>}
              <span className="git-msg">{entry.msg}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
