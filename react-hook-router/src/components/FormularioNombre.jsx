import { useState } from 'react'


function FormularioNombre(){
    const [nombre,setNombre] = useState("")

    const modificarTexto = (e) =>{
        setNombre(e.target.value)
    }

    return(
        <div>
            <h2>Hola, {nombre || "Anonimo"}!</h2>
            
            <input 
            type="text"  
            placeholder='Ingrese su nombre...'
            onChange={modificarTexto}
            />

            <p>Numero de caracteres: {nombre.length}</p>
        </div>
    )
}

export default FormularioNombre