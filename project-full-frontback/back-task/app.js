const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
// Cross-Origin Resource Sharing (CORS)
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

const URL_BD = "mongodb+srv://jacobogarcesoquendo:aFJzVMGN3o7fA38A@cluster0.mqwbn.mongodb.net/JhanCarlosMC2";

mongoose.connect(URL_BD)
    .then(() => console.log("Conexión exitosa a la base de datos"))
    .catch((error) => console.error("Error al conectar a la base de datos:", error));

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

const Task = mongoose.model('Task', {
    id: {type: String, unique: true},
    nombre: {type: String, required: true},
    descripcion: {type: String, required: false},
});

//Endpoint POST
app.post("/tasks", async (req, res) => {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).send(newTask);
})

//Endpoint GET
app.get("/tasks", async (req, res) =>{
    const tasks = await Task.find();
    res.status(200).send(tasks);
})

//Enpoint PUT Actualizar tarea
app.put("/tasks/:id", async (req, res) =>{
    const {id} = req.params;

    const tareaActualidad = await Task.findOneAndUpdate({id}, req.body, {new: true});
    res.status(200).send(tareaActualidad);
})