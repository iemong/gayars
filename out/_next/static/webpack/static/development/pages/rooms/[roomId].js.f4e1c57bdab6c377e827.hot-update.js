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
/* harmony import */ var _src_components_organisms_room_Audience__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/components/organisms/room/Audience */ "./src/components/organisms/room/Audience.tsx");
/* harmony import */ var _src_components_organisms_room_Host__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/components/organisms/room/Host */ "./src/components/organisms/room/Host.tsx");


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
      lineNumber: 14
    },
    __self: this
  }), __jsx(_src_components_organisms_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(Inner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, !pageName && __jsx(_src_components_organisms_room__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: function onClick(page) {
      setPageName(page);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }) || pageName === 'audience' && __jsx(_src_components_organisms_room_Audience__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }) || pageName === 'host' && __jsx(_src_components_organisms_room_Host__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })));
});
var Inner = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());

/***/ }),

/***/ "./src/components/organisms/room/Host.tsx":
/*!************************************************!*\
  !*** ./src/components/organisms/room/Host.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../atoms/Button */ "./src/components/atoms/Button.tsx");
/* harmony import */ var _assets_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/const */ "./src/assets/const.ts");
/* harmony import */ var _assets_api_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/api/firebase */ "./src/assets/api/firebase.ts");


var _jsxFileName = "/Users/irie-shinnosuke/Documents/study/hackathon/remote-work/gayars/src/components/organisms/room/Host.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-style: normal;\n    font-size: 24px;\n    line-height: 28px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: ", ";\n    margin-bottom: 40px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      canPlay = _React$useState2[0],
      setCanPlay = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      isPrepare = _React$useState4[0],
      setIsPrepare = _React$useState4[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var roomId = router.query.roomId;
  var se1 = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](new Howl({
    src: ["/sound/se_bash.mp3"]
  }));
  var se2 = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](new Howl({
    src: ["/sound/se_hahaha.mp3"]
  }));
  var se3 = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](new Howl({
    src: ["/sound/se_hakushu.mp3"]
  }));
  var se4 = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](new Howl({
    src: ["/sound/se_hyu.mp3"]
  }));
  var se5 = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](new Howl({
    src: ["/sound/se_hyuuuu.mp3"]
  }));
  var se6 = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](new Howl({
    src: ["/sound/se_nandeyanen.mp3"]
  }));
  var se7 = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](new Howl({
    src: ["/sound/se_oh.mp3"]
  }));
  var se8 = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](new Howl({
    src: ["/sound/se_uma.mp3"]
  }));
  var se9 = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](new Howl({
    src: ["/sound/se_wan.mp3"]
  }));

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2__["useState"]({
    sound1: 0
  }),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      sound1 = _React$useState6[0],
      setSound1 = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2__["useState"]({
    sound2: 0
  }),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      sound2 = _React$useState8[0],
      setSound2 = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2__["useState"]({
    sound3: 0
  }),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState9, 2),
      sound3 = _React$useState10[0],
      setSound3 = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_2__["useState"]({
    sound4: 0
  }),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState11, 2),
      sound4 = _React$useState12[0],
      setSound4 = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_2__["useState"]({
    sound5: 0
  }),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState13, 2),
      sound5 = _React$useState14[0],
      setSound5 = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_2__["useState"]({
    sound6: 0
  }),
      _React$useState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState15, 2),
      sound6 = _React$useState16[0],
      setSound6 = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_2__["useState"]({
    sound7: 0
  }),
      _React$useState18 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState17, 2),
      sound7 = _React$useState18[0],
      setSound7 = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_2__["useState"]({
    sound8: 0
  }),
      _React$useState20 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState19, 2),
      sound8 = _React$useState20[0],
      setSound8 = _React$useState20[1];

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_2__["useState"]({
    sound9: 0
  }),
      _React$useState22 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState21, 2),
      sound9 = _React$useState22[0],
      setSound9 = _React$useState22[1];

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    var soundRef = _assets_api_firebase__WEBPACK_IMPORTED_MODULE_7__["database"].ref("rooms/".concat(roomId));
    soundRef.on('value', function (snapshot) {
      console.log(snapshot.val());

      if (isPrepare) {
        setSound1(snapshot.val().sound1);
        setSound2(snapshot.val().sound2);
        setSound3(snapshot.val().sound3);
        setSound4(snapshot.val().sound4);
        setSound5(snapshot.val().sound5);
        setSound6(snapshot.val().sound6);
        setSound7(snapshot.val().sound7);
        setSound8(snapshot.val().sound8);
        setSound9(snapshot.val().sound9);
      }

      setIsPrepare(true);
    });
  }, [isPrepare]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (canPlay) se1.current.play();
  }, [sound1]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (canPlay) se2.current.play();
  }, [sound2]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (canPlay) se3.current.play();
  }, [sound3]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (canPlay) se4.current.play();
  }, [sound4]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (canPlay) se5.current.play();
  }, [sound5]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (canPlay) se6.current.play();
  }, [sound6]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (canPlay) se7.current.play();
  }, [sound7]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (canPlay) se8.current.play();
  }, [sound8]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (canPlay) se9.current.play();
  }, [sound9]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "\u767A\u8868\u8005\u753B\u9762"), __jsx(_atoms_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    styleType: 'circle',
    onClick: function onClick() {
      setCanPlay(!canPlay);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, canPlay ? 'ON' : 'OFF'));
});
var Text = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].p(_templateObject(), _assets_const__WEBPACK_IMPORTED_MODULE_6__["COLORS"].ORANGE);

/***/ })

})
//# sourceMappingURL=[roomId].js.f4e1c57bdab6c377e827.hot-update.js.map