import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from 'redux'
import CounterReducer from './Clase8/Redux/CounterReducer.jsx'

const miMiddleware = store => next => action => {
    console.log(store.getState());
    console.log(action.type);

    if (action.type == "INCREMENTAR_ITEM") {
        console.info("Incrementaste un item!");
    }

    if (action.type == "DECREMENTAR_ITEM") {
        console.warn("Derementaste un item!");
    }

    next(action);
}

const store = createStore(CounterReducer, applyMiddleware(miMiddleware));

createRoot(document.getElementById('root')).render(<Provider store={store}><App /></Provider>)
