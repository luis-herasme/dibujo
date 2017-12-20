(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
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