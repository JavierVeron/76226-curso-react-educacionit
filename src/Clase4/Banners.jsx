import CardBanner from "./CardBanner"

const Banners = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-md-1 mb-4">
                    <CardBanner imagen={"https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/169532bbcf47852ba7c8d15a4430ef4d887c8fc1-750x376.jpg?w=750&q=40&fit=max&auto=format"} titulo={"Una Stacker para manijas reales"} descripcion={"BK te invita a ser un manija sin culpa. Porque los gustos hay que dárselos a lo grande. Stacker Onion XL: carne a la parri, salsa stacker, queso, panceta y aros de cebolla crispy."} />
                </div>
                <div className="col-md-5 mb-4">
                    <CardBanner imagen={"https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/9418cf9a86864d8bfdf27dcecb549b34b0375013-750x375.jpg?w=750&q=40&fit=max&auto=format"} titulo={"En BK el rey sos vos"} descripcion={"Juntar coronas es tan fácil como descargar la App y usarla en tus compras habituales. ¡Metele que con BK, tenés coronita!"} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <CardBanner imagen={"https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/7ddf8da4917c981ee891668f2b7ee466ac2714ef-750x376.jpg?w=750&q=40&fit=max&auto=format"} titulo={"Comida real"} descripcion={"Al igual que las familias de hoy en BK no buscamos ser perfectos sino reales. Por eso, nuestra comida es 100% real, libre de conservantes, colorantes y saborizantes artificiales. Comida para no caretearla."} />
                </div>
                <div className="col-md-5">
                    <CardBanner imagen={"https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/b3b5787b982af39c74a1c5c70110e59481474c85-750x376.jpg?w=750&q=40&fit=max&auto=format"} titulo={"Comida real, promo real"} descripcion={"¡Comé como un Rey en Burger King! No te pierdas el Long clásico versión carne o pollo a un precio increíble para disfrutar de una extensión de sabor asegurada."} />
                </div>
            </div>
        </div>
    )
}

export default Banners