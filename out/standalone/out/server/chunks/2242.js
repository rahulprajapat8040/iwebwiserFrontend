"use strict";
exports.id = 2242;
exports.ids = [2242];
exports.modules = {

/***/ 2242:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Utility_HomeSliderData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1345);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const SolutionSection = ({ SolutionSection })=>{
    // console.log(SolutionSection)
    const ref7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    // const isInView25 = useInView(ref7, { once: true });
    const isInView26 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useInView)(ref7, {
        once: true
    });
    const isInView27 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useInView)(ref7, {
        once: true
    });
    const isInView28 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useInView)(ref7, {
        once: true
    });
    const isInView29 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useInView)(ref7, {
        once: true
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "solutions overflow-hidden",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-content-width",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: ref7,
                className: "",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            transform: isInView26 ? "none" : "translateY(-100%)",
                            opacity: isInView26 ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s"
                        },
                        className: "solution-content text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "sh",
                                children: SolutionSection?.heading_1
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "sd",
                                children: SolutionSection?.Paragraph
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "items",
                        children: SolutionSection?.SolutionCarditem_1?.slice(0, 3).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        transform: isInView27 ? "none" : "translateY(-100px)",
                                        opacity: isInView27 ? 1 : 0,
                                        transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.8s"
                                    },
                                    className: "solution-card",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "solution-card-img",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: item?.Img,
                                                alt: "Digital Transformations"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "card-body",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: item.blogLink,
                                                as: "/medi-fellows",
                                                className: "stretched-link text-decoration-none",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        children: item?.heading
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                        children: item?.Paragraphinner
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }, index))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " text-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/our-solutions",
                            as: "/our-solutions",
                            role: "button",
                            className: "btn btn-outline-dark",
                            children: [
                                "Explore All Solutions",
                                " "
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SolutionSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;