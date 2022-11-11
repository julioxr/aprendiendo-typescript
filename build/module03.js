"use strict";
// Interfaces
// una interfaz se usa para describir un objeto, asignar nombres a los tipos del objeto y parametrizarlos
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let employee2 = {
    firstName: "Emil",
    lastName: "Anderson",
    fullName() {
        return this.firstName + this.lastName;
    },
};
console.log(employee2);
let myIceCream = {
    flavor: "frutilla",
    scoope: 2,
};
console.log(myIceCream);
function tooManyScoops(dessert, instructions) {
    // con el signo de pregunta hacemos opcional instruction, sino la ejecucion de la funcion indica que faltan parametros
    if (dessert.scoope >= 4) {
        return dessert.scoope + " is too many scoopes!";
    }
    else {
        return "your order will be ready soon!";
    }
}
console.log(tooManyScoops({ flavor: "vainilla", scoope: 8 }));
let myIceCream2 = {
    flavor: "vainilla",
    scoope: 2,
    sauce: "caramel",
    nuts: true,
};
function tooManyScoops2(dessert, instructions) {
    // con el signo de pregunta hacemos opcional instruction, sino la ejecucion de la funcion indica que faltan parametros
    if (dessert.scoope >= 4) {
        return dessert.scoope + " is too many scoopes!";
    }
    else {
        return "your order will be ready soon! with " + dessert.sauce;
    }
}
console.log(tooManyScoops2({
    flavor: "vainilla",
    scoope: 2,
    sauce: "caramel",
    nuts: false,
}));
let myIceCream3 = ["vainilla", "chocolate", "frutilla"];
console.log(myIceCream3[2]);
const fetchURL = "https://jsonplaceholder.typicode.com/posts";
function fetchPosts(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch(url);
        let body = yield response.json();
        return body;
    });
}
function showPost() {
    return __awaiter(this, void 0, void 0, function* () {
        let posts = yield fetchPosts(fetchURL);
        // Display the contents of the first item in the response
        let post = posts[0];
        console.log("Post #" + post.id);
        // If the userId is 1, then display a note that it's an administrator
        console.log("Author: " +
            (post.userId === 1 ? "Administrator" : post.userId.toString()));
        console.log("Title: " + post.title);
        console.log("Body: " + post.body);
    });
}
showPost();
/*  TODO: Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(loanTerms) {
    // Calculates the monthly payment of an interest only loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.principal * interest;
    return "The interest only loan payment is " + payment.toFixed(2);
}
/*  TODO: Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(loanTerms) {
    // Calculates the monthly payment of a conventional loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment =
        (loanTerms.principal * interest) /
            (1 - Math.pow(1 / (1 + interest), loanTerms.months));
    return "The conventional loan payment is " + payment.toFixed(2);
}
let interestOnlyPayment = calculateInterestOnlyLoanPayment({
    principal: 30000,
    interestRate: 5,
});
let conventionalPayment = calculateConventionalLoanPayment({
    principal: 30000,
    interestRate: 5,
    months: 180,
});
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24"
