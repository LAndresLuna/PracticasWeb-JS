console.log("Sección de funciones");
// función declarada
function saludar(nombre = "Invitado", edad=0) {
    return "Hola: " + nombre + " Edad: " + edad;
}

console.log(saludar("Andres", 20));
console.log(saludar());

// función anonima
let suma = function(num1, num2) {
    return num1 + num2;
}
console.log("Resultado suma: " + suma(1, 63));

// función flecha
let resta = (num1, num2) => {
    return num1 - num2
}

console.log("Resultado resta: " + resta(5, 7));

// Función autoinvocada
(async function() {
    console.log("Hola desde función autoinvocada")
})();

console.log("Arreglos Dinámicos")

let numeros = [1, 2, 3];
console.log("Arreglo inicial ", numeros);

numeros.push(4);
console.log("Arreglo después del push: ", numeros);

let ultimo = numeros.pop();
console.log("Arreglo después del pop ", numeros);

let primero = numeros.shift();
console.log("Arreglo después del shift ", numeros);

console.log("Objetos")

const persona = {
    nombre: "Andres",
    edad: 20,
    carrera: "ISW",
    hobbies: ["dibujar", "dormir"]
};

console.log("Nombre: ", persona.nombre);
persona.nombre = "Luis";
console.log("Nombre modificado: ", persona.nombre);

