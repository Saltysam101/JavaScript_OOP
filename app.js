console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name
        this.pets = pets
        this.residence = residence
        this.hobbies = hobbies
    }

    addHobby(hobby) {
        this.hobbies.push(hobby)
        console.log(this.hobbies)
    }

    removeHobby(hobby) {
        let index = this.hobbies.indexOf(hobby);

        if (index > -1) {

            this.hobbies.splice(index, 1)
        }
        console.log(this.hobbies)
    }

    greeting() {
        console.log("Hello there!")
    }
}


console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
    constructor(name, pets, residence, hobbies) {
        super(name, pets, residence, hobbies)

        this.occupation = "Full Stack Web Developer"
    }

    greeting() {
        console.log("Hello World!")
    }
}

console.log("EXERCISE 3:\n==========\n");

let Sam = new Person("Sam", 5, "Ohio", ["coding", "games"]);

console.log(Sam)

Sam.addHobby("chess")

Sam.removeHobby("games")

Sam.greeting();

let SaltySam = new Coder("SaltySam", 5, "Ohio", ["coding", "hacking", "wears dark hoodies"])

console.log(SaltySam)

SaltySam.removeHobby("wears dark hoodies")

SaltySam.greeting()

console.log("EXERCISE 4:\n==========\n");

class Calculator {
    constructor(result) {
        result = 0
    }

    add(a, b = 0) {

        this.result = a + b
    }
    subtract(a, b = 0) {

        this.result = a - b
    }
    multiply(a, b = 0) {

        this.result = a * b
    }
    divide(a, b = 0) {

        this.result = a / b
    }

    displayResult() {
        console.log(this.result)
    }
}

let calculations = new Calculator()

calculations.add(1, 1)
calculations.displayResult()
calculations.subtract(50, 49)
calculations.displayResult()
calculations.multiply(2, 2)
calculations.displayResult()
calculations.divide(8, 4)
calculations.displayResult()
calculations.add(1)
calculations.displayResult()