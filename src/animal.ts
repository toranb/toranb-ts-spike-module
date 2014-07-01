var React:any = require('react');

class Animal {
    constructor(public name) { }
    move(meters) {
        console.log(this.name + " moved " + meters + "m.");
    }
}

export = Animal;
