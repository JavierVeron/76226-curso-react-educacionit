import { Navigate, useNavigate } from "react-router-dom"

const MiBK = ({estaLogueado}) => {
    const navigate = useNavigate();

    const redireccionar = () => {
        navigate("/", {replace:true});
    }

    return (
        <>
            {!estaLogueado && <Navigate to={"/"} />}
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/06e0c916b1c8f22804a26b56180dfa6b8aab9823-1250x200.png?w=320&q=40&fit=max&auto=format" alt="Mi BK" />
                        <p>Crea una cuenta o ingresa si es que ya tienes una para que puedas canjear tus coronas! Haz click en el botón de abajo para más detalles sobre Mi BK.</p>
                        <button className="btn botonBK" onClick={redireccionar}>Mi BK</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MiBK