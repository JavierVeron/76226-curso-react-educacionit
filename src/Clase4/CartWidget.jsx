import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Clase5/context/CartContext"
import { useSelector } from "react-redux"

const CartWidget = () => {
    //const {totalProductosCarrito} = useContext(CartContext);
    const totalProductosCarrito = useSelector(state => state.total);

    return (
        <Link to={"/carrito"} className="btn botonBK">
            <i className="bi bi-cart"></i> ({totalProductosCarrito})
        </Link>
    )
}

export default CartWidget