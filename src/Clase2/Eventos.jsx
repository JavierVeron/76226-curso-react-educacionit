import { useState } from "react"

const Eventos = () => {
    const [counter, setCounter] = useState(1);
    const [texto, setTexto] = useState("");
    const [pais, setPais] = useState("");

    const aumentar = () => {
        setCounter(counter + 1);
    }

    const paisSeleccionado = (event) => {
        setPais(event.target.value);
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Eventos</h1>
                    <p>Contador: {counter}</p>
                    <p><button className="btn btn-primary" onClick={aumentar}>Aumentar</button></p>
                    <p><input type="text" className="form-control" value={texto} onInput={(e) => setTexto(e.target.value)} /></p>
                    <p>{texto}</p>
                    <select className="form-select" onChange={paisSeleccionado}>
                        <option value="">Seleccione País</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Chile">Chile</option>
                        <option value="Paraguay">Paraguay</option>
                    </select>
                    <p>País seleccionado: <b>{pais}</b></p>
                </div>
            </div>
        </div>
    )
}

export default Eventos