/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export one [provided] [no usage info] [missing usage info prevents renaming] */
/*! export three [provided] [no usage info] [missing usage info prevents renaming] */
/*! export two [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "one": () => /* binding */ one,
/* harmony export */   "two": () => /* binding */ two,
/* harmony export */   "default": () => /* binding */ sayHi,
/* harmony export */   "three": () => /* binding */ three
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
const { WebpackOptionsValidationError } = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'webpack'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/* Webpack. Собираем наш проект */

function myModule() {
    this.hello = function() {
        console.log('Hello');
    };

    this.goodbye = function() {
        console.log('Good Bye!');
    };
}

/* CommonJS */
module.exports = myModule;

// ----------------------------------------------
// ES6 Modules

let one = 1;

let two = 2;



// Экспорт по-умолчанию
function sayHi() {
    console.log('Hello');
}

let three = 3;



/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/js/main.js");
/* Webpack. Собираем наш  проект */

const myModule = __webpack_require__(/*! ./main */ "./src/js/main.js");

const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.goodbye();

/* Браузер не умеет собирать модули самостоятельно. 
Любая модульная система должна быть собрана в один результирующий файл. 
Для сборки модулей нужен сборщик, например Webpack
Webpack умеет полностью конфигурировать проект ( собирать скрипты в кучу; обрабатывать стили, картинки; формировать папки и т.д ) */

// ----------------------------------------------
// ES6 Modules


console.log(`${_main__WEBPACK_IMPORTED_MODULE_0__.one} and ${_main__WEBPACK_IMPORTED_MODULE_0__.two}`);

// --------------------------



console.log(_main__WEBPACK_IMPORTED_MODULE_0__.three);

// import * as data from './main'; /* Импортирует всё */



(0,_main__WEBPACK_IMPORTED_MODULE_0__.default)();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map