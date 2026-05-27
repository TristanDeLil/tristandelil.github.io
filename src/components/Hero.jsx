import { useEffect, useRef } from 'react'

export default function Hero() {
  const scopeRef = useRef(null)

  useEffect(() => {
    const handleMove = (e) => {
      if (!scopeRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 8
      const y = (e.clientY / window.innerHeight - 0.5) * 8
      scopeRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    document.addEventListener('mousemove', handleMove)
    return () => document.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <span className="glow">Bits</span>, <span className="italic">bytes</span><br />
          & soldering<br />
          <span className="glow">irons</span>.<span className="cursor"></span>
        </h1>
        <p className="hero-subtitle">
          <span className="key">role</span>: <span className="str">"embedded & software dev"</span><br />
          <span className="key">stack</span>: <span className="str">["C", "C++","C#", "Python","TS", "JS"]</span><br />
          <span className="key">freq</span>: <span className="num">16_000_000</span> Hz · <span className="key">vcc</span>: <span className="num">3.3</span>V<br />
          <span className="key">location</span>: <span className="str">"Bruges, BE"</span>
        </p>
        <div className="hero-meta">
          <div>STATUS<span>0x0001</span></div>
          <div>FOCUS<span>Embedded + full-stack</span></div>
          {/* <div>OPEN_TO<span>JOB</span></div> */}
        </div>
      </div>

      <div className="scope" ref={scopeRef}>
        <div className="scope-header">
          <span>● REC · CH1 + CH2</span>
          <span>TRIG: AUTO</span>
        </div>
        <div className="scope-screen">
          <div className="scope-readout">
            CH1: 3.3V<br />
            T/DIV: 1µs<br />
            V/DIV: 1.0V
          </div>
          <div className="scope-readout-right">
            freq: 16MHz<br />
            duty: 50%<br />
            rms: 1.65V
          </div>
          <svg viewBox="0 0 500 300" preserveAspectRatio="none">
            <path className="wave" d="M 0,200 L 30,200 L 30,100 L 80,100 L 80,200 L 130,200 L 130,100 L 180,100 L 180,200 L 230,200 L 230,100 L 280,100 L 280,200 L 330,200 L 330,100 L 380,100 L 380,200 L 430,200 L 430,100 L 480,100 L 480,200 L 500,200" />
            <path className="wave wave-2" d="M 0,180 Q 25,120 50,180 T 100,180 T 150,180 T 200,180 T 250,180 T 300,180 T 350,180 T 400,180 T 450,180 T 500,180" />
          </svg>
        </div>
        <div className="scope-controls">
          <div className="scope-knob"></div>
          <div className="scope-knob"></div>
          <div className="scope-knob"></div>
          <div className="scope-knob"></div>
        </div>
      </div>
    </section>
  )
}
