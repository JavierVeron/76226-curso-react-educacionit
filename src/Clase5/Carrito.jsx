import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { useDispatch, useSelector } from "react-redux"
import { ELIMINAR_PRODUCTO, VACIAR_CARRITO, INCREMENTAR_ITEM, DECREMENTAR_ITEM } from "../Clase7/Redux/ActionsCartReducer"
import ErrorCarrito from "../Clase8/ErrorCarrito"
import { Link } from "react-router-dom"

const Carrito = () => {
    //const {cart, eliminarProducto, vaciarCarrito, totalProductosCarrito, sumaProductosCarrito} = useContext(CartContext);
    const cart = useSelector(state => state.cart);
    const totalProductosCarrito = useSelector(state => state.total);
    const sumaProductosCarrito = useSelector(state => state.suma);
    const dispatch = useDispatch();

    const vaciarCarrito = () => {
        dispatch(VACIAR_CARRITO);
    }

    const eliminarProducto = (id) => {        
        dispatch(ELIMINAR_PRODUCTO(id));
    }

    const incrementarItem = (id) => {
        dispatch(INCREMENTAR_ITEM(id));
    }

    const decrementarItem = (id) => {
        dispatch(DECREMENTAR_ITEM(id));
    }

    if (totalProductosCarrito == 0) {
        return (
            <ErrorCarrito />
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={6} className="text-end"><button className="btn btn-danger btn-sm" onClick={vaciarCarrito}>Vaciar</button></td>
                            </tr>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="align-middle"><img src={item.imagen} alt={item.nombre} width={96} /></td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="align-middle">${item.precio}</td>
                                        <td className="align-middle">
                                            <button className="btn btn-danger btn-sm mx-1" onClick={() => {decrementarItem(item.id)}}>-</button>
                                            <span>x{item.cantidad}</span>
                                            <button className="btn btn-danger btn-sm mx-1" onClick={() => {incrementarItem(item.id)}}>+</button>
                                        </td>
                                        <td className="align-middle">${item.precio * item.cantidad}</td>
                                        <td className="align-middle text-end"><button className="btn btn-danger btn-sm" onClick={() => {eliminarProducto(item.id)}}>Eliminar</button></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={4}>Total a Pagar</td>
                                <td>${sumaProductosCarrito}</td>
                                <td className="text-end"><Link to={"/checkout"} className="btn btn-danger btn-sm">Checkout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Carrito