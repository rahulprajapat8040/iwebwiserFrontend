"use strict";
exports.id = 9507;
exports.ids = [9507];
exports.modules = {

/***/ 9507:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactFormSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ConsultantForm = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(__webpack_require__.e(/* import() */ 6472).then(__webpack_require__.bind(__webpack_require__, 6472)), {
    loadableGenerated: {
        modules: [
            "..\\Components\\OurCompany\\ContactFormSection.jsx -> " + "@/Components/Common/ConsultantForm"
        ]
    }
});
function ContactFormSection() {
    const ref10 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const isInView19 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useInView)(ref10, {
        once: true
    });
    const isInView20 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useInView)(ref10, {
        once: true
    });
    // const isInView21 = useInView(ref10, { once: true });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "contact-home",
        ref: ref10,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-content-width",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        transform: isInView19 ? "none" : "translateX(-500px)",
                        opacity: isInView19 ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "sh mb-5",
                            children: "Get Customized Solutions, Recommendations, and Estimates for Your Requirements."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "sd mb-5",
                            children: "With our user-friendly approach, we make technology accessible and easy to use. We understand that every business is unique, and our team of experts will work closely with you to understand your specific needs and challenge"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "emsec",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: "rchs",
                                    children: "Reach out us at"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "d-flex align-items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/assets/img/email-icon.svg",
                                            alt: ""
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "mailto:Support@iwebwiser.com",
                                            children: "Support@iwebwiser.com"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConsultantForm, {
                        isInView: isInView20
                    })
                })
            ]
        })
    });
}
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;