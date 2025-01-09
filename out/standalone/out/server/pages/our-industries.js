"use strict";
(() => {
var exports = {};
exports.id = 8512;
exports.ids = [8512];
exports.modules = {

/***/ 9366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Four_industries_preferredRegion_absolutePagePath_private_next_pages_2Four_industries_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2Four_industries_preferredRegion_absolutePagePath_private_next_pages_2Four_industries_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/our-industries/index.js
var our_industries_namespaceObject = {};
__webpack_require__.r(our_industries_namespaceObject);
__webpack_require__.d(our_industries_namespaceObject, {
  "default": () => (our_industries),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./pages/_document.js
var _document = __webpack_require__(6088);
// EXTERNAL MODULE: ./pages/_app.js
var _app = __webpack_require__(6004);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./Utility/ApiUrl.js
var ApiUrl = __webpack_require__(3260);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/our-industries/index.js







const Layout = dynamic_default()(__webpack_require__.e(/* import() */ 1372).then(__webpack_require__.bind(__webpack_require__, 1372)), {
    loadableGenerated: {
        modules: [
            "our-industries\\index.js -> " + "@/Components/Common/Layout"
        ]
    }
});
const Industry = ({ industryData })=>{
    const router = (0,router_.useRouter)();
    const [isMounted, setIsMounted] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setIsMounted(true);
    }, []);
    // Don't render anything until mou
    if (!isMounted) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("title", {
                        children: [
                            " ",
                            "Give Growth & Transformation To Your Business | iWebwiser"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "keywords",
                        content: "iWebwiser, Growth and Transformation, Global Company, Design and Development Services, IT Soultions"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "iWebwiser provides expert solutions & services according to your needs, which will result in the efficient growth and innovative transformation of your business."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "canonical",
                        href: "https://www.iwebwiser.com/about-us"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "twitter:site",
                        content: "@iWebwiser"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "twitter:title",
                        content: "Give Growth & Transformation To Your Business | iWebwiser"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "twitter:site:id",
                        content: "@iWebwiser"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "twitter:creator",
                        content: "@iWebwiser"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "twitter:image",
                        content: "https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Funique1.webp&w=1920&q=75"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "MobileOptimized",
                        content: "width"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "HandheldFriendly",
                        content: "true"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:title",
                        content: "Give Growth & Transformation To Your Business | iWebwiser"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:url",
                        content: "https://www.iwebwiser.com/about-us"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:site_name",
                        content: "iWebwiser"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:image",
                        content: "https://www.iwebwiser.com/_next/image?url=%2Fassets%2Fimg%2Funique1.webp&w=1920&q=75"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:description",
                        content: "iWebwiser provides expert solutions & services according to your needs, which will result in the efficient growth and innovative transformation of your business."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout, {
                children: [
                    console.log("induties", industryData),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("section", {
                                className: "indusnew-sec",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "container",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "industry-tpl",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                                    className: "mb-3",
                                                    children: [
                                                        "Preferred transformation partner of globle leaders in",
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-primary",
                                                            children: "HEALTHCARE"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "Making visions a reality in all areas of technology has enabled thousands of businesses to grow and dominate in their sectors, just like you could do with your business."
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/contact-us",
                                                    className: "btn btn-primary",
                                                    children: "Consult our experts"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "industr-img",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "./assets/img/aboutBanner.webp",
                                                alt: ""
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("section", {
                                className: "weserveindus",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "container",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "indtp",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                    className: "sh",
                                                    children: "Industries We Serve"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "sd",
                                                    children: "Providing secure and scalable UI/UX designing services across multiple industries to enhance user engagement and retention results in increased business revenue."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                            className: "industryboxes",
                                            children: industryData?.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    className: "boxes",
                                                    onClick: ()=>router.push(`'/industries/industry/${item?.industry_page?.slug}`),
                                                    children: [
                                                        console.log("induties", item),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "img-box",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                src: item.image,
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "boxcard",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                    children: item.title
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    dangerouslySetInnerHTML: {
                                                                        __html: item.description
                                                                    }
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, index))
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("section", {
                                className: "clientdevel",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "container",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "text-center sh mb-3",
                                            children: "We work with clients developing Industry- leading Solutions"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-center sd mb-4",
                                            children: "Making visions a reality in all areas of technology has enabled thousands of businesses to grow and dominate in their sectors, just like you could do with your business."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-center ",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/contact-us",
                                                className: "btn btn-outline-dark",
                                                children: "Let’s Discuss Your Requirement"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "d-nne",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("section", {
                                className: "indusdetlnew",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "container",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "sh mb-3 text-center",
                                            children: "Healthcare software development services"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "sd text-center mb-4",
                                            children: "Making visions a reality in all areas of technology has enabled thousands of businesses to grow and dominate in their sectors, just like you could do with your business."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-center",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                className: "btn btn-primary text-white",
                                                children: "Consult our experts"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("section", {
                                className: "breadcrsec",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "industry-navigate",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                            "aria-label": "breadcrumb",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ol", {
                                                class: "breadcrumb",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        class: "breadcrumb-item",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            children: "Hospitality & Lifestyle"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        class: "breadcrumb-item",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            children: "E-learning &Education"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        class: "breadcrumb-item",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            children: "Insurance"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        class: "breadcrumb-item",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            children: "RealState"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        class: "breadcrumb-item active",
                                                        "aria-current": "page",
                                                        children: "Tour & Travels"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("section", {
                                className: "empowrdes",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "tpsec",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "sh text-center mb-3",
                                                children: "Empower digital care with our innovative healthcare software development services"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "sd text-center",
                                                children: "Making visions a reality in all areas of technology has enabled thousands of businesses to grow and dominate in their sectors, just like you could do with your business."
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("section", {
                                class: "serinscope-section pt-0",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    class: "container",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        class: "services-grid",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        children: "Healthcare software"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "IT solutions to simplify and streamline the operations in processes like listing services, booking deals, managing customers, and more."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        children: "Custome software development"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "Industry-leading digital solutions to help lodging organizations embrace innovation and redefine the guest experiences."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        children: "Healthcare E-commerce"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "Integrated IT solutions for organizations managing lifestyle spaces like golf courses, stadiums, racecourses, arenas, and more."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        children: "Healthcare software"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "IT solutions to simplify and streamline the operations in processes like listing services, booking deals, managing customers, and more."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        children: "Custome software development"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "Industry-leading digital solutions to help lodging organizations embrace innovation and redefine the guest experiences."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        children: "Healthcare E-commerce"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "Integrated IT solutions for organizations managing lifestyle spaces like golf courses, stadiums, racecourses, arenas, and more."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("section", {
                                className: "clientdevel",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "container",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "text-center sh mb-3",
                                            children: "We work with clients developing Industry- leading Solutions"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-center sd mb-4",
                                            children: "Making visions a reality in all areas of technology has enabled thousands of businesses to grow and dominate in their sectors, just like you could do with your business."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-center ",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                className: "btn btn-outline-dark",
                                                children: "Let’s Discuss Your Requirement"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
async function getStaticProps() {
    try {
        const response = await fetch(`${ApiUrl/* ApiUrl */.l.getAllIndustry}`);
        const data = await response.json();
        return {
            props: {
                industryData: data.data.industryData || []
            },
            // Revalidate every 24 hours
            revalidate: 86400
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                industryData: []
            },
            revalidate: 86400
        };
    }
}
/* harmony default export */ const our_industries = (Industry);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Four-industries&preferredRegion=&absolutePagePath=private-next-pages%2Four-industries%2Findex.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Four_industries_preferredRegion_absolutePagePath_private_next_pages_2Four_industries_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(our_industries_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2Four_industries_preferredRegion_absolutePagePath_private_next_pages_2Four_industries_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(our_industries_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(our_industries_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(our_industries_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(our_industries_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(our_industries_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(our_industries_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(our_industries_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(our_industries_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(our_industries_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(our_industries_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/our-industries","pathname":"/our-industries","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: our_industries_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 3213:
/***/ ((module) => {

module.exports = require("material-react-toastify");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6981:
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ }),

/***/ 81:
/***/ ((module) => {

module.exports = import("@studio-freight/lenis");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1388,1664,5152,4947,3260], () => (__webpack_exec__(9366)));
module.exports = __webpack_exports__;

})();