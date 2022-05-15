/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["App"] = factory();
	else
		root["App"] = root["App"] || {}, root["App"]["main"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/src/Grid/Controls.tsx":
/*!**********************************!*\
  !*** ./js/src/Grid/Controls.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RadioButton\": () => (/* binding */ RadioButton)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\r\nvar RadioButton = function (props) {\r\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), value = _a[0], setValue = _a[1];\r\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\r\n        setValue(props.value !== undefined ? props.value : props.defaultValue);\r\n    }, []);\r\n    var onChanged = function (e) {\r\n        if (props.value === undefined) {\r\n            setValue(e.currentTarget.value);\r\n        }\r\n        if (typeof props.onChange === 'function') {\r\n            props.onChange(e.currentTarget.value);\r\n        }\r\n    };\r\n    var currValue = props.value !== undefined\r\n        ? String(props.value)\r\n        : value !== undefined\r\n            ? String(value)\r\n            : undefined;\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"btn-group btn-radiogroup col-md-5\", \"data-toggle\": \"buttons\" }, props.options.map(function (opt) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", { className: 'btn btn-default ' + (currValue == String(opt.value) ? 'checked' : ''), key: opt.value },\r\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", { onChange: onChanged, type: \"radio\", checked: currValue == String(opt.value), value: opt.value }),\r\n        \" \",\r\n        opt.label)); })));\r\n};\r\n\n\n//# sourceURL=webpack://App.%5Bname%5D/./js/src/Grid/Controls.tsx?");

/***/ }),

/***/ "./js/src/Grid/Grid.tsx":
/*!******************************!*\
  !*** ./js/src/Grid/Grid.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Grid\": () => (/* binding */ Grid)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./js/src/Grid/filters.tsx\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ \"./js/src/components.jsx\");\n/* harmony import */ var _Paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Paginator */ \"./js/src/Grid/Paginator.tsx\");\n/* harmony import */ var _GridColumnSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GridColumnSettings */ \"./js/src/Grid/GridColumnSettings.tsx\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar assemblyFromState = function (state) {\r\n    var data = {\r\n        defaultPageSize: state.defaultPageSize,\r\n        sortBy: state.sortBy,\r\n        sortOrder: state.sortOrder,\r\n        page: state.page,\r\n        filters: state.filters.map(function (filter) { return ({\r\n            name: filter.name,\r\n            value: filter.value\r\n        }); })\r\n    };\r\n    return data;\r\n};\r\nvar mergeFilters = function (newFilters, oldFilters) {\r\n    var list = [];\r\n    var _loop_1 = function (newFilter) {\r\n        var oldOne = oldFilters.find(function (o) { return o.nam === newFilter.name; });\r\n        if (oldOne !== undefined) {\r\n            newFilter = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, oldOne), newFilter);\r\n        }\r\n        // @ts-ignore\r\n        list.push(newFilter);\r\n    };\r\n    for (var _i = 0, newFilters_1 = newFilters; _i < newFilters_1.length; _i++) {\r\n        var newFilter = newFilters_1[_i];\r\n        _loop_1(newFilter);\r\n    }\r\n    return list;\r\n};\r\nvar Grid = function (props) {\r\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.grid), state = _a[0], setState = _a[1];\r\n    var rows = state.rows, columns = state.columns;\r\n    //let [columns, setColumns] = useState([])\r\n    //let [rows, setRows] = useState([])\r\n    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isLoading = _b[0], setIsLoading = _b[1];\r\n    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), checkedRows = _c[0], setCheckedRows = _c[1];\r\n    var checkRow = function (id) {\r\n        var exists = checkedRows.includes(id);\r\n        if (!exists) {\r\n            setCheckedRows(function (checkedList) { return checkedList.concat(id); });\r\n        }\r\n        else {\r\n            setCheckedRows(function (checkedList) {\r\n                return checkedList.filter(function (y) {\r\n                    return !(exists && y === id);\r\n                });\r\n            });\r\n        }\r\n    };\r\n    var toggleCheckAll = function () {\r\n        if (checkedRows.length <= rows.length) {\r\n            setCheckedRows(rows.map(function (x) { return x.id; }));\r\n        }\r\n        else {\r\n            setCheckedRows([]);\r\n        }\r\n    };\r\n    var changeSort = function (colKey) {\r\n        var o = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, assemblyFromState(state)), { sortBy: colKey, sortOrder: colKey === state.sortBy ? (state.sortOrder === 'asc' ? 'desc' : 'asc') : 'desc', action: 'submit' });\r\n        // @ts-ignore\r\n        fetchData(o);\r\n    };\r\n    var changeLimit = function (l) {\r\n        setState(function (s) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, s), { defaultPageSize: l })); });\r\n        var o = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, assemblyFromState(state)), { defaultPageSize: l, action: 'submit' });\r\n        // @ts-ignore\r\n        fetchData(o);\r\n    };\r\n    var goToPage = function (n) {\r\n        var o = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, assemblyFromState(state)), { page: n, action: 'submit' });\r\n        // @ts-ignore\r\n        fetchData(o);\r\n    };\r\n    var onChangeFilter = function (filterKey, value) {\r\n        setState(function (s) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, s), { filters: s.filters.map(function (f) {\r\n                if (f.name === filterKey) {\r\n                    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, f), { value: value });\r\n                }\r\n                return f;\r\n            }) })); });\r\n    };\r\n    var submitFilters = function () {\r\n        var o = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, assemblyFromState(state)), { action: 'submit' });\r\n        // @ts-ignore\r\n        fetchData(o);\r\n    };\r\n    var onRequestAction = function (data) {\r\n        var o = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, data), { filters: state.filters });\r\n        // @ts-ignore\r\n        fetchData(o);\r\n    };\r\n    var resetFilter = function () {\r\n        var o = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, assemblyFromState(state)), { action: 'submit', filters: [] });\r\n        // @ts-ignore\r\n        fetchData(o);\r\n    };\r\n    var fetchData = function (o) {\r\n        setIsLoading(true);\r\n        var params = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, o);\r\n        o.filters = o.filters.map(function (x) {\r\n            return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, x), { options: [] });\r\n        });\r\n        var rqurl = state.baseUrl + encodeURIComponent(JSON.stringify(params));\r\n        fetch(rqurl, {\r\n            method: 'GET',\r\n            headers: {\r\n                'X-Requested-With': 'XMLHttpRequest'\r\n            }\r\n        })\r\n            .then(function (res) { return res; })\r\n            .then(function (res) { return res.json(); })\r\n            .then(function (data) {\r\n            var _a = data.state, filters = _a.filters, other = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__rest)(_a, [\"filters\"]);\r\n            setState(function (s) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, s), other), { filters: mergeFilters(filters, s.filters) })); });\r\n            setIsLoading(false);\r\n            window.history.pushState({ path: data.state.url }, '', data.state.url);\r\n        });\r\n    };\r\n    // separate to a view component\r\n    // @ts-ignore\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"grid\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"grid-head\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_3__.Collapsible, { showTitle: \"Column settings\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_3__.Border, null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GridColumnSettings__WEBPACK_IMPORTED_MODULE_5__.GridColumnSettings, { list: state.columns, onRequestAction: onRequestAction })))),\r\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"grid-filters\" },\r\n            state.filters.map(function (filter) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"grid-filter\", key: filter.name }, filter.type === 'FilterRadio' ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,\r\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_filters__WEBPACK_IMPORTED_MODULE_2__.FilterRadio, (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, filter, { onChange: function (v) { return onChangeFilter(filter.name, v); } })))) : filter.type === 'LazySelectFilter' ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_filters__WEBPACK_IMPORTED_MODULE_2__.LazySelectFilter, (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({ loadOnce: false, options: [], onChange: function (v) { return onChangeFilter(filter.name, v); }, onRequestAction: onRequestAction }, filter))) : filter.type === 'FilterText' ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_filters__WEBPACK_IMPORTED_MODULE_2__.FilterText, (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({ controlClassName: null }, filter, { onChange: function (v) { return onChangeFilter(filter.name, v); }, onRequestAction: onRequestAction, onSubmit: function () {\r\n                } }))) : null)); }),\r\n            state.filters.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", { type: \"button\", className: \"btn btn-primary\", onClick: submitFilters }, \"Filter\")),\r\n            state.isFilterActive && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", { type: \"button\", className: \"btn btn-danger\", onClick: resetFilter }, \"Reset\"))),\r\n        isLoading && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"grid-loading\" }, \"Loading..\"))),\r\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Paginator__WEBPACK_IMPORTED_MODULE_4__.Paginator, (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, state, { changeLimit: changeLimit, goToPage: goToPage })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"table\", { className: \"grid-table\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"thead\", null,\r\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", null,\r\n                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", { type: \"checkbox\", onClick: toggleCheckAll }),\r\n                        \" \"),\r\n                    columns.map(function (col) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", { key: col.name, className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({ 'sortable': col.isSortable }) }, col.isSortable ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", { onClick: function () { return changeSort(col.name); } },\r\n                        col.label,\r\n                        col.name === state.sortBy && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, state.sortOrder === 'asc' ? '↑' : '↓')))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, col.label)))); }))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tbody\", null, rows.map(function (row) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", { key: row.id },\r\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", { type: \"checkbox\", value: \"1\", checked: checkedRows.includes(row.id), onChange: function () { return checkRow(row.id); } })),\r\n                columns.map(function (col) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", { key: col.name }, (typeof row[col.name] === 'string' || typeof row[col.name] === 'number') ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, row[col.name])) : ('__html_' + col.name in row) ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { dangerouslySetInnerHTML: { __html: row['__html_' + col.name] } })) : null)); }))); }))),\r\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Paginator__WEBPACK_IMPORTED_MODULE_4__.Paginator, (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, state, { changeLimit: changeLimit, goToPage: goToPage }))));\r\n};\r\n\n\n//# sourceURL=webpack://App.%5Bname%5D/./js/src/Grid/Grid.tsx?");

/***/ }),

/***/ "./js/src/Grid/GridColumnSettings.tsx":
/*!********************************************!*\
  !*** ./js/src/Grid/GridColumnSettings.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GridColumnSettings\": () => (/* binding */ GridColumnSettings)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/TransitionGroup.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/CSSTransition.js\");\n\r\n\r\n\r\n\r\nvar reorder = function (list, startIndex, endIndex) {\r\n    var result = Array.from(list);\r\n    var removed = result.splice(startIndex, 1)[0];\r\n    result.splice(endIndex, 0, removed);\r\n    return result;\r\n};\r\nvar getItemStyle = function (isDragging, draggableStyle) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ userSelect: \"none\" }, draggableStyle)); };\r\nvar getListStyle = function (isDraggingOver) { return ({\r\n    width: '100%'\r\n}); };\r\nvar DraggableItem = function (_a) {\r\n    var setColumnVisible = _a.setColumnVisible, deleteColumn = _a.deleteColumn, snapshot = _a.snapshot, provided = _a.provided, item = _a.item;\r\n    var node = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps, { style: getItemStyle(snapshot.isDragging, provided.draggableProps.style) }),\r\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", { className: \"column-settings-arrow\", title: \"Posunout\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", { className: \"fa fa-sort\", \"aria-hidden\": \"true\" })),\r\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", { id: 'grid-col-order-' + item.key, type: \"checkbox\", checked: item.visible, onChange: function (e) { return setColumnVisible(item.key, e.target.checked); } }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", { htmlFor: 'grid-col-order-' + item.key }, item.name),\r\n            item.type === 'param' && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", { type: \"button\", onClick: function () { return deleteColumn(item.key); }, className: \"btn btn-xs btn-danger\" }, \"\\u00D7\")))));\r\n    if (snapshot.isDragging) {\r\n        //return ReactDOM.createPortal(node, document.querySelector('.column-settings-portal'));\r\n    }\r\n    return node;\r\n};\r\nvar ItemList = function (_a) {\r\n    var list = _a.list, setList = _a.setList, setColumnVisible = _a.setColumnVisible, deleteColumn = _a.deleteColumn;\r\n    var onDragStart = function () { };\r\n    var onDragEnd = function (result) {\r\n        if (!result.destination) {\r\n            return;\r\n        }\r\n        var items = reorder(list, result.source.index, result.destination.index);\r\n        setList(items);\r\n    };\r\n    // @ts-ignore\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.DragDropContext, { onDragEnd: onDragEnd, onDragStart: onDragStart },\r\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.Droppable, { droppableId: \"droppable\" }, function (provided, snapshot) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, provided.droppableProps, { ref: provided.innerRef, style: getListStyle(snapshot.isDraggingOver), id: \"column-settings\" }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { component: null }, list.map(function (item, index) { return (\r\n            // @ts-ignore\r\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { key: item.key, timeout: 500, classNames: \"column-settings-item\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.Draggable, { draggableId: item.key, index: index }, function (provided, snapshot) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(DraggableItem, { provided: provided, snapshot: snapshot, item: item, setColumnVisible: setColumnVisible, deleteColumn: deleteColumn })); }))); })),\r\n            provided.placeholder)); })));\r\n};\r\nvar GridColumnSettings = function (props) {\r\n    /*const [state, dispatch] = useContext(StateReducer, {\r\n        paramIds: [],\r\n        columns: [],\r\n    });*/\r\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.list), list = _a[0], setList = _a[1];\r\n    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), paramIds = _b[0], setParamIds = _b[1];\r\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\r\n        setParamIds(list.filter(function (x) { return x.type === 'param'; }).map(function (x) { return x.paramId; }));\r\n    }, [list]);\r\n    var addColumn = function (item) {\r\n        /*setList((l: any) => [].concat({\r\n            key: 'param_'+item.value,\r\n            name: item.label,\r\n            type: 'param',\r\n            paramId: item.value,\r\n            visible: true\r\n        }).concat(l))*/\r\n    };\r\n    var setColumnVisible = function (key, isChecked) {\r\n        setList(function (l) { return l.map(function (item) {\r\n            if (item.key === key) {\r\n                item.visible = isChecked;\r\n            }\r\n            return item;\r\n        }); });\r\n    };\r\n    var deleteColumn = function (key) {\r\n        setList(function (l) { return l.filter(function (x) { return x.key !== key; }); });\r\n    };\r\n    var save = function () {\r\n        props.onRequestAction({\r\n            action: 'ext.settings'\r\n        });\r\n    };\r\n    console.log('onRequestAction', props.onRequestAction);\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"row\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"col-md-6\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Order and visibility of columns\"),\r\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemList, { list: list, setList: setList, setColumnVisible: setColumnVisible, deleteColumn: deleteColumn }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", { type: \"button\", onClick: save }, \"Submit\")))));\r\n};\r\n\r\n\n\n//# sourceURL=webpack://App.%5Bname%5D/./js/src/Grid/GridColumnSettings.tsx?");

/***/ }),

/***/ "./js/src/Grid/Paginator.tsx":
/*!***********************************!*\
  !*** ./js/src/Grid/Paginator.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Paginator\": () => (/* binding */ Paginator)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\r\nvar Paginator = function (_a) {\r\n    var goToPage = _a.goToPage, changeLimit = _a.changeLimit, defaultPageSize = _a.defaultPageSize, isFirst = _a.isFirst, isLast = _a.isLast, page = _a.page, pageSizeOptions = _a.pageSizeOptions, totalCount = _a.totalCount;\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"grid-paginator\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", { className: \"btn btn-default btn-sm\", onClick: function () { return goToPage(page - 1); }, disabled: isFirst }, \"Prev\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", { className: \"btn btn-default btn-sm\" }, page),\r\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", { className: \"btn btn-default btn-sm\", disabled: isLast, onClick: function () { return goToPage(page + 1); } }, \"Next\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", { className: \"form-control\", value: defaultPageSize, onChange: function (l) { return changeLimit(Number(l.target.value)); } }, pageSizeOptions.map(function (n) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", { key: n, value: n }, n)); })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null,\r\n            \"Total rows: \",\r\n            totalCount)));\r\n};\r\n\n\n//# sourceURL=webpack://App.%5Bname%5D/./js/src/Grid/Paginator.tsx?");

/***/ }),

/***/ "./js/src/Grid/filters.tsx":
/*!*********************************!*\
  !*** ./js/src/Grid/filters.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FilterText\": () => (/* binding */ FilterText),\n/* harmony export */   \"FilterSelect\": () => (/* binding */ FilterSelect),\n/* harmony export */   \"FilterRadio\": () => (/* binding */ FilterRadio),\n/* harmony export */   \"LazySelectFilter\": () => (/* binding */ LazySelectFilter)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.esm.js\");\n/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controls */ \"./js/src/Grid/Controls.tsx\");\n\r\n\r\n\r\nvar FilterText = function (props) {\r\n    var changed = function (e) {\r\n        if (e.keyCode === 13) {\r\n            props.onSubmit();\r\n        }\r\n    };\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"grid-filter-ctrl grid-filter-text\" },\r\n        props.label ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, props.label)) : null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", { type: \"text\", className: props.controlClassName ? props.controlClassName : 'form-control', name: props.name, value: props.value, placeholder: props.placeholder, onChange: function (e) { return props.onChange(e.target.value); }, onKeyUp: changed })));\r\n};\r\nvar FilterSelect = function (props) {\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"grid-filter-ctrl grid-filter-select\" },\r\n        !!props.label && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, props.label)),\r\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", { className: \"form-control\" }, props.options.map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", { value: item[0], key: item[0] }, item[1])); }))));\r\n};\r\nvar FilterRadio = function (props /*: Filter & {\r\n    options: any\r\n\r\n}*/) {\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"grid-filter-ctrl grid-filter-radio\" },\r\n        props.label ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, props.label) : null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Controls__WEBPACK_IMPORTED_MODULE_1__.RadioButton, { onChange: function (ev) {\r\n                props.onChange(ev);\r\n            }, options: props.options.map(function (x) {\r\n                return { value: x[0], label: x[1] };\r\n            }), value: props.value })));\r\n};\r\nvar LazySelectFilter = function (props) {\r\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isLoading = _a[0], setIsLoading = _a[1];\r\n    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isOpen = _b[0], setIsOpen = _b[1];\r\n    var onToggle = function () {\r\n        setIsOpen(true);\r\n        if (!props.isLoaded || !props.loadOnce) {\r\n            setIsLoading(true);\r\n            props.onRequestAction({\r\n                'action': props.name + '.load',\r\n            });\r\n        }\r\n    };\r\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\r\n        if (props.isLoaded) {\r\n            setIsLoading(false);\r\n        }\r\n    }, [props.isLoaded]);\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"grid-filter-ctrl grid-filter-select\" },\r\n        !!props.label && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, props.label)),\r\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { placeholder: props.placeholder, onMenuOpen: onToggle, onMenuClose: function () { return setIsOpen(false); }, menuIsOpen: isOpen, isSearchable: true, isLoading: isLoading, blurInputOnSelect: false, closeMenuOnSelect: true, options: props.options.length > 0 ? props.options\r\n                : props.value.length > 0\r\n                    ? props.value\r\n                    : props.options, getOptionLabel: function (option) { return option.label; }, getOptionValue: function (option) { return option.value; }, onChange: function (e) { return props.onChange([e]); }, value: props.value })));\r\n};\r\n\n\n//# sourceURL=webpack://App.%5Bname%5D/./js/src/Grid/filters.tsx?");

/***/ }),

/***/ "./js/src/components.jsx":
/*!*******************************!*\
  !*** ./js/src/components.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Collapsible\": () => (/* binding */ Collapsible),\n/* harmony export */   \"Border\": () => (/* binding */ Border)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\r\n\r\nvar Collapsible = function (_a) {\r\n    var children = _a.children, _b = _a.defaultIsOpen, defaultIsOpen = _b === void 0 ? null : _b, _c = _a.isOpen, isOpen = _c === void 0 ? null : _c, _d = _a.showTitle, showTitle = _d === void 0 ? 'Ukázat' : _d, _e = _a.hideTitle, hideTitle = _e === void 0 ? 'Skrýt' : _e;\r\n    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isVisible = _f[0], setIsVisible = _f[1];\r\n    var toggleVisible = function () { return setIsVisible(function (v) { return !v; }); };\r\n    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(CollapsibleView, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, { isVisible: isVisible, toggleVisible: toggleVisible, showTitle: showTitle, hideTitle: hideTitle }), children);\r\n};\r\nvar CollapsibleView = function (_a) {\r\n    var isVisible = _a.isVisible, toggleVisible = _a.toggleVisible, children = _a.children, showTitle = _a.showTitle, hideTitle = _a.hideTitle;\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", { type: \"button\", onClick: toggleVisible }, isVisible ? hideTitle : showTitle),\r\n        isVisible && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, children))));\r\n};\r\nvar Border = function (_a) {\r\n    var children = _a.children;\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { style: {\r\n            'padding': '9px',\r\n            'margin': '9px 6px',\r\n            'border': '2px solid rgba(0,0,0,.1)',\r\n            'borderRadius': '3px'\r\n        } }, children));\r\n};\r\n\n\n//# sourceURL=webpack://App.%5Bname%5D/./js/src/components.jsx?");

/***/ }),

/***/ "./js/src/main.jsx":
/*!*************************!*\
  !*** ./js/src/main.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var _Grid_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid/Grid */ \"./js/src/Grid/Grid.tsx\");\n\r\n\r\n\r\nvar initGrid = function (sel, data) {\r\n    react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Grid_Grid__WEBPACK_IMPORTED_MODULE_2__.Grid, { grid: data }), document.querySelector(sel));\r\n};\r\nwindow.App = {\r\n    initGrid: initGrid\r\n};\r\n\n\n//# sourceURL=webpack://App.%5Bname%5D/./js/src/main.jsx?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkApp_name_"] = self["webpackChunkApp_name_"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor.bundle.js"], () => (__webpack_require__("./js/src/main.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});