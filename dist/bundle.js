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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Vector = /** @class */ (function () {
    function Vector(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
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
        if (speed === void 0) { speed = 1; }
        if (stop === void 0) { stop = 1; }
        if (this.distance(vector) > stop) {
            var unit = Vector.normalize(Vector.sub(vector, this));
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
    Vector.randomP = function (x, y) {
        return new Vector(x * Math.random(), y * Math.random());
    };
    Vector.random = function (x, y) {
        var s1 = 1;
        var s2 = 1;
        if (Math.random() > 0.5)
            s1 = -1;
        if (Math.random() > 0.5)
            s2 = -1;
        return new Vector(x * Math.random() * s1, y * Math.random() * s2);
    };
    return Vector;
}());
exports["default"] = Vector;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Vector_1 = __webpack_require__(0);
var Properties_1 = __webpack_require__(10);
var Graphic = /** @class */ (function () {
    function Graphic(data) {
        this.weight = Properties_1.weights.normal;
        this.fill = true;
        this.stroke = false;
        this.anchor = new Vector_1["default"](0.5, 0.5);
        this.position = new Vector_1["default"](0, 0);
        this.color = 'grey';
        this.family = 'Arial';
        this.lineCap = Properties_1.LineCap.round;
        this.lineJoin = Properties_1.LineJoin.round;
        this.lineColor = 'rgb(0, 0, 0)';
        this.textAlign = 'center';
        this.shadowColor = 'rgba(0, 0, 0, 0)';
        this.textBaseline = 'middle';
        this.size = 12;
        this.rotation = 0;
        this.z_index = 1;
        this.lineWidth = 1;
        this.miterLimit = 10;
        this.shadowBlur = 0;
        this.shadowOffsetX = 0;
        this.shadowOffsetY = 0;
        this.childs = [];
        if (data) {
            if (data.stroke !== undefined) {
                if (typeof data.stroke === 'boolean') {
                    this.stroke = data.stroke;
                }
                else {
                    console.error("Type of stroke is not boolean");
                }
            }
            else {
                this.stroke = false;
            }
            if (data.fill !== undefined) {
                if (typeof data.fill === 'boolean') {
                    this.fill = data.fill;
                }
                else {
                    console.error("Type of fill is not boolean");
                }
            }
            else {
                this.fill = true;
            }
            this.weight = data.weights ? data.weights : Properties_1.weights.normal;
            this.anchor = data.anchor ? data.anchor : new Vector_1["default"](0.5, 0.5);
            this.position = data.position ? data.position : new Vector_1["default"](0, 0);
            this.z_index = data.z_index ? data.z_index : 1;
            this.shadowBlur = data.shadowBlur ? data.shadowBlur : 0;
            this.shadowOffsetX = data.shadowOffsetX ? data.shadowOffsetX : 0;
            this.shadowOffsetY = data.shadowOffsetY ? data.shadowOffsetY : 0;
            this.shadowColor = data.shadowColor ? data.shadowColor : 'rgba(0,0,0,0)';
            this.miterLimit = data.miterLimit ? data.miterLimit : 10;
            this.lineCap = data.lineCap ? data.lineCap : Properties_1.LineCap.round;
            this.color = data.color ? data.color : 'grey';
            this.family = data.family ? data.family : 'Arial';
            this.lineJoin = data.lineJoin ? data.lineJoin : Properties_1.LineJoin.round;
            this.lineColor = data.lineColor ? data.lineColor : 'rgb(0, 0, 0)';
            this.textAlign = data.textAlign ? data.textAlign : 'center';
            this.textBaseline = data.textBaseline ? data.textBaseline : 'middle';
            this.size = data.size ? data.size : 12;
            this.rotation = data.rotation ? data.rotation : 0;
            this.lineWidth = data.lineWidth ? data.lineWidth : 1;
        }
    }
    Graphic.prototype.add = function (child) {
        child.context = this.context;
        this.childs.push(child);
    };
    Graphic.prototype.remove = function (child) {
        this.childs.push(child);
    };
    Graphic.prototype.font = function () {
        return this.weight + " " + this.size + "px " + this.family;
    };
    Graphic.prototype.setStyle = function () {
        this.context.font = this.font();
        this.context.fillStyle = this.color;
        this.context.lineCap = this.lineCap;
        this.context.lineJoin = this.lineJoin;
        this.context.lineColor = this.lineColor;
        this.context.lineWidth = this.lineWidth;
        this.context.textAlign = this.textAlign;
        this.context.shadowColor = this.shadowColor;
        this.context.textBaseline = this.textBaseline;
        this.context.miterLimit = this.miterLimit;
        this.context.shadowBlur = this.shadowBlur;
        this.context.shadowOffsetX = this.shadowOffsetX;
        this.context.shadowOffsetY = this.shadowOffsetY;
    };
    Graphic.prototype.render = function () {
        this.context.save();
        this.context.beginPath();
        if (this.context.fill || this.context.stroke) {
            this.setStyle();
            this.selfRender();
        }
        this.context.restore();
    };
    Graphic.prototype.selfRender = function () { };
    return Graphic;
}());
exports["default"] = Graphic;
/*
locate() {
  // this.context.anchor:         Vector = new Vector(0.5, 0.5)
  this.context.translate(this.position.x, this.position.y)
  this.context.rotate(this.rotation)
}

var pat=ctx.createPattern(img,"repeat");
ctx.fillStyle=pat;
// this.context.linearGradient: any
public linearGradient: any

// renderChild() { }
*/


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var defaultCss = document.createElement('style');
defaultCss.type = 'text/css';
defaultCss.innerHTML = "\n* {\n  margin:0%;\n  padding: 0%;\n}\ncanvas {\n  display: block;\n}\n";
document.head.appendChild(defaultCss);
var Scene_1 = __webpack_require__(3);
exports.Scene = Scene_1["default"];
var Render_1 = __webpack_require__(11);
exports.Render = Render_1["default"];
var LinearGradient_1 = __webpack_require__(6);
exports.LinearGradient = LinearGradient_1["default"];
var Group_1 = __webpack_require__(12);
exports.Group = Group_1["default"];
var Vector_1 = __webpack_require__(0);
exports.Vector = Vector_1["default"];
var Color_1 = __webpack_require__(13);
exports.Color = Color_1["default"];
// Graphics
var Animation_1 = __webpack_require__(14);
exports.Animation = Animation_1["default"];
var Graphic_1 = __webpack_require__(1);
exports.Graphic = Graphic_1["default"];
var Ellipse_1 = __webpack_require__(15);
exports.Ellipse = Ellipse_1["default"];
var Poligon_1 = __webpack_require__(16);
exports.Poligon = Poligon_1["default"];
var Picture_1 = __webpack_require__(4);
exports.Picture = Picture_1["default"];
var Circle_1 = __webpack_require__(17);
exports.Circle = Circle_1["default"];
var Video_1 = __webpack_require__(5);
exports.Video = Video_1["default"];
var Rect_1 = __webpack_require__(18);
exports.Rect = Rect_1["default"];
var Line_1 = __webpack_require__(19);
exports.Line = Line_1["default"];
var Text_1 = __webpack_require__(20);
exports.Text = Text_1["default"];
var Arc_1 = __webpack_require__(21);
exports.Arc = Arc_1["default"];
var BezierCurve_1 = __webpack_require__(22);
exports.BezierCurve = BezierCurve_1["default"];
var QuadraticCurve_1 = __webpack_require__(23);
exports.QuadraticCurve = QuadraticCurve_1["default"];
// Events
var Mouse_1 = __webpack_require__(24);
var KeyBoard_1 = __webpack_require__(25);
var mouse = new Mouse_1["default"]();
exports.mouse = mouse;
var keyboard = new KeyBoard_1["default"]();
exports.keyboard = keyboard;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Camera_1 = __webpack_require__(9);
var Picture_1 = __webpack_require__(4);
var Video_1 = __webpack_require__(5);
/**
 * This is the detail about the constructor
 * @class This is the detail about the class
 * @memberOf namespace
 * @param {Render} renderer The first argument
 */
var Scene = /** @class */ (function () {
    function Scene(renderer) {
        this.backgroundColor = 'black';
        this.childs = [];
        this.frameRate = 0;
        this.ready = false;
        this.renderer = renderer;
        this.context = this.renderer.context;
        this.camera = new Camera_1["default"](this.context);
    }
    Scene.prototype.dataLoaded = function () {
        // Gets all the pictures and videos from the scene.
        var elements = this.childs.filter(function (child) {
            if (child instanceof Picture_1["default"])
                return true;
            if (child instanceof Video_1["default"])
                return true;
            return false;
        });
        // If there is an image that is not loaded returns false
        return !elements.some(function (element) { return !element.ready; });
    };
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
        var index = this.childs.indexOf(element);
        if (index >= 0) {
            this.childs.splice(index, 1);
        }
    };
    /**
     * This method clears the screen
     */
    Scene.prototype.clearScreen = function () {
        this.context.save();
        this.context.setTransform(1, 0, 0, 1, 0, 0);
        this.context.fillStyle = this.backgroundColor;
        this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
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
    Scene.prototype.autoRender = function (func) {
        var _this = this;
        this.interval = setInterval(function () {
            if (func)
                func();
            _this.render();
        }, this.frameRate);
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
        if (!this.dataLoaded()) {
            console.info('Waiting for images to load...');
            setTimeout(this.render.bind(this), 100);
        }
        else {
            this.clearScreen();
            this.childs.forEach(function (child) { return child.render(); });
            this.camera.update();
        }
    };
    return Scene;
}());
exports["default"] = Scene;


/***/ }),
/* 4 */
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
var Graphic_1 = __webpack_require__(1);
var Vector_1 = __webpack_require__(0);
// Imaginary canvas
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(data) {
        var _this = _super.call(this, data) || this;
        _this.type = "img";
        _this.ready = false;
        _this.todo = [];
        _this.params = [];
        _this.image = new Image();
        _this.image.src = data.src;
        _this.image.addEventListener('load', function () {
            _this.ready = true;
            _this.todo.forEach(function (met, i) {
                met.apply(void 0, _this.params[i]);
            });
        });
        _this.image.addEventListener('error', function () {
            console.error('Error loading the image...');
        });
        _this.angle = data.angle ? data.angle : 0;
        _this.opacity = data.opacity ? data.opacity : 1;
        _this.width = data.width ? data.width : _this.image.width;
        _this.height = data.height ? data.height : _this.image.height;
        return _this;
    }
    Picture.prototype.filter = function () {
    };
    Picture.prototype.getImageData = function () {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        canvas.width = this.width;
        canvas.height = this.height;
        context.drawImage(this.image, 0, 0, this.width, this.height);
        return context.getImageData(0, 0, this.width, this.height);
    };
    Picture.prototype.removeColor = function (color) {
        if (this.ready) {
            var image = void 0;
            if (!this.data) {
                image = this.getImageData();
            }
            else {
                image = this.data;
            }
            for (var pixel = 0; pixel < image.data.length; pixel += 4) {
                if (image.data[pixel] === color[0] && image.data[pixel + 1] === color[1] && image.data[pixel + 2] === color[2]) {
                    image.data[pixel + 3] = 0;
                }
            }
            this.data = image;
            this.render = this.renderData;
        }
        else {
            this.todo.push(this.removeColor.bind(this));
            this.params.push([color]);
        }
    };
    Picture.prototype.onClick = function (func) {
    };
    Picture.prototype.realPosition = function () {
        return new Vector_1["default"](this.position.x - (this.anchor.x * this.width), this.position.y - (this.anchor.y * this.height));
    };
    Picture.prototype.renderData = function () {
        //  console.log('here')
        //console.log(this.data)
        this.context.beginPath();
        this.context.save();
        // this.context.translate(this.position.x -(this.anchor.x *  this.width), this.position.y -(this.anchor.y *  this.height))
        //this.context.rotate(this.angle)
        // this.context.globalAlpha = this.opacity
        // console.log(this.data)
        this.context.putImageData(this.data, this.position.x - (this.anchor.x * this.width), this.position.y - (this.anchor.y * this.height)); // -(this.anchor.x *  this.width), -(this.anchor.y *  this.height), this.position.x, this.position.y, this.width, this.height)
        // this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        this.context.restore();
    };
    Picture.prototype.render = function () {
        this.context.beginPath();
        this.context.save();
        this.context.translate(this.position.x, this.position.y);
        this.context.rotate(this.angle);
        this.context.globalAlpha = this.opacity;
        this.context.drawImage(this.image, -(this.anchor.x * this.width), -(this.anchor.y * this.height), this.width, this.height);
        // this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        this.context.restore();
    };
    return Picture;
}(Graphic_1["default"]));
exports["default"] = Picture;


/***/ }),
/* 5 */
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
var Graphic_1 = __webpack_require__(1);
var Vector_1 = __webpack_require__(0);
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video(data) {
        var _this = _super.call(this, data) || this;
        _this.type = "img";
        _this.ready = false;
        _this.todo = [];
        _this.params = [];
        _this.filterEnable = false;
        _this.filterColors = [];
        _this.video = document.createElement('video');
        _this.video.src = data.src;
        _this.video.play();
        _this.video.crossOrigin = "Anonymous";
        _this.video.addEventListener('loadedmetadata', function () {
            _this.ready = true;
            console.info("Video " + data.src + " correctly loaded.");
            console.log(_this.todo);
            console.log(_this.params);
            _this.todo.forEach(function (met, i) {
                met.apply(void 0, _this.params[i]);
            });
        });
        _this.video.addEventListener('error', function () {
            console.error('Error loading the video...');
        });
        _this.angle = data.angle ? data.angle : 0;
        _this.opacity = data.opacity ? data.opacity : 1;
        _this.width = data.width ? data.width : _this.video.width;
        _this.height = data.height ? data.height : _this.video.height;
        return _this;
    }
    Video.prototype.filter = function () {
    };
    Video.prototype.getImageData = function () {
        var canvas = document.createElement('canvas');
        // console.log(canvas)
        document.body.appendChild(canvas);
        var context = canvas.getContext('2d');
        canvas.width = this.width;
        canvas.height = this.height;
        context.translate((this.anchor.x * this.width), (this.anchor.y * this.height));
        context.rotate(this.angle);
        context.drawImage(this.video, -(this.anchor.x * this.width), -(this.anchor.y * this.height), this.width, this.height);
        document.body.removeChild(canvas);
        // return context.getImageData( -this.width / 2 , - this.height/2, this.width + this.width/2, this.height + this.height/2)
        return context.getImageData(0, 0, this.width, this.height);
    };
    /*
      removeColor(color: Array<number>) {
        if (this.ready) {
          let image
          if (!this.data) {
            image = this.getImageData()
          } else {
            image = this.data
          }
    
          for (let pixel = 0; pixel < image.data.length; pixel += 4) {
            if (image.data[pixel] === color[0] && image.data[pixel + 1] === color[1] && image.data[pixel + 2] === color[2]) {
              image.data[pixel + 3] = 0
            }
          }
    
          this.data = image
          this.render = this.renderData
        } else {
          this.todo.push(this.removeColor.bind(this))
          this.params.push([color])
        }
      }
    */
    Video.prototype.onClick = function (func) {
    };
    Video.prototype.realPosition = function () {
        return new Vector_1["default"](this.position.x - (this.anchor.x * this.width), this.position.y - (this.anchor.y * this.height));
    };
    Video.prototype.renderData = function () {
        if (this.filterEnable) {
            this.filterColor(this.filterColors[0], this.filterColors[1], this.filterColors[2]);
        }
        //  console.log('here')
        //console.log(this.data)
        this.context.beginPath();
        this.context.save();
        // this.context.translate(this.position.x -(this.anchor.x *  this.width), this.position.y -(this.anchor.y *  this.height))
        // this.context.rotate(this.angle)
        // this.context.globalAlpha = this.opacity
        // console.log(this.data)
        this.context.putImageData(this.data, this.position.x - (this.anchor.x * this.width), this.position.y - (this.anchor.y * this.height)); // -(this.anchor.x *  this.width), -(this.anchor.y *  this.height), this.position.x, this.position.y, this.width, this.height)
        // this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        this.context.restore();
    };
    Video.prototype.filterColor = function (r, g, b) {
        if (this.ready) {
            this.filterEnable = true;
            this.filterColors = [r, g, b];
            var image = this.getImageData();
            for (var pixel = 0; pixel < image.data.length; pixel += 4) {
                image.data[pixel] += r;
                image.data[pixel + 1] += g;
                image.data[pixel + 2] += b;
                // image.data[pixel + 3]
            }
            this.data = image;
            this.render = this.renderData;
        }
        else {
            this.todo.push(this.filterColor.bind(this));
            this.params.push([r, g, b]);
        }
    };
    Video.prototype.render = function () {
        this.context.beginPath();
        this.context.save();
        this.context.translate(this.position.x, this.position.y);
        this.context.rotate(this.angle);
        this.context.globalAlpha = this.opacity;
        this.context.drawImage(this.video, -(this.anchor.x * this.width), -(this.anchor.y * this.height), this.width, this.height);
        // this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        this.context.restore();
    };
    return Video;
}(Graphic_1["default"]));
exports["default"] = Video;


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
var Graphic_1 = __webpack_require__(1);
var Vector_1 = __webpack_require__(0);
var LinearGradient = /** @class */ (function (_super) {
    __extends(LinearGradient, _super);
    function LinearGradient(config) {
        var _this = _super.call(this, config) || this;
        _this.context = config.context;
        _this.size = config.size ? config.size : new Vector_1["default"](100, 100);
        _this.gradient = _this.context.createLinearGradient(_this.position.x, _this.position.y, _this.size.x, _this.size.y);
        var counter = 0;
        for (var _i = 0, _a = config.colors; _i < _a.length; _i++) {
            var color = _a[_i];
            _this.gradient.addColorStop(counter, color);
            // console.log(1 / config.colors.length)
            counter += 1 / config.colors.length;
        }
        return _this;
    }
    return LinearGradient;
}(Graphic_1["default"]));
exports["default"] = LinearGradient;


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
var Graphic_1 = __webpack_require__(1);
var Vector_1 = __webpack_require__(0);
var CircleEvents = /** @class */ (function (_super) {
    __extends(CircleEvents, _super);
    function CircleEvents(configuration) {
        var _this = _super.call(this, configuration) || this;
        // Private
        _this.mouseDownEnabled = false;
        _this.dragStartEnabled = false;
        _this.dragEndEnabled = false;
        _this.dragingEnabled = false;
        _this.mouseUpEnabled = false;
        _this.hoverEnabled = false;
        _this.moveEnabled = false;
        _this.moveMethods = [];
        _this.mouseDownMethods = [];
        _this.mouseUpMethods = [];
        _this.hoverMethods = [];
        _this.dragStartMethods = [];
        _this.dragEndMethods = [];
        _this.dragingMethods = [];
        if (configuration) {
            if (configuration.radius)
                _this.radius = configuration.radius;
        }
        return _this;
    }
    CircleEvents.prototype.checkIfInside = function (point) {
        return this.position.distance(point) < this.radius;
    };
    CircleEvents.prototype.enableEvent = function (eventName, methods) {
        var _this = this;
        var mouse;
        document.addEventListener(eventName, function (event) {
            mouse = new Vector_1["default"](event.clientX, event.clientY);
            if (_this.checkIfInside(mouse)) {
                methods.forEach(function (method) { return method(mouse); });
            }
        });
    };
    CircleEvents.prototype.mouseDown = function (func) {
        if (!this.mouseDownEnabled) {
            this.mouseDownEnabled = !this.mouseDownEnabled;
            this.enableEvent('mousedown', this.mouseDownMethods);
        }
        this.mouseDownMethods.push(func.bind(this));
    };
    CircleEvents.prototype.mouseUp = function (func) {
        if (!this.mouseUpEnabled) {
            this.mouseUpEnabled = !this.mouseUpEnabled;
            this.enableEvent('mouseup', this.mouseUpMethods);
        }
        this.mouseUpMethods.push(func.bind(this));
    };
    CircleEvents.prototype.hover = function (func) {
        if (!this.hoverEnabled) {
            this.hoverEnabled = !this.hoverEnabled;
            this.enableEvent('mousemove', this.hoverMethods);
        }
        this.hoverMethods.push(func.bind(this));
    };
    CircleEvents.prototype.mouseMove = function (func) {
        var _this = this;
        if (!this.moveEnabled) {
            this.moveEnabled = !this.moveEnabled;
            var mouse_1;
            document.addEventListener('mousemove', function (event) {
                mouse_1 = new Vector_1["default"](event.clientX, event.clientY);
                _this.moveMethods.forEach(function (method) { return method(mouse_1); });
            });
        }
        func = func.bind(this);
        this.moveMethods.push(func);
    };
    CircleEvents.prototype.dragStart = function (func) {
        this.dragStartMethods.push(func.bind(this));
    };
    CircleEvents.prototype.draging = function (func) {
        this.dragingMethods.push(func.bind(this));
    };
    CircleEvents.prototype.dragEnd = function (func) {
        this.dragEndMethods.push(func.bind(this));
    };
    CircleEvents.prototype.enableMouseDrag = function () {
        var _this = this;
        var isDraging = false;
        var distance = new Vector_1["default"]();
        document.addEventListener('mousemove', function (event) {
            if (isDraging) {
                _this.position = Vector_1["default"].add(distance, new Vector_1["default"](event.clientX, event.clientY));
                _this.dragingMethods.forEach(function (meth) { return meth(); });
            }
        });
        this.mouseDown(function (mouse) {
            if (!isDraging) {
                document.body.style.cursor = 'pointer';
                isDraging = true;
                distance = Vector_1["default"].sub(_this.position, mouse);
                _this.position = Vector_1["default"].add(distance, mouse);
                _this.dragStartMethods.forEach(function (meth) { return meth(); });
            }
        });
        this.mouseUp(function () {
            if (isDraging) {
                document.body.style.cursor = 'default';
                isDraging = false;
                _this.dragEndMethods.forEach(function (meth) { return meth(); });
            }
        });
    };
    return CircleEvents;
}(Graphic_1["default"]));
exports["default"] = CircleEvents;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Event = /** @class */ (function () {
    function Event() {
        this.events = {
            // Mouse
            mousemove: [],
            mouseup: [],
            mousedown: [],
            mousemoveActive: false,
            mousedownActive: false,
            mouseupActive: false,
            // KeyBoard
            keypress: [],
            keyup: [],
            keydown: [],
            keypressActive: false,
            keydownActive: false,
            keyupActive: false
        };
    }
    Event.prototype.initEvent = function (name) {
        var _this = this;
        document.addEventListener(name, function (event) {
            _this.events[name].forEach(function (func) { return func(_this, event); });
        });
    };
    return Event;
}());
exports["default"] = Event;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Vector_1 = __webpack_require__(0);
var index_1 = __webpack_require__(2);
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
    Camera.prototype.getMouse = function () {
        return Vector_1["default"].add(index_1.mouse.position, this.position);
    };
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
        this.position.x -= x;
        this.position.y -= y;
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var LineCap;
(function (LineCap) {
    LineCap["butt"] = "butt";
    LineCap["square"] = "square";
    LineCap["round"] = "round";
})(LineCap = exports.LineCap || (exports.LineCap = {}));
var LineJoin;
(function (LineJoin) {
    LineJoin["bevel"] = "bevel";
    LineJoin["round"] = "round";
    LineJoin["miter"] = "miter";
})(LineJoin = exports.LineJoin || (exports.LineJoin = {}));
var Pattern;
(function (Pattern) {
    Pattern["repeat"] = "repeat";
    Pattern["repeat_x"] = "repeat-x";
    Pattern["repeat_y"] = "repeat-y";
    Pattern["no_repeat"] = "no-repeat";
})(Pattern = exports.Pattern || (exports.Pattern = {}));
var weights;
(function (weights) {
    weights["lighter"] = "lighter";
    weights["normal"] = "normal";
    weights["bolder"] = "bolder";
    weights["bold"] = "bold";
})(weights = exports.weights || (exports.weights = {}));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Vector_1 = __webpack_require__(0);
var Scene_1 = __webpack_require__(3);
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
    Render.prototype.autoUpdateRender = function (func) {
        this.scene.autoRender(func);
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
    Render.prototype.getCanvasImage = function () {
        return this.canvas.toDataURL();
    };
    /*
      filter () {
        let image = new Image()
        image.src = this.getCanvasImage()
    
      }
    */
    Render.prototype.fullScreen = function () {
        var _this = this;
        var isFull = false;
        document.addEventListener('click', function () {
            if (!isFull) {
                _this.canvas.webkitRequestFullScreen();
            }
        });
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Vector_1 = __webpack_require__(0);
var Group = /** @class */ (function () {
    function Group() {
        this.childs = [];
        this.position = new Vector_1["default"](0, 0); // la posicion tu la tenias publica, asi que no tiene sentido ese metodo de translate que querias hacer
        this.scale = new Vector_1["default"](1, 1);
    }
    Group.prototype.add = function (child) {
        this.childs.push(child);
    };
    Group.prototype.scaleObject = function (child) {
        var _this = this;
        if (child.type == "arc") {
            child.radius *= this.scale.x;
            child.render();
            child.radius /= this.scale.x;
        }
        else if (child.type == "line") {
            child.end = new Vector_1["default"](child.end.x * this.scale.x, child.end.y * this.scale.y);
            child.render();
            child.end = new Vector_1["default"](child.end.x / this.scale.x, child.end.y / this.scale.y);
        }
        else if (child.type == "img" || child.type == "rect") {
            child.width *= this.scale.x;
            child.height *= this.scale.y;
            child.render();
            child.width /= this.scale.x;
            child.height /= this.scale.y;
        }
        else if (child.type == "poligon") {
            child.cords.filter(function (pnt) {
                return new Vector_1["default"](pnt.x * _this.scale.x, pnt.y * _this.scale.y);
            });
            child.render();
            child.cords.filter(function (pnt) {
                return new Vector_1["default"](pnt.x / _this.scale.x, pnt.y / _this.scale.y);
            });
        }
        else if (child.type == "circle") {
            child.radius *= this.scale.x;
            child.render();
            child.radius /= this.scale.x;
        }
        else {
            throw "error, no se puede escalar dicho objeto";
        }
        return child;
    };
    Group.prototype.render = function () {
        var _this = this;
        // this.context.save()
        this.childs.forEach(function (child) {
            child.position.add(_this.position);
            child.context = _this.context;
            child.render();
            child.position.sub(_this.position);
        });
        // this.context.restore()
    };
    return Group;
}());
exports["default"] = Group;


/***/ }),
/* 13 */
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


/***/ }),
/* 14 */
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
var Vector_1 = __webpack_require__(0);
var Graphic_1 = __webpack_require__(1);
var Animation = /** @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation(configuration) {
        var _this = _super.call(this, configuration) || this;
        _this.loop = true;
        _this.size = new Vector_1["default"](32, 32);
        _this.frame = new Vector_1["default"](0, 0);
        _this.animationPlaying = false;
        _this.load(configuration.src);
        _this.loop = configuration.loop ? configuration.loop : true;
        _this.size = configuration.size ? configuration.size : new Vector_1["default"](32, 32);
        _this.scale = configuration.scale ? configuration.scale : new Vector_1["default"](1, 1);
        _this.frameRate = configuration.frameRate ? configuration.frameRate : 24;
        _this.animations = configuration.animations;
        _this.x = 0;
        _this.y = 0;
        return _this;
    }
    Animation.prototype.playAnimation = function (name) {
        if (!this.animationPlaying) {
            this.animationPlaying = true;
            this.frame.x = 0;
            this.frame.y = this.animations[name][1];
            this.reproduceAnimation(name);
        }
    };
    Animation.prototype.reproduceAnimation = function (name) {
        var _this = this;
        this.x = this.size.x * this.frame.x;
        this.y = this.size.y * this.frame.y;
        this.frame.x += 1;
        if (this.frame.x >= this.animations[name][0]) {
            this.animationPlaying = false;
        }
        else {
            setTimeout(function () { return _this.reproduceAnimation(name); }, this.frameRate);
        }
    };
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
/* 15 */
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
var Graphic_1 = __webpack_require__(1);
var Vector_1 = __webpack_require__(0);
var LinearGradient_1 = __webpack_require__(6);
var Ellipse = /** @class */ (function (_super) {
    __extends(Ellipse, _super);
    function Ellipse(configuration) {
        var _this = _super.call(this, configuration) || this;
        _this.radiusX = 10;
        _this.radiusY = 5;
        if (configuration) {
            _this.lineWidth = configuration.lineWidth ? configuration.lineWidth : _this.lineWidth;
            _this.lineColor = configuration.lineColor ? configuration.lineColor : _this.lineColor;
            _this.radiusX = configuration.radiusX ? configuration.radiusX : _this.radiusX;
            _this.radiusY = configuration.radiusY ? configuration.radiusY : _this.radiusY;
            _this.stroke = configuration.stroke ? configuration.stroke : _this.stroke;
            _this.color = configuration.color ? configuration.color : _this.color;
            _this.fill = configuration.fill ? configuration.fill : _this.fill;
            if (configuration.linearGradient) {
                _this.linearGradient = configuration.linearGradient;
                // this.render = this.renderGradient
            }
        }
        return _this;
    }
    Ellipse.prototype.renderGradient = function () {
        this.color = new LinearGradient_1["default"]({
            context: this.context,
            colors: this.linearGradient,
            size: new Vector_1["default"](this.position.x, this.position.y + this.radiusY),
            position: new Vector_1["default"](this.position.x, this.position.y - this.radiusY / 2)
        }).gradient;
        if (this.fill) {
            this.context.beginPath();
            this.context.fillStyle = this.color;
            this.context.ellipse(this.position.x, this.position.y, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI);
            this.context.fill();
        }
        if (this.stroke) {
            this.context.lineWidth = this.lineWidth;
            this.context.strokeStyle = this.lineColor;
            this.context.stroke();
        }
    };
    Ellipse.prototype.render = function () {
        this.renderGradient();
        /*
        if (this.fill) {
          this.context.beginPath()
          this.context.fillStyle = this.color
          this.context.ellipse(this.position.x, this.position.y, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI)
          this.context.fill()
        }
        if (this.stroke) {
          this.context.lineWidth = this.lineWidth
          this.context.strokeStyle = this.lineColor
          this.context.stroke()
        }
        */
    };
    return Ellipse;
}(Graphic_1["default"]));
exports["default"] = Ellipse;


/***/ }),
/* 16 */
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
var Graphic_1 = __webpack_require__(1);
var Vector_1 = __webpack_require__(0);
var Poligon = /** @class */ (function (_super) {
    __extends(Poligon, _super);
    function Poligon(configuration) {
        var _this = _super.call(this, configuration) || this;
        if (configuration.color)
            _this.color = configuration.color;
        if (configuration.stroke)
            _this.stroke = configuration.stroke;
        if (configuration.cords)
            _this.cords = configuration.cords.slice(1, configuration.cords.length);
        if (configuration.fill)
            _this.fill = configuration.fill;
        _this.position = configuration.cords.slice[0];
        _this.cords.filter(function (pnt) {
            return new Vector_1["default"](pnt.x - _this.position.x, pnt.y - _this.position.y);
        });
        return _this;
    }
    Poligon.prototype.render = function () {
        this.context.beginPath();
        this.context.strokeStyle = this.lineColor;
        this.context.lineCap = this.lineCap;
        this.context.fillStyle = this.color;
        this.context.lineJoin = this.lineJoin;
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
/* 17 */
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
var CircleEvents_1 = __webpack_require__(7);
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(config) {
        var _this = _super.call(this, config) || this;
        _this.radius = 5;
        if (config) {
            _this.radius = config.radius ? config.radius : 5;
        }
        return _this;
    }
    Circle.prototype.selfRender = function () {
        this.context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        if (this.fill)
            this.context.fill();
        if (this.stroke)
            this.context.stroke();
    };
    return Circle;
}(CircleEvents_1["default"]));
exports["default"] = Circle;


/***/ }),
/* 18 */
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
var Graphic_1 = __webpack_require__(1);
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(data) {
        var _this = _super.call(this, data) || this;
        _this.width = 1;
        _this.height = 1;
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
/* 19 */
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
var Graphic_1 = __webpack_require__(1);
var Vector_1 = __webpack_require__(0);
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line(data) {
        var _this = _super.call(this, data) || this;
        _this.start = new Vector_1["default"](0, 0);
        _this.end = new Vector_1["default"](1, 1);
        if (data.start)
            _this.start = data.start;
        if (data.end)
            _this.end = data.end;
        if (data.color)
            _this.color = data.color;
        _this.width = 5;
        _this.position = data.start;
        _this.end = new Vector_1["default"](_this.end.x - _this.start.x, _this.end.y - _this.start.y);
        return _this;
    }
    Line.prototype.render = function () {
        this.context.beginPath();
        this.context.strokeStyle = this.color;
        this.context.lineWidth = this.width;
        this.context.lineCap = this.lineCap;
        this.context.lineJoin = this.lineJoin;
        this.context.moveTo(this.position.x, this.position.y);
        this.context.lineTo(this.end.x + this.position.x, this.end.y + this.position.y);
        this.context.stroke();
    };
    return Line;
}(Graphic_1["default"]));
exports["default"] = Line;


/***/ }),
/* 20 */
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
var Graphic_1 = __webpack_require__(1);
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(configuration) {
        var _this = _super.call(this, configuration) || this;
        _this.fontConfig = '';
        _this.lineHeight = 12;
        _this.maxWidth = 500;
        _this.textAlign = configuration.textAlign ? configuration.textAlign : 'center';
        _this.textBaseline = configuration.textBaseline ? configuration.textBaseline : 'middle';
        _this.size = configuration.size ? configuration.size : 12;
        _this.family = configuration.family ? configuration.family : 'Arial';
        _this.content = configuration.content ? configuration.content : '';
        return _this;
    }
    Text.prototype.wrapText = function () {
        var x = this.position.x;
        var y = this.position.y;
        var words = this.content.split(' ');
        var line = '';
        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = this.context.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > this.maxWidth && n > 0) {
                this.context.fillText(line, x, y);
                line = words[n] + ' ';
                y += this.lineHeight;
            }
            else {
                line = testLine;
            }
        }
        this.context.fillText(line, x, y);
    };
    Text.prototype.render = function () {
        this.context.fillStyle = this.color;
        this.context.font = this.weight + " " + this.size + "px " + this.family;
        this.context.textAlign = this.textAlign;
        this.context.textBaseline = this.textBaseline;
        if (this.stroke) {
            this.context.strokeText(this.content, this.position.x, this.position.y);
        }
        this.context.fillText(this.content, this.position.x, this.position.y);
    };
    return Text;
}(Graphic_1["default"]));
exports["default"] = Text;


/***/ }),
/* 21 */
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
var CircleEvents_1 = __webpack_require__(7);
var Arc = /** @class */ (function (_super) {
    __extends(Arc, _super);
    function Arc(configuration) {
        var _this = _super.call(this, configuration) || this;
        if (configuration) {
            _this.eAngl = configuration.eAngl ? configuration.eAngl : 0;
            _this.aAngl = configuration.aAngl ? configuration.aAngl : Math.PI;
        }
        else {
            _this.eAngl = 0;
            _this.aAngl = Math.PI;
        }
        return _this;
    }
    Arc.prototype.renderChild = function () {
        var _this = this;
        this.childs.forEach(function (c) { return c.context = _this.context; });
        this.childs.forEach(function (c) { return c.render(); });
        this.context.beginPath();
        this.context.arc(0, 0, this.radius, this.eAngl, this.aAngl, true);
        if (this.fill) {
            this.context.fillStyle = this.color;
            this.context.fill();
        }
        if (this.stroke) {
            this.context.strokeStyle = this.lineColor;
            this.context.lineWidth = this.lineWidth;
            this.context.stroke();
        }
    };
    return Arc;
}(CircleEvents_1["default"]));
exports["default"] = Arc;


/***/ }),
/* 22 */
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
var Graphic_1 = __webpack_require__(1);
var BezierCurve = /** @class */ (function (_super) {
    __extends(BezierCurve, _super);
    function BezierCurve(config) {
        var _this = _super.call(this, config) || this;
        _this.cords = config.cords ? config.cords : [[10, 10], [80, 20], [30, 30]];
        return _this;
    }
    BezierCurve.prototype.render = function () {
        this.context.save();
        this.context.beginPath();
        this.context.lineCap = this.lineCap;
        this.context.lineWidth = this.lineWidth;
        this.context.strokeStyle = this.lineColor;
        this.context.lineJoin = this.lineJoin;
        this.context.translate(this.position.x, this.position.y);
        this.context.bezierCurveTo(this.cords[0][0], this.cords[0][1], this.cords[1][0], this.cords[1][1], this.cords[2][0], this.cords[2][1]);
        this.context.stroke();
        this.context.restore();
    };
    return BezierCurve;
}(Graphic_1["default"]));
exports["default"] = BezierCurve;


/***/ }),
/* 23 */
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
var Graphic_1 = __webpack_require__(1);
var QuadraticCurve = /** @class */ (function (_super) {
    __extends(QuadraticCurve, _super);
    function QuadraticCurve(config) {
        var _this = _super.call(this, config) || this;
        _this.color = config.color ? config.color : 'black';
        _this.width = config.width ? config.width : 5;
        _this.cords = config.cords ? config.cords : [[20, 100], [200, 20]];
        return _this;
    }
    QuadraticCurve.prototype.render = function () {
        this.context.save();
        this.context.beginPath();
        this.context.lineCap = this.lineCap;
        this.context.lineJoin = this.lineJoin;
        this.context.lineWidth = this.width;
        this.context.strokeStyle = this.color;
        this.context.moveTo(this.position.x, this.position.y);
        this.context.quadraticCurveTo(this.cords[0][0], this.cords[0][1], this.cords[1][0], this.cords[1][1]);
        this.context.stroke();
        this.context.restore();
    };
    return QuadraticCurve;
}(Graphic_1["default"]));
exports["default"] = QuadraticCurve;


/***/ }),
/* 24 */
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
var Vector_1 = __webpack_require__(0);
var Event_1 = __webpack_require__(8);
var Mouse = /** @class */ (function (_super) {
    __extends(Mouse, _super);
    function Mouse() {
        var _this = _super.call(this) || this;
        _this.position = new Vector_1["default"](0, 0);
        _this.clicked = false;
        _this.move(function (self, event) {
            _this.position.x = event.clientX;
            _this.position.y = event.clientY;
        });
        return _this;
    }
    Mouse.prototype.move = function (func) {
        if (!this.events.mousemoveActive) {
            this.initEvent('mousemove');
            this.events.mousemoveActive = true;
        }
        this.events.mousemove.push(func);
    };
    Mouse.prototype.up = function (func) {
        if (!this.events.mouseupActive) {
            this.initEvent('mouseup');
            this.events.mouseupActive = true;
        }
    };
    Mouse.prototype.down = function (func) {
        if (!this.events.mousedownActive) {
            this.initEvent('mousedown');
            this.events.mousedownActive = true;
        }
    };
    return Mouse;
}(Event_1["default"]));
exports["default"] = Mouse;


/***/ }),
/* 25 */
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
var Event_1 = __webpack_require__(8);
var KeyBoard = /** @class */ (function (_super) {
    __extends(KeyBoard, _super);
    function KeyBoard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keys = [];
        return _this;
    }
    KeyBoard.prototype.press = function (key, func) {
        var _this = this;
        var func2 = function (self, event) {
            // console.log(event.key === key)
            // console.log(event.key, key)
            if (event.key === key) {
                // console.log(func)
                func(_this, event);
            }
        };
        if (!this.events.keypressActive) {
            this.events.keypressActive = true;
            this.initEvent('keypress');
        }
        this.events.keypress.push(func2);
    };
    KeyBoard.prototype.down = function (key, func) {
        var _this = this;
        func = function (self, event) {
            if (event.key === key)
                func(_this, event);
        };
        if (!this.events.keydownActive) {
            this.events.keydownActive = true;
            this.initEvent('keydown');
        }
        this.events.keydown.push(func);
    };
    KeyBoard.prototype.up = function (key, func) {
        var _this = this;
        var func2 = function (self, event) {
            if (event.key === key)
                func(_this, event);
        };
        if (!this.events.keyupActive) {
            this.events.keyupActive = true;
            this.initEvent('keyup');
        }
        this.events.keyup.push(func2);
    };
    return KeyBoard;
}(Event_1["default"]));
exports["default"] = KeyBoard;


/***/ })
/******/ ]);
});