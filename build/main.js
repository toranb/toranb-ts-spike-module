var require;

var Snake = require('./snake');
var Horse = require('./horse');

var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
