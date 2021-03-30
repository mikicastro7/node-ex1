const { exit } = require("process");
const chalk = require("chalk");
const guardarSaludo = require("./utilidades/archivos");

if (!process.argv[2].includes("--nombre")) {
  console.log(chalk.yellow("No has pasado el parametro nombre"));
  exit();
}

guardarSaludo(process.argv[2].split("=")[1]);
