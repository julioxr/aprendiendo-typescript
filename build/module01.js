"use strict";
let randomValue = 10;
randomValue = "algo";
randomValue = true;
//console.log(randomValue());
// Asercion de tipos, existen 2 formatos
//(randomValue as string).toUpperCase();
//(<string>randomValue).toUpperCase();
if (typeof randomValue == "string") {
    console.log(randomValue.toUpperCase());
}
else {
    console.log("Se esperaba un string");
}
// Tipos de union
// el tipo any no tiene validaciones, podemos usar estos tipos de union para limitar las opciones
let multiType;
multiType = 20; // valido
multiType = true; // valido
multiType = "twenty"; // invalido
function add(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        console.log(x + y);
        return;
    }
    if (typeof x === "string" && typeof y === "string") {
        console.log(x.concat(" " + y));
        return;
    }
    // throw new Error("Los parametros deben ser numeros o strings");
}
add(2, 4); // retorna 6
add("Hola", "usuario"); // retorna "Hola usuario"
// Creo un nuevo manager del tipo ManagementEmployee que combina las interfaces dado que el manager tambien es empleado
let newManager = {
    employeeID: 12345,
    age: 34,
    stockPlan: true,
};
console.log(newManager);
let myResult;
myResult = "pass"; // Valido
myResult = "incomplete"; // Valido
let diceRoll;
diceRoll = 1; // valido
diceRoll = 2; // valido
diceRoll = 7; // invalido
// Tipos coleccion Matrices(array) y Tuplas(arraycombinados)
// se pueden escribir de 2 maneras
let list = [1, 2, 3];
let list2 = [1, 2, 3];
//tupla
let person1 = ["Julio", 36];
// let person1: [string, number] = ["Julio", 36]; // si se cambia el orden de los valores falla
