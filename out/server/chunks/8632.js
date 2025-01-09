"use strict";
exports.id = 8632;
exports.ids = [8632];
exports.modules = {

/***/ 8632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_HomeSliderData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1345);
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5245);
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(canvas_confetti__WEBPACK_IMPORTED_MODULE_3__);




const AynSection = (props)=>{
    const duration = 5000; // Duration in milliseconds (5 seconds)
    const animationEnd = Date.now() + duration;
    const defaults = {
        startVelocity: 30,
        spread: 1000,
        ticks: 200,
        zIndex: 0,
        gravity: 1,
        shapes: [
            "circle",
            "square"
        ],
        colors: [
            "#ff3333",
            "#0D41E1",
            "#FFDD00",
            "#FF0000",
            "#FFFF00"
        ]
    };
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }
    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    console.log("Section is in view, triggering confetti");
                    handleConfetti();
                    observer.unobserve(entry.target); // To run confetti only once
                }
            });
        }, {
            threshold: 0.8
        } // Adjust as needed
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return ()=>{
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    const handleConfetti = ()=>{
        const interval = setInterval(()=>{
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) {
                clearInterval(interval);
                return;
            }
            const particleCount = 50; // Fixed particle count for better visual effect
            canvas_confetti__WEBPACK_IMPORTED_MODULE_3___default()(Object.assign({}, defaults, {
                particleCount,
                origin: {
                    x: 0,
                    y: 0
                }
            }));
            canvas_confetti__WEBPACK_IMPORTED_MODULE_3___default()(Object.assign({}, defaults, {
                particleCount,
                origin: {
                    x: 0.5,
                    y: 0
                }
            }));
            canvas_confetti__WEBPACK_IMPORTED_MODULE_3___default()(Object.assign({}, defaults, {
                particleCount,
                origin: {
                    x: 1,
                    y: 0
                }
            }));
        }, 250); // Interval between confetti bursts
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "make-us-unique ayn-section",
        id: "ayn-section",
        ref: sectionRef,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-content-width",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container-fluid",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12 col-lg-8 px-lg-0 order-2 order-lg-1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "make-us-text",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        children: "iWebwiser Expands to UK with aYn Partnership"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "iWebwiser is excited to partner with aYn to finally open our UK office! This partnership lets us share our expertise with businesses across the UK, perfectly fitting with our goal of reaching a wider audience. Together with aYn, we look forward to empowering businesses in the UK with innovative solutions and tailored services."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-center text-lg-start",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "btn btn-outline-dark",
                                            role: "button",
                                            href: "https://ayntech.org/",
                                            children: "MORE ABOUT AYN"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12 col-lg-4 px-lg-0 order-1 order-lg-2",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "position-relative",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "logo-bg",
                                        children: [
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utility_HomeSliderData__WEBPACK_IMPORTED_MODULE_2__/* .MyImage */ .V, {
                                                src: "/assets/img/ayn-logo.webp",
                                                alt: "aYn logo",
                                                width: 0,
                                                height: 0
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utility_HomeSliderData__WEBPACK_IMPORTED_MODULE_2__/* .MyImage */ .V, {
                                        src: "/assets/img/ayn-bg.webp",
                                        alt: "Team working",
                                        width: 0,
                                        height: 0
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AynSection);


/***/ })

};
;