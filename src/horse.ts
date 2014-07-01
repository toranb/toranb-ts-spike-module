import Animal = require('./animal');

class Horse extends Animal {
    move() {
        alert("Galloping...");
        super.move(45);
    }
}

export = Horse;
