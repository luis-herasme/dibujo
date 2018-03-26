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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(void 0)(["./Scene", "./Render", "./graphics/Graphic", "./graphics/Animation", "./graphics/Rect", "./graphics/Circle", "./graphics/Line", "./graphics/Poligon", "./graphics/Picture", "./graphics/Text", "./graphics/Arc", "./Group", "./Color"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var defaultCss, Scene_1, Render_1, Graphic_1, Animation_1, Rect_1, Circle_1, Line_1, Poligon_1, Picture_1, Text_1, Arc_1, Group_1, Color_1;
    return {
        setters: [
            function (Scene_1_1) {
                Scene_1 = Scene_1_1;
            },
            function (Render_1_1) {
                Render_1 = Render_1_1;
            },
            function (Graphic_1_1) {
                Graphic_1 = Graphic_1_1;
            },
            function (Animation_1_1) {
                Animation_1 = Animation_1_1;
            },
            function (Rect_1_1) {
                Rect_1 = Rect_1_1;
            },
            function (Circle_1_1) {
                Circle_1 = Circle_1_1;
            },
            function (Line_1_1) {
                Line_1 = Line_1_1;
            },
            function (Poligon_1_1) {
                Poligon_1 = Poligon_1_1;
            },
            function (Picture_1_1) {
                Picture_1 = Picture_1_1;
            },
            function (Text_1_1) {
                Text_1 = Text_1_1;
            },
            function (Arc_1_1) {
                Arc_1 = Arc_1_1;
            },
            function (Group_1_1) {
                Group_1 = Group_1_1;
            },
            function (Color_1_1) {
                Color_1 = Color_1_1;
            }
        ],
        execute: function () {
            defaultCss = document.createElement('style');
            defaultCss.type = 'text/css';
            defaultCss.innerHTML = "\n* {\n  margin:0%;\n  padding: 0%;\n}\ncanvas {\n  display: block;\n}\n";
            document.body.appendChild(defaultCss);
            exports_1("Scene", Scene_1["default"]);
            exports_1("Render", Render_1["default"]);
            exports_1("Graphic", Graphic_1["default"]);
            exports_1("Animation", Animation_1["default"]);
            exports_1("Rect", Rect_1["default"]);
            exports_1("Circle", Circle_1["default"]);
            exports_1("Line", Line_1["default"]);
            exports_1("Poligon", Poligon_1["default"]);
            exports_1("Picture", Picture_1["default"]);
            exports_1("Text", Text_1["default"]);
            exports_1("Arc", Arc_1["default"]);
            exports_1("Group", Group_1["default"]);
            exports_1("Color", Color_1["default"]);
        }
    };
});


/***/ })
/******/ ]);
});