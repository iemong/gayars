webpackHotUpdate("static/development/pages/rooms/[roomId].js",{

/***/ "./pages/rooms/[roomId]/index.tsx":
/*!****************************************!*\
  !*** ./pages/rooms/[roomId]/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _src_components_organisms_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/components/organisms/Header */ "./src/components/organisms/Header.tsx");
/* harmony import */ var _src_components_organisms_Head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/components/organisms/Head */ "./src/components/organisms/Head.tsx");
/* harmony import */ var _src_components_organisms_room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/components/organisms/room */ "./src/components/organisms/room/index.tsx");


var _jsxFileName = "/Users/irie-shinnosuke/Documents/study/hackathon/remote-work/gayars/pages/rooms/[roomId]/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding-top: 40px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](''),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      pageName = _React$useState2[0],
      setPageName = _React$useState2[1];

  console.log(pageName);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx(_src_components_organisms_Head__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: '会場を作成しました | gayars',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_src_components_organisms_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(Inner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, !pageName && __jsx(_src_components_organisms_room__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: function onClick(page) {
      setPageName(page);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }) || pageName === 'audience' && 'audience' || pageName === 'host' && 'host'));
});
var Inner = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());

/***/ })

})
//# sourceMappingURL=[roomId].js.928702dfbef4dfa2745f.hot-update.js.map