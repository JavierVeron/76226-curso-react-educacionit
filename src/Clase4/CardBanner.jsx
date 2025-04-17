const CardBanner = ({imagen, titulo, descripcion}) => {
    return (
        <div className="card">
            <img src={imagen} className="img-fluid" alt={titulo} />
            <div className="card-body">
                <h5 className="card-title colorBk fw-bold">{titulo}</h5>
                <p className="card-text colorBk fw-light">{descripcion}</p>
            </div>
        </div>
    )
}

export default CardBanner