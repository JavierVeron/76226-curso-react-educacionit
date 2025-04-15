import { useState } from "react"

const Formularios = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [contrasenaError, setContrasenaError] = useState("");

    const enviarForm = () => {
        console.log("Formulario Enviado!");
        document.getElementById("form1").submit();
    }

    // Opción #1 => Utilizando botón del tipo "button"
    /* const validarFormulario = () => {        
        if (email == "") {
            setEmailError("Error! Debe completar el Campo Email!");
            return false;
        } else {
            setEmailError("");
        }

        if (contrasena == "") {
            setContrasenaError("Error! Debe completar el Campo Contraseña!");
            return false;
        } else {
            setContrasenaError("");
        }

        enviarForm();
    } */

    // Opción #2 => Utilizando botón del tipo "submit"
    // Opción #3 => Definiendo el método onSubmit en la cabecera del Form
    const validarFormulario = (e) => {
        e.preventDefault(); // Detiene el envío del Formulario
        
        if (email == "") {
            setEmailError("Error! Debe completar el Campo Email!");
            return false;
        } else {
            setEmailError("");
        }

        if (contrasena == "") {
            setContrasenaError("Error! Debe completar el Campo Contraseña!");
            return false;
        } else {
            setContrasenaError("");
        }

        enviarForm();
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Formularios</h1>
                    <form id="form1" onSubmit={validarFormulario}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" value={email} onInput={(e) => {setEmail(e.target.value)}} />
                            <div className="text-danger fw-light">{emailError}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <input type="password" className="form-control" value={contrasena} onInput={(e) => {setContrasena(e.target.value)}} />
                            <div className="text-danger fw-light">{contrasenaError}</div>
                        </div>
                        {/* <button type="submit" className="btn btn-primary" onClick={validarFormulario}>Enviar</button> */}
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formularios