import { useParams, useSearchParams } from "react-router-dom"
import CardProducto from "./CardProducto"
import productosJson from "./json/productos.json"
import ListaProductos from "./ListaProductos"

const Productos = () => {
    const {id} = useParams();
    let [searchParams, setSearchParams] = useSearchParams();
    let productosFiltro;
    
    if (id) {        
        productosFiltro = id ? productosJson.filter(item => item.categoria == id) : productosJson;
    } else {
        let filtro = searchParams.get("queso");
        productosFiltro = filtro ? productosJson.filter(item => item.queso === Boolean(filtro)) : productosJson;
    }

    return (
        <>
            <ListaProductos />
            <div className="container my-5">
                <div className="row">
                    {
                        productosFiltro.map(item => (
                            <CardProducto key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Productos