var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Animal = require('./animal');

var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        _super.apply(this, arguments);
    }
    Snake.prototype.move = function () {
        console.log("Slithering...");
        _super.prototype.move.call(this, 5);
    };
    return Snake;
})(Animal);

module.exports = Snake;
