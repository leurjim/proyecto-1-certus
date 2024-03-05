import { CardPersonaje } from "./components/CardPersonaje"
import { Navbar } from "./components/Navbar"
import { personajes } from "./utils/personajesData"

export const Principal = () => {



    return(
        <section>
            <Navbar/>
            <article className="container">
                <h1>Primer Aplicativo en React: Leao Urbina Jimenez</h1>
                <div className="contenedor-personajes">
                    {personajes.map((personaje)=>(
                        <CardPersonaje key={personaje.nombre} {...personaje} />
                    ))}
                </div>
            </article>
        </section>
    )
}