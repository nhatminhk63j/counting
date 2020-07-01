(this["webpackJsonpcounting"] = this["webpackJsonpcounting"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/features/CountSelectButton/style.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/features/CountSelectButton/style.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".selected {\n  background-color: rgba(119, 199, 109, 0.3); }\n\n.not-selected {\n  background-color: rgba(255, 255, 255, 0.7); }\n\n.not-selected:hover {\n  transform: scale(1.1);\n  transition: all 0.5s; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/index.scss ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./features/Intro/images/bg.svg */ "./src/features/Intro/images/bg.svg");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Indie+Flower&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: \"Indie Flower\", cursive, -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif !important;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 1.6rem;\n  background-color: #00b4ff;\n  color: #333; }\n\nhtml {\n  font-size: 62.5%; }\n\n*,\n*:after,\n*:before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\n.intro {\n  height: 100vh;\n  width: 100%;\n  max-width: 2000px;\n  max-height: 1280px;\n  min-height: 213px;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: -3px 15%;\n  background-repeat: no-repeat;\n  overflow: hidden; }\n  @media screen and (orientation: portrait) {\n    .intro {\n      background-position-x: 65%; } }\n  @media screen and (orientation: portrait) and (min-height: 800px) {\n    .intro {\n      background-position-x: 60%; } }\n  @media screen and (max-width: 1000px) {\n    .intro {\n      background-position-x: 80%; } }\n  @media screen and (max-width: 384px) {\n    .intro {\n      background-position-x: 85%; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _hooks_useRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useRouter */ "./src/hooks/useRouter.js");
/* harmony import */ var _features_Intro_Intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/Intro/Intro */ "./src/features/Intro/Intro.js");
/* harmony import */ var _features_CountIntro_CountIntro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/CountIntro/CountIntro */ "./src/features/CountIntro/CountIntro.js");
/* harmony import */ var _contexts_ImagesContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contexts/ImagesContext */ "./src/contexts/ImagesContext.js");
/* harmony import */ var _features_CountSelect_CountSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/CountSelect/CountSelect */ "./src/features/CountSelect/CountSelect.js");
/* harmony import */ var _features_CountSelectButton_CountSelectButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/CountSelectButton/CountSelectButton */ "./src/features/CountSelectButton/CountSelectButton.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/App.js";










function App(props) {
  const {
    location
  } = Object(_hooks_useRouter__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const transitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useTransition"])(location, location => location.pathname, {
    from: {
      opacity: location.pathname !== "/" ? 0 : 1,
      transform: "translateX(0%)"
    },
    enter: {
      opacity: 1,
      transform: "translateX(0%)"
    },
    leave: {
      opacity: 0,
      transform: "translateX(-20%)",
      delay: 0
    }
  });
  return transitions.map(({
    item,
    props,
    key
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    key: key,
    style: props,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    location: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/count-select-button",
    exact: true,
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_ImagesContext__WEBPACK_IMPORTED_MODULE_6__["ImagesProvider"], {
      r: __webpack_require__("./src/features/CountIntro/images sync recursive \\.(png|jpe?g|svg)$"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_CountSelectButton_CountSelectButton__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 25
      }
    }))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/count-select",
    exact: true,
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_ImagesContext__WEBPACK_IMPORTED_MODULE_6__["ImagesProvider"], {
      r: __webpack_require__("./src/features/CountIntro/images sync recursive \\.(png|jpe?g|svg)$"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_CountSelect_CountSelect__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 25
      }
    }))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/count-intro",
    exact: true,
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_ImagesContext__WEBPACK_IMPORTED_MODULE_6__["ImagesProvider"], {
      r: __webpack_require__("./src/features/CountIntro/images sync recursive \\.(png|jpe?g|svg)$"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_CountIntro_CountIntro__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 23
      }
    }))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    exact: true,
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_ImagesContext__WEBPACK_IMPORTED_MODULE_6__["ImagesProvider"], {
      intro: true,
      r: __webpack_require__("./src/features/Intro/images sync \\.(png|jpe?g|svg)$"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_Intro_Intro__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 23
      }
    }))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/common/Audio.js":
/*!*****************************!*\
  !*** ./src/common/Audio.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sound_background_sound_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sound/background-sound.mp3 */ "./src/common/sound/background-sound.mp3");
/* harmony import */ var _sound_background_sound_mp3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sound_background_sound_mp3__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/common/Audio.js";



function Audio() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio", {
    src: _sound_background_sound_mp3__WEBPACK_IMPORTED_MODULE_1___default.a,
    autoPlay: true,
    volume: "0.2",
    loop: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Audio);

/***/ }),

/***/ "./src/common/loadSound.js":
/*!*********************************!*\
  !*** ./src/common/loadSound.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sound_1_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sound/1.mp3 */ "./src/common/sound/1.mp3");
/* harmony import */ var _sound_1_mp3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sound_1_mp3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sound_2_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sound/2.mp3 */ "./src/common/sound/2.mp3");
/* harmony import */ var _sound_2_mp3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sound_2_mp3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sound_3_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sound/3.mp3 */ "./src/common/sound/3.mp3");
/* harmony import */ var _sound_3_mp3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sound_3_mp3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sound_4_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sound/4.mp3 */ "./src/common/sound/4.mp3");
/* harmony import */ var _sound_4_mp3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sound_4_mp3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sound_5_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sound/5.mp3 */ "./src/common/sound/5.mp3");
/* harmony import */ var _sound_5_mp3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sound_5_mp3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sound_6_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sound/6.mp3 */ "./src/common/sound/6.mp3");
/* harmony import */ var _sound_6_mp3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sound_6_mp3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sound_7_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sound/7.mp3 */ "./src/common/sound/7.mp3");
/* harmony import */ var _sound_7_mp3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sound_7_mp3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sound_8_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sound/8.mp3 */ "./src/common/sound/8.mp3");
/* harmony import */ var _sound_8_mp3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sound_8_mp3__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sound_9_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sound/9.mp3 */ "./src/common/sound/9.mp3");
/* harmony import */ var _sound_9_mp3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sound_9_mp3__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _sound_10_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sound/10.mp3 */ "./src/common/sound/10.mp3");
/* harmony import */ var _sound_10_mp3__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sound_10_mp3__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _sound_11_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sound/11.mp3 */ "./src/common/sound/11.mp3");
/* harmony import */ var _sound_11_mp3__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sound_11_mp3__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _sound_12_mp3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sound/12.mp3 */ "./src/common/sound/12.mp3");
/* harmony import */ var _sound_12_mp3__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_sound_12_mp3__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _sound_13_mp3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sound/13.mp3 */ "./src/common/sound/13.mp3");
/* harmony import */ var _sound_13_mp3__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_sound_13_mp3__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sound_14_mp3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sound/14.mp3 */ "./src/common/sound/14.mp3");
/* harmony import */ var _sound_14_mp3__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_sound_14_mp3__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _sound_15_mp3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sound/15.mp3 */ "./src/common/sound/15.mp3");
/* harmony import */ var _sound_15_mp3__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_sound_15_mp3__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _sound_16_mp3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sound/16.mp3 */ "./src/common/sound/16.mp3");
/* harmony import */ var _sound_16_mp3__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_sound_16_mp3__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _sound_17_mp3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sound/17.mp3 */ "./src/common/sound/17.mp3");
/* harmony import */ var _sound_17_mp3__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_sound_17_mp3__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _sound_18_mp3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sound/18.mp3 */ "./src/common/sound/18.mp3");
/* harmony import */ var _sound_18_mp3__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_sound_18_mp3__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _sound_19_mp3__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sound/19.mp3 */ "./src/common/sound/19.mp3");
/* harmony import */ var _sound_19_mp3__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_sound_19_mp3__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _sound_20_mp3__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sound/20.mp3 */ "./src/common/sound/20.mp3");
/* harmony import */ var _sound_20_mp3__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_sound_20_mp3__WEBPACK_IMPORTED_MODULE_19__);




















/* harmony default export */ __webpack_exports__["default"] = (function (number) {
  switch (number) {
    case 1:
      return _sound_1_mp3__WEBPACK_IMPORTED_MODULE_0___default.a;

    case 2:
      return _sound_2_mp3__WEBPACK_IMPORTED_MODULE_1___default.a;

    case 3:
      return _sound_3_mp3__WEBPACK_IMPORTED_MODULE_2___default.a;

    case 4:
      return _sound_4_mp3__WEBPACK_IMPORTED_MODULE_3___default.a;

    case 5:
      return _sound_5_mp3__WEBPACK_IMPORTED_MODULE_4___default.a;

    case 6:
      return _sound_6_mp3__WEBPACK_IMPORTED_MODULE_5___default.a;

    case 7:
      return _sound_7_mp3__WEBPACK_IMPORTED_MODULE_6___default.a;

    case 8:
      return _sound_8_mp3__WEBPACK_IMPORTED_MODULE_7___default.a;

    case 9:
      return _sound_9_mp3__WEBPACK_IMPORTED_MODULE_8___default.a;

    case 10:
      return _sound_10_mp3__WEBPACK_IMPORTED_MODULE_9___default.a;

    case 11:
      return _sound_11_mp3__WEBPACK_IMPORTED_MODULE_10___default.a;

    case 12:
      return _sound_12_mp3__WEBPACK_IMPORTED_MODULE_11___default.a;

    case 13:
      return _sound_13_mp3__WEBPACK_IMPORTED_MODULE_12___default.a;

    case 14:
      return _sound_14_mp3__WEBPACK_IMPORTED_MODULE_13___default.a;

    case 15:
      return _sound_15_mp3__WEBPACK_IMPORTED_MODULE_14___default.a;

    case 16:
      return _sound_16_mp3__WEBPACK_IMPORTED_MODULE_15___default.a;

    case 17:
      return _sound_17_mp3__WEBPACK_IMPORTED_MODULE_16___default.a;

    case 18:
      return _sound_18_mp3__WEBPACK_IMPORTED_MODULE_17___default.a;

    case 19:
      return _sound_19_mp3__WEBPACK_IMPORTED_MODULE_18___default.a;

    case 20:
      return _sound_20_mp3__WEBPACK_IMPORTED_MODULE_19___default.a;

    default:
      return null;
  }
});

/***/ }),

/***/ "./src/common/sound/1.mp3":
/*!********************************!*\
  !*** ./src/common/sound/1.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/1.c8b2a639.mp3";

/***/ }),

/***/ "./src/common/sound/10.mp3":
/*!*********************************!*\
  !*** ./src/common/sound/10.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/10.9e8bb48a.mp3";

/***/ }),

/***/ "./src/common/sound/11.mp3":
/*!*********************************!*\
  !*** ./src/common/sound/11.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/11.4e8d908d.mp3";

/***/ }),

/***/ "./src/common/sound/12.mp3":
/*!*********************************!*\
  !*** ./src/common/sound/12.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/12.725b21ff.mp3";

/***/ }),

/***/ "./src/common/sound/13.mp3":
/*!*********************************!*\
  !*** ./src/common/sound/13.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/13.76dd33a9.mp3";

/***/ }),

/***/ "./src/common/sound/14.mp3":
/*!*********************************!*\
  !*** ./src/common/sound/14.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/14.9562c90b.mp3";

/***/ }),

/***/ "./src/common/sound/15.mp3":
/*!*********************************!*\
  !*** ./src/common/sound/15.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/15.ea2075cb.mp3";

/***/ }),

/***/ "./src/common/sound/16.mp3":
/*!*********************************!*\
  !*** ./src/common/sound/16.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/16.534c77dc.mp3";

/***/ }),

/***/ "./src/common/sound/17.mp3":
/*!*********************************!*\
  !*** ./src/common/sound/17.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/17.ddfae0c9.mp3";

/***/ }),

/***/ "./src/common/sound/18.mp3":
/*!*********************************!*\
  !*** ./src/common/sound/18.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/18.81f9e0b9.mp3";

/***/ }),

/***/ "./src/common/sound/19.mp3":
/*!*********************************!*\
  !*** ./src/common/sound/19.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/19.0bfaae3d.mp3";

/***/ }),

/***/ "./src/common/sound/2.mp3":
/*!********************************!*\
  !*** ./src/common/sound/2.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/2.d515a7ba.mp3";

/***/ }),

/***/ "./src/common/sound/20.mp3":
/*!*********************************!*\
  !*** ./src/common/sound/20.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/20.83bfab0d.mp3";

/***/ }),

/***/ "./src/common/sound/3.mp3":
/*!********************************!*\
  !*** ./src/common/sound/3.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/3.39f19237.mp3";

/***/ }),

/***/ "./src/common/sound/4.mp3":
/*!********************************!*\
  !*** ./src/common/sound/4.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/4.a84bfb0a.mp3";

/***/ }),

/***/ "./src/common/sound/5.mp3":
/*!********************************!*\
  !*** ./src/common/sound/5.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/5.63c91171.mp3";

/***/ }),

/***/ "./src/common/sound/6.mp3":
/*!********************************!*\
  !*** ./src/common/sound/6.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/6.fa60a8ee.mp3";

/***/ }),

/***/ "./src/common/sound/7.mp3":
/*!********************************!*\
  !*** ./src/common/sound/7.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/7.1f0e04d8.mp3";

/***/ }),

/***/ "./src/common/sound/8.mp3":
/*!********************************!*\
  !*** ./src/common/sound/8.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/8.b3d75f65.mp3";

/***/ }),

/***/ "./src/common/sound/9.mp3":
/*!********************************!*\
  !*** ./src/common/sound/9.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/9.273d318b.mp3";

/***/ }),

/***/ "./src/common/sound/background-sound.mp3":
/*!***********************************************!*\
  !*** ./src/common/sound/background-sound.mp3 ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/background-sound.cd95474d.mp3";

/***/ }),

/***/ "./src/common/sound/false.mp3":
/*!************************************!*\
  !*** ./src/common/sound/false.mp3 ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/false.7159184e.mp3";

/***/ }),

/***/ "./src/common/sound/true.mp3":
/*!***********************************!*\
  !*** ./src/common/sound/true.mp3 ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/true.d5adace4.mp3";

/***/ }),

/***/ "./src/common/sound/victory.mp3":
/*!**************************************!*\
  !*** ./src/common/sound/victory.mp3 ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/victory.22ec3ff1.mp3";

/***/ }),

/***/ "./src/common/styles.js":
/*!******************************!*\
  !*** ./src/common/styles.js ***!
  \******************************/
/*! exports provided: Game, Loader, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Game = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-image: ${({
  filter
}) => {
  return filter ? " linear-gradient(to bottom, rgba(0,0,0,.3), rgba(0,0,0,.5)), " : "";
}}
    url(${({
  bg
}) => bg});
  background-size: ${({
  size
}) => size};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .bird-bottom {
    position: absolute;
    bottom: 0;
    right: -1%;
    transform: scale(0.7);
  }

  @media screen and (max-width: 768px) {
    .bird-bottom {
      display: none;
      transform: scale(0.3);
    }
  }
`;
const hourglass = styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"]`
0% {
  transform: rotate(0);
  animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
50% {
  transform: rotate(900deg);
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
100% {
  transform: rotate(1800deg);
}`;
const Loader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 6px;
    box-sizing: border-box;
    border: 26px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${hourglass} 1.2s infinite;
  }
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  border: 1px #77c76e solid;
  background: #60af56;
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  padding: 1rem;
  border-radius: 30px;
  margin-top: 10%;
  cursor: pointer;
  font-family: "Indie Flower", cursive, -apple-system;
  text-transform: uppercase;
  transform: scale(1);
  transition: 0.2s all;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
    padding: 1rem;
  }
  @media screen and (max-height: 213px) {
    margin-top: 0;
    padding: 0;
    font-size: 0.9rem;
  }
`;

/***/ }),

/***/ "./src/contexts/ImagesContext.js":
/*!***************************************!*\
  !*** ./src/contexts/ImagesContext.js ***!
  \***************************************/
/*! exports provided: ImagesContext, useImagesContext, ImagesProvider, ImagesConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesContext", function() { return ImagesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useImagesContext", function() { return useImagesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesProvider", function() { return ImagesProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesConsumer", function() { return ImagesConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/styles */ "./src/common/styles.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/contexts/ImagesContext.js";



const Background = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImagesContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  images: {}
});
const useImagesContext = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ImagesContext);
const ImagesProvider = props => {
  const [images, setImages] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [imagesReadyCnt, setImagesReadyCnt] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    r
  } = props; // import and preload images

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const importedImages = {};
    let i = 0;
    r.keys().forEach(item => {
      const importedImg = r(item);
      importedImages[item.replace("./", "").replace("items/", "")] = importedImg;
      const img = new Image();

      img.onload = () => {
        i++;
        setImagesReadyCnt(i);
      };

      img.src = importedImg;
    });
    setImages(importedImages);
  }, [r]);

  if (Object.keys(images).length !== imagesReadyCnt || imagesReadyCnt < 1) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Background, {
      className: props.intro ? "intro" : "",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_styles__WEBPACK_IMPORTED_MODULE_2__["Loader"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }));
  }

  if (props.intro) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Background, {
      className: "intro",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImagesContext.Provider, {
      value: {
        images
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    }, props.children));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImagesContext.Provider, {
    value: {
      images
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, props.children);
};
const ImagesConsumer = ImagesContext.Consumer;

/***/ }),

/***/ "./src/features/CountIntro/CountIntro.js":
/*!***********************************************!*\
  !*** ./src/features/CountIntro/CountIntro.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/styles */ "./src/common/styles.js");
/* harmony import */ var _images_bg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/bg.png */ "./src/features/CountIntro/images/bg.png");
/* harmony import */ var _images_bg_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_bg_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/features/CountIntro/styles.js");
/* harmony import */ var _components_Bag_Bag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Bag/Bag */ "./src/features/CountIntro/components/Bag/Bag.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./src/features/CountIntro/config.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/CountIntro/CountIntro.js";






const items = _config__WEBPACK_IMPORTED_MODULE_5__["foods"].map(item => {
  return {
    name: item,
    fliped: false
  };
});

class CountIntro extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_styles__WEBPACK_IMPORTED_MODULE_1__["Game"], {
      bg: _images_bg_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      size: "cover",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["GameContainer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bag_Bag__WEBPACK_IMPORTED_MODULE_4__["default"], {
      items: items,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CountIntro);

/***/ }),

/***/ "./src/features/CountIntro/components/Bag/Bag.js":
/*!*******************************************************!*\
  !*** ./src/features/CountIntro/components/Bag/Bag.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_ImagesContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../contexts/ImagesContext */ "./src/contexts/ImagesContext.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/features/CountIntro/components/Bag/styles.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _common_loadSound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/loadSound */ "./src/common/loadSound.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/CountIntro/components/Bag/Bag.js";






var intervalID;
var next = false;

function Bag(props) {
  const {
    images
  } = Object(_contexts_ImagesContext__WEBPACK_IMPORTED_MODULE_1__["useImagesContext"])();
  const [listItems, setListItems] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([...props.items]);
  const [idx, setIdx] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [timeDelay, setTimeDelay] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(200);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    intervalID = setInterval(() => {
      setIdx(preIdx => preIdx + 1);
    }, timeDelay);
  }, [timeDelay]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const newListItems = [...listItems];

    async function loadSoundEffect(number) {
      const sound = await new Audio(Object(_common_loadSound__WEBPACK_IMPORTED_MODULE_5__["default"])(number - 19));
      sound.play();
    }

    if (idx <= 19) {
      newListItems[idx] = { ...listItems[idx],
        flipped: !listItems[idx].flipped
      };
    } else if (idx <= 39) {
      // const sound = new Audio(loadSound(idx - 19));
      // sound.play();
      loadSoundEffect(idx);
      console.log(idx);
      newListItems[idx - 20] = { ...listItems[idx - 20],
        flipped: !listItems[idx - 20].flipped,
        displayNumber: true
      };
    }

    setListItems(newListItems);
  }, [idx]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (idx > 19) {
      setTimeDelay(1000);
      clearInterval(intervalID);
      intervalID = setInterval(() => {
        setIdx(preIdx => preIdx + 1);
      }, 1000);
    }

    if (idx >= 38) {
      setTimeout(() => {
        next = true;
      }, 2000);
      return () => clearInterval(intervalID);
    }
  }, [idx]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, !next ? listItems.map((item, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
      key: `p${i}`,
      className: `item ${item.flipped ? "gray" : null} ${item.displayNumber && i === 19 ? "shake-scale" : null}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 29
      }
    }, item.displayNumber ? i + 1 : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: images[item.name + ".svg"],
      alt: item.name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 29
      }
    }));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
    to: "count-select",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Bag);

/***/ }),

/***/ "./src/features/CountIntro/components/Bag/styles.js":
/*!**********************************************************!*\
  !*** ./src/features/CountIntro/components/Bag/styles.js ***!
  \**********************************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _images_bag_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/bag.png */ "./src/features/CountIntro/images/bag.png");
/* harmony import */ var _images_bag_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_bag_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_filter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/filter.svg */ "./src/features/CountIntro/images/filter.svg");
/* harmony import */ var _images_filter_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_filter_svg__WEBPACK_IMPORTED_MODULE_2__);



const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  grid-area: cart;
  // background-image: url(${_images_bag_png__WEBPACK_IMPORTED_MODULE_1___default.a});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  // padding-top: 15%;
  position: relative;
  width: 100%;
  height: 100%;
  .gray {
    filter: url(${_images_filter_svg__WEBPACK_IMPORTED_MODULE_2___default.a}#grayscale);
    filter: gray;
    -webkit-filter: grayscale(1);
  }
  padding: 5%;
  div {
    width: 20%;
    height: 20%;
    text-align: center;
    img {
        width: 50%;
    }
  }

  .item {
    position: relative;

    h4 {
      font-size: 3rem;
      font-weight: 900;
      position: absolute;
      top: -30%;
      left: 46%;
    }
  }

  .scale {
    transform: scale(1.2);
    transision: all 0.2s;
  }

  .shake-scale {
    animation: shake 1.5s; 

    /* When the animation is finished, start again */
  }


  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg) scale(1.02); }
    10% { transform: translate(-1px, -2px) rotate(-1deg) scale(1.04); }
    20% { transform: translate(-3px, 0px) rotate(1deg) scale(1.06); }
    30% { transform: translate(3px, 2px) rotate(0deg) scale(1.08); }
    40% { transform: translate(1px, -1px) rotate(1deg) scale(1.1); }
    50% { transform: translate(-1px, 2px) rotate(-1deg) scale(1.12); }
    60% { transform: translate(-3px, 1px) rotate(0deg) scale(1.14); }
    70% { transform: translate(3px, 1px) rotate(-1deg) scale(1.16); }
    80% { transform: translate(-1px, -1px) rotate(1deg) scale(1.18); }
    90% { transform: translate(1px, 2px) rotate(0deg) scale(1.2); }
    100% { transform: translate(1px, -2px) rotate(-1deg) scale(1.22); }
  }

  @media screen and (max-width: 768px) {
    padding: 60% 5% 30% 5%;
    .item h4 {
      font-size: 1rem;
    }

    .bird-bottom {
      display: none;
      transform: scale(0.3);
    }
  }
`;

/***/ }),

/***/ "./src/features/CountIntro/config.js":
/*!*******************************************!*\
  !*** ./src/features/CountIntro/config.js ***!
  \*******************************************/
/*! exports provided: foods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foods", function() { return foods; });
const foods = ["watermelon", "grapes", "orange", "apple", "bananas", "strawberry", "pineapple", "tomato", "onion", "potato", "broccoli", "cabbage", "carrot", "milk", "pasta", "croissant", "mustard", "eggs", "jam", "orange"];

/***/ }),

/***/ "./src/features/CountIntro/images sync recursive \\.(png|jpe?g|svg)$":
/*!****************************************************************!*\
  !*** ./src/features/CountIntro/images sync \.(png|jpe?g|svg)$ ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bag.png": "./src/features/CountIntro/images/bag.png",
	"./balloon.png": "./src/features/CountIntro/images/balloon.png",
	"./balloons.svg": "./src/features/CountIntro/images/balloons.svg",
	"./bear.svg": "./src/features/CountIntro/images/bear.svg",
	"./bg.png": "./src/features/CountIntro/images/bg.png",
	"./done.svg": "./src/features/CountIntro/images/done.svg",
	"./filter.svg": "./src/features/CountIntro/images/filter.svg",
	"./items/apple.svg": "./src/features/CountIntro/images/items/apple.svg",
	"./items/aubergine.svg": "./src/features/CountIntro/images/items/aubergine.svg",
	"./items/avocado.svg": "./src/features/CountIntro/images/items/avocado.svg",
	"./items/banana.svg": "./src/features/CountIntro/images/items/banana.svg",
	"./items/bananas.svg": "./src/features/CountIntro/images/items/bananas.svg",
	"./items/blueberry.svg": "./src/features/CountIntro/images/items/blueberry.svg",
	"./items/broccoli.svg": "./src/features/CountIntro/images/items/broccoli.svg",
	"./items/cabbage.svg": "./src/features/CountIntro/images/items/cabbage.svg",
	"./items/cake.svg": "./src/features/CountIntro/images/items/cake.svg",
	"./items/carrot.svg": "./src/features/CountIntro/images/items/carrot.svg",
	"./items/croissant.svg": "./src/features/CountIntro/images/items/croissant.svg",
	"./items/eggs.svg": "./src/features/CountIntro/images/items/eggs.svg",
	"./items/grapes.svg": "./src/features/CountIntro/images/items/grapes.svg",
	"./items/jam.svg": "./src/features/CountIntro/images/items/jam.svg",
	"./items/kiwi.svg": "./src/features/CountIntro/images/items/kiwi.svg",
	"./items/leek.svg": "./src/features/CountIntro/images/items/leek.svg",
	"./items/lemon.svg": "./src/features/CountIntro/images/items/lemon.svg",
	"./items/mango.svg": "./src/features/CountIntro/images/items/mango.svg",
	"./items/milk.svg": "./src/features/CountIntro/images/items/milk.svg",
	"./items/mushroom.svg": "./src/features/CountIntro/images/items/mushroom.svg",
	"./items/mustard.svg": "./src/features/CountIntro/images/items/mustard.svg",
	"./items/onion.svg": "./src/features/CountIntro/images/items/onion.svg",
	"./items/orange.svg": "./src/features/CountIntro/images/items/orange.svg",
	"./items/pasta.svg": "./src/features/CountIntro/images/items/pasta.svg",
	"./items/pineapple.svg": "./src/features/CountIntro/images/items/pineapple.svg",
	"./items/potato.svg": "./src/features/CountIntro/images/items/potato.svg",
	"./items/pumpkin.svg": "./src/features/CountIntro/images/items/pumpkin.svg",
	"./items/radish.svg": "./src/features/CountIntro/images/items/radish.svg",
	"./items/spinach.svg": "./src/features/CountIntro/images/items/spinach.svg",
	"./items/strawberry.svg": "./src/features/CountIntro/images/items/strawberry.svg",
	"./items/tomato.svg": "./src/features/CountIntro/images/items/tomato.svg",
	"./items/turnip.svg": "./src/features/CountIntro/images/items/turnip.svg",
	"./items/watermelon.svg": "./src/features/CountIntro/images/items/watermelon.svg",
	"./shopping-cart.svg": "./src/features/CountIntro/images/shopping-cart.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/features/CountIntro/images sync recursive \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "./src/features/CountIntro/images/bag.png":
/*!************************************************!*\
  !*** ./src/features/CountIntro/images/bag.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/features/CountIntro/images/balloon.png":
/*!****************************************************!*\
  !*** ./src/features/CountIntro/images/balloon.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/balloon.b6f14cc5.png";

/***/ }),

/***/ "./src/features/CountIntro/images/balloons.svg":
/*!*****************************************************!*\
  !*** ./src/features/CountIntro/images/balloons.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/balloons.60460b3f.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/bear.svg":
/*!*************************************************!*\
  !*** ./src/features/CountIntro/images/bear.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bear.e51e28c0.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/bg.png":
/*!***********************************************!*\
  !*** ./src/features/CountIntro/images/bg.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bg.5c95bfbc.png";

/***/ }),

/***/ "./src/features/CountIntro/images/done.svg":
/*!*************************************************!*\
  !*** ./src/features/CountIntro/images/done.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/done.30734eac.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/filter.svg":
/*!***************************************************!*\
  !*** ./src/features/CountIntro/images/filter.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/filter.e4cab1df.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/apple.svg":
/*!********************************************************!*\
  !*** ./src/features/CountIntro/images/items/apple.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/apple.96037b82.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/aubergine.svg":
/*!************************************************************!*\
  !*** ./src/features/CountIntro/images/items/aubergine.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/aubergine.5d38528c.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/avocado.svg":
/*!**********************************************************!*\
  !*** ./src/features/CountIntro/images/items/avocado.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/avocado.212bec08.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/banana.svg":
/*!*********************************************************!*\
  !*** ./src/features/CountIntro/images/items/banana.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/banana.fff0a950.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/bananas.svg":
/*!**********************************************************!*\
  !*** ./src/features/CountIntro/images/items/bananas.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bananas.9a38de60.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/blueberry.svg":
/*!************************************************************!*\
  !*** ./src/features/CountIntro/images/items/blueberry.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/blueberry.21d8c744.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/broccoli.svg":
/*!***********************************************************!*\
  !*** ./src/features/CountIntro/images/items/broccoli.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/broccoli.75a8a496.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/cabbage.svg":
/*!**********************************************************!*\
  !*** ./src/features/CountIntro/images/items/cabbage.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/cabbage.ae4da5ae.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/cake.svg":
/*!*******************************************************!*\
  !*** ./src/features/CountIntro/images/items/cake.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/cake.89cafa12.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/carrot.svg":
/*!*********************************************************!*\
  !*** ./src/features/CountIntro/images/items/carrot.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/carrot.7dfd44f2.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/croissant.svg":
/*!************************************************************!*\
  !*** ./src/features/CountIntro/images/items/croissant.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/croissant.17206da7.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/eggs.svg":
/*!*******************************************************!*\
  !*** ./src/features/CountIntro/images/items/eggs.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/eggs.705c973b.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/grapes.svg":
/*!*********************************************************!*\
  !*** ./src/features/CountIntro/images/items/grapes.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/grapes.11be6a40.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/jam.svg":
/*!******************************************************!*\
  !*** ./src/features/CountIntro/images/items/jam.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/jam.84db2cf4.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/kiwi.svg":
/*!*******************************************************!*\
  !*** ./src/features/CountIntro/images/items/kiwi.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/kiwi.6e1472eb.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/leek.svg":
/*!*******************************************************!*\
  !*** ./src/features/CountIntro/images/items/leek.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/leek.52e9a925.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/lemon.svg":
/*!********************************************************!*\
  !*** ./src/features/CountIntro/images/items/lemon.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/lemon.0a05f035.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/mango.svg":
/*!********************************************************!*\
  !*** ./src/features/CountIntro/images/items/mango.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/mango.ba1eeafc.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/milk.svg":
/*!*******************************************************!*\
  !*** ./src/features/CountIntro/images/items/milk.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/milk.16426bdb.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/mushroom.svg":
/*!***********************************************************!*\
  !*** ./src/features/CountIntro/images/items/mushroom.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/mushroom.fcaed136.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/mustard.svg":
/*!**********************************************************!*\
  !*** ./src/features/CountIntro/images/items/mustard.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/mustard.9c594fbb.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/onion.svg":
/*!********************************************************!*\
  !*** ./src/features/CountIntro/images/items/onion.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/onion.fb4880da.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/orange.svg":
/*!*********************************************************!*\
  !*** ./src/features/CountIntro/images/items/orange.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/orange.5a7f032e.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/pasta.svg":
/*!********************************************************!*\
  !*** ./src/features/CountIntro/images/items/pasta.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pasta.b7c51073.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/pineapple.svg":
/*!************************************************************!*\
  !*** ./src/features/CountIntro/images/items/pineapple.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pineapple.ce0b05ef.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/potato.svg":
/*!*********************************************************!*\
  !*** ./src/features/CountIntro/images/items/potato.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/potato.2938dbf2.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/pumpkin.svg":
/*!**********************************************************!*\
  !*** ./src/features/CountIntro/images/items/pumpkin.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pumpkin.71c4708a.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/radish.svg":
/*!*********************************************************!*\
  !*** ./src/features/CountIntro/images/items/radish.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/radish.b92ddd15.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/spinach.svg":
/*!**********************************************************!*\
  !*** ./src/features/CountIntro/images/items/spinach.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/spinach.9e8e9026.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/strawberry.svg":
/*!*************************************************************!*\
  !*** ./src/features/CountIntro/images/items/strawberry.svg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/strawberry.b7931bae.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/tomato.svg":
/*!*********************************************************!*\
  !*** ./src/features/CountIntro/images/items/tomato.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/tomato.4826181a.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/turnip.svg":
/*!*********************************************************!*\
  !*** ./src/features/CountIntro/images/items/turnip.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/turnip.a7028a0f.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/items/watermelon.svg":
/*!*************************************************************!*\
  !*** ./src/features/CountIntro/images/items/watermelon.svg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/watermelon.9b004dbc.svg";

/***/ }),

/***/ "./src/features/CountIntro/images/shopping-cart.svg":
/*!**********************************************************!*\
  !*** ./src/features/CountIntro/images/shopping-cart.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/shopping-cart.46f4edbd.svg";

/***/ }),

/***/ "./src/features/CountIntro/styles.js":
/*!*******************************************!*\
  !*** ./src/features/CountIntro/styles.js ***!
  \*******************************************/
/*! exports provided: GameContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameContainer", function() { return GameContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const GameContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    max-width: 990px;
    height: 95vh;
    max-height: 900px;
    width: 100%;
    background: rgba(255, 255, 255, 0.7);
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
`;

/***/ }),

/***/ "./src/features/CountSelect/CountSelect.js":
/*!*************************************************!*\
  !*** ./src/features/CountSelect/CountSelect.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/styles */ "./src/common/styles.js");
/* harmony import */ var _components_Bag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Bag */ "./src/features/CountSelect/components/Bag.js");
/* harmony import */ var _CountIntro_images_bg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CountIntro/images/bg.png */ "./src/features/CountIntro/images/bg.png");
/* harmony import */ var _CountIntro_images_bg_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CountIntro_images_bg_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CountIntro_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CountIntro/styles */ "./src/features/CountIntro/styles.js");
/* harmony import */ var _CountIntro_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CountIntro/config */ "./src/features/CountIntro/config.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/CountSelect/CountSelect.js";






let items = _CountIntro_config__WEBPACK_IMPORTED_MODULE_5__["foods"].map(item => {
  return {
    name: item,
    selected: false
  };
});

class CountSelect extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_styles__WEBPACK_IMPORTED_MODULE_1__["Game"], {
      bg: _CountIntro_images_bg_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      size: "cover",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountIntro_styles__WEBPACK_IMPORTED_MODULE_4__["GameContainer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bag__WEBPACK_IMPORTED_MODULE_2__["default"], {
      items: items,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CountSelect);

/***/ }),

/***/ "./src/features/CountSelect/components/Bag.js":
/*!****************************************************!*\
  !*** ./src/features/CountSelect/components/Bag.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_ImagesContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../contexts/ImagesContext */ "./src/contexts/ImagesContext.js");
/* harmony import */ var _CountIntro_components_Bag_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CountIntro/components/Bag/styles */ "./src/features/CountIntro/components/Bag/styles.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _common_loadSound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/loadSound */ "./src/common/loadSound.js");
/* harmony import */ var _common_sound_victory_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/sound/victory.mp3 */ "./src/common/sound/victory.mp3");
/* harmony import */ var _common_sound_victory_mp3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_common_sound_victory_mp3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./src/features/CountSelect/config.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/CountSelect/components/Bag.js";








let turn = 0;

function Bag(props) {
  const {
    images
  } = Object(_contexts_ImagesContext__WEBPACK_IMPORTED_MODULE_1__["useImagesContext"])();
  const [listItems, setListItems] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([...props.items]);
  const [next, setNext] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [number, setNumber] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const onClick = e => {
    let index = e.target.dataset.mssg;
    const [...newListItems] = listItems;

    if (newListItems[index].selected) {
      const sound = new Audio(Object(_common_loadSound__WEBPACK_IMPORTED_MODULE_5__["default"])(number - 1));
      sound.play();
      setNumber(preNum => preNum - 1);
    } else {
      const sound = new Audio(Object(_common_loadSound__WEBPACK_IMPORTED_MODULE_5__["default"])(number + 1));
      sound.play();
      setNumber(preNum => preNum + 1);
    }

    newListItems[index].selected = !newListItems[index].selected;
    setListItems(newListItems);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (_config__WEBPACK_IMPORTED_MODULE_7__["games"][turn] === number) {
      const victorySound = new Audio(_common_sound_victory_mp3__WEBPACK_IMPORTED_MODULE_6___default.a);
      victorySound.play();
      setTimeout(() => {
        setNext(true);
      }, 5000);
    }
  }, [number]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (next) {
      setListItems([...props.items.map(item => {
        return { ...item,
          selected: false
        };
      })]);
      setNumber(0);
      turn++;
      setNext(false);
    }
  }, [next]);

  if (turn >= _config__WEBPACK_IMPORTED_MODULE_7__["games"].length) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
      to: "/count-select-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    });
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: "100%",
        height: "90%",
        fontSize: "3rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      style: {
        position: "absolute",
        width: "100%",
        textAlign: "center"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 88
      }
    }, "Tap and count 1 - ", _config__WEBPACK_IMPORTED_MODULE_7__["games"][turn])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountIntro_components_Bag_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, listItems.map((item, i) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
        key: `p${i}`,
        className: `item`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 33
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: images[item.name + ".svg"],
        alt: item.name,
        "data-mssg": i,
        onClick: onClick,
        className: item.selected ? "scale" : null,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 37
        }
      }));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        position: "absolute",
        bottom: "2%",
        fontSize: "7rem",
        width: "100%",
        textAlign: "center"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 21
      }
    }, number)));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Bag);

/***/ }),

/***/ "./src/features/CountSelect/config.js":
/*!********************************************!*\
  !*** ./src/features/CountSelect/config.js ***!
  \********************************************/
/*! exports provided: games */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "games", function() { return games; });
const games = [20, 16];

/***/ }),

/***/ "./src/features/CountSelectButton/CountSelectButton.js":
/*!*************************************************************!*\
  !*** ./src/features/CountSelectButton/CountSelectButton.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/styles */ "./src/common/styles.js");
/* harmony import */ var _CountIntro_images_bg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CountIntro/images/bg.png */ "./src/features/CountIntro/images/bg.png");
/* harmony import */ var _CountIntro_images_bg_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CountIntro_images_bg_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CountIntro_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CountIntro/styles */ "./src/features/CountIntro/styles.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/features/CountSelectButton/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_sound_true_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/sound/true.mp3 */ "./src/common/sound/true.mp3");
/* harmony import */ var _common_sound_true_mp3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_common_sound_true_mp3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_sound_false_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/sound/false.mp3 */ "./src/common/sound/false.mp3");
/* harmony import */ var _common_sound_false_mp3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_common_sound_false_mp3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_sound_victory_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/sound/victory.mp3 */ "./src/common/sound/victory.mp3");
/* harmony import */ var _common_sound_victory_mp3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_common_sound_victory_mp3__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_loadSound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/loadSound */ "./src/common/loadSound.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config */ "./src/features/CountSelectButton/config.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/CountSelectButton/CountSelectButton.js";










const styleContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  flexWrap: "wrap"
};
const styleItem = {
  width: "15%",
  height: "15%",
  margin: "2.5%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "4rem",
  borderRadius: "2rem",
  cursor: "pointer"
};

class CountSelectButton extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.onClick = e => {
      if (this.state.index === parseInt(e.target.dataset.mssg)) {
        let idx = this.state.listItems.map(item => item.value).indexOf(this.state.index);
        let newListItems = [...this.state.listItems];
        let newItem = { ...newListItems[idx],
          selected: true
        };
        this.trueSound = new Audio(_common_sound_true_mp3__WEBPACK_IMPORTED_MODULE_5___default.a);
        this.trueSound.play();
        this.numberSound = new Audio(Object(_common_loadSound__WEBPACK_IMPORTED_MODULE_8__["default"])(this.state.index));
        this.numberSound.play();
        this.setState({
          listItems: [...newListItems.slice(0, idx), newItem, ...newListItems.slice(idx + 1)],
          index: this.state.index + 1
        });
      } else {
        this.falseSound = new Audio(_common_sound_false_mp3__WEBPACK_IMPORTED_MODULE_6___default.a);
        this.falseSound.volume = 0.1;
        this.falseSound.play();
      }
    };

    this.state = {
      listItems: [..._config__WEBPACK_IMPORTED_MODULE_9__["arr"].map(item => {
        return {
          value: item,
          selected: false
        };
      })],
      index: 1
    };
    this.trueSound = new Audio(_common_sound_true_mp3__WEBPACK_IMPORTED_MODULE_5___default.a);
    this.victorySound = new Audio(_common_sound_victory_mp3__WEBPACK_IMPORTED_MODULE_7___default.a);
  }

  componentDidUpdate() {
    if (this.state.index === 21) {
      // redirect man tiep theo
      this.victorySound.play();
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_styles__WEBPACK_IMPORTED_MODULE_1__["Game"], {
      bg: _CountIntro_images_bg_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      size: "cover",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountIntro_styles__WEBPACK_IMPORTED_MODULE_3__["GameContainer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      style: {
        paddingTop: "1rem",
        fontSize: "3rem",
        width: "100%",
        textAlign: "center"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }
    }, "Please select the numbers in turn from 1 to 20!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: styleContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }
    }, this.state.listItems.map(item => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styleItem,
        className: item.selected ? 'selected' : 'not-selected',
        "data-mssg": item.value,
        onClick: this.onClick,
        key: item.value,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 37
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        "data-mssg": item.value,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 41
        }
      }, item.value));
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CountSelectButton);

/***/ }),

/***/ "./src/features/CountSelectButton/config.js":
/*!**************************************************!*\
  !*** ./src/features/CountSelectButton/config.js ***!
  \**************************************************/
/*! exports provided: arr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arr", function() { return arr; });
const arr = [1, 5, 10, 2, 7, 11, 3, 15, 17, 4, 9, 18, 6, 8, 20, 12, 19, 13, 14, 16];

/***/ }),

/***/ "./src/features/CountSelectButton/style.scss":
/*!***************************************************!*\
  !*** ./src/features/CountSelectButton/style.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./style.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/features/CountSelectButton/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./style.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/features/CountSelectButton/style.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./style.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/features/CountSelectButton/style.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/features/Intro/Intro.js":
/*!*************************************!*\
  !*** ./src/features/Intro/Intro.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Car_Car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Car/Car */ "./src/features/Intro/components/Car/Car.js");
/* harmony import */ var _components_Bubble_Bubble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Bubble/Bubble */ "./src/features/Intro/components/Bubble/Bubble.js");
/* harmony import */ var _components_House_House__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/House/House */ "./src/features/Intro/components/House/House.js");
/* harmony import */ var _components_Rain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Rain */ "./src/features/Intro/components/Rain.js");
/* harmony import */ var _components_Sun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Sun */ "./src/features/Intro/components/Sun.js");
/* harmony import */ var _components_Ballon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Ballon */ "./src/features/Intro/components/Ballon.js");
/* harmony import */ var _components_Bird__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Bird */ "./src/features/Intro/components/Bird.js");
/* harmony import */ var _components_Rainbow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Rainbow */ "./src/features/Intro/components/Rainbow.js");
/* harmony import */ var _contexts_ImagesContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../contexts/ImagesContext */ "./src/contexts/ImagesContext.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./src/features/Intro/styles.js");
/* harmony import */ var _common_Audio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/Audio */ "./src/common/Audio.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/Intro/Intro.js";












/* harmony default export */ __webpack_exports__["default"] = (props => {
  const [selectedGame, setSelectedGame] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    images
  } = Object(_contexts_ImagesContext__WEBPACK_IMPORTED_MODULE_9__["useImagesContext"])();

  const selectGameHandler = game => {
    setSelectedGame(true);
    setTimeout(() => props.history.push("/" + game), 1500);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Audio__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Sun__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img: images["sun.svg"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Ballon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    img: images["ballon.svg"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bird__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_House_House__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Rain__WEBPACK_IMPORTED_MODULE_4__["default"], {
    img: images["rain.svg"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Rainbow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    img: images["rainbow.png"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_10__["CarWithBubble"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bubble_Bubble__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectedGame: selectedGame,
    selectGame: selectGameHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Car_Car__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedGame: selectedGame,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  })));
});

/***/ }),

/***/ "./src/features/Intro/components/Ballon.js":
/*!*************************************************!*\
  !*** ./src/features/Intro/components/Ballon.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/Intro/components/Ballon.js";



const Balloon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div)`
    width: 30%;
    height: 30%;
    position: fixed;
    left: 50%;
    top: 5rem;
    z-index: -3;
    background-image: url(${({
  img
}) => img});
    background-repeat: no-repeat;
    @media screen and (max-width: 600px) {
        left: 25%;
    }
    @media screen and (max-width: 600px) and (orientation: portrait) {
        display: none;
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (({
  img
}) => {
  const propsBallon = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    from: {
      top: "50%"
    },
    to: {
      top: "-50%"
    },
    config: {
      duration: 6000
    },
    delay: 250
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Balloon, {
    style: propsBallon,
    img: img,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 10
    }
  });
});

/***/ }),

/***/ "./src/features/Intro/components/Bird.js":
/*!***********************************************!*\
  !*** ./src/features/Intro/components/Bird.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _contexts_ImagesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contexts/ImagesContext */ "./src/contexts/ImagesContext.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/Intro/components/Bird.js";





const fly = props => styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
    0%{
        background-image: url(${props.images['bird1.png']});
    }
    50% {
        background-image: url(${props.images['bird2.png']});
    }
    100% {
        background-image: url(${props.images['bird1.png']});
    }
`;

const Bird = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div)`
    background-image: url(${props => props.images['bird1.png']});
    position: absolute;
    left: 30%;
    top: 2%;
    width: 15%;
    height: 15%;
    z-index: 15;
    background-size: contain;
    background-repeat: no-repeat;
    animation: ${fly} 0.5s infinite forwards;
    overflow: hidden;
    @media screen and (min-height: 800px) {
        top: 10%;
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    images
  } = Object(_contexts_ImagesContext__WEBPACK_IMPORTED_MODULE_3__["useImagesContext"])();
  const propsBird = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    from: {
      left: "30%",
      transform: "scale(1)",
      opacity: 1
    },
    to: [{
      left: "90%",
      transform: "scale(0.2)",
      opacity: 1,
      config: {
        duration: 22000
      }
    }, {
      left: "90%",
      transform: "scale(0)",
      opacity: 0,
      config: {
        duration: 100
      }
    }]
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bird, {
    style: propsBird,
    images: images,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 12
    }
  });
});

/***/ }),

/***/ "./src/features/Intro/components/Bubble/Bubble.js":
/*!********************************************************!*\
  !*** ./src/features/Intro/components/Bubble/Bubble.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _contexts_ImagesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../contexts/ImagesContext */ "./src/contexts/ImagesContext.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game */ "./src/features/Intro/components/Bubble/Game.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/features/Intro/components/Bubble/styles.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/Intro/components/Bubble/Bubble.js";





/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    selectedGame,
    selectGame
  } = props;
  const {
    images
  } = Object(_contexts_ImagesContext__WEBPACK_IMPORTED_MODULE_2__["useImagesContext"])();
  const springRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const propsBubble = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    from: {
      opacity: selectedGame ? 1 : 0,
      transform: `scale(${selectedGame ? 1 : 0}) translateY(30px)`
    },
    to: [{
      opacity: selectedGame ? 0 : 1,
      transform: `scale(${selectedGame ? 0 : 1}) translateY(30px)`
    }, {
      opacity: selectedGame ? 0 : 1,
      transform: `scale(${selectedGame ? 0 : 1}) translateY(0px)`,
      config: {
        duration: 250
      }
    }],
    ref: springRef,
    immediate: selectedGame
  });
  const gamesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const propsGames = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    from: {
      transform: `scale(${selectedGame ? 1 : 0})`
    },
    to: [{
      transform: `scale(${selectedGame ? 0 : 1})`
    }],
    ref: gamesRef,
    immediate: selectedGame
  });
  Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useChain"])([springRef, gamesRef], [selectedGame ? 0 : 2, selectedGame ? 0 : 3.25]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Dialog"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    style: {
      position: "relative",
      ...propsBubble
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Circular"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Hey, Tap and Count 1 - 20")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Games"], {
    style: propsGames,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game__WEBPACK_IMPORTED_MODULE_3__["default"], {
    click: () => selectGame('count-intro'),
    img: images["start-button.svg"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  })));
});

/***/ }),

/***/ "./src/features/Intro/components/Bubble/Game.js":
/*!******************************************************!*\
  !*** ./src/features/Intro/components/Bubble/Game.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/features/Intro/components/Bubble/styles.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/Intro/components/Bubble/Game.js";


/* harmony default export */ __webpack_exports__["default"] = (({
  img,
  click
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["Game"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: img,
  width: "100",
  height: "100",
  alt: "shop game",
  onClick: click,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, "Start")));

/***/ }),

/***/ "./src/features/Intro/components/Bubble/styles.js":
/*!********************************************************!*\
  !*** ./src/features/Intro/components/Bubble/styles.js ***!
  \********************************************************/
/*! exports provided: Dialog, Circular, Games, Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circular", function() { return Circular; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Games", function() { return Games; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");


const Dialog = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  align-self: flex-end;
  max-width: 500px;
  width: 30%;
  margin-right: 10%;
  z-index: 30;
  font-size: 2.6rem;
  height: 30%;

  @media screen and (max-width: 1000px) {
    width: 40%;
    margin-right: -5%;
  }
  @media screen and (max-width: 767px) {
    font-size: 2rem;
    width: 45%;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.4rem;
  }

  @media screen and (min-height: 1000px) {
    font-size: 3rem;
  }
`;
const Circular = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgb(226, 226, 226);
  border-radius: 30px;
  padding: 10px 15px;

  @media screen and (min-height: 1500px) {
    padding: 30px;
  }
  @media screen and (max-width: 500px) {
    padding: 10px;
  }

  &:before {
    content: "";
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgb(226, 226, 226);
    width: 7%;
    padding: 5%;
    border-radius: 50%;
    position: absolute;
    bottom: -60%;
    left: -10%;

    @media screen and (max-width: 400px) {
      bottom: 0%;
    }
  }

  &:after {
    content: "";
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgb(226, 226, 226);
    width: 5%;
    padding: 3%;
    border-radius: 50%;
    position: absolute;
    bottom: -80%;
    left: -17%;
    @media screen and (max-width: 400px) {
      bottom: -10%;
    }
  }
`;
const Games = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div)`
display: flex;
justify-content: center;
align-items: center;
width: 80%;
margin: 5% auto;`;
const Game = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  margin: 0 1rem;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 0px solid #cecece;
  width: 50%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.05);
  }
  cursor: pointer;
  transition: 0.2s all;
  img {
    transform: scale(1);
    width: 80%;
    height: 80%;
    @media screen and (max-width: 500px) {
      width: 100%;
    }
    @media screen and (max-width: 320px) {
      width: 25px;
    }
    
  }
  h2 {
    color: #bf51f5;
  }
`;

/***/ }),

/***/ "./src/features/Intro/components/Car/Car.js":
/*!**************************************************!*\
  !*** ./src/features/Intro/components/Car/Car.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _contexts_ImagesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../contexts/ImagesContext */ "./src/contexts/ImagesContext.js");
/* harmony import */ var _components_Tyres__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Tyres */ "./src/features/Intro/components/Car/components/Tyres.js");
/* harmony import */ var _components_Brum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Brum */ "./src/features/Intro/components/Car/components/Brum.js");
/* harmony import */ var _components_Gaz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Gaz */ "./src/features/Intro/components/Car/components/Gaz.js");
/* harmony import */ var _components_Dino__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Dino */ "./src/features/Intro/components/Car/components/Dino.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./src/features/Intro/components/Car/styles.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/Intro/components/Car/Car.js";








/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    selectedGame
  } = props;
  const {
    images
  } = Object(_contexts_ImagesContext__WEBPACK_IMPORTED_MODULE_2__["useImagesContext"])();
  let propsCar = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    from: {
      left: selectedGame ? "32%" : "-10%"
    },
    to: {
      left: selectedGame ? "100%" : "32%"
    },
    config: selectedGame ? {
      duration: 1000
    } : react_spring__WEBPACK_IMPORTED_MODULE_1__["config"].slow,
    delay: 250
  });
  const {
    c
  } = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    from: {
      c: 0
    },
    c: 1,
    config: {
      duration: 2000,
      mass: 1,
      tension: 280,
      friction: 60
    },
    delay: 250
  });
  let propsCarStart = {
    left: c.interpolate({
      range: [0, 0.95, 1],
      output: ["-10%", "33%", "32%"]
    })
  };

  if (!selectedGame) {
    propsCar = { ...propsCarStart
    };
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["CarContainer"], {
    style: propsCar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["Car"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: images["car.png"],
    alt: "car",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tyres__WEBPACK_IMPORTED_MODULE_3__["default"], {
    img: images["tyre3.svg"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Gaz__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["CarShadow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Brum__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dino__WEBPACK_IMPORTED_MODULE_6__["default"], {
    selectedGame: selectedGame,
    img: images["dino3.svg"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }));
});

/***/ }),

/***/ "./src/features/Intro/components/Car/components/Brum.js":
/*!**************************************************************!*\
  !*** ./src/features/Intro/components/Car/components/Brum.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/Intro/components/Car/components/Brum.js";



const Brum = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div)`
  position: absolute;
  top: -50%;
  left: 35%;
  width: 100%;
  transform: rotate(-10deg);
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 5px;
  background: linear-gradient(to right, transparent, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.4rem;
    font-weight: normal;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  let propsBrum = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    from: {
      backgroundPosition: "-500%"
    },
    to: [{
      backgroundPosition: "500%",
      config: {
        duration: 1000
      }
    }, {
      backgroundPosition: "-500%",
      config: {
        duration: 0
      }
    }, {
      backgroundPosition: "500%",
      config: {
        duration: 1000
      }
    }, {
      backgroundPosition: "-500%",
      config: {
        duration: 0
      }
    }]
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Brum, {
    style: propsBrum,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, "Brum.. Brum..");
});

/***/ }),

/***/ "./src/features/Intro/components/Car/components/Dino.js":
/*!**************************************************************!*\
  !*** ./src/features/Intro/components/Car/components/Dino.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/Intro/components/Car/components/Dino.js";



const Dino = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div)`width: 30%;
position: absolute;
left: 18%;
z-index: -2;
img {
  width: 100%;
}`;
/* harmony default export */ __webpack_exports__["default"] = (({
  img,
  selectedGame
}) => {
  const propsDino = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    from: {
      top: selectedGame ? "22%" : "-15%"
    },
    to: [{
      top: selectedGame ? "-200px" : "-15%",
      config: {
        duration: 1000
      }
    }]
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dino, {
    style: propsDino,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img,
    alt: "dino",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }));
});

/***/ }),

/***/ "./src/features/Intro/components/Car/components/Gaz.js":
/*!*************************************************************!*\
  !*** ./src/features/Intro/components/Car/components/Gaz.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/Intro/components/Car/components/Gaz.js";



const Gaz = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div)`
  position: absolute;
  left: -6rem;
  bottom: 4rem;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  @media screen and (max-width: 490px) {
    width: 30px;
    height: 30px;
    bottom: 3rem;
    left: -3.5rem;
  }
`;
const GazMedium = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div)`
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  left: -10rem;
  bottom: 5rem;
  width: 40px;
  height: 40px;

  @media screen and (max-width: 490px) {
    width: 20px;
    height: 20px;
    bottom: 3.5rem;
    left: -6rem;
  }
`;
const GazSmall = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div)`
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  left: -12rem;
  bottom: 6rem;
  width: 20px;
  height: 20px;

  @media screen and (max-width: 490px) {
    width: 10px;
    height: 10px;
    bottom: 4rem;
    left: -7.5rem;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  // TODO to useTrail
  const spring = {
    from: {
      opacity: 1,
      transform: "scale(1)"
    },
    to: [{
      opacity: 0.5,
      transform: "scale(1.3)",
      config: {
        duration: 250
      }
    }, {
      opacity: 0,
      transform: "scale(0)",
      config: {
        duration: 250
      }
    }, {
      opacity: 0.5,
      transform: "scale(1.3)",
      config: {
        duration: 250
      }
    }, {
      opacity: 0,
      transform: "scale(0)",
      config: {
        duration: 250
      }
    }, {
      opacity: 0.5,
      transform: "scale(1.3)",
      config: {
        duration: 250
      }
    }, {
      opacity: 0,
      transform: "scale(0)",
      config: {
        duration: 250
      }
    }, {
      opacity: 0.5,
      transform: "scale(1.3)",
      config: {
        duration: 250
      }
    }, {
      opacity: 0,
      transform: "scale(0)",
      config: {
        duration: 250
      }
    }]
  };
  let propsGaz = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])(spring);
  let propsGazBefore = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({ ...spring,
    delay: 250
  });
  let propsGazAfter = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({ ...spring,
    delay: 550
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Gaz, {
    style: propsGaz,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GazMedium, {
    style: propsGazBefore,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GazSmall, {
    style: propsGazAfter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }));
});

/***/ }),

/***/ "./src/features/Intro/components/Car/components/Tyres.js":
/*!***************************************************************!*\
  !*** ./src/features/Intro/components/Car/components/Tyres.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/Intro/components/Car/components/Tyres.js";



const Tyre = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  width: 15%;
  height: 15%;
  position: absolute;
  z-index: 2;
  bottom: 10%;
  left: 11%;
`;
const TyreFront = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Tyre)`
  left: 62%;
`;
/* harmony default export */ __webpack_exports__["default"] = (({
  img
}) => {
  let propsTyre = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    width: '100%',
    height: 'auto',
    from: {
      transform: "rotate(0deg)"
    },
    to: [{
      transform: "rotate(1080deg)",
      config: {
        duration: 2000
      }
    }],
    delay: 250
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tyre, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].img, {
    style: propsTyre,
    src: img,
    alt: "tyre",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TyreFront, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].img, {
    style: propsTyre,
    src: img,
    alt: "tyre",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })));
});

/***/ }),

/***/ "./src/features/Intro/components/Car/styles.js":
/*!*****************************************************!*\
  !*** ./src/features/Intro/components/Car/styles.js ***!
  \*****************************************************/
/*! exports provided: CarContainer, Car, CarShadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarContainer", function() { return CarContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Car", function() { return Car; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarShadow", function() { return CarShadow; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");


const CarContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div)`
  position: relative;
  max-width: 450px;
  z-index: 20;
  width: 60%;

  @media screen and (max-height: 600px) {
    width: 50%;
  }

  @media screen and (max-width: 720px) and (orientation: portrait) {
    width: 60%;
  }

  @media screen and (max-width: 540px) and (orientation: portrait) {
    width: 70%;
  }

  @media screen and (max-height: 530px) and (orientation: landscape) {
    width: 40%;
  }
`;
const Car = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  img {
    width: 100%;
    height: auto;
  }
  background: transparent;
`;
const CarShadow = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: absolute;
  border-radius: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.2)
  );
  width: 100%;
  top: 90%;
  height: 3rem;
`;

/***/ }),

/***/ "./src/features/Intro/components/House/House.js":
/*!******************************************************!*\
  !*** ./src/features/Intro/components/House/House.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Hearts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Hearts */ "./src/features/Intro/components/House/components/Hearts.js");
/* harmony import */ var _components_Github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Github */ "./src/features/Intro/components/House/components/Github.js");
/* harmony import */ var _components_Satellite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Satellite */ "./src/features/Intro/components/House/components/Satellite.js");
/* harmony import */ var _components_Spider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Spider */ "./src/features/Intro/components/House/components/Spider.js");
/* harmony import */ var _components_Flower__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Flower */ "./src/features/Intro/components/House/components/Flower.js");
/* harmony import */ var _contexts_ImagesContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../contexts/ImagesContext */ "./src/contexts/ImagesContext.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/Intro/components/House/House.js";








const House = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 29%;
  min-width: 200px;
  max-width: 800px;
  position: absolute;
  left: 2%;
  bottom: 33%;
  z-index: 10;

  img { width: 100% };

  @media screen and (max-width: 1024px) {
    left: 1rem;
    bottom: 35%;
    width: 35%;
  }

  @media screen and (orientation: portrait) {
    width: 60%;
    bottom: 45%;
  }

  @media screen and (max-width: 800px) {
    width: 40%;
  }

  @media screen and (max-height: 700px) {
    bottom: 35%;
  }

  @media screen and (max-height: 700px) and (orientation: portrait) {
    bottom: 50%;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    images
  } = Object(_contexts_ImagesContext__WEBPACK_IMPORTED_MODULE_7__["useImagesContext"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(House, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'relative'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: images["house4.png"],
    alt: "house",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Satellite__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Github__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Spider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img: images["spider.svg"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Flower__WEBPACK_IMPORTED_MODULE_6__["default"], {
    img: images["flower1.svg"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hearts__WEBPACK_IMPORTED_MODULE_2__["default"], {
    img: images["heart.svg"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }));
});

/***/ }),

/***/ "./src/features/Intro/components/House/components/Flower.js":
/*!******************************************************************!*\
  !*** ./src/features/Intro/components/House/components/Flower.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/Intro/components/House/components/Flower.js";



const Flowers = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  position: absolute;
  right: 0;
  bottom: 25%;
  z-index: -1;
  width: 30%;
  height: 30%;
`;
/* harmony default export */ __webpack_exports__["default"] = (({
  img
}) => {
  const [reset, setReset] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const propsFlower = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    from: {
      transform: `rotate(${reset ? "15" : "-15"}deg)`
    },
    to: [{
      transform: `rotate(${reset ? "-15" : "15"}deg)`
    }],
    config: {
      duration: 2000
    },
    reset,
    onRest: () => {
      setReset(state => !state);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flowers, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    style: propsFlower,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img,
    alt: "flower",
    style: {
      width: "100%",
      height: "100%",
      display: "block"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })));
});

/***/ }),

/***/ "./src/features/Intro/components/House/components/Github.js":
/*!******************************************************************!*\
  !*** ./src/features/Intro/components/House/components/Github.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/Intro/components/House/components/Github.js";



const Github = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  top: 25%;
  left: 40%;
  width: 20%;
  height: 20%;
  z-index: 29;

  @media screen and (max-width: 900px) {
    top: 23%;
    left: 38%;
  }

  @media screen and (max-width: 535px) {
    top: 20%;
  }
  > div {
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: relative;
  }
`;
const Eyes = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  top: 20%;
  left: -10%;
  z-index: 29;
  @media screen and (max-width: 500px) {
    top: 21%;
  }
`;
const Eye = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div)`
  width: 12px;
  height: 6px;
  @media screen and (max-width: 500px) {
    width: 11px;
    height: 5px;
  }
  background: #fff;
  display: inline-block;

  border-radius: 50%;
  position: relative;
  overflow: hidden;
`;
const EyeLeft = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Eye)`
  margin-right: 2px;
  @media screen and (min-width: 500px) {
    margin-right: 4px;
  }
`;
const Ball = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div)`
  width: 4px;
  height: 4px;
  background: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const [reset, setReset] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    c
  } = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    from: {
      c: 0
    },
    to: {
      c: 1
    },
    config: {
      duration: 4000
    },
    reset,
    onRest: () => {
      setReset(s => !s);
    }
  });
  const propsEye = {
    background: c.interpolate({
      range: [0, 0.9, 1],
      output: ["#fff", "#fff", "#42c8c6"]
    })
  };
  const propsBall = {
    background: c.interpolate({
      range: [0, 0.25, 0.5, 0.9, 1],
      output: ["#000", "#000", "#000", "#000", "#42c8c6"]
    }),
    left: c.interpolate({
      range: [0, 0.25, 0.5, 0.9, 1],
      output: ["50%", "10%", "90%", "50%", "50%"]
    })
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Github, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://github.com/pylnata",
    title: "Star me on github",
    style: {
      zIndex: 1000
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Eyes, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EyeLeft, {
    style: propsEye,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ball, {
    style: propsBall,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Eye, {
    style: propsEye,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ball, {
    style: propsBall,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }))))));
});

/***/ }),

/***/ "./src/features/Intro/components/House/components/Hearts.js":
/*!******************************************************************!*\
  !*** ./src/features/Intro/components/House/components/Hearts.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/Intro/components/House/components/Hearts.js";



const Hearts = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Heart = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div)`
  background: url(${({
  img
}) => img});
  background-repeat: no-repeat;
  z-index: -3;
  position: absolute;
  top: 25%;
  left: 11%;
  margin-top: -20px;
  @media screen and (max-width: 768px) {
    top: 30%;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (({
  img
}) => {
  const initialItems = [{
    key: 0,
    x: 5,
    width: "5%"
  }, {
    key: 1,
    x: -3,
    width: "10%"
  }, {
    key: 2,
    x: 5,
    width: "7%"
  }, {
    key: 3,
    x: -3,
    width: "10%"
  }, {
    key: 4,
    x: 5,
    width: "5%"
  }];
  const [items, setList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialItems);
  const removeFromList = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    var nItems = [...items];
    nItems.pop();
    setList(nItems);
  }, [items]);
  const transitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useTransition"])(items, item => item.key, {
    initial: {
      xy: "1,0, 0",
      opacity: 1,
      transform: " scale(1)"
    },
    from: {
      xy: "1,0, 0",
      opacity: 1,
      transform: " scale(1)"
    },
    enter: {
      xy: "1,0, 0",
      opacity: 1,
      transform: " scale(1)"
    },
    leave: {
      xy: "2.4,-300, 1",
      opacity: 0,
      transform: " scale(1.5)"
    },
    config: {
      duration: 5000
    },
    onRest: () => {
      if (items.length === 0) setList(initialItems);
    }
  });
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const t = setInterval(() => {
      removeFromList();
    }, 1500);
    return () => {
      clearInterval(t);
    };
  }, [removeFromList]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hearts, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, transitions.map(({
    item,
    props,
    key
  }) => item && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Heart, {
    key: key,
    img: img,
    style: { ...props,
      width: item.width,
      height: item.width,
      transform: props.xy.interpolate(xy => {
        const a = xy.split(",");
        return ` translate(${a[2] * item.x * 15}px, ${a[1]}px) scale(${a[0]})`;
      })
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  })));
});

/***/ }),

/***/ "./src/features/Intro/components/House/components/Satellite.js":
/*!*********************************************************************!*\
  !*** ./src/features/Intro/components/House/components/Satellite.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/Intro/components/House/components/Satellite.js";



const Satellite = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  position: absolute;
  width: 30px;
  height: 30px;
  right: 21%;
  top: -5%;
}
`;
const SatelliteLine = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div)`
  border: solid 2px rgb(214, 212, 212);
  border-color: rgb(214, 212, 212) transparent transparent transparent;
  border-radius: 50%/20px 20px 0 0;
  position: absolute;
  transform: rotate(45deg);
  height: 100%;
  left: 15%;
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const [reset, setReset] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const trail = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useTrail"])(3, {
    config: {
      duration: 1500
    },
    opacity: 0,
    top: "-50%",
    width: 80,
    from: {
      opacity: 1,
      top: "30%",
      width: 20
    },
    onRest: () => setReset(state => !state),
    reset
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Satellite, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, trail.map((props, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SatelliteLine, {
    key: index,
    className: "satellite-line",
    style: props,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  })));
});

/***/ }),

/***/ "./src/features/Intro/components/House/components/Spider.js":
/*!******************************************************************!*\
  !*** ./src/features/Intro/components/House/components/Spider.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/Intro/components/House/components/Spider.js";



const Spider = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  position: absolute;
  top: 50%;
  left: 13%;
  width: 20px;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__img {
    width: 20px;
    height: 20px;
    margin-top: -5px;
  }
`;
const SpiderLine = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div)`
  margin-top: -13px;
  width: 1px;
  background-color: #333;
  height: 20px;
`;
const SpiderImg = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
width: 20px;
height: 20px;
margin-top: -5px;
`;
/* harmony default export */ __webpack_exports__["default"] = (({
  img
}) => {
  const [toggleSpider, setToggleSpider] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const propsLine = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    from: {
      height: toggleSpider ? 50 : 0
    },
    to: [{
      height: toggleSpider ? 15 : 50
    }],
    config: { ...react_spring__WEBPACK_IMPORTED_MODULE_1__["config"].gentle,
      duration: 2000
    },
    delay: 1000,
    onRest: () => {
      setToggleSpider(state => !state);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spider, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SpiderLine, {
    style: propsLine,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SpiderImg, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img,
    alt: "spider",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 18
    }
  })));
});

/***/ }),

/***/ "./src/features/Intro/components/Rain.js":
/*!***********************************************!*\
  !*** ./src/features/Intro/components/Rain.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/Intro/components/Rain.js";



const Rain = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div)`
    width: 15%;
    height: 15%;
    background-image: url(${({
  img
}) => img});
    background-size: 50%;
    background-repeat: repeat-x;
    position: fixed;
    right: 100px;
    transform: rotate(-25deg);
    @media screen and (max-width: 768px) {
        right: 20px;
        width: 100px;
        height: 100px;
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (({
  img
}) => {
  const [reset, setReset] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const propsRain = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    from: {
      top: "20%",
      opacity: 1
    },
    to: {
      top: "30%",
      opacity: 0
    },
    reset: reset < 3,
    onRest: () => {
      setReset(state => state + 1);
    },
    config: {
      duration: 700
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rain, {
    img: img,
    style: propsRain,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 10
    }
  });
});

/***/ }),

/***/ "./src/features/Intro/components/Rainbow.js":
/*!**************************************************!*\
  !*** ./src/features/Intro/components/Rainbow.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/Intro/components/Rainbow.js";



const Rainbow = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div)`
    position: absolute;
    width: 30%;
    height: 100%;
    right: 5%;
    transform: rotate(9deg);
    overflow: hidden;
    @media screen and  (orientation: portrait) {
        width: 50%;
        height: 50%;
        transform: rotate(-17deg);
        right: -20%;
    }
    background-image: url(${({
  img
}) => img});
    background-repeat: no-repeat;
    z-index: -3;
    background-size: 100%;
`;
/* harmony default export */ __webpack_exports__["default"] = (({
  img
}) => {
  const propsRainbow = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    from: {
      top: "50%",
      opacity: 0
    },
    to: [{
      top: "30%",
      opacity: 1,
      config: {
        duration: 500
      }
    }],
    delay: 2750
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rainbow, {
    style: propsRainbow,
    img: img,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 12
    }
  });
});

/***/ }),

/***/ "./src/features/Intro/components/Sun.js":
/*!**********************************************!*\
  !*** ./src/features/Intro/components/Sun.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/features/Intro/components/Sun.js";



const Sun = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    border-radius: 50%;
    position: fixed;
    top: 3%;
    left: 45%;
    z-index: 1;
    width: 20%;
    max-width: 150px;
    img {
        width: 100%;
        opacity: 0.8;
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (({
  img
}) => {
  const [resetSun, setResetSun] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const propSun = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    from: {
      transform: "rotate(0deg)"
    },
    to: {
      transform: "rotate(360deg)"
    },
    onRest: () => setResetSun(state => !state),
    config: {
      duration: 20000
    },
    reset: resetSun
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sun, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].img, {
    src: img,
    alt: "sun",
    style: propSun,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }));
});

/***/ }),

/***/ "./src/features/Intro/images sync \\.(png|jpe?g|svg)$":
/*!************************************************************************!*\
  !*** ./src/features/Intro/images sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ballon.svg": "./src/features/Intro/images/ballon.svg",
	"./bg.svg": "./src/features/Intro/images/bg.svg",
	"./bird1.png": "./src/features/Intro/images/bird1.png",
	"./bird2.png": "./src/features/Intro/images/bird2.png",
	"./bush.svg": "./src/features/Intro/images/bush.svg",
	"./car.png": "./src/features/Intro/images/car.png",
	"./dino3.svg": "./src/features/Intro/images/dino3.svg",
	"./flower1.svg": "./src/features/Intro/images/flower1.svg",
	"./heart.svg": "./src/features/Intro/images/heart.svg",
	"./house.svg": "./src/features/Intro/images/house.svg",
	"./house4.png": "./src/features/Intro/images/house4.png",
	"./puzzle-game.svg": "./src/features/Intro/images/puzzle-game.svg",
	"./rain.svg": "./src/features/Intro/images/rain.svg",
	"./rainbow.png": "./src/features/Intro/images/rainbow.png",
	"./shop-game.svg": "./src/features/Intro/images/shop-game.svg",
	"./spider.svg": "./src/features/Intro/images/spider.svg",
	"./stars.svg": "./src/features/Intro/images/stars.svg",
	"./start-button.svg": "./src/features/Intro/images/start-button.svg",
	"./sun.svg": "./src/features/Intro/images/sun.svg",
	"./tyre3.svg": "./src/features/Intro/images/tyre3.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/features/Intro/images sync \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "./src/features/Intro/images/ballon.svg":
/*!**********************************************!*\
  !*** ./src/features/Intro/images/ballon.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ballon.71e1a70c.svg";

/***/ }),

/***/ "./src/features/Intro/images/bg.svg":
/*!******************************************!*\
  !*** ./src/features/Intro/images/bg.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bg.c84a1df7.svg";

/***/ }),

/***/ "./src/features/Intro/images/bird1.png":
/*!*********************************************!*\
  !*** ./src/features/Intro/images/bird1.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bird1.33d18009.png";

/***/ }),

/***/ "./src/features/Intro/images/bird2.png":
/*!*********************************************!*\
  !*** ./src/features/Intro/images/bird2.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bird2.07e7e3fc.png";

/***/ }),

/***/ "./src/features/Intro/images/bush.svg":
/*!********************************************!*\
  !*** ./src/features/Intro/images/bush.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bush.1c32752e.svg";

/***/ }),

/***/ "./src/features/Intro/images/car.png":
/*!*******************************************!*\
  !*** ./src/features/Intro/images/car.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/car.d77c0766.png";

/***/ }),

/***/ "./src/features/Intro/images/dino3.svg":
/*!*********************************************!*\
  !*** ./src/features/Intro/images/dino3.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/dino3.ff80be77.svg";

/***/ }),

/***/ "./src/features/Intro/images/flower1.svg":
/*!***********************************************!*\
  !*** ./src/features/Intro/images/flower1.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/flower1.d42c488b.svg";

/***/ }),

/***/ "./src/features/Intro/images/heart.svg":
/*!*********************************************!*\
  !*** ./src/features/Intro/images/heart.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/heart.e87899ae.svg";

/***/ }),

/***/ "./src/features/Intro/images/house.svg":
/*!*********************************************!*\
  !*** ./src/features/Intro/images/house.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/house.ed55622d.svg";

/***/ }),

/***/ "./src/features/Intro/images/house4.png":
/*!**********************************************!*\
  !*** ./src/features/Intro/images/house4.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/house4.39b28772.png";

/***/ }),

/***/ "./src/features/Intro/images/puzzle-game.svg":
/*!***************************************************!*\
  !*** ./src/features/Intro/images/puzzle-game.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/puzzle-game.b486f3c6.svg";

/***/ }),

/***/ "./src/features/Intro/images/rain.svg":
/*!********************************************!*\
  !*** ./src/features/Intro/images/rain.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/rain.956dc6e4.svg";

/***/ }),

/***/ "./src/features/Intro/images/rainbow.png":
/*!***********************************************!*\
  !*** ./src/features/Intro/images/rainbow.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/rainbow.f7955deb.png";

/***/ }),

/***/ "./src/features/Intro/images/shop-game.svg":
/*!*************************************************!*\
  !*** ./src/features/Intro/images/shop-game.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/shop-game.c4d923b9.svg";

/***/ }),

/***/ "./src/features/Intro/images/spider.svg":
/*!**********************************************!*\
  !*** ./src/features/Intro/images/spider.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/spider.b7d4c294.svg";

/***/ }),

/***/ "./src/features/Intro/images/stars.svg":
/*!*********************************************!*\
  !*** ./src/features/Intro/images/stars.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/stars.cf33ec77.svg";

/***/ }),

/***/ "./src/features/Intro/images/start-button.svg":
/*!****************************************************!*\
  !*** ./src/features/Intro/images/start-button.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/start-button.0f028a2b.svg";

/***/ }),

/***/ "./src/features/Intro/images/sun.svg":
/*!*******************************************!*\
  !*** ./src/features/Intro/images/sun.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sun.eeadcd43.svg";

/***/ }),

/***/ "./src/features/Intro/images/tyre3.svg":
/*!*********************************************!*\
  !*** ./src/features/Intro/images/tyre3.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/tyre3.9f618796.svg";

/***/ }),

/***/ "./src/features/Intro/styles.js":
/*!**************************************!*\
  !*** ./src/features/Intro/styles.js ***!
  \**************************************/
/*! exports provided: CarWithBubble */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarWithBubble", function() { return CarWithBubble; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const CarWithBubble = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    position: absolute;
    z-index: 1000;
    width: 90%;
    bottom: 0;
    display: flex;
    flex-direction: column;
    padding-bottom: 6%;
    @media screen and (orientation: landscape) {
        max-height: 99vh;
    }
    @media screen and (orientation: portrait) {
        padding-bottom: 20%;
    }
    @media screen and (max-height: 960px) and (orientation: portrait) {
        padding-bottom: 35%;
    }
    @media screen and (max-height: 640px) and (orientation: portrait) {
        padding-bottom: 25%;
    }
    @media screen and (max-height: 424px) {
        padding-bottom: 3%;
    }
`;

/***/ }),

/***/ "./src/hooks/useRouter.js":
/*!********************************!*\
  !*** ./src/hooks/useRouter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useRouter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");


function useRouter() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(react_router__WEBPACK_IMPORTED_MODULE_1__["__RouterContext"]);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _common_Audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/Audio */ "./src/common/Audio.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/home/nhatminh/Documents/CNPM/counting/src/index.js";







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }
}))), document.getElementById('root'));
_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/index.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/nhatminh/Documents/CNPM/counting/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/nhatminh/Documents/CNPM/counting/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/nhatminh/Documents/CNPM/counting/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map