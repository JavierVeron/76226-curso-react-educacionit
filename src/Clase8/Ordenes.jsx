import { useSelector } from "react-redux"
import ErrorCarrito from "./ErrorCarrito"

const Ordenes = () => {
    const orders = useSelector(state => state.orders);

    if (orders.length == 0) {
        return (
            <ErrorCarrito />
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <table className="table">
                        <tbody>
                            {
                                orders.map(item => (
                                    <tr key={item.id}>
                                        <td className="align-middle">{item.comprador.nombre}</td>
                                        <td className="align-middle text-center">{item.cantProductos} items</td>
                                        <td className="align-middle text-end">${item.total}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Ordenes