import { useState,useEffect } from 'react'

function Contador(){
    const [contador,setContador] = useState(0)

    const decrementar = () =>{
        setContador(contador - 1)
    }

    const reiniciar = () =>{
        setContador(0)
    }

    const incrementar = () =>{
        setContador(contador + 1)
    }

    useEffect(() => {
        document.title = `Contador: ${contador}`
    }, [contador]) 

    return(
        <div>
            <h2>Contador: {contador}</h2>
            <div>
                <button onClick={decrementar} >Decrementar</button>
                <button onClick={reiniciar} >Reiniciar</button>
                <button onClick={incrementar} >Incrementar</button>
            </div>
        </div>
    )
}

export default Contador