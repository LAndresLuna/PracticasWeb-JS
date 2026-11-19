import { despedida, saludar } from "./Saludo.mjs";

console.log(saludar("Ana"));
console.log(despedida("Ana"));

import Estudiante from "./Estudiante.js";

let estudiante1 = new Estudiante();
estudiante1.nombre = "Andres";
estudiante1.carrera = "ISW";