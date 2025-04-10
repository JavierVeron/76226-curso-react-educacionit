import { useState } from 'react'
import CiclosDeVida from './Clase2/CiclosDeVida'
import Eventos from './Clase2/Eventos'
import Props from './Clase2/Props'
import Renderizacion from './Clase2/Renderizacion'
import States from './Clase2/States'

function App() {
  const [visible, setVisible] = useState(true);

  const desmontar = () => {
    setVisible(false);
  }

  return (
    <>
      {/* <Renderizacion /> */}
      {/* <Props academia={"Educación IT"} curso={"Curso de React JS..."} cursos={["dw", "js", "react"]} text={"Mastermind de ¿Cómo ser Millonario?"} /> */}
      {/* <States /> */}
      {/* <Eventos /> */}
      {visible ? <CiclosDeVida /> : ""}
      <p><button className="btn btn-primary" onClick={desmontar}>Desmontar</button></p>
    </>
  )
}

export default App
