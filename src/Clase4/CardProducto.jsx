import { Link } from "react-router-dom"

const CardProducto = ({item}) => {
    return (
        <div className="col-md-4 mb-3">
            <Link to={"/item/" + item.id} className="text-decoration-none">
                <div className="card border-0 fondoBK2">
                    <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                    <div className="card-body text-center">
                        <p className="card-text fs-5 fw-bold" style={{color:"#502314"}}>{item.nombre}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardProducto