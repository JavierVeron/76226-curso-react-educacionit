const HaceCalor = () => {
    return (
        <div className="alert alert-danger" role="alert">Hace calor!!!</div>
    )
}

const HaceFrio = () => {
    return (
        <div className="alert alert-primary" role="alert">Hace frio!!!</div>
    )
}


const Renderizacion = () => {
    let haceCalor = false;
    let temperatura = 30;
    /* // String concatenado
    let texto1 = "La temperatura es de " + temperatura + " grados!";
    console.log(texto1);
    // Template String o Plantilla Literal
    let texto2 = `La temperatura es de ${temperatura} grados!`;
    console.log(texto2); */
    
    // Creo un Array de Bebidas
    const bebidas = ["Coca Cola", "Pepsi", "Manaos", "Sprite", "Seven Up"];
    const bebidas2 = [
        {id:1, nombre:"Coca Cola", precio:2500},
        {id:2, nombre:"Pepsi", precio:2200},
        {id:3, nombre:"Manaos", precio:1800},
        {id:4, nombre:"Sprite", precio:2200},
        {id:5, nombre:"Seven Up", precio:2000}
    ];

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Renderización</h1>
                    <p className={`display-6 ${haceCalor ? "text-danger" : "text-primary"}`}>{haceCalor ? "Hace Calor" : "Hace Frío"}!</p>
                    {haceCalor ? <HaceCalor /> : <HaceFrio />}
                    <ul className="list-group">
                        {
                            bebidas.map(item => (
                                <li key={item} className="list-group-item">{item}</li>
                            ))
                        }
                    </ul>
                    <ul className="list-group list-group-flush my-5">
                        {
                            bebidas2.map(item => (
                                <li key={item.id} className="list-group-item">{item.nombre} ${item.precio}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Renderizacion