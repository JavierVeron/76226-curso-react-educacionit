const UsuarioConectado = () => {
    return (
        <div className="alert alert-success d-flex align-items-center" role="alert">
            <div>Usuario Conectado!</div>
        </div>
    )
}

const UsuarioNoConectado = () => {
    return (
        <div className="alert alert-danger d-flex align-items-center" role="alert">
            <div>Usuario No Conectado!</div>
        </div>
    )
}

const RenderizadoCondicional = ({isLoggedIn}) => {
    /* let mostrarTexto;

    if (isLoggedIn) {
        mostrarTexto = "Usuario Conectado!"
    } else {
        mostrarTexto = "Usuario NO Conectado!"
    } */

    // Versión simplificada (utilizando operador ternario)
    let mostrarTexto = isLoggedIn ? "Usuario Conectado!" : "Usuario NO Conectado!";

    if (!isLoggedIn) {
        return (
            <div className="container-fluid py-5 my-5 bg-light">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="fw-bold">Error! Usuario No Conectado!</h1>
                        <h3 className="fw-bold">Por favor, inicie sesión nuevamente!</h3>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Renderizado Condicional</h1>
                    {/* <p>{mostrarTexto}</p> */}
                    
                    {/* <div className={`${isLoggedIn ? "alert alert-success" : "alert alert-danger"}`}>{isLoggedIn ? "Usuario Conectado!" : "Usuario NO Conectado!"}</div> */}
                    
                    {isLoggedIn ? <UsuarioConectado /> : <UsuarioNoConectado />}
                    
                    {/* <div className={`${isLoggedIn && "alert alert-success"}`}>{isLoggedIn && "Usuario Conectado!"}</div> */}
                </div>
            </div>
        </div>
    )
}

export default RenderizadoCondicional