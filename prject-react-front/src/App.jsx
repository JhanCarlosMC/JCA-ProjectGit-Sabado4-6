import './App.css'

function App() {
  const nombre = "Jhan Carlos Martinez"
  const profesion = "Ingeniero de Sistemas"
  const edad = 24
  const ciudad = "Armenia Quindio"
  const habilidades = ["React", "JavaScript", "CSS"]
  const disponible = true

  return (
    <div>
      <h1>Perfil Profesional</h1>
      <h2>{nombre}</h2>
      <p><strong>Profesión:</strong> {profesion}</p>
      <p><strong>Edad:</strong> {edad} años</p>
      <p><strong>Ciudad:</strong> {ciudad}</p>
      <p><strong>Estado:</strong> {disponible ? 'Disponible' : 'No disponible'}</p>

      <h3>Habilidades:</h3>
      <p>{habilidades.join(', ')}</p>
    </div>
  )
}

export default App