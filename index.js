const chalk = require("chalk");
const guardarSaludo = require("./utilidades/archivos");

if (!process.argv[2]) {
  process.exit(0);
}

if (!process.argv[2].includes("--nombre")) {
  console.log(chalk.yellow("No has pasado el parametro nombre"));
  process.exit(1);
}

guardarSaludo(process.argv[2].split("=")[1]);
