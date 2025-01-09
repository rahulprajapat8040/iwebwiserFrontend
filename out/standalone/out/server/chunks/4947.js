exports.id = 4947;
exports.ids = [4947];
exports.modules = {

/***/ 6004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_Bootstrap5_3_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3278);
/* harmony import */ var _styles_Bootstrap5_3_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Bootstrap5_3_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_slick_1_8_1_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9860);
/* harmony import */ var _public_assets_slick_1_8_1_slick_slick_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_slick_1_8_1_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Iwebwiser_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3599);
/* harmony import */ var _styles_Iwebwiser_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Iwebwiser_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Responsive_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4152);
/* harmony import */ var _styles_Responsive_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Responsive_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6201);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7813);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// import "@/public/assets/slick-1.8.1/slick/slick-theme.css";


// import '@/public/assets/slick-1.8.1/slick/slick'
// import '@/public/assets/js/Iwebwiser'
// import '@/public/assets/js/new'




function NewApp({ Component, pageProps }) {
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        next_router__WEBPACK_IMPORTED_MODULE_8__.Router.events.on("routeChangeStart", ()=>setLoading(true));
        next_router__WEBPACK_IMPORTED_MODULE_8__.Router.events.on("routeChangeComplete", ()=>setLoading(false));
        next_router__WEBPACK_IMPORTED_MODULE_8__.Router.events.on("routeChangeError", ()=>setLoading(false));
        return ()=>{
            next_router__WEBPACK_IMPORTED_MODULE_8__.Router.events.off("routeChangeStart", ()=>setLoading(true));
            next_router__WEBPACK_IMPORTED_MODULE_8__.Router.events.off("routeChangeComplete", ()=>setLoading(false));
            next_router__WEBPACK_IMPORTED_MODULE_8__.Router.events.off("routeChangeError", ()=>setLoading(false));
        };
    }, [
        next_router__WEBPACK_IMPORTED_MODULE_8__.Router.events
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_loading__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "mainNextDiv",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.Toaster, {}),
                    loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_loading__WEBPACK_IMPORTED_MODULE_7__["default"], {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
// /* eslint-disable max-len */
// import Document, { Head, Html, Main, NextScript } from 'next/document';
// import React from 'react';
// export default class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx);
//     return { ...initialProps };
//   }
//   render() {
//     return (
//       <Html>
//         <Head>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
//           rel="stylesheet"
//         />
//     <link
//           rel="shortcut icon"
//           href="/assets/favicon-16x16.png"
//           sizes="16x16"
//         />
//      <link
//           href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
//           rel="stylesheet"
//           integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
//           crossorigin="anonymous"
//         />
//      {/* <link
//           href="https://unpkg.com/aos@2.3.1/dist/aos.css"
//           rel="stylesheet"
//         /> */}
//       <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.css"
//           integrity="sha512-4wfcoXlib1Aq0mUtsLLM74SZtmB73VHTafZAvxIp/Wk9u1PpIsrfmTvK0+yKetghCL8SHlZbMyEcV8Z21v42UQ=="
//           crossorigin="anonymous"
//           referrerPolicy="no-referrer"
//         />
//      <link
//           rel="stylesheet"
//           href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.css"
//         ></link>
//      <link
//           rel="stylesheet"
//           href="/assets/loader.css"
//         ></link>
//       <script
//           type="text/javascript"
//           src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"
//         ></script>
//    {/* <script
//           type="text/javascript"
//           src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"
//         ></script> */}
//     <script src="/assets/slick-1.8.1/slick/slick.js"></script>
//       <script src="/assets/js/Bootstrap5.3_js/bootstrap.bundle.js"></script>
//       {/* <!-- SLick Slider Js script start here... --> */}
//      <script
//           src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/fontawesome.js"
//           integrity="sha512-AfBF4iETeZa9jnGpwNC2NywAQPQR2r+ibHrgT084mHDfqSss8U+/dz6gDKmc/htKWjYlT3uOSLTrhdk+PpiJ4A=="
//           crossorigin="anonymous"
//           referrerPolicy="no-referrer"
//         ></script>
//    {/* <script
//           nomodule
//           src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.6.0/polyfill.min.js"
//           crossorigin="anonymous"
//         ></script> */}
//         {/* <script
// type="text/javascript"
//           nomodule
//           src="https://polyfill.io/v3/polyfill.min.js?features=Object.assign%2CElement.prototype.append%2CNodeList.prototype.forEach%2CCustomEvent%2Csmoothscroll"
//           crossorigin="anonymous"
//         ></script> */}
//         {/* <!-- main script of this project --> */}
//          {/* <script type="text/javascript" src="/assets/js/Iwebwiser.js"></script>  */}
//         <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.min.js"></script>
//          {/* <script type="text/javascript" src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>  */}
//         <script type="text/javascript" src="/assets/js/new.js"></script>
//         </Head>
//         <body style={{ display: "block", overflowX: "hidden" }}>
//           <Main />
//           <NextScript />
//         </body>
//       </ Html>
//     );
//   }
// }


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossorigin: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "shortcut icon",
                        href: "/assets/favicon-16x16.png",
                        sizes: "16x16"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css",
                        rel: "stylesheet",
                        integrity: "sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx",
                        crossorigin: "anonymous"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.css",
                        integrity: "sha512-4wfcoXlib1Aq0mUtsLLM74SZtmB73VHTafZAvxIp/Wk9u1PpIsrfmTvK0+yKetghCL8SHlZbMyEcV8Z21v42UQ==",
                        crossorigin: "anonymous"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.css"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/loader.css"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        type: "text/javascript",
                        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        type: "text/javascript",
                        src: "/assets/slick-1.8.1/slick/slick.js"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        type: "text/javascript",
                        src: "/assets/js/Bootstrap5.3_js/bootstrap.bundle.js"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        type: "text/javascript",
                        src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/fontawesome.js",
                        integrity: "sha512-AfBF4iETeZa9jnGpwNC2NywAQPQR2r+ibHrgT084mHDfqSss8U+/dz6gDKmc/htKWjYlT3uOSLTrhdk+PpiJ4A==",
                        crossorigin: "anonymous"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        type: "text/javascript",
                        src: "https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.min.js"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        src: "   https://cdn.jsdelivr.net/npm/tsparticles-preset-confetti@2.12.0/tsparticles.preset.confetti.min.js   "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        type: "text/javascript",
                        src: "/assets/js/new.js"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                        children: `
         .loader-container {
          width: 100%;
          height: 100vh;
          min-height:100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: fixed;
          background: #000000;
          z-index: 99999999;
          overflow: hidden;
        }
        
        .spinner {
          border: 3px solid #0c0c0c;
          border-radius: 50%;
          border-top: 3px solid #ffffff;
          width: 30px;
          height: 30px;
          animation: spin-anim 1.2s linear infinite;
        }
        
        .loader-container p .fade-heading.head-visible {
          color: #ffffff;
          font-family: "Poppins";
          font-size: 32px;
          font-style: normal;
          font-weight: 300;
          line-height: 135.5%;
          margin-top: 24px;
          display: inline-block;
          opacity: 1;
          transition: all 0.5s ease;
          -webkit-transition: all 0.5s ease;
          -moz-transition: all 0.5s ease;
          -ms-transition: all 0.5s ease;
          -o-transition: all 0.5s ease;
        }
        
        @keyframes spin-anim {
          0% {
            transform: rotate(0deg);
          }
        
          80% {
            transform: rotate(360deg);
          }
        
          100% {
            transform: rotate(360deg);
          }
        }

          @media screen and (max-width: 1399px){

            .loader-container p .fade-heading.head-visible {
              font-size: 32px !important;
            }

          }

          @media screen and (max-width: 991px){

            .loader-container p .fade-heading.head-visible {
              font-size: 26px !important;
            }

          }

          @media screen and (max-width: 567px){

            .loader-container p .fade-heading.head-visible {
              font-size: 18px !important;
              text-align: center !important;
            
          }
        `
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                style: {
                    display: "block",
                    overflowX: "hidden"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 7813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const headings = [
    "Elevating Possibilities, Loading Dreams",
    "Connecting Innovation and Technology",
    "Building Tomorrow's Tech, Today",
    "Weaving Web Wonders, Loading Now",
    "Unleashing Digital Brilliance",
    "Crafting Code, Forging Progress",
    "Loading Pixels of Innovation",
    "Loading the Future of IT"
];
function Loading() {
    const [currentHeadingIndex, setCurrentHeadingIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fadeDuration = 500; // in milliseconds
        const delayBetweenHeadings = 1000; // in milliseconds
        const timer = setTimeout(()=>{
            setCurrentHeadingIndex((prevIndex)=>(prevIndex + 1) % headings.length);
        }, fadeDuration + delayBetweenHeadings);
        return ()=>clearTimeout(timer);
    }, [
        currentHeadingIndex
    ]);
    return(// <div className="loadercontainer" style={{ width: "100%",
    //   height: "100vh",
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   position: "fixed",
    //   background: "#000000",
    //   zIndex: "99999999",
    //   overflow: "hidden"
    // }}
    // >
    //   <div  style={{
    //       border: "3px solid #0c0c0c",
    //       borderRadius: "50%",
    //       borderTop: "3px solid #ffffff",
    //       width: "30px",
    //       height: "30px",
    //       animation: "spin-anim 1.2s linear infinite",
    //       overflowX: "hidden",
    //       overflowY: "hidden"
    //   }}></div>
    //   <MobileView>
    //   <p className="loader-heading">
    //     <span
    //       className={`fade-heading head-visible`}
    //       style={{  color: "#ffffff",
    //         fontFamily: "Poppins",
    //         fontSize:   '20px',
    //         textAlign: 'center',
    //         fontStyle: "normal",
    //         fontWeight: "300",
    //         lineHeight: "135.5%",
    //         marginTop: "24px",
    //         display: "inline-block",
    //         opacity: 1,
    //         transition: "all 0.5s ease",
    //         overflowX: "hidden",
    //         overflowY: "hidden" }}
    //     >
    //       {headings[currentHeadingIndex]}
    //     </span>
    //   </p>
    //   </MobileView>
    //   <BrowserView>
    //   <p className="loader-heading">
    //     <span
    //       className={`fade-heading head-visible`}
    //       style={{  color: "#ffffff",
    //         fontFamily: "Poppins",
    //         fontSize:   '40px',
    //         textAlign: 'center',
    //         fontStyle: "normal",
    //         fontWeight: "300",
    //         lineHeight: "135.5%",
    //         marginTop: "24px",
    //         display: "inline-block",
    //         opacity: 1,
    //         transition: "all 0.5s ease",
    //         overflowX: "hidden",
    //         overflowY: "hidden" }}
    //     >
    //       {headings[currentHeadingIndex]}
    //     </span>
    //   </p>
    //   </BrowserView>
    // </div>
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "loader-container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "spinner"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "loader-heading",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: `fade-heading head-visible`,
                    style: {
                        color: "#ffffff"
                    },
                    children: headings[currentHeadingIndex]
                })
            })
        ]
    }));
}


/***/ }),

/***/ 9860:
/***/ (() => {



/***/ }),

/***/ 3278:
/***/ (() => {



/***/ }),

/***/ 3599:
/***/ (() => {



/***/ }),

/***/ 4152:
/***/ (() => {



/***/ })

};
;