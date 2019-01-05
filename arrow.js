let add = (a, b) => {
    return a + b;
}

let add1 = (a, b) => a + b;

console.log(add1(10, 20));

function greeting() {
    return 'Hello world';
}

let greeting1 = () => 'Hello world';

console.log(greeting1());

let greeting2 = name => `Hello ${ name }`;

console.log(greeting2('Rolando'));


let deadpool = {
    name: "wayne",
    lastname: "Winston",
    power: "Regeneration",
    getDetails() {
        return `${ this.name } ${this.lastname} - power: ${ this.power }`
    }
}

console.log(deadpool.getDetails());