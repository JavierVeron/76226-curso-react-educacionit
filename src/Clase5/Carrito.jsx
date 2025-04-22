import { useContext } from "react"
import { CartContext } from "./context/CartContext"

const Carrito = () => {
    const {cart, eliminarProducto, vaciarCarrito, totalProductosCarrito, sumaProductosCarrito} = useContext(CartContext);

    if (totalProductosCarrito() == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="fw-light">No se encontraron Productos en el Carrito!</h1>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={4} className="text-end"><button className="btn btn-danger btn-sm" onClick={vaciarCarrito}>Vaciar</button></td>
                            </tr>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="align-middle"><img src={item.imagen} alt={item.nombre} width={96} /></td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="align-middle">${item.precio}</td>
                                        <td className="align-middle text-end"><button className="btn btn-danger btn-sm" onClick={() => {eliminarProducto(item.id)}}>Eliminar</button></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={2}>Total a Pagar</td>
                                <td>${sumaProductosCarrito()}</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Carrito