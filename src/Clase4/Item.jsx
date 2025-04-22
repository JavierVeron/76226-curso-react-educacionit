import { useParams } from "react-router-dom"
import productosJson from "./json/productos.json"
import { useContext } from "react";
import { CartContext } from "../Clase5/context/CartContext";

const Item = () => {
    const {agregarProducto} = useContext(CartContext);
    const {id} = useParams();
    const producto = productosJson.find(item => item.id == id);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <img src={producto.imagen} alt={producto.nombre} className="img-fluid" />
                </div>
                <div className="col-md-5 d-flex align-items-center">
                    <div>
                        <h1 className="fw-bold">{producto.nombre}</h1>
                        <p className="fw-bold">{producto.descripcion}</p>
                        <p className="fw-bold">${producto.precio}</p>
                        <p><button className="btn botonBK" onClick={() => {agregarProducto(producto.id)}}>Agregar al Carrito</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item