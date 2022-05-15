(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["project-config"] = factory();
	else
		root["App"] = root["App"] || {}, root["App"]["project-config"] = factory();
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
/******/ 		"project-config": 0
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
/******/ 	deferredModules.push(["./www/src/project-config.jsx","vendor.bundle.js"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./www/src/ProjectSetting.jsx":
/*!************************************!*\
  !*** ./www/src/ProjectSetting.jsx ***!
  \************************************/
/*! exports provided: MenuCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuCreator\", function() { return MenuCreator; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/react-hook-form.es.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\r\n\r\n\r\n\r\n//import mapStateToProps from \"react-redux/lib/connect/mapStateToProps\";\r\n//import mapDispatchToProps from \"react-redux/lib/connect/mapDispatchToProps\";\r\nvar Dump = function (props) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"pre\", null, JSON.stringify(props, null, 4))); };\r\nvar Actions = {\r\n    SET_LOADING: 'SET_LOADING',\r\n    ADD_ITEM: 'ADD_ITEM',\r\n};\r\nfunction setLoading(isLoading) {\r\n    return {\r\n        type: Actions.SET_LOADING,\r\n        isLoading: isLoading\r\n    };\r\n}\r\nfunction reducer(state, action) {\r\n    switch (action.type) {\r\n        case Actions.ADD_ITEM:\r\n            return tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"]({}, state, { list: state.list.concat(action) });\r\n        case Actions.SET_LOADING:\r\n            return tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"]({}, state, { isLoading: action.isLoading });\r\n        default:\r\n            throw new Error('Neznama akce ' + action);\r\n    }\r\n}\r\nvar mapDispatchToProps = function (dispatch) {\r\n    console.log('mapDispatchToProps');\r\n    return {\r\n        addItem: function () {\r\n            dispatch(setLoading(true));\r\n            window.setTimeout(function () {\r\n                dispatch(setLoading(false));\r\n            }, 3000);\r\n        }\r\n    };\r\n};\r\nvar mapStateToProps = function (state) {\r\n    console.log('mapStateToProps', state);\r\n    return state.textMenu;\r\n};\r\n/*const addItem = (data) => {\r\n    dispatch(setLoading(true));\r\n    window.setTimeout(() => {\r\n        dispatch({\r\n            type: Actions.ADD_ITEM,\r\n            ...data\r\n        });\r\n        dispatch(setLoading(false));\r\n    }, 500);\r\n}*/\r\nvar MenuCreator = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, mapDispatchToProps)(function (props) {\r\n    console.log('props', props);\r\n    var type = props.type, list = props.list, onChange = props.onChange, addItem = props.addItem, isLoading = props.isLoading;\r\n    /*const [state, dispatch] = useReducer(reducer, {\r\n        ...defaultState,\r\n        isLoading: false\r\n    });*/\r\n    var form = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__[\"useForm\"])();\r\n    /*useEffect(() => {\r\n        if (typeof onChange === 'function') {\r\n            onChange(state);\r\n        }\r\n    }, [state]);*/\r\n    var submitForm = form.handleSubmit(function (values) {\r\n        console.log(values);\r\n        addItem({\r\n            imageName: values.new_text,\r\n            imageLink: values.new_text,\r\n        });\r\n    });\r\n    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null,\r\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, list.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", { key: index }, item.imageName)); })),\r\n        isLoading && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"strong\", null, \"Na\\u010D\\u00EDt\\u00E1m...\")),\r\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", { type: \"text\", name: \"new_text\", ref: form.register }),\r\n            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", { type: \"button\", onClick: submitForm }, \"P\\u0159idat\"))));\r\n});\r\n\r\n\n\n//# sourceURL=webpack://App.%5Bname%5D/./www/src/ProjectSetting.jsx?");

/***/ }),

/***/ "./www/src/project-config.jsx":
/*!************************************!*\
  !*** ./www/src/project-config.jsx ***!
  \************************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ProjectSetting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectSetting */ \"./www/src/ProjectSetting.jsx\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nvar defaultState = {\r\n    testCount: 0,\r\n    a: 1,\r\n    b: 2,\r\n};\r\nfunction reducer(state, action) {\r\n    if (state === void 0) { state = null; }\r\n    if (state === null) {\r\n        state = JSON.parse(document.querySelector('[name=\"project_config\"]').value);\r\n    }\r\n    switch (action.type) {\r\n        case 'test':\r\n            return tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"]({}, state, { testCount: state.testCount + 1 });\r\n        default:\r\n            return state;\r\n    }\r\n}\r\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_4__[\"createStore\"])(reducer);\r\nvar init = function () {\r\n    store.subscribe(function () { return console.log('subscribe', store.getState()); });\r\n    document.querySelector('#test').addEventListener('click', function () {\r\n        console.log('x');\r\n        store.dispatch({\r\n            type: 'test'\r\n        });\r\n    });\r\n    var el = document.querySelector('[name=\"project_config\"]');\r\n    react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null,\r\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], { store: store },\r\n            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectSetting__WEBPACK_IMPORTED_MODULE_3__[\"MenuCreator\"], { type: \"text\" }))), document.querySelector('#project-configurator'));\r\n};\r\n\r\n\n\n//# sourceURL=webpack://App.%5Bname%5D/./www/src/project-config.jsx?");

/***/ })

/******/ });
});