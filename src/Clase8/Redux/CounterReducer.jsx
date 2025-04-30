import { INCREMENTAR_ITEM, DECREMENTAR_ITEM } from "./actionsCounter"

const CounterReducer = (state = 0, action) => {
    switch(action.type) {
        case INCREMENTAR_ITEM:
            return (state + 1);
        case DECREMENTAR_ITEM:
            return (state - 1);
        default:
            return state
    }
}

export default CounterReducer