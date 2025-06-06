import { useState } from 'react'

const verbs = ['ser', 'tener', 'hablar', 'vivir']
const tenses = ['Presente', 'Pretérito', 'Futuro']

export default function App() {
  const [verb, setVerb] = useState('')
  const [tense, setTense] = useState('')
  const [includeVosotros, setIncludeVosotros] = useState(true)
  const [regular, setRegular] = useState(true)
  const [irregular, setIrregular] = useState(true)

  const startExercise = () => {
    alert(`Oefening starten met: ${verb} in ${tense}`)
  }

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h1 style={{ textAlign: 'center' }}>Werkwoorden Trainer</h1>

      <div>
        <label>Werkwoord:</label>
        <select value={verb} onChange={e => setVerb(e.target.value)} style={{ width: '100%' }}>
          <option value="">Kies een werkwoord</option>
          {verbs.map(v => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Tijd:</label>
        <select value={tense} onChange={e => setTense(e.target.value)} style={{ width: '100%' }}>
          <option value="">Kies een tijd</option>
          {tenses.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div style={{ marginTop: 10 }}>
        <label><input type="checkbox" checked={regular} onChange={() => setRegular(!regular)} /> Regelmatig</label>
        <br />
        <label><input type="checkbox" checked={irregular} onChange={() => setIrregular(!irregular)} /> Onregelmatig</label>
      </div>

      <div style={{ marginTop: 10 }}>
        <label><input type="checkbox" checked={includeVosotros} onChange={() => setIncludeVosotros(!includeVosotros)} /> Vosotros incl.</label>
      </div>

      <button onClick={startExercise} style={{ marginTop: 20, width: '100%' }}>
        Start Oefening
      </button>
    </div>
  )
}
