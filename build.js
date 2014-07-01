"format register";

System.register("build/animal", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "build/animal.js";
    var __dirname = "build";
  var Animal = (function () {
      function Animal(name) {
          this.name = name;
      }
      Animal.prototype.move = function (meters) {
          console.log(this.name + " moved " + meters + "m.");
      };
      return Animal;
  })();
  
  module.exports = Animal;
  
  global.define = __define;
  return module.exports;
});

System.register("build/horse", ["./animal"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "build/horse.js";
    var __dirname = "build";
  var __extends = this.__extends || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      __.prototype = b.prototype;
      d.prototype = new __();
  };
  var Animal = require('./animal');
  
  var Horse = (function (_super) {
      __extends(Horse, _super);
      function Horse() {
          _super.apply(this, arguments);
      }
      Horse.prototype.move = function () {
          console.log("Galloping...");
          _super.prototype.move.call(this, 45);
      };
      return Horse;
  })(Animal);
  
  module.exports = Horse;
  
  global.define = __define;
  return module.exports;
});

System.register("build/snake", ["./animal"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "build/snake.js";
    var __dirname = "build";
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
  
  global.define = __define;
  return module.exports;
});

System.register("build/main", ["./snake","./horse"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "build/main.js";
    var __dirname = "build";
  var require;
  
  exports.Snake = require('./snake');
  exports.Horse = require('./horse');
  
  global.define = __define;
  return module.exports;
});
