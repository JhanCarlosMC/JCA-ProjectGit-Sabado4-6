const modShop = require('./module-list');
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.json("Bienvenido a la API de la lista de compras");
})

app.get("/listshopping", (req, res) => {
    res.json({
        "shopping-list": modShop.getList()
    });
})

//Get con parametros por URL -> Acceso de elementos especificos
app.get("/list/:idItem", (req, res) => {
    const idItem = req.params.idItem; //Captura de parametro por URL
    const shoList = modShop.getList();

    res.json({
        "item-list": shoList[idItem]
    });
})

//Get con query params -> Filtrar, buscar o delimitar resultados
app.get("/list", (req, res) => {
    const buscar = req.query.buscar;
    const limite = parseInt(req.query.limite);
    let shoListFilter = modShop.getList();

    if(buscar){
        shoListFilter = shoListFilter.filter(item => item.includes(buscar));
    }

    if(limite){
        shoListFilter = shoListFilter.slice(0, limite);
    }

    res.json({
        "shopping-list": shoListFilter
    });
})

app.use(express.json());
app.post("/list", (req,res) =>{
    // const newItem = req.body.newItem;
    const {newItem} = req.body;

    if(!newItem){
        return res.status(400).json({"error": "El campo 'newItem' es requerido"});
    }
    modShop.addItem(newItem);
    res.status(201).json({"shopping-list": modShop.getList()});
})

app.delete("/list/:nombreItem", (req, res) => {
    const {nombreItem} = req.params;
    
    modShop.deleteItem(nombreItem);
    res.status(200).json({"shopping-list": modShop.getList()});
})