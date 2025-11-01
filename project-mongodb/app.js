const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());


// const URL_DB = "mongodb+srv://jcmc_userAdmin:12345@clusterjc2025.mjrlhdf.mongodb.net/?appName=ClusterJC2025";
const URL_DB = "mongodb+srv://jacobogarcesoquendo:aFJzVMGN3o7fA38A@cluster0.mqwbn.mongodb.net/JhanCarlosMC";


mongoose.connect(URL_DB)
    .then(() => 
        console.log("Conexión a la base de datos exitosa"))
    .catch((err) => 
        console.log("Error de conexión a la base de datos:", err));

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

const Compra = mongoose.model('Compra', {
    nombre: {type: String, required: true},
    cantidad: {type: Number, default: 1},
});

app.post("/compra", async (req, res) => {

    const compraNueva = new Compra(req.body);
    await compraNueva.save();
    res.status(201).json(compraNueva);
})

app.get("/compras", async (req, res) => {
    const compras = await Compra.find();
    res.json(compras);
})

app.get("/compra/:id", async (req, res) => {
    const {id} = req.params;
    const compra = await Compra.findById(id);
    res.json(compra);
})

app.put("/compra/:id", async (req, res) => {
    const {id} = req.params;
    const compraActualizada = await Compra.findByIdAndUpdate(id, req.body);
    res.json(compraActualizada);
})

app.delete("/compra/:id", async (req, res) => {
    const {id} = req.params;
    const compraEliminada= await Compra.findByIdAndDelete(id);
    res.json(compraEliminada);
})