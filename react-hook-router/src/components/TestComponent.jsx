import { useState, useEffect } from 'react'

function TestComponent(){
    const [nombre,setNombre] = useState("")
    const [edad,setEdad] = useState(0)
    const [disponibilidad,setDisponibilidad] = useState(false)

    useEffect(() => {
        //Codigo que se ejecuta cuando se renderiza el componente

        return () => { //Opcional
            //Codigo que se ejecuta cuando se desmonta el componente
        }
    }, []) //Dependencias -> lo que ocasiona qu
            //[] -> Solo se ejecuta un vez
            //[variable] -> Se ejecuta cuando la variable cambia
            //[variable1,variable2] -> Se ejecuta cuando alguna de las variables cambia

    const actualizarEstados = () => {
        setNombre("Jhan")
        setEdad(24)
        setDisponibilidad(true)
    }

    return(
        <div>
            <h1>"Hola, {nombre}!</h1>
            <p>Edad: {edad}</p>
            <p>Disponibilidad: {disponibilidad ? "Sí" : "No"}</p>
 
            <button onClick={actualizarEstados} >Actualizar Estados</button>
        </div>
    )
}

export default TestComponent