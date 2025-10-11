const chalk = require("chalk");

console.log("Hola");
console.log(chalk.red("Hola"));
console.log(chalk.blue("Hola"));
console.log(chalk.green("Hola"));

let x = [];
x.push("Hola")
x.push("Adios")
x.push("Hola")
x.push("Adios")
console.log(chalk.blue(x));

x.pop(); //Elimina al final
console.log(chalk.blue(x));

x.shift(); //Elimina al inicio
console.log(chalk.blue(x));
