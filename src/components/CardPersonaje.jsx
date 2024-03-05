export const CardPersonaje = ({ nombre, edad, aldea, rango, jutsu_destacado, estado, imagen }) => {

    // const { nombre, edad, aldea, rango, jutsu_destacado, estado, imagen } = props

    return (
        <div className="card-personajes">
            <img src={`/img/${imagen}`} width={250} alt="Personajes" />
            <div>
                <h2>{nombre}</h2>
                <p>Edad: {edad}</p>
                <p>Aldea: {aldea}</p>
                <p>Rango: {rango}</p>
                <p>Jutsu: {jutsu_destacado}</p>
                <p className={`${estado === "Vivo" ? "live" : "dead"}`}>Estado: {estado}</p>
            </div>
        </div>
    )
}

