// Interfaces
// una interfaz se usa para describir un objeto, asignar nombres a los tipos del objeto y parametrizarlos

interface Employee2 {
    firstName: string;
    readonly lastName: string;
    fullName(): string;
}

let employee2: Employee2 = {
    firstName: "Emil",
    lastName: "Anderson",
    fullName(): string {
        return this.firstName + this.lastName;
    },
};

console.log(employee2);

//employee2.firstName = 10; // Invalido

// Interfaces con miembros
interface IceCream {
    flavor: string;
    scoope: number;
    instructions?: string;
}

let myIceCream: IceCream = {
    flavor: "frutilla",
    scoope: 2,
};

console.log(myIceCream);

function tooManyScoops(dessert: IceCream, instructions?: string) {
    // con el signo de pregunta hacemos opcional instruction, sino la ejecucion de la funcion indica que faltan parametros
    if (dessert.scoope >= 4) {
        return dessert.scoope + " is too many scoopes!";
    } else {
        return "your order will be ready soon!";
    }
}

console.log(tooManyScoops({ flavor: "vainilla", scoope: 8 }));

interface Sundae extends IceCream {
    sauce: "chocolate" | "caramel" | "strawberry";
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
}

let myIceCream2: Sundae = {
    flavor: "vainilla",
    scoope: 2,
    sauce: "caramel",
    nuts: true,
};

function tooManyScoops2(dessert: Sundae, instructions?: string) {
    // con el signo de pregunta hacemos opcional instruction, sino la ejecucion de la funcion indica que faltan parametros
    if (dessert.scoope >= 4) {
        return dessert.scoope + " is too many scoopes!";
    } else {
        return "your order will be ready soon! with " + dessert.sauce;
    }
}

console.log(
    tooManyScoops2({
        flavor: "vainilla",
        scoope: 2,
        sauce: "caramel",
        nuts: false,
    })
);

// Interfaces de tipo indexables

interface IceCreamArray {
    [index: number]: string;
}

let myIceCream3: IceCreamArray = ["vainilla", "chocolate", "frutilla"];
console.log(myIceCream3[2]);

const fetchURL = "https://jsonplaceholder.typicode.com/posts";
// Interface describing the shape of our json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log("Post #" + post.id);
    // If the userId is 1, then display a note that it's an administrator
    console.log(
        "Author: " +
            (post.userId === 1 ? "Administrator" : post.userId.toString())
    );
    console.log("Title: " + post.title);
    console.log("Body: " + post.body);
}

showPost();

/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */
interface Loan {
    principal: number;
    interestRate: number;
}

/*  TODO: Declare the ConventionalLoan interface. */
interface ConventionalLoan extends Loan {
    months: number;
}

/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    // Calculates the monthly payment of an interest only loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.principal * interest;
    return "The interest only loan payment is " + payment.toFixed(2);
}

/*  TODO: Update the calculateConventionalLoanPayment function. */

function calculateConventionalLoanPayment(loanTerms: ConventionalLoan): string {
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
