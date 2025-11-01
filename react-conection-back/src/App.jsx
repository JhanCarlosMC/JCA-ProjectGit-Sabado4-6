import {useState, useEffect} from 'react'
import imgDefectoProducto from "./assets/code.png"

import './App.css'

const URL_API = "https://69067c99ee3d0d14c135eb4d.mockapi.io/api/products";

function App() {
const [listProducts, setListProducts] = useState([]);

const [nombre, setNombre] = useState("");
const [precio, setPrecio] = useState("");
const [categoria, setCategoria] = useState("");

const [editando, setEditando] = useState(null);
// ------------- Read - Obtener - Get -----------------
useEffect(() => {

  fetch(URL_API) //Por defecto realiza un GET
  .then( res => res.json()) // Convertimos la respuesta a JSON
  .then( data => setListProducts(data)) // Actualizamos el estado con los datos obtenidos
}, []	)
// ------------- Read - Obtener - Get -----------------


// ------------- Create - Crear - Post -----------------
const crearProducto = () => {
  const nuevoProducto = {
    name: nombre,
    price: precio,
    category: categoria
  }

  if(nombre === "" || precio === "" || categoria === ""){
    alert("Por favor, complete todos los campos.");
    return;
  }
  
  fetch(URL_API,{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(nuevoProducto)
  })
  .then( res => res.json())
  .then( data => {

    setListProducts([...listProducts, data]);

    setNombre("");
    setPrecio("");
    setCategoria("");
  })

}
// ------------- Create - Crear - Post -----------------

// ------------- Delete - Eliminar - Delete -----------------
const eliminarProducto = (id) => {
  // fetch(URL_API+"/"+id) 
  fetch(`${URL_API}/${id}`,{
     method: "DELETE"
  }) 
  .then( () => {
    setListProducts(
      listProducts.filter(product => product.id !== id)
    );
  })
}
// ------------- Delete - Eliminar - Delete -----------------

// ------------- Update - Actualizar - Put -----------------
const obtenerProducto= (p) =>{
  setNombre(p.name);
  setPrecio(p.price);
  setCategoria(p.category);

  setEditando(p.id);
}

const actualizarProducto = () => {
  const productoActualizado = {
    name: nombre,
    price: precio,
    category: categoria
  }

    fetch(`${URL_API}/${editando}`,{
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(productoActualizado)
    })
    .then( res => res.json())
    .then( data => {
      setListProducts(
        listProducts.map(product => 
          product.id === editando ? data : product
        )
      );

      setNombre("");
      setPrecio("");
      setCategoria("");

      setEditando(null);
    })
}
// ------------- Update - Actualizar - Put -----------------


  return (
    <div className='app'>
      <h1>CRUD Productos</h1>

      <div className='formulario'>
        <h2>Agregar Producto</h2>

        <input 
          type="text" 
          placeholder="Nombre.."
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />

        <input 
          type="number" 
          placeholder="Precio.."
          value={precio}
          onChange={e => setPrecio(e.target.value)}
        />

        <input 
          type="text" 
          placeholder="Categoria.."
          value={categoria}
          onChange={e => setCategoria(e.target.value)}
        />

        {editando ? (
          <button onClick={() => actualizarProducto()}>Actualizar</button>
        ) : (
          <button onClick={crearProducto}>Crear</button>
        )}
      </div>

      <div className='lista'>

        {listProducts.map(product => (
          <div key={product.id} className='producto'>
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <p>Categoria: {product.category}</p>

          <button onClick={() => obtenerProducto(product)}>Actualizar</button>
            <button onClick={() => eliminarProducto(product.id)}>ELiminar</button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App
