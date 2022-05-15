(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["product-detail"] = factory();
	else
		root["App"] = root["App"] || {}, root["App"]["product-detail"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"product-detail": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./www/src/detail.jsx","vendor.bundle.js"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./www/src/ProductDetail.jsx":
/*!***********************************!*\
  !*** ./www/src/ProductDetail.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\r\n\r\n\r\n//import { ParamSelectX } from './ParamSelect'\r\nvar ProductDetail = /** @class */ (function (_super) {\r\n    tslib__WEBPACK_IMPORTED_MODULE_0__[\"__extends\"](ProductDetail, _super);\r\n    function ProductDetail(props) {\r\n        return _super.call(this, props) || this;\r\n    }\r\n    ProductDetail.prototype.componentWillReceiveProps = function () {\r\n        //console.log('ProductDetail.componentWillReceiveProps');\r\n    };\r\n    ProductDetail.prototype.render = function () {\r\n        //console.log('ProductDetail.render');\r\n        var customParams = this.props.params.map(function (p) {\r\n            //console.log(p);\r\n            return p;\r\n        });\r\n        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h4\", null, \"Parametry\"),\r\n            customParams.map(function (p) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", { key: p.id, style: { 'padding': '3px 5px' } },\r\n                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", { style: { 'width': '150px', 'display': 'inline-block' } }, p.name),\r\n                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", { style: { 'width': '350px', 'display': 'inline-block' } }))); })));\r\n    };\r\n    return ProductDetail;\r\n}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));\r\nvar mapStateToProps = function (state, ownProps) {\r\n    //console.log('mapStateToProps', state);\r\n    return {\r\n        params: state.params\r\n    };\r\n};\r\nvar mapDispatchToProps = function (dispatch) {\r\n    //console.log('mapDispatchToProps', dispatch)\r\n    return {\r\n        dispatch: dispatch\r\n    };\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(ProductDetail));\r\n\n\n//# sourceURL=webpack://App.%5Bname%5D/./www/src/ProductDetail.jsx?");

/***/ }),

/***/ "./www/src/detail.jsx":
/*!****************************!*\
  !*** ./www/src/detail.jsx ***!
  \****************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ \"./www/src/store.jsx\");\n/* harmony import */ var _ProductDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductDetail */ \"./www/src/ProductDetail.jsx\");\n\r\n\r\n\r\n\r\n//import initDefaults from './global';\r\n\r\nvar init = function (data) {\r\n    //initDefaults();\r\n    var store = Object(_store__WEBPACK_IMPORTED_MODULE_3__[\"initStore\"])({\r\n        data: {}\r\n    });\r\n    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], { store: store },\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductDetail__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), document.getElementById('app-product-detail'));\r\n};\r\n\r\n\n\n//# sourceURL=webpack://App.%5Bname%5D/./www/src/detail.jsx?");

/***/ }),

/***/ "./www/src/store.jsx":
/*!***************************!*\
  !*** ./www/src/store.jsx ***!
  \***************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStore\", function() { return initStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\r\nfunction myReducer(state, action) {\r\n    if (state === void 0) { state = {}; }\r\n    //console.log(state, action);\r\n    switch (action.type) {\r\n        case 'set_state':\r\n            return Object.assign({}, action.state);\r\n            break;\r\n        case 'item_add':\r\n            return Object.assign({}, state, {\r\n                todos: state.todos.concat([action.item])\r\n            });\r\n            break;\r\n        case 'time_set':\r\n            return Object.assign({}, state, { time: action.time });\r\n            break;\r\n        case 'param_set_values':\r\n            //console.log('param_set_values', action.values);\r\n            var a = Object.assign({}, state, {\r\n                params: state.params.map(function (pn) {\r\n                    if (pn.id === action.nameId) {\r\n                        pn.values = action.values;\r\n                    }\r\n                    return pn;\r\n                })\r\n            });\r\n            //console.log('xxx', a.params.filter(p => p.id === action.nameId));\r\n            return a;\r\n            break;\r\n        case 'param_set_selected_value':\r\n            /*return Object.assign({}, state, {\r\n                params: []\r\n            });*/\r\n            //console.log('param_set_selected_value', action);return state;\r\n            return Object.assign({}, state, {\r\n                params: state.params.map(function (pn) {\r\n                    //console.log(pn.id, action.nameId);\r\n                    //console.log(action.valueIds);\r\n                    if (pn.id === action.nameId) {\r\n                        pn = Object.assign(pn, {\r\n                            selectedValueIds: action.valueIds\r\n                        });\r\n                    }\r\n                    return pn;\r\n                })\r\n            });\r\n            break;\r\n        default:\r\n            return state;\r\n    }\r\n}\r\nfunction initStore(state) {\r\n    var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(myReducer, state);\r\n    return store;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://App.%5Bname%5D/./www/src/store.jsx?");

/***/ })

/******/ });
});