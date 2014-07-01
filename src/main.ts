var require:any;

import Animal = require('./animal');
import Snake = require('./snake');
import Horse = require('./horse');

var sam = new Snake("Sammy the Python");
var tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
