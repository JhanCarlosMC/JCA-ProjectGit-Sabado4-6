import './styles/Saludo.css'

function Saludo({nombre, edad, disponibilidad}){
    const disponibilidadContent = 
        disponibilidad ? 
        <p>Disponible para trabajar {disponibilidad}</p> :
        null;


    return (
        <div className="saludo-container">
            <h2 className="saludo-title">Hola {nombre}!</h2>
            <p className="saludo-parraph">Tienes {edad} años.</p>
            {disponibilidadContent}
        </div>
    )
}

export default Saludo