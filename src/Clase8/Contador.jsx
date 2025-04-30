import { INCREMENTAR_ITEM_TYPE, DECREMENTAR_ITEM_TYPE } from "./Redux/typesCounter.js";
import { useDispatch, useSelector } from "react-redux";

const Contador = () => {
    const numero = useSelector(state => state);
    const dispatch = useDispatch();

    const incrementar = () => {
        dispatch(INCREMENTAR_ITEM_TYPE);
    }

    const decrementar = () => {
        dispatch(DECREMENTAR_ITEM_TYPE);
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Contador (Redux Middleware)</h1>
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