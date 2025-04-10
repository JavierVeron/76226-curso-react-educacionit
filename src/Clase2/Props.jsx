/* // Opción #1 => Capturando un objeto y llamando a la propiedad
const Props = (prop) => {
    //prop.curso = "Desarrollo Web";

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Propiedades (Props)</h1>
                    <h2>{prop.academia}</h2>
                    <h3>{prop.curso}</h3>
                    <ul>
                        {prop.cursos.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
} */

const Titulo = ({texto, children}) => {
    return (
        <>
            <h3 className="display-6 fw-bold">{texto}</h3>
            <div className="my-3">
                {children}
            </div>
        </>
    )
}

const Boton = ({texto}) => {
    return (
        <button className="btn btn-dark text-white fw-bold">{texto}</button>
    )
}

// Opción #2 => Desestructurando directamente las propiedades del objeto
const Props = ({academia, curso, text}) => {
    //prop.curso = "Desarrollo Web";

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Propiedades (Props)</h1>
                    <h2>{academia}</h2>
                    <h3>{curso}</h3>
                    {/* <ul>
                        {cursos.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul> */}
                    <Titulo texto={text}>
                        <p>Para convertirte en millonario en Buenos Aires, enfócate en aumentar tus ingresos, administrar tus finanzas sabiamente, invertir estratégicamente y buscar nuevas oportunidades de negocio, mientras mantienes una mentalidad de crecimiento y resiliencia.</p>
                        <p><b className="display-6">Busca fuentes de ingresos adicionales:</b></p>
                        <p>Explora la posibilidad de tener un segundo trabajo, freelancing, o emprender un negocio online.</p>
                        <p><b className="display-6">Negociar tu salario:</b></p>
                        <p>Si estás satisfecho con tu trabajo actual, busca oportunidades para negociar un aumento de sueldo o un bono.</p>
                        <p><b className="display-6">Aprende nuevas habilidades:</b></p>
                        <p>Invierte en tu educación y desarrollo profesional para acceder a mejores oportunidades laborales y salarios más altos.</p>
                        <Boton texto={"Inscribir aquí"} />
                    </Titulo>
                </div>
            </div>
        </div>
    )
}

export default Props