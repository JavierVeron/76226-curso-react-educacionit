import { createContext, useState } from "react";
import productosJson from "../../Clase4/json/productos.json"

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const agregarProducto = (id) => {
        let producto = productosJson.find(item => item.id == id);
        setCart([...cart, producto]);
    }

    const eliminarProducto = (id) => {
        let productosFiltro = cart.filter(item => item.id != id);
        setCart(productosFiltro);
    }

    const vaciarCarrito = () => {
        setCart([]);
    }

    const totalProductosCarrito = () => {
        return cart.length;
    }

    const sumaProductosCarrito = () => {
        return cart.reduce((acum, item) => acum += item.precio, 0)
    }

    return <CartContext.Provider value={{cart, agregarProducto, eliminarProducto, vaciarCarrito, totalProductosCarrito, sumaProductosCarrito}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider