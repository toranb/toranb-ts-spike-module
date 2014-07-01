import Animal = require('./animal');

class Horse extends Animal {
    move() {
        console.log("Galloping...");
        super.move(45);
    }
}

export = Horse;
