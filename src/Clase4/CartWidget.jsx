import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Clase5/context/CartContext"

const CartWidget = () => {
    const {totalProductosCarrito} = useContext(CartContext);

    return (
        <Link to={"/carrito"} className="btn botonBK">
            <i className="bi bi-cart"></i> ({totalProductosCarrito()})
        </Link>
    )
}

export default CartWidget