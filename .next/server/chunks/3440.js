"use strict";
exports.id = 3440;
exports.ids = [3440];
exports.modules = {

/***/ 3440:
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
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const IndustorylevelSection = (props)=>{
    const [filterData, setFilterData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(props?.sliderData);
    const [filterValue, setFilterValue] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("All");
    const ref8 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const isInView27 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useInView)(ref8, {
        once: true
    });
    const isInView28 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useInView)(ref8, {
        once: true
    });
    const handleShortData = (type)=>{
        setFilterValue(type);
        if (type == "All") {
            setFilterData(props?.sliderData);
        } else {
            const data = props?.sliderData.filter((e)=>e?.serviceType == type);
            setFilterData(data);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "industry-level overflow-x-hidden",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-content-width",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: ref8,
                className: "row align-items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 col-lg-6  ",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            style: {
                                transform: isInView27 ? "none" : "translateX(100%)",
                                opacity: isInView27 ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s"
                            },
                            className: "industry-tabs",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    children: "Industry level"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "We, at iWebwiser know that good is just not enough. We deliver and partner with only the extraordinary. We understand the importance of staying ahead in the ever-changing IT industry at iWebwiser."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "all-tabs",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "javascript:void(0)",
                                            className: filterValue == "Healthcare & Lifestyle" ? "btn active" : "btn active",
                                            role: "button",
                                            onClick: ()=>handleShortData("Healthcare & Lifestyle"),
                                            children: "Healthcare & Lifestyle"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "javascript:void(0)",
                                            className: filterValue == "Retail & eCommerce" ? "btn active" : "btn",
                                            role: "button",
                                            onClick: ()=>handleShortData("Retail & eCommerce"),
                                            children: "Retail & eCommerce"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "javascript:void(0)",
                                            className: filterValue == "E-Learning System" ? "btn active" : "btn",
                                            role: "button",
                                            onClick: ()=>handleShortData("E-Learning System"),
                                            children: "E-Learning System"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "javascript:void(0)",
                                            className: filterValue == "Tour & Travels" ? "btn active" : "btn",
                                            role: "button",
                                            onClick: ()=>handleShortData("Tour & Travels"),
                                            children: "Tour & Travels"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "javascript:void(0)",
                                            className: filterValue == "Real Estate" ? "btn active" : "btn",
                                            role: "button",
                                            onClick: ()=>handleShortData("Real Estate"),
                                            children: "Real Estate"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 col-lg-6 ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_4___default()), {
                            style: {
                                transform: isInView28 ? "none" : "translateY(-100%)",
                                opacity: isInView28 ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.44, 0.88, 0.88, 1) 0.5s"
                            },
                            ...settings1,
                            className: "industry-level-slide",
                            children: filterData?.map((item, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "slider-content",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "slider-bg-img",
                                            children: item.imageType == "Image" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utility_HomeSliderData__WEBPACK_IMPORTED_MODULE_1__/* .MyImage */ .V, {
                                                className: "w-100",
                                                src: item?.serviceImage,
                                                width: 0,
                                                height: 0,
                                                sizes: "100vw",
                                                alt: item.alt
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                className: "w-100",
                                                autoPlay: true,
                                                muted: true,
                                                loop: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                                    src: item?.serviceImage,
                                                    type: "video/mp4"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "card-img-overlay",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    children: item?.serviceType
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: item?.serviceDescription
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: `${item?.link}`,
                                                    as: `${item?.as}`,
                                                    className: "btn",
                                                    role: "button",
                                                    children: "Learn more"
                                                })
                                            ]
                                        })
                                    ]
                                }, key))
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndustorylevelSection);
var settings1 = {
    slidesToShow: 1,
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;