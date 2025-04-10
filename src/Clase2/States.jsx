import { useState } from "react";

const States = () => {
    //let texto = "Curso de JavaScript"; // Crear una variable
    const [curso, setCurso] = useState("Curso de JavaScript"); // Crear un estado
    const [counter, setCounter] = useState(10);
    const [texto, setTexto] = useState("Hola Mundo!");

    const modificarCurso = () => {
        console.log("estoy acá!");
        //curso = "Curso de React JS"; // Modificar la variable
        setCurso("Curso de React JS"); // Modificar el estado
        console.log(curso);
    }

    const aumentar = () => {
        setCounter(counter + 1);
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Estados (States)</h1>
                    <h3>{curso}</h3>
                    <p><button className="btn btn-primary" onClick={modificarCurso}>Modificar Curso</button></p>
                    <p>Contador: {counter}</p>
                    <p><button className="btn btn-primary" onClick={aumentar}>Aumentar</button></p>
                    <p><input type="text" className="form-control" value={texto} onInput={(e) => setTexto(e.target.value)} /></p>
                    <p>{texto}</p>
                </div>
            </div>
        </div>
    )
}

export default States