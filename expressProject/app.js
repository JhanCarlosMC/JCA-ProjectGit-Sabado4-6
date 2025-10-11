const chalk = require("chalk");
const express = require("express");
const app = express();
const port = 3000;

//Endpoint root
app.get("/", (req,res) => { //Get - Solicita informacion
    res.send("Hola JC desde un endpoint");
});

//Endpoint personalizado
app.get("/perfil", (req,res) => {
    res.send(`<h1>Nombre JhanCarlos</h1>
        <p>Edad: 25</p>
        <p>Email: jc@example.com</p>
        <h2>Skill</h2>
        <ul>
            <li>Node</li>
            <li>Js</li>
            <li>Express</li>
        </ul>
        `);
});

app.get("/perfil/edad", (req,res) => {
    res.send(`<p>Edad: 25</p>`);
});

app.get("/perfil/skill", (req,res) => {
    res.send(`        
        <h2>Skill</h2>
        <ul>
            <li>Node</li>
            <li>Js</li>
            <li>Express</li>
        </ul>`);
});

app.listen(port,() => {
    console.log(chalk.green(`Server is running on port ${port}`));
})