import Animal = require('./animal');

class Snake extends Animal {
    move() {
        alert("Slithering...");
        super.move(5);
    }
}

export = Snake;
