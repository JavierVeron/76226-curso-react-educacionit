import imagen3 from "../assets/alumni-platform.webp";

const Imagenes = () => {
    // Opción #1 => Utilizamos la url absoluta de la imagen
    // Opción #2 => Descargamos la imagen y la depositamos en la parte /public
    // Opción #3 => Descargamos la imagen y la depositamos en /assets (dentro de la App)

    return (
        <>
            <p><img src="https://static.educacionit.com/educacionit/assets/certificate-approval-boilerplate.svg" alt="Imagen #1" width={320} /></p>
            <p><img src="/images/base-learning-guarantee-vector.svg" alt="Imagen #2" width={320} /></p>
            <p><img src={imagen3} alt="Imagen #3" width={320} /></p>
        </>
    )
}

export default Imagenes