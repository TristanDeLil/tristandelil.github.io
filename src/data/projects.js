// Voeg/wijzig projecten hier. Status: 'shipped' | 'wip' | 'archived'
export const projects = [
  {
    id: 'IC_001',
    title: 'Walter photoframe',
    status: 'shipped',
    description: 'ESP32-based sensor netwerk dat temperatuur, luchtvochtigheid en CO₂ logt naar een eigen MQTT broker. Dashboard in React, deep-sleep voor 6 maanden battery life.',
    tags: ['ESP32', 'C++', 'MQTT', 'React'],
    link: '#',
    linkText: 'view case study',
  },
  {
    id: 'IC_002',
    title: 'rmg sensors',
    status: 'tested',
    description: 'Zelf-ontworpen PCB met STM32 als hart. Synth-engine in C, MIDI over USB, audio output via I²S DAC. Volledig schema en gerber files op GitHub.',
    tags: ['STM32', 'C', 'KiCad', 'I²S'],
    link: '#',
    linkText: 'github repo',
  },
  {
    id: 'IC_003',
    title: 'Otter tracker',
    status: 'wip',
    description: 'Raspberry Pi-based hub die mijn IoT devices, Zigbee sensoren en Home Assistant aan elkaar koppelt. Custom web UI bovenop, alles in Docker.',
    tags: ['RPi', 'Python', 'Zigbee', 'Docker'],
    link: '#',
    linkText: 'follow progress',
  },
]
