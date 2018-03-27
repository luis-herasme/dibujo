(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dibujo"] = factory();
	else
		root["dibujo"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Graphic = /** @class */ (function () {
    function Graphic(data) {
        if (data.position)
            this.position = data.position;
        if (data.anchor)
            this.anchor = data.anchor;
        if (data.z_index)
            this.z_index = data.z_index;
    }
    Graphic.prototype.setStyle = function (styles) {
        for (var style in styles) {
            this.context[style] = styles[style];
        }
    };
    Graphic.prototype.render = function () { };
    return Graphic;
}());
exports["default"] = Graphic;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Vector = /** @class */ (function () {
    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector.prototype.add = function (vector) {
        this.x += vector.x;
        this.y += vector.y;
    };
    Vector.prototype.sub = function (vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    };
    Vector.prototype.mult = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
    };
    Vector.prototype.div = function (scalar) {
        this.x /= scalar;
        this.y /= scalar;
    };
    Vector.prototype.inverse = function () {
        this.x *= -1;
        this.y *= -1;
    };
    Vector.prototype.mag = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vector.prototype.dot = function (vector) {
        return this.x * vector.x + this.y * vector.y;
    };
    Vector.prototype.distance = function (vector) {
        return Vector.sub(this, vector).mag();
    };
    Vector.prototype.angle = function () {
        return Math.atan2(this.y, this.x);
    };
    Vector.prototype.copy = function () {
        return new Vector(this.x, this.y);
    };
    Vector.prototype.normalize = function () {
        this.div(this.mag());
    };
    Vector.prototype.setMag = function (mag) {
        this.normalize();
        this.mult(mag);
    };
    Vector.prototype.setAngle = function (angle) {
        var magnitude = this.mag();
        this.x = magnitude * Math.cos(angle);
        this.y = magnitude * Math.sin(angle);
    };
    Vector.prototype.addAngle = function (angle) {
        this.setAngle(this.angle() + angle);
    };
    Vector.prototype.limit = function (scalar) {
        if (this.mag() > scalar) {
            this.setMag(scalar);
        }
    };
    Vector.prototype.moveTowards = function (vector, speed, stop) {
        if (this.distance(vector) > stop) {
            var unit = Vector.normalize(vector);
            unit.mult(speed);
            this.add(unit);
        }
    };
    Vector.prototype.zero = function () {
        this.x = 0;
        this.y = 0;
    };
    Vector.add = function (vector1, vector2) {
        return new Vector(vector1.x + vector2.x, vector1.y + vector2.y);
    };
    Vector.sub = function (vector1, vector2) {
        return new Vector(vector1.x - vector2.x, vector1.y - vector2.y);
    };
    Vector.mult = function (vector, scalar) {
        return new Vector(vector.x * scalar, vector.y * scalar);
    };
    Vector.div = function (vector, scalar) {
        return new Vector(vector.x / scalar, vector.y / scalar);
    };
    Vector.inverse = function (vector) {
        return new Vector(vector.x * -1, vector.y * -1);
    };
    Vector.distance = function (vector1, vector2) {
        return this.sub(vector1, vector2).mag();
    };
    Vector.normalize = function (vector) {
        return this.div(vector, vector.mag());
    };
    Vector.cross = function (vector1, vector2) {
        return vector1.x * vector2.y - vector2.x * vector1.y;
    };
    Vector.random = function (x, y) {
        if (Math.random() > 0.5) {
            return new Vector(x * Math.random(), y * Math.random());
        }
        else {
            return new Vector(-x * Math.random(), -y * Math.random());
        }
    };
    return Vector;
}());
exports["default"] = Vector;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Camera_1 = __webpack_require__(4);
/**
 * This is the detail about the constructor
 * @class This is the detail about the class
 * @memberOf namespace
 * @param {Render} renderer The first argument
 */
var Scene = /** @class */ (function () {
    function Scene(renderer) {
        this.childs = [];
        this.frameRate = 0;
        this.renderer = renderer;
        this.context = this.renderer.context;
        this.camera = new Camera_1["default"](this.context);
    }
    /**
     * This method adds one element to the scene
     * @param {Graphic} element any graphic object
     * @returns {void}
     */
    Scene.prototype.add = function (element) {
        element.context = this.context;
        this.childs.push(element);
        this.organizeByZindex();
    };
    /**
     * Removes an element from the scene
     * @param {Graphic} element any graphic object
     * @returns {void}
     */
    Scene.prototype.remove = function (element) {
        this.childs.splice(this.childs.indexOf(element), 1);
    };
    /**
     * This method clears the screen
     */
    Scene.prototype.clearScreen = function () {
        this.context.save();
        this.context.setTransform(1, 0, 0, 1, 0, 0);
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.context.restore();
    };
    /**
     * This method enables or disables the image smoothing
     * @param {boolean} state enable or disable
     */
    Scene.prototype.smoth = function (state) {
        if (this.context.imageSmoothingEnabled) {
            this.context.imageSmoothingEnabled = state;
        }
        else if (this.context.mozImageSmoothingEnabled) {
            this.context.mozImageSmoothingEnabled = state;
        }
        else if (this.context.webkitImageSmoothingEnabled) {
            this.context.webkitImageSmoothingEnabled = state;
        }
    };
    /**
     * This method organizes the childs of the scene by their property z_indez
     */
    Scene.prototype.organizeByZindex = function () {
        this.childs.sort(function (a, b) { return a.z_index - b.z_index; });
    };
    /**
     * This method renders the screne ultil you call stopAutoRender
     */
    Scene.prototype.autoRender = function () {
        var _this = this;
        this.interval = setInterval(function () { return _this.render(); }, this.frameRate);
    };
    /**
     * This method stops autoRender
     */
    Scene.prototype.stopAutoRender = function () {
        clearInterval(this.interval);
    };
    /**
     * This method renders the screne
     */
    Scene.prototype.render = function () {
        this.clearScreen();
        this.childs.forEach(function (child) { return child.render(); });
        this.camera.update();
    };
    return Scene;
}());
exports["default"] = Scene;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var defaultCss = document.createElement('style');
defaultCss.type = 'text/css';
defaultCss.innerHTML = "\n* {\n  margin:0%;\n  padding: 0%;\n}\ncanvas {\n  display: block;\n}\n";
document.body.appendChild(defaultCss);
var Scene_1 = __webpack_require__(2);
exports.Scene = Scene_1["default"];
var Render_1 = __webpack_require__(5);
exports.Render = Render_1["default"];
var Graphic_1 = __webpack_require__(0);
exports.Graphic = Graphic_1["default"];
var Animation_1 = __webpack_require__(6);
exports.Animation = Animation_1["default"];
var Rect_1 = __webpack_require__(7);
exports.Rect = Rect_1["default"];
var Circle_1 = __webpack_require__(8);
exports.Circle = Circle_1["default"];
var Line_1 = __webpack_require__(9);
exports.Line = Line_1["default"];
var Poligon_1 = __webpack_require__(10);
exports.Poligon = Poligon_1["default"];
var Picture_1 = __webpack_require__(11);
exports.Picture = Picture_1["default"];
var Text_1 = __webpack_require__(12);
exports.Text = Text_1["default"];
var Arc_1 = __webpack_require__(13);
exports.Arc = Arc_1["default"];
var Group_1 = __webpack_require__(14);
exports.Group = Group_1["default"];
var Vector_1 = __webpack_require__(1);
exports.Vector = Vector_1["default"];
var Color_1 = __webpack_require__(15);
exports.Color = Color_1["default"];


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Vector_1 = __webpack_require__(1);
var Camera = /** @class */ (function () {
    function Camera(context) {
        this.keyMap = { up: 'w', down: 's', left: 'a', right: 'd' };
        this.position = new Vector_1["default"](0, 0);
        this.fLastPosition = new Vector_1["default"](0, 0);
        this.followingX = false;
        this.followingY = false;
        this.keyTranslateEnabled = false;
        this.velocity = new Vector_1["default"](0, 0);
        this.acceleration = new Vector_1["default"](0, 0);
        this.friction = 0.9;
        this.context = context;
    }
    Camera.prototype.addForce = function (force) {
        this.acceleration.add(force);
    };
    /*
      enable() {
        document.addEventListener('mousemove', (e) => {
          this.mouse.position.x = e.clientX
          this.mouse.position.y = e.clientY
        })
      }
    */
    Camera.prototype.disableKeyTranslate = function () {
    };
    Camera.prototype.enableKeyTranslate = function () {
        var _this = this;
        this.keyTranslateEnabled = true;
        document.addEventListener('keypress', function (e) {
            if (e.key.toLowerCase() === _this.keyMap.up) {
                _this.addForce(new Vector_1["default"](0, 10));
            }
            if (e.key.toLowerCase() === _this.keyMap.down) {
                _this.addForce(new Vector_1["default"](0, -10));
            }
            if (e.key.toLowerCase() === _this.keyMap.left) {
                _this.addForce(new Vector_1["default"](10, 0));
            }
            if (e.key.toLowerCase() === _this.keyMap.right) {
                _this.addForce(new Vector_1["default"](-10, 0));
            }
        });
    };
    Camera.prototype.follow = function (graphic) {
        this.followedPosition = graphic.position;
        this.fLastPosition = this.followedPosition.copy();
        this.followingX = true;
        this.followingY = true;
    };
    Camera.prototype.followX = function (graphic) {
        this.followedPosition = graphic.position;
        this.followingX = true;
    };
    Camera.prototype.followY = function (graphic) {
        this.followedPosition = graphic.position;
        this.followingY = true;
    };
    Camera.prototype.stopFollowing = function () {
        this.followingX = false;
        this.followingY = false;
    };
    Camera.prototype.stopFollowingX = function () {
        this.followingX = false;
    };
    Camera.prototype.stopFollowingY = function () {
        this.followingY = false;
    };
    Camera.prototype.zoom = function (where, howMuch) {
        this.context.translate(where.x, where.y);
        this.context.scale(howMuch.x, howMuch.y);
        this.context.translate(-where.x, -where.y);
    };
    Camera.prototype.translate = function (x, y) {
        this.context.translate(x, y);
    };
    Camera.prototype.update = function () {
        if (this.keyTranslateEnabled) {
            this.velocity.add(this.acceleration);
            this.velocity.mult(this.friction);
            this.translate(this.velocity.x, this.velocity.y);
            this.position.add(this.velocity);
            this.acceleration.zero();
        }
        if (this.followingX || this.followingY) {
            var change = Vector_1["default"].sub(this.fLastPosition, this.followedPosition);
            this.fLastPosition = this.followedPosition.copy();
            this.translate(change.x, change.y);
        }
    };
    return Camera;
}());
exports["default"] = Camera;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Vector_1 = __webpack_require__(1);
var Scene_1 = __webpack_require__(2);
var Render = /** @class */ (function () {
    function Render(canvas, width, height) {
        var _this = this;
        if (canvas)
            this.canvas = canvas;
        else {
            this.canvas = document.createElement('canvas');
            document.body.appendChild(this.canvas);
        }
        if (width && height) {
            this.canvas.width = width;
            this.canvas.height = height;
        }
        else {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', function () {
            _this.canvas.width = window.innerWidth;
            _this.canvas.height = window.innerHeight;
        });
        this.context = this.canvas.getContext('2d');
        var scene = new Scene_1["default"](this);
        this.setScene(scene);
    }
    Render.prototype.add = function (element) {
        this.scene.add(element);
    };
    Render.prototype.remove = function (element) {
        this.scene.remove(element);
    };
    Render.prototype.addMultiple = function (e) {
        var _this = this;
        e.forEach(function (m) { return _this.add(m); });
    };
    Render.prototype.getWidth = function () {
        return this.canvas.width;
    };
    Render.prototype.getHeight = function () {
        return this.canvas.height;
    };
    Render.prototype.getSize = function () {
        return new Vector_1["default"](this.canvas.width, this.canvas.height);
    };
    Render.prototype.getCenter = function () {
        return new Vector_1["default"](this.canvas.width / 2, this.canvas.height / 2);
    };
    Render.prototype.render = function () {
        this.scene.render();
    };
    Render.prototype.setScene = function (scene) {
        this.scene = scene;
        this.scene.renderer = this;
        this.scene.context = this.context;
        this.scene.smoth(false);
    };
    return Render;
}());
exports["default"] = Render;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Vector_1 = __webpack_require__(1);
var Graphic_1 = __webpack_require__(0);
var Animation = /** @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation(configuration) {
        var _this = _super.call(this, configuration) || this;
        _this.loop = true;
        _this.size = new Vector_1["default"](32, 32);
        _this.load(configuration.src);
        _this.loop = configuration.loop ? configuration.loop : true;
        _this.size = configuration.size ? configuration.size : new Vector_1["default"](32, 32);
        _this.scale = configuration.scale ? configuration.scale : new Vector_1["default"](1, 1);
        _this.frameRate = configuration.frameRate ? configuration.frameRate : 24;
        var frame = new Vector_1["default"](0, 0);
        _this.x = 0;
        _this.y = 0;
        _this.interval = setInterval(function () {
            frame.x += 1;
            _this.x = _this.size.x * frame.x;
            _this.y = _this.size.y * frame.y;
            if (_this.x >= _this.image.width) {
                frame.x = 0;
            }
            if (_this.y >= _this.image.height) {
                frame.y = 0;
                if (!_this.loop) {
                    _this.destroy();
                }
            }
            _this.x = _this.size.x * frame.x;
            _this.y = _this.size.y * frame.y;
        }, _this.frameRate);
        return _this;
    }
    Animation.prototype.mouseDown = function () {
    };
    Animation.prototype.onClick = function (func) { };
    Animation.prototype.load = function (src) {
        this.image = new Image();
        this.image.src = src;
    };
    Animation.prototype.getSize = function () {
        return new Vector_1["default"](this.size.x * this.scale.x, this.size.y * this.scale.y);
    };
    Animation.prototype.render = function () {
        this.context.drawImage(this.image, this.x, this.y, this.size.x, this.size.y, this.position.x, this.position.y, this.size.x * this.scale.x, this.size.y * this.scale.y);
    };
    Animation.prototype.destroy = function () {
        clearInterval(this.interval);
    };
    return Animation;
}(Graphic_1["default"]));
exports["default"] = Animation;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Graphic_1 = __webpack_require__(0);
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(data) {
        var _this = _super.call(this, data) || this;
        _this.color = '#FFFFFF';
        _this.width = 1;
        _this.height = 1;
        _this.lineWidth = 1;
        _this.fill = true;
        _this.stroke = false;
        _this.lineColor = '#000000';
        _this.type = "rect";
        if (data.color)
            _this.color = data.color;
        if (data.width)
            _this.width = data.width;
        if (data.height)
            _this.height = data.height;
        if (data.fill)
            _this.fill = data.fill;
        if (data.stroke)
            _this.stroke = data.stroke;
        if (data.lineWidth)
            _this.lineWidth = data.lineWidth;
        if (data.lineColor)
            _this.lineColor = data.lineColor;
        return _this;
    }
    Rect.prototype.onClick = function (func) { };
    Rect.prototype.render = function () {
        this.context.fillStyle = this.color;
        this.context.beginPath();
        if (this.fill) {
            this.context.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
        if (this.stroke) {
            this.context.strokeStyle = this.lineColor;
            this.context.lineWidth = this.lineWidth;
            this.context.strokeRect(this.position.x, this.position.y, this.width, this.height);
        }
    };
    return Rect;
}(Graphic_1["default"]));
exports["default"] = Rect;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Graphic_1 = __webpack_require__(0);
var Vector_1 = __webpack_require__(1);
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(configuration) {
        var _this = _super.call(this, configuration) || this;
        _this.radius = 5;
        _this.lineWidth = 1;
        _this.color = '#FFFFFF';
        _this.lineColor = '#000000';
        _this.stroke = false;
        _this.fill = true;
        _this.type = "circle";
        if (configuration.lineWidth)
            _this.lineWidth = configuration.lineWidth;
        if (configuration.lineColor)
            _this.lineColor = configuration.lineColor;
        if (configuration.radius)
            _this.radius = configuration.radius;
        if (configuration.stroke)
            _this.stroke = configuration.stroke;
        if (configuration.color)
            _this.color = configuration.color;
        if (configuration.fill)
            _this.fill = configuration.fill;
        return _this;
    }
    Circle.prototype.onClick = function (func) {
        var _this = this;
        var f = func.bind(this);
        document.addEventListener('click', function (event) {
            var mouse = new Vector_1["default"](event.clientX, event.clientY);
            var position = new Vector_1["default"](_this.position.x, _this.position.y);
            mouse.sub(position);
            if (mouse.mag() < _this.radius) {
                f();
            }
        });
    };
    Circle.prototype.render = function () {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        this.context.fill();
        if (this.stroke) {
            this.context.lineWidth = this.lineWidth;
            this.context.strokeStyle = this.lineColor;
            this.context.stroke();
        }
    };
    return Circle;
}(Graphic_1["default"]));
exports["default"] = Circle;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Graphic_1 = __webpack_require__(0);
var Vector_1 = __webpack_require__(1);
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line(data) {
        var _this = _super.call(this, data) || this;
        _this.start = new Vector_1["default"](0, 0);
        _this.end = new Vector_1["default"](1, 1);
        _this.type = "line";
        if (data.start)
            _this.start = data.start;
        if (data.end)
            _this.end = data.end;
        if (data.color)
            _this.color = data.color;
        _this.position = data.start;
        _this.end = new Vector_1["default"](_this.end.x - _this.start.x, _this.end.y - _this.start.y);
        return _this;
    }
    Line.prototype.render = function () {
        this.context.beginPath();
        this.context.moveTo(this.position.x, this.position.y);
        this.context.lineTo(this.end.x + this.position.x, this.end.y + this.position.y);
        this.context.stroke();
    };
    return Line;
}(Graphic_1["default"]));
exports["default"] = Line;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Graphic_1 = __webpack_require__(0);
var Vector_1 = __webpack_require__(1);
var Poligon = /** @class */ (function (_super) {
    __extends(Poligon, _super);
    function Poligon(configuration) {
        var _this = _super.call(this, configuration) || this;
        _this.fill = true;
        _this.stroke = false;
        _this.color = '#FFF';
        _this.strokeColor = '#000';
        _this.type = "poligon";
        if (configuration.color)
            _this.color = configuration.color;
        if (configuration.stroke)
            _this.stroke = configuration.stroke;
        if (configuration.cords)
            _this.cords = configuration.cords.slice(1, configuration.cords.length);
        if (configuration.fill)
            _this.fill = configuration.fill;
        if (configuration.strokeColor)
            _this.strokeColor = configuration.strokeColor;
        _this.position = configuration.cords.slice[0];
        _this.cords.filter(function (pnt) {
            return new Vector_1["default"](pnt.x - _this.position.x, pnt.y - _this.position.y);
        });
        return _this;
    }
    Poligon.prototype.render = function () {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.moveTo(this.cords[0].x, this.cords[0].y);
        for (var i = 0; i < this.cords.length; i++) {
            this.context.lineTo(this.cords[i].x + this.position.x, this.cords[i].y + this.position.y);
        }
        this.context.closePath();
        this.context.fill();
        if (this.stroke)
            this.context.stroke;
    };
    return Poligon;
}(Graphic_1["default"]));
exports["default"] = Poligon;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Graphic_1 = __webpack_require__(0);
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(data) {
        var _this = _super.call(this, data) || this;
        _this.width = 1;
        _this.height = 1;
        _this.opacity = 1;
        _this.type = "img";
        _this.image = new Image();
        _this.image.src = data.src;
        _this.width = data.width;
        _this.opacity = data.opacity;
        _this.height = data.height;
        return _this;
    }
    Picture.prototype.onClick = function (func) { };
    Picture.prototype.render = function () {
        this.context.beginPath();
        this.context.save();
        this.context.globalAlpha = this.opacity;
        this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        this.context.restore();
    };
    return Picture;
}(Graphic_1["default"]));
exports["default"] = Picture;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Graphic_1 = __webpack_require__(0);
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(configuration) {
        var _this = _super.call(this, configuration) || this;
        _this.type = "text";
        if (configuration.style)
            _this.style = configuration.style;
        if (configuration.content)
            _this.content = configuration.content;
        if (configuration.stroke)
            _this.stroke = configuration.stroke;
        return _this;
    }
    Text.prototype.render = function () {
        this.setStyle(this.style);
        if (this.stroke) {
            this.context.strokeText(this.content, this.position.x, this.position.y);
        }
        this.context.fillText(this.content, this.position.x, this.position.y);
    };
    return Text;
}(Graphic_1["default"]));
exports["default"] = Text;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Graphic_1 = __webpack_require__(0);
var Arc = /** @class */ (function (_super) {
    __extends(Arc, _super);
    function Arc(configuration) {
        var _this = _super.call(this, configuration) || this;
        _this.lineColor = '#000';
        _this.type = "arc";
        if (configuration.stroke)
            _this.stroke = configuration.stroke;
        if (configuration.color)
            _this.color = configuration.color;
        if (configuration.radius)
            _this.radius = configuration.radius;
        if (configuration.lineWidth)
            _this.lineWidth = configuration.lineWidth;
        if (configuration.eAngl)
            _this.eAngl = configuration.eAngl;
        if (configuration.aAngl)
            _this.aAngl = configuration.aAngl;
        if (configuration.lineColor)
            _this.lineColor = configuration.lineColor;
        return _this;
    }
    Arc.prototype.render = function () {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.arc(this.position.x, this.position.y, this.radius, this.eAngl, this.aAngl, true);
        if (this.stroke) {
            this.context.strokeStyle = this.lineColor;
            this.context.lineWidth = this.lineWidth;
            this.context.stroke();
        }
    };
    return Arc;
}(Graphic_1["default"]));
exports["default"] = Arc;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Vector_1 = __webpack_require__(1);
var Group = /** @class */ (function () {
    function Group() {
        this.childs = [];
        this.position = new Vector_1["default"](0, 0); // la posicion tu la tenias publica, asi que no tiene sentido ese metodo de translate que querias hacer
        this.scale = new Vector_1["default"](1, 1);
    }
    Group.prototype.add = function (child) {
        this.childs.push(child);
    };
    Group.prototype.scaling_objects = function (child) {
        var _this = this;
        if (child.type == "arc") {
            child.radius *= this.scale.x;
        }
        else if (child.type == "line") {
            child.end = new Vector_1["default"](child.end.x * this.scale.x, child.end.y * this.scale.y);
        }
        else if (child.type == "img" || child.type == "rect") {
            child.width *= this.scale.x;
            child.height *= this.scale.y;
        }
        else if (child.type == "poligon") {
            child.cords.filter(function (pnt) {
                return new Vector_1["default"](pnt.x * _this.scale.x, pnt.y * _this.scale.y);
            });
        }
        else if (child.type == "circle") {
            child.radius *= this.scale.x;
        }
        else {
            console.error("Scale isnt supported for this object");
        }
        return child;
    };
    Group.prototype.render = function () {
        var _this = this;
        this.context.save();
        this.childs.forEach(function (child) {
            var temp_child = child;
            temp_child.position.x += _this.position.x;
            temp_child.position.y += _this.position.y;
            temp_child.context = _this.context;
            temp_child = _this.scaling_objects(temp_child);
            temp_child.render();
        });
        this.context.restore();
    };
    return Group;
}());
exports["default"] = Group;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Color = /** @class */ (function () {
    function Color(red, green, blue, alpha) {
        if (red === void 0) { red = 0; }
        if (green === void 0) { green = 0; }
        if (blue === void 0) { blue = 0; }
        if (alpha === void 0) { alpha = 1; }
        this.red = Math.round(red * 255);
        this.green = Math.round(green * 255);
        this.blue = Math.round(blue * 255);
        this.alpha = alpha;
        if (this.red > 255)
            this.red = 255;
        else if (this.red < 0)
            this.red = 0;
        if (this.green > 255)
            this.green = 255;
        else if (this.green < 0)
            this.green = 0;
        if (this.blue > 255)
            this.blue = 255;
        else if (this.blue < 0)
            this.blue = 0;
        if (this.alpha > 1)
            this.alpha = 1;
        else if (this.alpha < 0)
            this.alpha = 0;
    }
    Color.prototype.setRed = function (color) {
        if (color > 255) {
            this.red = 255;
        }
        else if (color < 0) {
            this.red = 0;
        }
        else {
            this.red = color;
        }
    };
    Color.prototype.setGree = function (color) {
        if (color > 255) {
            this.green = 255;
        }
        else if (color < 0) {
            this.green = 0;
        }
        else {
            this.green = color;
        }
    };
    Color.prototype.setBlue = function (color) {
        if (color > 255) {
            this.blue = 255;
        }
        else if (color < 0) {
            this.blue = 0;
        }
        else {
            this.blue = color;
        }
    };
    Color.prototype.rgba = function () {
        return "rgba(" + this.red + ", " + this.green + ", " + this.blue + ", " + this.alpha + ")";
    };
    Color.prototype.rgb = function () {
        return "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")";
    };
    Color.random = function () {
        return new Color(Math.random(), Math.random(), Math.random());
    };
    return Color;
}());
exports["default"] = Color;


/***/ })
/******/ ]);
});