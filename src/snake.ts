import Animal = require('./animal');

class Snake extends Animal {
    move() {
        console.log("Slithering...");
        super.move(5);
    }
}

export = Snake;
