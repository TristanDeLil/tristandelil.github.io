const softwareStack = ['C', 'C++','Python', 'JavaScript', 'TypeScript', 'FreeRTOS', 'MQTT', 'React', 'Node.js', 'Docker', 'Git']
const hardwareStack = ['STM32', 'ESP32', 'Arduino', 'Raspberry Pi', 'KiCad', 'JouleScope']

const specs = [
  { k: 'model', v: 'Tristan De Lil' },
  { k: 'year', v: '3rd / final' },
  { k: 'campus', v: 'Howest Brugge' },
  { k: 'specialty', v: 'SW + embedded' },
  { k: 'i/o', v: 'UART, I²C, SPI, HTTP' },
]

export default function About() {
  return (
    <section id="about">
      <div className="section-label">0x01 / about</div>
      <div className="about-grid">
        <div className="about-photo">
          <div className="pad-2"></div>
          <div className="pad-3"></div>
          <div className="label"><img src="/img/mypic.jpg" alt="Tristan De Lil" /></div>
        </div>
        <div className="about-text">
          <h2>Hey, ik ben <span className="italic">Tristan</span>.</h2>
          <p>
            Derdejaarsstudent <strong>Toegepaste Informatica</strong> aan Howest Brugge 
            En afgestudeerd aan Vives Brugge met Prof Bachelor Elektronica-ICT
            Mijn interesse ligt op de grens tussen <strong>hardware en software</strong> —
            van blinkende LEDs tot complete IoT-systemen die met cloud APIs praten.
          </p>
          <p>
            Ik hou van het moment waarop een microcontroller voor het eerst je code uitvoert,
            van een mooi gerouteerde PCB, en van firmware die elegant blijft binnen 32KB flash.
            Op de software-kant: webapps, dashboards en alles wat zo'n embedded device tot
            leven brengt.
          </p>
          <p>

          </p>

          <div className="specs">
            <div className="specs-title">— TECHNICAL SPECIFICATIONS —</div>
            <div className="specs-grid">
              {specs.map(s => (
                <div className="spec-row" key={s.k}>
                  <span className="k">{s.k}</span>
                  <span className="v">{s.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="stack">
            {softwareStack.map(s => <span key={s} className="sw">{s}</span>)}
            {hardwareStack.map(s => <span key={s} className="hw">{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
