(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["form"] = factory();
	else
		root["App"] = root["App"] || {}, root["App"]["form"] = factory();
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
/******/ 		"form": 0
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
/******/ 	deferredModules.push(["./www/src/form.jsx","vendor.bundle.js"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./www/src/Utils.tsx":
/*!***************************!*\
  !*** ./www/src/Utils.tsx ***!
  \***************************/
/*! exports provided: toNum, outNum, getCursorPosition, makeCancelable, useThrottle, createNumberRange, debounceFn, useDebounceFn, useInterval, EventEmitter, ev, useDebounce, Dump */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toNum\", function() { return toNum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"outNum\", function() { return outNum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCursorPosition\", function() { return getCursorPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeCancelable\", function() { return makeCancelable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useThrottle\", function() { return useThrottle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNumberRange\", function() { return createNumberRange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounceFn\", function() { return debounceFn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useDebounceFn\", function() { return useDebounceFn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useInterval\", function() { return useInterval; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventEmitter\", function() { return EventEmitter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ev\", function() { return ev; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useDebounce\", function() { return useDebounce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dump\", function() { return Dump; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\r\n//@ts-ignore\r\nvar toNum = function (value) {\r\n    var s = new String(value);\r\n    s = s.replace(',', '.');\r\n    s = s.replace(' ', '');\r\n    return Number(s);\r\n};\r\nvar outNum = function (n, decimals, csFormat) {\r\n    if (decimals === void 0) { decimals = 0; }\r\n    if (csFormat === void 0) { csFormat = true; }\r\n    var s = new String(parseFloat(n).toFixed(decimals));\r\n    s = s.replace(/\\.0+$/i, '');\r\n    if (s.indexOf('.') != -1)\r\n        s = s.replace(/(0+)$/, '');\r\n    if (csFormat)\r\n        s = (new String(s)).replace('.', ',');\r\n    return s;\r\n};\r\nvar getCursorPosition = function (e) {\r\n    e = e || window.event;\r\n    var cursor = { x: 0, y: 0 };\r\n    if (e.pageX || e.pageY) {\r\n        cursor.x = e.pageX;\r\n        cursor.y = e.pageY;\r\n    }\r\n    else {\r\n        if (document.documentElement !== null) {\r\n            cursor.x = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;\r\n            cursor.y = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop;\r\n        }\r\n        else {\r\n            return null;\r\n        }\r\n    }\r\n    return cursor;\r\n};\r\nvar makeCancelable = function (promise) {\r\n    var hasCanceled_ = false;\r\n    var wrappedPromise = new Promise(function (resolve, reject) {\r\n        promise.then(function (val) { return hasCanceled_ ? reject({ isCanceled: true }) : resolve(val); }, function (error) { return hasCanceled_ ? reject({ isCanceled: true }) : reject(error); });\r\n    });\r\n    return {\r\n        getPromise: function () {\r\n            return wrappedPromise;\r\n        },\r\n        cancel: function () {\r\n            hasCanceled_ = true;\r\n        },\r\n    };\r\n};\r\n//const createNumberRange = length => Array.from({length}, (_, i) => i + 1)\r\nvar useThrottle = function (value, limit) {\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(value), throttledValue = _a[0], setThrottledValue = _a[1];\r\n    var lastRan = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(Date.now());\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        var handler = setTimeout(function () {\r\n            if (Date.now() - lastRan.current >= limit) {\r\n                setThrottledValue(value);\r\n                lastRan.current = Date.now();\r\n            }\r\n        }, limit - (Date.now() - lastRan.current));\r\n        return function () {\r\n            clearTimeout(handler);\r\n        };\r\n    }, [value, limit]);\r\n    return throttledValue;\r\n};\r\nvar createNumberRange = function (start, end) {\r\n    var a = [];\r\n    if (start < end) {\r\n        for (var i = start; i <= end; i++) {\r\n            // @ts-ignore\r\n            a.push(i);\r\n        }\r\n    }\r\n    return a;\r\n};\r\nfunction debounceFn(cb, time) {\r\n    var timer = null;\r\n    return {\r\n        run: function () {\r\n            clearTimeout(timer);\r\n            timer = setTimeout(cb, time);\r\n        },\r\n        cancel: function () {\r\n            clearTimeout(timer);\r\n        }\r\n    };\r\n}\r\nvar useDebounceFn = function (fn, delay) {\r\n    var fnRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\r\n    var timerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        fnRef.current = fn;\r\n    }, [fn]);\r\n    var run = function () {\r\n        cancel();\r\n        timerRef.current = setTimeout(function () {\r\n            if (fnRef.current) {\r\n                fnRef.current();\r\n            }\r\n        }, delay);\r\n    };\r\n    var cancel = function () {\r\n        if (timerRef.current) {\r\n            clearTimeout(timerRef.current);\r\n            timerRef.current = null;\r\n        }\r\n    };\r\n    return {\r\n        run: run, cancel: cancel\r\n    };\r\n};\r\nfunction useInterval(callback, delay) {\r\n    var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        savedCallback.current = callback;\r\n    });\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        function tick() {\r\n            // @ts-ignore\r\n            savedCallback.current();\r\n        }\r\n        if (delay !== null) {\r\n            var id_1 = setInterval(tick, delay);\r\n            return function () { return clearInterval(id_1); };\r\n        }\r\n    }, [delay]);\r\n}\r\nvar EventEmitter = /** @class */ (function () {\r\n    function EventEmitter() {\r\n        this.list = {};\r\n    }\r\n    EventEmitter.prototype.subscribe = function (type, func) {\r\n        if (typeof func !== 'function') {\r\n            return;\r\n        }\r\n        if (!this.list.hasOwnProperty(type)) {\r\n            this.list[type] = [];\r\n        }\r\n        this.list[type].push(func);\r\n    };\r\n    EventEmitter.prototype.unsubscribe = function (type, func) {\r\n        for (var i in this.list[type]) {\r\n            if (this.list[type][i] === func) {\r\n            }\r\n        }\r\n    };\r\n    EventEmitter.prototype.emit = function (type, data) {\r\n        if (type in this.list) {\r\n            for (var _i = 0, _a = this.list[type]; _i < _a.length; _i++) {\r\n                var func = _a[_i];\r\n                func(data);\r\n            }\r\n        }\r\n    };\r\n    return EventEmitter;\r\n}());\r\n\r\nvar ev = new EventEmitter();\r\nev.subscribe('', function () {\r\n});\r\nfunction useDebounce(value, delay) {\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(value), debouncedValue = _a[0], setDebouncedValue = _a[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        var handler = setTimeout(function () {\r\n            setDebouncedValue(value);\r\n        }, delay);\r\n        return function () {\r\n            clearTimeout(handler);\r\n        };\r\n    }, [value, delay]);\r\n    return debouncedValue;\r\n}\r\nvar Dump = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"pre\", null, JSON.stringify(props, null, 4))); };\r\nvar useThrottleFn = function (func, time) {\r\n    var funcRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\r\n    var runRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        funcRef.current = func;\r\n    }, [func]);\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        /*runRef.current = _.throttle(() => funcRef.current(), time, {\r\n            trailing: true\r\n        })*/\r\n    }, []);\r\n    return {\r\n        run: function () { return runRef.current(); },\r\n        cancel: function () { return runRef.current.cancel(); }\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack://App.%5Bname%5D/./www/src/Utils.tsx?");

/***/ }),

/***/ "./www/src/form.jsx":
/*!**************************!*\
  !*** ./www/src/form.jsx ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/react-hook-form.es.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utils */ \"./www/src/Utils.tsx\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n// Import Swiper styles\r\n//import 'swiper/swiper-bundle.css';\r\n//import {Lazy} from \"swiper\";\r\n\r\nvar useServerForm = function () {\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]), errors = _a[0], setErrors = _a[1];\r\n    var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}), state = _b[0], setState = _b[1];\r\n    var register = function (e) {\r\n        //console.log('register', e);\r\n    };\r\n    var validate = function (url, data) {\r\n        console.log(url, data);\r\n        fetch(url, {\r\n            'method': 'POST',\r\n            headers: {\r\n                'Accept': 'application/json',\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify(data)\r\n        })\r\n            .then(function (body) { return body.json(); })\r\n            .then(function (resp) {\r\n            console.log('resp', resp);\r\n            setErrors(resp.errors);\r\n        });\r\n    };\r\n    return {\r\n        register: register,\r\n        validate: validate,\r\n        state: state,\r\n        errors: errors\r\n    };\r\n};\r\nvar DynamicForm = function (_a) {\r\n    var validateUrl = _a.validateUrl;\r\n    var _b = useServerForm(), register = _b.register, validate = _b.validate, errors = _b.errors;\r\n    var _c = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1), count = _c[0], setCount = _c[1];\r\n    var _d = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\r\n        title: '',\r\n        address: ''\r\n    }), state = _d[0], setState = _d[1];\r\n    var onChange = function (_a) {\r\n        var target = _a.target;\r\n        setState(function (s) {\r\n            var _a;\r\n            return (tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"]({}, s, (_a = {}, _a[target.name] = target.value, _a)));\r\n        });\r\n    };\r\n    var onBlur = function () {\r\n        //validate(validateUrl, state);\r\n    };\r\n    var form = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__[\"useForm\"])();\r\n    var first = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\r\n    Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\r\n        //first.current.focus();\r\n        var formEl = document.querySelector('#frm-dynamicForm');\r\n        var submit = function (ev) {\r\n            //form.handleSubmit(onSubmit)\r\n            console.log('submit');\r\n            form.triggerValidation().then(function () {\r\n                if (Object.keys(form.errors).length === 0) {\r\n                    formEl.submit();\r\n                    console.log('ok');\r\n                }\r\n                else {\r\n                    ev.preventDefault();\r\n                    console.log('preventDefault');\r\n                }\r\n            });\r\n        };\r\n        formEl.addEventListener('submit', submit);\r\n        return function () {\r\n            formEl.removeEventListener('submit', submit);\r\n        };\r\n    }, []);\r\n    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null,\r\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"form\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utils__WEBPACK_IMPORTED_MODULE_4__[\"Dump\"], { errors: errors }),\r\n            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", { type: \"text\", name: \"test\", placeholder: \"test\", ref: form.register({ required: true, minLength: 1 }) }),\r\n            form.errors.test && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, \"This field is required\"),\r\n            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"fieldset\", null,\r\n                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", { type: \"text\", name: \"title\", value: state.title, onChange: onChange, onBlur: onBlur, ref: first })),\r\n                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", { type: \"text\", name: \"address\", value: state.address, onChange: onChange, onBlur: onBlur, ref: register }))),\r\n            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"fieldset\", null,\r\n                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", { type: \"button\", onClick: function () { return setCount(function (c) { return c + 1; }); } }, \"+\"),\r\n                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", { type: \"button\", onClick: function () { return setCount(function (c) { return c - 1; }); } }, \"-\"),\r\n                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null,\r\n                    \"Po\\u010Det: \",\r\n                    count),\r\n                Object(_Utils__WEBPACK_IMPORTED_MODULE_4__[\"createNumberRange\"])(1, count).map(function (i) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", { key: i },\r\n                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", { htmlFor: 'name-' + i },\r\n                        \"Name \",\r\n                        i),\r\n                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", { type: \"text\", name: 'name[' + i + ']', id: 'name-' + i, ref: register() }))); })))));\r\n};\r\nvar initDynamicForm = function (validateUrl) {\r\n    react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null,\r\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DynamicForm, { validateUrl: validateUrl })), document.querySelector('#dynamic-form'));\r\n};\r\nvar requestImages = function (id) {\r\n    var list = [\r\n        {\r\n            \"productName\": \"aaa\",\r\n            \"images\": [\r\n                \"http://www.hotchick.cz/data-central/images/879-6700001135.jpg\",\r\n                \"http://www.hotchick.cz/data-central/images/879-6700001135-1.jpg\"\r\n            ]\r\n        },\r\n        {\r\n            \"productName\": \"bbb\",\r\n            \"images\": [\r\n                \"http://www.hotchick.cz/data-central/images/1102-05016200000.jpg\",\r\n                \"http://www.hotchick.cz/data-central/images/1102-05016200000-1.jpg\",\r\n                \"http://www.hotchick.cz/data-central/images/1102-05016200000-2.jpg\",\r\n                \"http://www.hotchick.cz/data-central/images/1102-05016200000-3.jpg\",\r\n            ]\r\n        },\r\n        {\r\n            \"productName\": \"ccc\",\r\n            \"images\": [\r\n                \"https://www.hotchick.cz/data-central/images/967-05654070000.jpg\",\r\n                \"https://www.hotchick.cz/data-central/images/967-05654070000-1.jpg\",\r\n                \"https://www.hotchick.cz/data-central/images/967-05654070000-2.jpg\",\r\n                \"https://www.hotchick.cz/data-central/images/967-05654070000-3.jpg\",\r\n                \"https://www.hotchick.cz/data-central/images/967-05654070000-4.jpg\",\r\n            ]\r\n        }\r\n    ];\r\n    return new Promise(function (success, fail) {\r\n        window.setTimeout(function () { return success(list[id - 1]); }, 200);\r\n    });\r\n};\r\nvar ProductGridGallery = function (_a) {\r\n    var defaultCurrentId = _a.defaultCurrentId, productIds = _a.productIds, onClose = _a.onClose;\r\n    var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\r\n        productName: '',\r\n        images: [],\r\n        currentImage: null,\r\n        isLoading: true,\r\n        currentId: Number(defaultCurrentId)\r\n    }), state = _b[0], setState = _b[1];\r\n    var currentId = state.currentId;\r\n    var setCurrentImage = function (c) { return setState(function (s) { return (tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"]({}, s, { currentImage: c })); }); };\r\n    var setNextImage = function () {\r\n        if (state.currentImage < state.images.length - 1) {\r\n            setCurrentImage(state.currentImage + 1);\r\n        }\r\n        else {\r\n            setCurrentImage(0);\r\n        }\r\n    };\r\n    var setPrevImage = function () {\r\n        if (state.currentImage > 0) {\r\n            setCurrentImage(state.currentImage - 1);\r\n        }\r\n        else {\r\n            setCurrentImage(state.images.length - 1);\r\n        }\r\n    };\r\n    var setNextProduct = function () {\r\n        var currIndex = productIds.indexOf(currentId);\r\n        if (currIndex < productIds.length - 1) {\r\n            requestData(productIds[currIndex + 1]);\r\n        }\r\n    };\r\n    var setPrevProduct = function () {\r\n        var currIndex = productIds.indexOf(currentId);\r\n        if (currIndex - 1 >= 0) {\r\n            requestData(productIds[currIndex - 1]);\r\n        }\r\n    };\r\n    var requestData = function (id) {\r\n        setState(function (s) { return (tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"]({}, s, { isLoading: true })); });\r\n        requestImages(id).then(function (data) {\r\n            setState(function (s) { return (tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"]({}, s, { isLoading: false, productName: data.productName, images: data.images, currentId: id, currentImage: 0 })); });\r\n        });\r\n    };\r\n    Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\r\n        requestData(currentId);\r\n    }, []);\r\n    Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\r\n        var keydown = function (ev) {\r\n            console.log('keydown');\r\n            if (ev.code === 'ArrowRight') {\r\n                setNextImage();\r\n            }\r\n            else if (ev.code === 'ArrowLeft') {\r\n                setPrevImage();\r\n            }\r\n            else if (ev.code === 'ArrowDown') {\r\n                setNextProduct();\r\n            }\r\n            else if (ev.code === 'ArrowUp') {\r\n                setPrevProduct();\r\n            }\r\n            else if (ev.code === 'Escape') {\r\n                onClose();\r\n            }\r\n        };\r\n        window.addEventListener('keydown', keydown);\r\n        return function () {\r\n            window.removeEventListener('keydown', keydown);\r\n        };\r\n    }, [state]);\r\n    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProductGridGalleryView, tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"]({}, tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"]({}, state, { setCurrentImage: setCurrentImage, onClose: onClose }))));\r\n};\r\nvar ProductGridGalleryView = function (_a) {\r\n    var onClose = _a.onClose, productName = _a.productName, images = _a.images, currentImage = _a.currentImage, setCurrentImage = _a.setCurrentImage;\r\n    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", { className: \"modal fade show\", style: { 'display': 'block' }, tabIndex: \"-1\", role: \"dialog\" },\r\n        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", { className: \"modal-dialog\", role: \"document\" },\r\n            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", { className: \"modal-content\" },\r\n                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", { className: \"modal-header\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h5\", { className: \"modal-title\" }, productName),\r\n                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", { onClick: onClose, type: \"button\", className: \"close\", \"data-dismiss\": \"modal\", \"aria-label\": \"Close\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", { \"aria-hidden\": \"true\" }, \"\\u00D7\"))),\r\n                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", { className: \"modal-body\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", { className: \"product-grid-gallery-main\" }, images.length > 0 && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", { src: images[currentImage] }))),\r\n                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"ul\", { className: \"product-grid-gallery-other\" }, images.map(function (url, index) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", { key: url, onMouseEnter: function () { return setCurrentImage(index); } },\r\n                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", { className: classnames__WEBPACK_IMPORTED_MODULE_5__({ 'active': index === currentImage }), src: url, style: { 'maxWidth': '150px', 'maxHeight': '150px' } }))); })))))));\r\n};\r\nvar initProductGridGallery = function () {\r\n    var render = function (btn) {\r\n        react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(!btn ? null : (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProductGridGallery, { defaultCurrentId: btn.dataset.productId, productIds: [1, 2, 3], onClose: function () {\r\n                render(null);\r\n            } })), document.querySelector('#product-grid-gallery'));\r\n    };\r\n    var btns = document.querySelectorAll('.product-grid-gallery-show');\r\n    btns.forEach(function (btn) {\r\n        btn.addEventListener('click', function () {\r\n            render(btn);\r\n        });\r\n    });\r\n    //window.setTimeout(() => btn.click(), 0);\r\n};\r\nwindow.App.initProductGridGallery = initProductGridGallery;\r\nwindow.App.initDynamicForm = initDynamicForm;\r\n\n\n//# sourceURL=webpack://App.%5Bname%5D/./www/src/form.jsx?");

/***/ })

/******/ });
});