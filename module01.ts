let randomValue: unknown = 10;
randomValue = "algo";
randomValue = true;

//console.log(randomValue());

// Asercion de tipos, existen 2 formatos
//(randomValue as string).toUpperCase();
//(<string>randomValue).toUpperCase();

if (typeof randomValue == "string") {
    console.log((randomValue as string).toUpperCase());
} else {
    console.log("Se esperaba un string");
}

// Tipos de union
// el tipo any no tiene validaciones, podemos usar estos tipos de union para limitar las opciones

let multiType: number | boolean;
multiType = 20; // valido
multiType = true; // valido
multiType = "twenty"; // invalido

function add(x: number | string, y: number | string) {
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
// add("one", 2); // retorna error

// Tipo de interseccion
// Similar a la union pero es inclusiva

//Se definen interfaces
interface Employee {
    employeeID: number;
    age: number;
}

interface Manager {
    stockPlan: boolean;
}

// Defino el tipo ManagementEmployee
type ManagementEmployee = Employee & Manager;

// Creo un nuevo manager del tipo ManagementEmployee que combina las interfaces dado que el manager tambien es empleado
let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true,
};

console.log(newManager);

// Tipos literales, Objetos, matrices, funciones
type testResult = "pass" | "fail" | "incomplete"; // esto es un string pero es limitado, dado que un string es infinitas posibilidades
let myResult: testResult;
myResult = "pass"; // Valido
myResult = "incomplete"; // Valido
// myResult = "failure"; // Invalido

type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1; // valido
diceRoll = 2; // valido
diceRoll = 7; // invalido

// Tipos coleccion Matrices(array) y Tuplas(arraycombinados)
// se pueden escribir de 2 maneras

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
//tupla
let person1: [string, number] = ["Julio", 36];
// let person1: [string, number] = ["Julio", 36]; // si se cambia el orden de los valores falla
