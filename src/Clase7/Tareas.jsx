import { useState } from "react"
import { createStore } from "redux"

// Definir un array de tareas
const tareas = [
    {id:1, nombre:"Levantarme de la Cama", completada:true, divertido:"no"},
    {id:2, nombre:"Desayunar", completada:true, divertido:"no"},
    {id:3, nombre:"Trabajar por la Mañana", completada:true, divertido:"no"},
    {id:4, nombre:"Almorzar", completada:true, divertido:"no"},
    {id:5, nombre:"Trabajar por la Tarde", completada:false, divertido:"no"},
    {id:6, nombre:"Merendar", completada:true, divertido:"no"},
    {id:7, nombre:"Hacer un deporte", completada:false, divertido:"si"},
    {id:8, nombre:"Cenar", completada:false, divertido:"si"},
    {id:9, nombre:"Mirar Streaming", completada:false, divertido:"si"},
    {id:10, nombre:"Dormir", completada:true, divertido:"no"}
]

// Definir las acciones
const SHOW_ALL = {
    type:"SHOW_ALL"
}

const SHOW_COMPLETE = {
    type:"SHOW_COMPLETE"
}

const FILTER_TASKS = (filter) => ({
    type:"FILTER_TASKS",
    payload:filter
})

// Definir un Reducer
const taskReducer = (state = tareas, action) => {
    switch(action.type) {
        case "SHOW_ALL":
            return {
                ...state,
                filtered:tareas
            }
        case "SHOW_COMPLETE":
            return {
                ...state,
                filtered:tareas.filter(item => item.completada)
            }
        case "FILTER_TASKS":
            return {
                ...state,
                filtered:tareas.filter(item => (item.completada == action.payload) || (item.divertido == action.payload))
            }
        default:
            return state;
    }
}

const store = createStore(taskReducer);

const Tareas = () => {
    const [items, setItems] = useState(store.getState());

    const mostrarTodasLasTareas = () => {
        store.dispatch(SHOW_ALL);
    }

    const mostrarTareasCompletadas = () => {
        store.dispatch(SHOW_COMPLETE);        
    }

    const mostrarTareasNoCompletadas = () => {
        store.dispatch(FILTER_TASKS(false));
    }

    const mostrarTareasDivertidas = () => {
        store.dispatch(FILTER_TASKS("si"));
    }

    store.subscribe(() => {
        setItems(store.getState().filtered)
    })

    return (
        <div className="container my-5 bg-white">
            <div className="row">
                <div className="col">
                    <h1>Tareas (Redux)</h1>
                    <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary sm-1 mx-1" onClick={mostrarTodasLasTareas}>Mostrar Todas las Tareas</button>
                    <button type="button" className="btn btn-primary sm-1 mx-1" onClick={mostrarTareasCompletadas}>Mostrar Tareas Completadas</button>
                    <button type="button" className="btn btn-primary sm-1 mx-1" onClick={mostrarTareasNoCompletadas}>Monstrar Tareas No Completadas</button>
                    <button type="button" className="btn btn-primary sm-1 mx-1" onClick={mostrarTareasDivertidas}>Monstrar Tareas Divertidas</button>
                    </div>
                    <ul className="list-group list-group-flush">
                        {
                            items.map(item => (
                                <li key={item.id} className="list-group-item">{item.nombre}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tareas