let deadpool = {
    name: "wayne",
    lastname: "Winston",
    power: "Regeneration",
    getDetails: function() {
        return `${ this.name } ${this.lastname} - power: ${ this.power }`
    }
}

console.log(deadpool.getDetails());

let { name: firstname, lastname, power } = deadpool;

console.log(firstname, lastname, power);