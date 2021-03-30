const fs = require("fs");
const chalk = require("chalk");

const guardarSaludo = (nombre) => {
  fs.writeFile("./textos/saludo.txt", `Hola ${nombre}. Encantado de saludarte`, (err) => {
    if (err) return console.log(chalk.red.bold(err));
    console.log("Nombre escrito correctamente");
  });
};

module.exports = guardarSaludo;
