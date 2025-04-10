import { useEffect, useState } from "react"

const CiclosDeVida = () => {
    const [contador1, setContador1] = useState(1);
    const [contador2, setContador2] = useState(1);
    
    console.log("#1 - Montaje del Componente");

    const decrementar = () => {
        setContador1(contador1 - 1);
    }

    const incrementar = () => {
        setContador1(contador1 + 1);
    }

    const decrementar2 = () => {
        setContador2(contador2 - 1);
    }

    const incrementar2 = () => {
        setContador2(contador2 + 1);
    }

    // Opción #1 => Con Dependencias vacías [], solo se ejecuta 1 vez
    /* useEffect(() => {
        console.log("#2 - Actualización del Componente");
    }, []) */

    // Opción #2 => Con Dependencias [valor], especificamos que prop o state va a atento para actualizar
    /* useEffect(() => {
        console.log("#2 - Actualización del Componente");
    }, [contador1]) */

    // Opción #3 => Sin Dependencias (sin []), esta atento a cualquier cambio de prop o state
    useEffect(() => {
        console.log("#2 - Actualización del Componente");

        return () => {
            console.log("#3 - Desmontaje del Componente");
        }
    })

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Ciclos de Vida</h1>
                    <p>Contador #1</p>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-primary">{contador1}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementar}>+</button>
                    </div>
                    <p>Contador #2</p>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary" onClick={decrementar2}>-</button>
                        <button type="button" className="btn btn-primary">{contador2}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementar2}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CiclosDeVida