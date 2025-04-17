import { Link } from "react-router-dom"

const ListaProductos = () => {
    return (
        <div className="container my-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-2 text-center">
                    <Link to={"/categoria/hamburguesas"} className="text-decoration-none linkBK">
                        <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/c8081d2dd28104ea1e3361e03d27e71787127da9-150x75.png?w=320&q=40&fit=max&auto=format" height={80} alt="Link #1" />
                        <p>Hamburguesas</p>
                    </Link>
                </div>
                <div className="col-md-2 text-center">
                    <Link to={"/categoria/pollo"} className="text-decoration-none linkBK">
                        <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/b63906e2604a3eb4f78527343fabb2033f65c8b2-2000x1334.png?w=320&q=40&fit=max&auto=format" height={80} alt="Link #2" />
                        <p>Pollo</p>
                    </Link>
                </div>
                <div className="col-md-2 text-center">
                    <Link to={"/categoria/papas"} className="text-decoration-none linkBK">
                        <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/7ebb8676a607c8e72f2bf5fc386103f137992e51-750x600.png?w=320&q=40&fit=max&auto=format" height={80} alt="Link #3" />
                        <p>Papas Fritas</p>
                    </Link>
                </div>
                <div className="col-md-2 text-center">
                    <Link to={"/categoria/bebidas"} className="text-decoration-none linkBK">
                        <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/355f7234681657615276f4927fd47b654db2ea8c-2000x1334.png?w=320&q=40&fit=max&auto=format" height={80} alt="Link #4" />
                        <p>Bebidas</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ListaProductos