/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/GeraCpf.js":
/*!********************************!*\
  !*** ./src/modules/GeraCpf.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GeraCpf)
/* harmony export */ });
/* harmony import */ var _ValidaCpf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValidaCpf */ "./src/modules/ValidaCpf.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GeraCpf = /*#__PURE__*/function () {
  function GeraCpf() {
    _classCallCheck(this, GeraCpf);
  }

  _createClass(GeraCpf, [{
    key: "rand",
    value: function rand() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100000000;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 999999999;
      return String(Math.floor(Math.random() * (max - min) + min));
    }
  }, {
    key: "formataCpf",
    value: function formataCpf(cpf) {
      cpf += '00000000000';
      return cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11);
    }
  }, {
    key: "geraNovoCpf",
    value: function geraNovoCpf() {
      var cpfParcial = this.rand();
      var digito1 = _ValidaCpf__WEBPACK_IMPORTED_MODULE_0__.default.criaDigito(cpfParcial);
      var digito2 = _ValidaCpf__WEBPACK_IMPORTED_MODULE_0__.default.criaDigito(cpfParcial + digito1);
      var novoCpf = cpfParcial + digito1 + digito2;
      console.log(novoCpf);
      return this.formataCpf(novoCpf);
    }
  }]);

  return GeraCpf;
}();



/***/ }),

/***/ "./src/modules/ValidaCpf.js":
/*!**********************************!*\
  !*** ./src/modules/ValidaCpf.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ValidaCpf)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ValidaCpf = /*#__PURE__*/function () {
  function ValidaCpf() {
    _classCallCheck(this, ValidaCpf);
  }

  _createClass(ValidaCpf, [{
    key: "construtor",
    value: function construtor(cpfRecebido) {
      Object.defineProperty(this, 'cpfLimpo', {
        writable: false,
        configurable: false,
        enumerable: true,
        value: cpfRecebido.replace(/\D+/g, '')
      });
    }
  }, {
    key: "isSequence",
    value: function isSequence() {
      return this.cpfLimpo === this.cpfLimpo[0].repeat(11);
    }
  }, {
    key: "geraNovoCpf",
    value: function geraNovoCpf() {
      var cpfParcial = this.cpfLimpo.slice(0, -2);
      var digito1 = ValidaCpf.criaDigito(cpfParcial);
      var digito2 = ValidaCpf.criaDigito(cpfParcial + digito1);
      this.novoCpf = cpfParcial + digito1 + digito2;
    }
  }, {
    key: "valida",
    value: function valida() {
      if (typeof this.cpfLimpo === 'undefined' || this.cpfLimpo.length !== 11 || this.isSequence()) return false;
      this.geraNovoCpf();
      return this.novoCpf === this.cpfLimpo;
    }
  }], [{
    key: "criaDigito",
    value: function criaDigito(cpfParcial) {
      var cpfArray = Array.from(cpfParcial);
      var tamanho = cpfArray.length + 1;
      var digito = cpfArray.reduce(function (a, v) {
        a += Number(v) * tamanho;
        tamanho--;
        return a;
      }, 0);
      digito = 11 - digito % 11;
      return digito > 9 ? '0' : String(digito);
    }
  }]);

  return ValidaCpf;
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --primary-color: #113366;\n    --primary-color-ligth: #2c7cf3;\n    --primary-color-disable: #a1b6d3;\n}\n\n*{\n    outline: 0;\n    font-family: 'Open sans', sans-serif;\n    font-weight: bold;\n    text-align: center;\n    box-sizing: border-box;\n    text-transform: uppercase;\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    background-color: var(--primary-color);\n}\n\n.container{\n    line-height: 1.8em;\n    font-size: 1.3em;\n    max-width: 25rem;\n    max-height: 18rem;\n    margin: 6rem auto;\n    padding: 2rem 0rem 1rem;\n    border-radius: 1.5rem;\n    border: solid 1px #ffffff;\n}\n\nh1{\n    padding: 0.4rem 0rem;\n    margin: 0.2rem 0 1rem;\n}\n\nh1, h2, button{\n    background-color: #ffffff;\n    color: var(--primary-color);\n    height: 3rem;\n}\n\nbutton{\n    width: 9rem;\n    font-size: 1.2em;\n    border-radius: 20rem;\n    border: none;\n    cursor: pointer;\n    margin: 0.1rem auto;\n}\n\nbutton:hover{\n    background-color: var(--primary-color-ligth);\n    color: #ffffff;\n}\n\n#resultado{\n    background-color: var(--primary-color);\n    color: #ffffff;\n    width: 15rem;\n    margin: 0 auto;\n}\n\n@media only screen and (max-width: 768px) {\n    .container{\n        margin: 6rem auto;\n        line-height: 1.9em;\n        font-size: 1.2em;\n    }\n}\n@media only screen and (max-width: 576px) {\n    .container{\n        line-height: 2em;\n        font-size: 1.16em;\n    }\n}\n\n@media only screen and (max-width: 420px) {\n    .container{\n        margin: 6rem 0.5rem;\n    }\n}", "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AACA;IACI,wBAAwB;IACxB,8BAA8B;IAC9B,gCAAgC;AACpC;;AAEA;IACI,UAAU;IACV,oCAAoC;IACpC,iBAAiB;IACjB,kBAAkB;IAClB,sBAAsB;IACtB,yBAAyB;IACzB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,uBAAuB;IACvB,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,oBAAoB;IACpB,YAAY;IACZ,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,4CAA4C;IAC5C,cAAc;AAClB;;AAEA;IACI,sCAAsC;IACtC,cAAc;IACd,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI;QACI,iBAAiB;QACjB,kBAAkB;QAClB,gBAAgB;IACpB;AACJ;AACA;IACI;QACI,gBAAgB;QAChB,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,mBAAmB;IACvB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\n:root{\n    --primary-color: #113366;\n    --primary-color-ligth: #2c7cf3;\n    --primary-color-disable: #a1b6d3;\n}\n\n*{\n    outline: 0;\n    font-family: 'Open sans', sans-serif;\n    font-weight: bold;\n    text-align: center;\n    box-sizing: border-box;\n    text-transform: uppercase;\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    background-color: var(--primary-color);\n}\n\n.container{\n    line-height: 1.8em;\n    font-size: 1.3em;\n    max-width: 25rem;\n    max-height: 18rem;\n    margin: 6rem auto;\n    padding: 2rem 0rem 1rem;\n    border-radius: 1.5rem;\n    border: solid 1px #ffffff;\n}\n\nh1{\n    padding: 0.4rem 0rem;\n    margin: 0.2rem 0 1rem;\n}\n\nh1, h2, button{\n    background-color: #ffffff;\n    color: var(--primary-color);\n    height: 3rem;\n}\n\nbutton{\n    width: 9rem;\n    font-size: 1.2em;\n    border-radius: 20rem;\n    border: none;\n    cursor: pointer;\n    margin: 0.1rem auto;\n}\n\nbutton:hover{\n    background-color: var(--primary-color-ligth);\n    color: #ffffff;\n}\n\n#resultado{\n    background-color: var(--primary-color);\n    color: #ffffff;\n    width: 15rem;\n    margin: 0 auto;\n}\n\n@media only screen and (max-width: 768px) {\n    .container{\n        margin: 6rem auto;\n        line-height: 1.9em;\n        font-size: 1.2em;\n    }\n}\n@media only screen and (max-width: 576px) {\n    .container{\n        line-height: 2em;\n        font-size: 1.16em;\n    }\n}\n\n@media only screen and (max-width: 420px) {\n    .container{\n        margin: 6rem 0.5rem;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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
/******/ 			id: moduleId,
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_GeraCpf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/GeraCpf */ "./src/modules/GeraCpf.js");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");


document.addEventListener('submit', function (e) {
  e.preventDefault();
  var gera = new _modules_GeraCpf__WEBPACK_IMPORTED_MODULE_0__.default();
  var resultado = document.querySelector('#resultado');
  resultado.innerHTML = gera.geraNovoCpf();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map