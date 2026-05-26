import { useState, useEffect } from 'react'

export default function StatusBar() {
  const [uptime, setUptime] = useState('00:00:00')

  useEffect(() => {
    const startTime = Date.now()
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000)
      const h = String(Math.floor(elapsed / 3600) % 24).padStart(2, '0')
      const m = String(Math.floor(elapsed / 60) % 60).padStart(2, '0')
      const s = String(elapsed % 60).padStart(2, '0')
      setUptime(`${h}:${m}:${s}`)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="statusbar">
      <span>SYS_v1.0.0 · uptime: 184d {uptime}</span>
      <div className="leds">
        <span className="led pwr">PWR</span>
        <span className="led tx">TX</span>
        <span className="led rx">RX</span>
        <span className="led err">ERR</span>
      </div>
    </div>
  )
}
