/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _import = __webpack_require__(1);

	var import2 = _interopRequireWildcard(_import);

	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj.default = obj;return newObj;
	  }
	}

	console.log(import2.sumFn(3, 2));
	//you can import like this:-
	// import {sumFn,sumMul} from './imports/import2.js';
	// console.log( sumFn(3,2) );
	// console.log( sumMul(10,200,90) );


	//or you can use aliases like this:-
	// import {sumFn as sumFnNew , sumMul as Mulnew} from './imports/import2.js';
	// console.log( sumFnNew(3,2) );
	// console.log( Mulnew(10,200,90) );


	//or you can import every thing 

	console.log(import2.sumMul(10, 200, 90));

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	// class Man{
	// 	get_man_name(name){ return name }
	// }
	// export default Man;


	//you can either put export at the beginning:-
	// export function sumFn1(a=1,b=2){ return a+b }
	// export function sumFn2(a=1,b=2){ return a+b }


	//or you can put the exprot at the end:-
	function sumFn() {
		var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
		var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
		return a + b;
	}
	function sumMul() {
		var count = 0;

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		args.forEach(function (n) {
			count += n;
		});
		return count;
	}
	exports.sumFn = sumFn;
	exports.sumMul = sumMul;

/***/ }
/******/ ]);