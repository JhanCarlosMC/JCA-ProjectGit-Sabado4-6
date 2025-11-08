import './TaskCreator.css';
import { useEffect, useState } from 'react';

const URL_API = "http://localhost:3000/tasks";

export default function TaskCreator(){

    const [task, setTask] = useState({
        id: "",
        nombre: "",
        descripcion: "",
    });

    const [tasks, setTasks] = useState([]);

    const [idEditado, setIdEditado] = useState(null);

    const manejadorCambios = (e) =>{
        const {name, value} = e.target;
        setTask({...task, [name]: value});
    }

    //Metodo POST Crear Tarea
    const crearTarea = () =>{

        if(!task.id || !task.nombre || !task.descripcion || task.id.trim() === ""){
            alert("Por favor, complete los campos ID, Nombre y Descripcion.");
            return;
        }

        fetch(URL_API,{
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(task),
            })
            .then(res => res.json())
            .then(newTask => {
                setTasks([...tasks, newTask]);
                setTask({id: "",nombre: "",descripcion: "",});
            })
    }

    //Metodo GET obtener tareas
    useEffect(() =>{
        fetch(URL_API)
            .then(res => res.json())
            .then(listTasks => setTasks(listTasks));
    },[])

    //Metodo PUT
    const actualizarTarea = () =>{
        fetch(URL_API + "/" + idEditado,{
                method: "PUT",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(task),
            })
            .then(res => res.json())
            .then(newTask => {
                const newTasks = 
                tasks.map(
                    t => t.id === idEditado ? newTask : t);
                setTasks(newTasks);
            })
    }

    const obtenerTarea = (t) =>{
        setIdEditado(t.id);
        setTask({
            id: t.id,
            nombre: t.nombre,
            descripcion: t.descripcion,
        });
    }

    return (
        <div className='body'>
            <div className='container'>
                <div className='card'>
                    <h1 className='h1'>Crear Tarea</h1>

                    <div className='from-group'>
                        <label htmlFor="id" className='label'>Id:</label>
                        <input
                            className='input' 
                            type="text" 
                            id="id"
                            name='id'
                            placeholder='Ej: TASK_001'
                            value={task.id}
                            onChange ={manejadorCambios}
                            disabled={idEditado !== null}
                        />
                    </div>

                    <div className='from-group'>
                        <label htmlFor="nombre" className='label'>Nombre:</label>
                        <input
                            className='input' 
                            type="text" 
                            id="nombre"
                            name='nombre'
                            placeholder='Ej: Crear proyecto'
                            value={task.nombre}
                            onChange ={manejadorCambios}
                        />
                    </div>

                    <div className='from-group'>
                        <label htmlFor="descripcion" className='label'>Descripcion:</label>
                        <textarea
                            className='textarea' 
                            type="text" 
                            id="descripcion"
                            name='descripcion'
                            placeholder='Ej: Crear proyecto'
                            value={task.descripcion}
                            onChange ={manejadorCambios}
                        />
                    </div>

                    { idEditado ? 
                    (
                        <button className='button' onClick={actualizarTarea}>Actualizar</button>
                    )
                    :
                    (
                        <button className='button' onClick={crearTarea}>Crear</button>
                    )
                    }

                </div>

                <div className='tasks-list'>
                    <h2 className='h2'>Tareas: ({tasks.length})</h2>
                    
                    {
                        tasks.map((t) =>(
                                <div key={t.id} className='task-item'>
                                    <p className='task-id'>{t.id}</p>
                                    <p className='task-name'>{t.nombre}</p>
                                    <p className='task-description'>{t.descripcion}</p>

                                    <button onClick={() => obtenerTarea(t)} className='button'>Actualizar</button>
                                </div>
                        ))}
                </div>
            </div>
        </div>
    )
}
