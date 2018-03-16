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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(8);
var Scene = (function () {
    function Scene() {
        this.childs = [];
        this.following = false;
        this.translation = new Vector2D_1["default"](0, 0);
    }
    Scene.prototype.add = function (element) {
        element.context = this.context;
        this.childs.push(element);
    };
    Scene.prototype.remove = function (element) {
        this.childs.splice(this.childs.indexOf(element), 1);
    };
    Scene.prototype.clear = function (color) {
        if (color === void 0) { color = '#000'; }
        this.context.fillStyle = color;
        this.context.fillRect(-this.translation.x, 0, window.innerWidth, window.innerHeight);
    };
    Scene.prototype.follow = function (gameObject) {
        this.followed = gameObject.transform.position;
        this.temp = this.followed.copy();
        this.following = true;
    };
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
    Scene.prototype.zoom = function (where, howMuch) {
        this.context.translate(where.x, where.y);
        this.context.scale(howMuch.x, howMuch.y);
        this.context.translate(-where.x, -where.y);
    };
    Scene.prototype.translate = function (x, y) {
        this.translation.x -= x;
        this.translation.y -= y;
        this.context.translate(-x, -y);
    };
    Scene.prototype.update = function () {
        this.clear(this.backgroundColor);
        if (this.following) {
            var change = Vector2D_1["default"].sub(this.temp, this.followed);
            this.temp = this.followed.copy();
            this.translate(-change.x, 0); /* -change.y To enable y following */
        }
        this.childs.forEach(function (child) { return child.render(); });
    };
    return Scene;
}());
exports.__esModule = true;
exports["default"] = Scene;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Dibujo_1 = __webpack_require__(2);
var RENDER = new Dibujo_1.Render();
var rect = new Dibujo_1.Graphic.Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    color: '#FFF'
});
var text = new Dibujo_1.Graphic.Text({
    content: 'Juan',
    x: 200,
    y: 200,
    style: {
        font: 'bold 32px Arial',
        fillStyle: '#F00'
    }
});
var circle = new Dibujo_1.Graphic.Circle({
    radius: 50,
    color: '#F00',
    stroke: true,
    lineWidth: 3,
    lineColor: '#0F0',
    x: 50,
    y: 50
});
var img = new Dibujo_1.Graphic.Picture({
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    src: './apple.png'
});
RENDER.addMultiple([circle, text, rect, img]);
setInterval(function () {
    RENDER.render();
    circle.x += 1;
    img.y += 1.4;
    text.x += 0.5;
    rect.x += 0.25;
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Scene_1 = __webpack_require__(0);
exports.Scene = Scene_1["default"];
var Render_1 = __webpack_require__(3);
exports.Render = Render_1["default"];
var Sprite_1 = __webpack_require__(4);
exports.Sprite = Sprite_1["default"];
var Graphic = __webpack_require__(5);
exports.Graphic = Graphic;
var Animation_1 = __webpack_require__(6);
exports.Animation = Animation_1["default"];
var Color_1 = __webpack_require__(7);
exports.Color = Color_1["default"];


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(8);
var Scene_1 = __webpack_require__(0);
var Render = (function () {
    function Render(canvas, width, height) {
        var _this = this;
        this.timeFrame = 0;
        if (canvas) {
            this.canvas = canvas;
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
        window.addEventListener('resize', function () {
            _this.canvas.width = window.innerWidth;
            _this.canvas.height = window.innerHeight;
        });
        this.context = this.canvas.getContext('2d');
        var scene = new Scene_1["default"]();
        this.setScene(scene);
    }
    Render.prototype.add = function (element) {
        this.scene.add(element);
    };
    Render.prototype.addMultiple = function (e) {
        var _this = this;
        e.forEach(function (m) {
            _this.add(m);
        });
    };
    Render.prototype.getWidth = function () {
        return this.canvas.width;
    };
    Render.prototype.getHeight = function () {
        return this.canvas.height;
    };
    Render.prototype.getCenter = function () {
        return new Vector2D_1["default"](this.canvas.width / 2, this.canvas.height / 2);
    };
    Render.prototype.render = function () {
        this.scene.update();
    };
    Render.prototype.update = function () {
        var _this = this;
        setInterval(function () {
            _this.render();
        }, this.timeFrame);
    };
    Render.prototype.setScene = function (scene) {
        this.scene = scene;
        this.scene.renderer = this;
        this.scene.context = this.context;
        this.scene.smoth(false);
    };
    return Render;
}());
exports.__esModule = true;
exports["default"] = Render;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global Image */

var Vector2D = (function () {
    function Vector2D(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    return Vector2D;
}());
var Sprite = (function () {
    function Sprite(src, position, scale, rotation, anchor) {
        if (position === void 0) { position = new Vector2D(); }
        if (scale === void 0) { scale = new Vector2D(1, 1); }
        if (rotation === void 0) { rotation = 0; }
        if (anchor === void 0) { anchor = new Vector2D(0.5, 0.5); }
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
    Sprite.prototype.getSize = function () {
        var realSize = new Vector2D(this.scale.x * this.image.width, this.scale.y * this.image.height);
        return realSize;
    };
    Sprite.prototype.render = function () {
        this.context.save();
        this.context.translate(this.position.x, this.position.y);
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
/* globla Image */

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Graphic = (function () {
    function Graphic() {
    }
    Graphic.prototype.setStyle = function (styles) {
        for (var style in styles) {
            this.context[style] = styles[style];
        }
    };
    Graphic.prototype.render = function () { };
    return Graphic;
}());
exports.Graphic = Graphic;
var Picture = (function (_super) {
    __extends(Picture, _super);
    function Picture(data) {
        var _this = _super.call(this) || this;
        _this.x = 0;
        _this.y = 0;
        _this.width = 1;
        _this.height = 1;
        _this.image = new Image();
        _this.x = data.x;
        _this.y = data.y;
        _this.width = data.width;
        _this.height = data.height;
        _this.image.src = data.src;
        return _this;
    }
    Picture.prototype.render = function () {
        this.context.beginPath();
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    };
    return Picture;
}(Graphic));
exports.Picture = Picture;
var Rect = (function (_super) {
    __extends(Rect, _super);
    function Rect(data) {
        var _this = _super.call(this) || this;
        _this.color = '#FFFFFF';
        _this.x = 0;
        _this.y = 0;
        _this.width = 1;
        _this.height = 1;
        _this.fill = true;
        _this.stroke = false;
        _this.strokeColor = '#000000';
        if (data.color)
            _this.color = data.color;
        if (data.x)
            _this.x = data.x;
        if (data.y)
            _this.y = data.y;
        if (data.width)
            _this.width = data.width;
        if (data.height)
            _this.height = data.height;
        if (data.fill)
            _this.fill = data.fill;
        if (data.stroke)
            _this.stroke = data.stroke;
        if (data.strokeColor)
            _this.strokeColor = data.strokeColor;
        return _this;
    }
    Rect.prototype.render = function () {
        this.context.fillStyle = this.color;
        this.context.beginPath();
        if (this.fill) {
            this.context.fillRect(this.x, this.y, this.width, this.height);
        }
        if (this.stroke) {
            this.context.strokeRect(this.x, this.y, this.width, this.height);
        }
    };
    return Rect;
}(Graphic));
exports.Rect = Rect;
var Line = (function (_super) {
    __extends(Line, _super);
    function Line(start, end, color) {
        var _this = _super.call(this) || this;
        _this.start = { x: 0, y: 0 };
        _this.end = { x: 1, y: 1 };
        if (start)
            _this.start = start;
        if (end)
            _this.end = end;
        if (color)
            _this.color = color;
        return _this;
    }
    Line.prototype.render = function () {
        this.context.beginPath();
        this.context.moveTo(this.start.x, this.start.y);
        this.context.lineTo(this.end.x, this.end.y);
        this.context.stroke();
    };
    return Line;
}(Graphic));
exports.Line = Line;
var Poligon = (function (_super) {
    __extends(Poligon, _super);
    function Poligon(configuration) {
        var _this = _super.call(this) || this;
        _this.fill = true;
        _this.stroke = false;
        _this.color = '#FFF';
        _this.strokeColor = '#000';
        if (configuration.color)
            _this.color = configuration.color;
        if (configuration.stroke)
            _this.stroke = configuration.stroke;
        if (configuration.cords)
            _this.cords = configuration.cords;
        if (configuration.fill)
            _this.fill = configuration.fill;
        if (configuration.strokeColor)
            _this.strokeColor = configuration.strokeColor;
        return _this;
    }
    Poligon.prototype.render = function () {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.moveTo(this.cords[0].x, this.cords[0].y);
        for (var i = 0; i < this.cords.length; i++) {
            this.context.lineTo(this.cords[i].x, this.cords[i].y);
        }
        this.context.closePath();
        this.context.fill();
        if (this.stroke)
            this.context.stroke;
    };
    return Poligon;
}(Graphic));
exports.Poligon = Poligon;
var Text = (function (_super) {
    __extends(Text, _super);
    function Text(configuration) {
        var _this = _super.call(this) || this;
        if (configuration.style)
            _this.style = configuration.style;
        if (configuration.content)
            _this.content = configuration.content;
        if (configuration.x)
            _this.x = configuration.x;
        if (configuration.y)
            _this.y = configuration.y;
        if (configuration.stroke)
            _this.stroke = configuration.stroke;
        return _this;
    }
    Text.prototype.render = function () {
        this.setStyle(this.style);
        if (this.stroke) {
            this.context.strokeText(this.content, this.x, this.y);
        }
        this.context.fillText(this.content, this.x, this.y);
    };
    return Text;
}(Graphic));
exports.Text = Text;
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(configuration) {
        var _this = _super.call(this) || this;
        _this.lineWidth = 1;
        if (configuration.x)
            _this.x = configuration.x;
        if (configuration.y)
            _this.y = configuration.y;
        if (configuration.radius)
            _this.radius = configuration.radius;
        if (configuration.color)
            _this.color = configuration.color;
        if (configuration.stroke)
            _this.stroke = configuration.stroke;
        if (configuration.lineWidth)
            _this.lineWidth = configuration.lineWidth;
        if (configuration.lineColor)
            _this.lineColor = configuration.lineColor;
        if (configuration.fill)
            _this.fill = configuration.fill;
        return _this;
    }
    Circle.prototype.render = function () {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.context.fill();
        if (this.stroke) {
            this.context.lineWidth = this.lineWidth;
            this.context.strokeStyle = this.lineColor;
            this.context.stroke();
        }
    };
    return Circle;
}(Graphic));
exports.Circle = Circle;
var Arc = (function (_super) {
    __extends(Arc, _super);
    function Arc(configuration) {
        var _this = _super.call(this) || this;
        if (configuration.color)
            _this.color = configuration.color;
        if (configuration.x)
            _this.x = configuration.x;
        if (configuration.y)
            _this.y = configuration.y;
        if (configuration.radius)
            _this.radius = configuration.radius;
        if (configuration.lineWidth)
            _this.lineWidth = configuration.lineWidth;
        if (configuration.eAngl)
            _this.eAngl = configuration.eAngl;
        if (configuration.aAngl)
            _this.aAngl = configuration.aAngl;
        return _this;
    }
    Arc.prototype.render = function () {
        this.context.beginPath();
        this.context.strokeStyle = this.color;
        this.context.arc(this.x, this.y, this.radius, this.eAngl, this.aAngl, true);
        this.context.lineWidth = this.lineWidth;
        this.context.stroke();
    };
    return Arc;
}(Graphic));
exports.Arc = Arc;
var Group = (function () {
    function Group() {
        this.childs = [];
    }
    Group.prototype.add = function (child) {
        this.childs.push(child);
    };
    Group.prototype.render = function () {
        this.context.save();
        this.context.scale(this.scale.x, this.scale.y);
        this.context.rotate(this.rotation);
        this.context.translate(this.position.x, this.position.y);
        this.childs.forEach(function (child) {
            child.render();
        });
        this.context.restore();
    };
    return Group;
}());
exports.Group = Group;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D = (function () {
    function Vector2D(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    return Vector2D;
}());
var Animation = (function () {
    function Animation(src, scale, position, frameRate, size, loop) {
        if (scale === void 0) { scale = new Vector2D(1, 1); }
        if (position === void 0) { position = new Vector2D(1, 1); }
        if (frameRate === void 0) { frameRate = 100; }
        if (size === void 0) { size = new Vector2D(32, 32); }
        if (loop === void 0) { loop = true; }
        var _this = this;
        this.loop = true;
        this.loop = loop;
        this.load(src);
        this.size = size;
        this.position = position;
        this.scale = scale;
        this.frameRate = frameRate;
        var frame = new Vector2D(0, 0);
        this.x = 0;
        this.y = 0;
        this.interval = setInterval(function () {
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
        }, this.frameRate);
    }
    Animation.prototype.load = function (src) {
        this.image = new Image();
        this.image.src = src;
    };
    Animation.prototype.getSize = function () {
        return new Vector2D(this.size.x * this.scale.x, this.size.y * this.scale.y);
    };
    Animation.prototype.render = function () {
        this.context.drawImage(this.image, this.x, this.y, this.size.x, this.size.y, this.position.x, this.position.y, this.size.x * this.scale.x, this.size.y * this.scale.y);
    };
    Animation.prototype.destroy = function () {
        clearInterval(this.interval);
    };
    return Animation;
}());
exports.__esModule = true;
exports["default"] = Animation;


/***/ }),
/* 7 */
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


/***/ }),
/* 8 */
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


/***/ })
/******/ ]);
});