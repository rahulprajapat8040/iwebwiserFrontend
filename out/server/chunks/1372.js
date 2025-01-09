"use strict";
exports.id = 1372;
exports.ids = [1372];
exports.modules = {

/***/ 1372:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Header = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(Promise.all(/* import() */[__webpack_require__.e(1664), __webpack_require__.e(2636), __webpack_require__.e(5675), __webpack_require__.e(32), __webpack_require__.e(3260), __webpack_require__.e(757), __webpack_require__.e(3238), __webpack_require__.e(8296)]).then(__webpack_require__.bind(__webpack_require__, 8296)), {
    loadableGenerated: {
        modules: [
            "..\\Components\\Common\\Layout.js -> " + "./Header"
        ]
    }
});
const Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(Promise.all(/* import() */[__webpack_require__.e(1664), __webpack_require__.e(3260), __webpack_require__.e(757), __webpack_require__.e(8138)]).then(__webpack_require__.bind(__webpack_require__, 8138)), {
    loadableGenerated: {
        modules: [
            "..\\Components\\Common\\Layout.js -> " + "./Footer"
        ]
    }
});
const Layout = ({ children, data })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_3__["default"]();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            className: "main-container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {}),
                children,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;