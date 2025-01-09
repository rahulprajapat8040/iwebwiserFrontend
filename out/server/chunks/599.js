"use strict";
exports.id = 599;
exports.ids = [599];
exports.modules = {

/***/ 599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Utility_HomeSliderData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1345);


function ImageTable({ data, type }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: data?.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: item?.className,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "guest-img",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utility_HomeSliderData__WEBPACK_IMPORTED_MODULE_1__/* .MyImage */ .V, {
                        src: item?.GuestImg,
                        alt: "uitify",
                        width: 0,
                        height: 0,
                        sizes: "100vw"
                    })
                })
            }, i))
    });
}
;


/***/ })

};
;