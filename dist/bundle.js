(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DibujoJs"] = factory();
	else
		root["DibujoJs"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Scene_1 = __webpack_require__(1);
exports.Scene = Scene_1["default"];
var Render_1 = __webpack_require__(2);
exports.Render = Render_1["default"];
var Sprite_1 = __webpack_require__(4);
exports.Sprite = Sprite_1["default"];
var Graphic_1 = __webpack_require__(5);
exports.Graphic = Graphic_1["default"];
var Color_1 = __webpack_require__(6);
exports.Color = Color_1["default"];


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Scene = (function () {
    function Scene() {
        this.childs = [];
    }
    Scene.prototype.add = function (element) {
        element.context = this.renderer.context;
        this.childs.push(element);
    };
    Scene.prototype.remove = function (g) {
        this.childs.splice(this.childs.indexOf(g), 1);
    };
    Scene.prototype.render = function () {
        this.childs.forEach(function (child) { return child.render(); });
    };
    return Scene;
}());
exports.__esModule = true;
exports["default"] = Scene;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var vector_class_1 = __webpack_require__(3);
var Render = (function () {
    function Render(canvasName, width, height) {
        if (canvasName) {
            this.canvas = document.getElementById(canvasName);
        }
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
        this.context = this.canvas.getContext('2d');
    }
    Render.prototype.getWidth = function () {
        return this.canvas.width;
    };
    Render.prototype.getHeight = function () {
        return this.canvas.height;
    };
    Render.prototype.getCenter = function () {
        return new vector_class_1.Vector2D(this.canvas.width / 2, this.canvas.height / 2);
    };
    Render.prototype.clear = function (color) {
        if (color === void 0) { color = '#000'; }
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.getWidth(), this.getHeight());
    };
    Render.prototype.smoth = function (state) {
        this.context.webkitImageSmoothingEnabled = state;
        this.context.mozImageSmoothingEnabled = state;
        this.context.imageSmoothingEnabled = state;
    };
    Render.prototype.setStage = function (scene) {
        this.scene = scene;
        this.scene.renderer = this;
    };
    Render.prototype.zoom = function (where, howMuch) {
        this.context.translate(where.x, where.y);
        this.context.scale(howMuch.x, howMuch.y);
        this.context.translate(-where.x, -where.y);
    };
    return Render;
}());
exports.__esModule = true;
exports["default"] = Render;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Vector"] = factory();
	else
		root["Vector"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(1);
exports.Vector2D = Vector2D_1["default"];
var Vector3D_1 = __webpack_require__(2);
exports.Vector3D = Vector3D_1["default"];


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D = (function () {
    function Vector2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector2D.prototype.add = function (vector) {
        this.x += vector.x;
        this.y += vector.y;
    };
    Vector2D.prototype.sub = function (vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    };
    Vector2D.prototype.mult = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
    };
    Vector2D.prototype.div = function (scalar) {
        this.x /= scalar;
        this.y /= scalar;
    };
    Vector2D.prototype.inverse = function () {
        this.x *= -1;
        this.y *= -1;
    };
    Vector2D.prototype.mag = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vector2D.prototype.dot = function (vector) {
        return this.x * vector.x + this.y * vector.y;
    };
    Vector2D.prototype.distance = function (vector) {
        return Vector2D.sub(this, vector).mag();
    };
    Vector2D.prototype.angle = function () {
        return Math.atan2(this.y, this.x);
    };
    Vector2D.prototype.copy = function () {
        return new Vector2D(this.x, this.y);
    };
    Vector2D.prototype.normalize = function () {
        this.div(this.mag());
    };
    Vector2D.prototype.setMag = function (mag) {
        this.normalize();
        this.mult(mag);
    };
    Vector2D.prototype.setAngle = function (angle) {
        var magnitude = this.mag();
        this.x = magnitude * Math.cos(angle);
        this.y = magnitude * Math.sin(angle);
    };
    Vector2D.prototype.addAngle = function (angle) {
        this.setAngle(this.angle() + angle);
    };
    Vector2D.prototype.limit = function (scalar) {
        if (this.mag() > scalar) {
            this.setMag(scalar);
        }
    };
    Vector2D.prototype.moveTowards = function (vector, speed, stop) {
        if (this.distance(vector) > stop) {
            var unit = Vector2D.normalize(vector);
            unit.mult(speed);
            this.add(unit);
        }
    };
    Vector2D.prototype.zero = function () {
        this.x = 0;
        this.y = 0;
    };
    Vector2D.add = function (vector1, vector2) {
        return new Vector2D(vector1.x + vector2.x, vector1.y + vector2.y);
    };
    Vector2D.sub = function (vector1, vector2) {
        return new Vector2D(vector1.x - vector2.x, vector1.y - vector2.y);
    };
    Vector2D.mult = function (vector, scalar) {
        return new Vector2D(vector.x * scalar, vector.y * scalar);
    };
    Vector2D.div = function (vector, scalar) {
        return new Vector2D(vector.x / scalar, vector.y / scalar);
    };
    Vector2D.inverse = function (vector) {
        return new Vector2D(vector.x * -1, vector.y * -1);
    };
    Vector2D.distance = function (vector1, vector2) {
        return this.sub(vector1, vector2).mag();
    };
    Vector2D.normalize = function (vector) {
        return this.div(vector, vector.mag());
    };
    Vector2D.cross = function (vector1, vector2) {
        return vector1.x * vector2.y - vector2.x * vector1.y;
    };
    Vector2D.random = function (x, y) {
        if (Math.random() > 0.5) {
            return new Vector2D(x * Math.random(), y * Math.random());
        }
        else {
            return new Vector2D(-x * Math.random(), -y * Math.random());
        }
    };
    return Vector2D;
}());
exports.__esModule = true;
exports["default"] = Vector2D;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector3D = (function () {
    function Vector3D(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector3D.prototype.add = function (vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
    };
    Vector3D.prototype.sub = function (vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;
    };
    Vector3D.prototype.mult = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
    };
    Vector3D.prototype.div = function (scalar) {
        this.x /= scalar;
        this.y /= scalar;
        this.z /= scalar;
    };
    Vector3D.prototype.inverse = function () {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
    };
    Vector3D.prototype.mag = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    };
    Vector3D.prototype.dot = function (vector) {
        return this.x * vector.x + this.y * vector.y + this.z * vector.z;
    };
    Vector3D.prototype.distance = function (vector) {
        return Vector3D.sub(this, vector).mag();
    };
    Vector3D.prototype.angle = function () {
        return Math.atan2(this.y, this.x);
    };
    Vector3D.prototype.copy = function () {
        return new Vector3D(this.x, this.y, this.z);
    };
    Vector3D.prototype.normalize = function () {
        this.div(this.mag());
    };
    Vector3D.prototype.setMag = function (mag) {
        this.normalize();
        this.mult(mag);
    };
    Vector3D.prototype.setAngle = function (angle) {
        var magnitude = this.mag();
        this.x = magnitude * Math.cos(angle);
        this.y = magnitude * Math.sin(angle);
    };
    Vector3D.prototype.addAngle = function (angle) {
        this.setAngle(this.angle() + angle);
    };
    Vector3D.prototype.limit = function (scalar) {
        if (this.mag() > scalar) {
            this.setMag(scalar);
        }
    };
    Vector3D.prototype.moveTowards = function (vector, speed, stop) {
        if (this.distance(vector) > stop) {
            var unit = Vector3D.normalize(vector);
            unit.mult(speed);
            this.add(unit);
        }
    };
    Vector3D.prototype.zero = function () {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    };
    Vector3D.add = function (vector1, vector2) {
        return new Vector3D(vector1.x + vector2.x, vector1.y + vector2.y, vector1.z + vector2.z);
    };
    Vector3D.sub = function (vector1, vector2) {
        return new Vector3D(vector1.x - vector2.x, vector1.y - vector2.y, vector1.z - vector2.z);
    };
    Vector3D.mult = function (vector, scalar) {
        return new Vector3D(vector.x * scalar, vector.y * scalar, vector.z * scalar);
    };
    Vector3D.div = function (vector, scalar) {
        return new Vector3D(vector.x / scalar, vector.y / scalar, vector.z / scalar);
    };
    Vector3D.inverse = function (vector) {
        return new Vector3D(vector.x * -1, vector.y * -1, vector.z * -1);
    };
    Vector3D.distance = function (vector1, vector2) {
        return this.sub(vector1, vector2).mag();
    };
    Vector3D.normalize = function (vector) {
        return this.div(vector, vector.mag());
    };
    Vector3D.cross = function (vector1, vector2) {
        return vector1.x * vector2.y - vector2.x * vector1.y;
    };
    Vector3D.random = function (x, y, z) {
        if (Math.random() > 0.5) {
            return new Vector3D(x * Math.random(), y * Math.random(), z * Math.random());
        }
        else {
            return new Vector3D(-x * Math.random(), -y * Math.random(), -z * Math.random());
        }
    };
    return Vector3D;
}());
exports.__esModule = true;
exports["default"] = Vector3D;


/***/ })
/******/ ]);
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global Image */

var Sprite = (function () {
    function Sprite(src, position, scale, rotation, anchor) {
        this.load(src);
        this.position = position;
        this.scale = scale;
        this.anchor = anchor;
        this.rotation = rotation;
    }
    Sprite.prototype.load = function (src) {
        this.image = new Image();
        this.image.src = src;
    };
    Sprite.prototype.render = function () {
        this.context.save();
        this.context.rotate(this.rotation);
        var realWidth = this.scale.x * this.image.width;
        var realHeight = this.scale.y * this.image.height;
        this.context.drawImage(this.image, -(realWidth * this.anchor.x), -(realHeight * this.anchor.y), realWidth, realHeight);
        this.context.restore();
    };
    return Sprite;
}());
exports.__esModule = true;
exports["default"] = Sprite;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Graphic = (function () {
    function Graphic(renderFunction, position, scale, rotation) {
        this.renderFunction = renderFunction.bind(this);
        this.position = position;
        this.scale = scale;
        this.rotation = rotation;
    }
    Graphic.prototype.line = function (start, end, style) {
        this.context.beginPath();
        this.setStyle(style);
        this.context.moveTo(start[0], start[1]);
        this.context.lineTo(end[0], end[1]);
        this.context.stroke();
    };
    Graphic.prototype.poligon = function (vecs, color) {
        this.context.beginPath();
        this.context.fillStyle = color;
        this.context.moveTo(vecs[0][0], vecs[0][1]);
        for (var i = 0; i < vecs.length; i++) {
            this.context.lineTo(vecs[i][0], vecs[i][1]);
        }
        this.context.closePath();
        this.context.fill();
    };
    Graphic.prototype.strokePoligon = function (vecs, color) {
        this.context.beginPath();
        this.context.fillStyle = color;
        this.context.moveTo(vecs[0][0], vecs[0][1]);
        for (var i = 0; i < vecs.length; i++) {
            this.context.lineTo(vecs[i][0], vecs[i][1]);
        }
        this.context.closePath();
        this.context.stroke();
    };
    Graphic.prototype.rect = function (x, y, width, height, color) {
        if (color === void 0) { color = '#fff'; }
        this.context.beginPath();
        this.context.fillStyle = color;
        this.context.fillRect(x, y, width, height);
    };
    Graphic.prototype.strokeRect = function (x, y, width, height, color, lineWidth) {
        if (color === void 0) { color = '#fff'; }
        this.context.beginPath();
        this.context.strokeStyle = color;
        this.context.strokeRect(x, y, width, height);
    };
    Graphic.prototype.setStyle = function (styles) {
        for (var style in styles) {
            this.context[style] = styles[style];
        }
    };
    Graphic.prototype.text = function (texto, x, y, style, stroke) {
        this.setStyle(style);
        if (stroke) {
            this.context.strokeText(texto, x, y);
        }
        this.context.fillText(texto, x, y);
    };
    Graphic.prototype.strokeCircle = function (x, y, radius, color, width) {
        if (color === void 0) { color = '#fff'; }
        if (width === void 0) { width = 1; }
        this.context.beginPath();
        this.context.strokeStyle = color;
        this.context.arc(x, y, radius, 0, 2 * Math.PI);
        this.context.lineWidth = width;
        this.context.stroke();
    };
    Graphic.prototype.circle = function (x, y, radius, color) {
        if (color === void 0) { color = '#fff'; }
        this.context.beginPath();
        this.context.fillStyle = color;
        this.context.arc(x, y, radius, 0, 2 * Math.PI);
        this.context.fill();
    };
    Graphic.prototype.strokeArc = function (x, y, radius, lineWidth, eAngl, aAngl, color) {
        this.context.beginPath();
        this.context.strokeStyle = color;
        this.context.arc(x, y, radius, eAngl, aAngl, true);
        this.context.lineWidth = lineWidth;
        this.context.stroke();
    };
    Graphic.prototype.render = function () {
        this.context.save();
        this.context.scale(this.scale.x, this.scale.y);
        this.context.rotate(this.rotation);
        this.renderFunction();
        this.context.restore();
    };
    return Graphic;
}());
exports.__esModule = true;
exports["default"] = Graphic;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Color = (function () {
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
exports.__esModule = true;
exports["default"] = Color;


/***/ })
/******/ ]);
});