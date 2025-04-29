import { useState } from "react";
import { createStore } from "redux"

// Definir el Reducer
const counter = (state = 1, action) => {
    switch(action.type) {
        case "INCREMENT":
            return (state + 1);
        case "DECREMENT":
            return (state - 1);
        default:
            return state;
    }
}

// Crear el store Redux en mi aplicación
const store = createStore(counter);

// Controlar el estado global de mi store
store.subscribe(() => {
    console.log("Valor del Estado: " + store.getState());
})

const Contador = () => {
    const [numero, setNumero] = useState(store.getState());

    const incrementar = () => {
        store.dispatch({type:"INCREMENT"});
        setNumero(store.getState());
        console.log("Estoy incrementando el número");
    }

    const decrementar = () => {
        store.dispatch({type:"DECREMENT"});
        setNumero(store.getState());
        console.log("Estoy decrementando el número");
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Contador (Redux)</h1>
                    <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-danger btn-sm" onClick={decrementar}>-</button>
                    <button type="button" className="btn btn-danger btn-sm">{numero}</button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contador