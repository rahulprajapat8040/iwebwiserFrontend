"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 8200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/index.js
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
  "default": () => (pages),
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./Utility/HomeSliderData.js
var HomeSliderData = __webpack_require__(1345);
;// CONCATENATED MODULE: ./pages/index.js




const Home = dynamic_default()(Promise.all(/* import() */[__webpack_require__.e(1664), __webpack_require__.e(3003)]).then(__webpack_require__.bind(__webpack_require__, 3003)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "@/Components/Home/Home"
        ]
    }
});
// import { useInView } from "react-intersection-observer";
const DefaultPage = (props)=>{
    return /*#__PURE__*/ jsx_runtime.jsx(Home, {
        data: props.data,
        sliderData: props.sliderData
    });
};
/* harmony default export */ const pages = (DefaultPage);
async function getStaticProps() {
    const data = {
        BannerSections: {
            heading_1: "Connecting Today's Possibilities ",
            heading_2: "Delivering Tomorrow's Solution.",
            heading_3: "Our Core Strength",
            developmentBtnBox: [
                "App Development",
                "Website Development",
                "UI/UX Design",
                "Custom Software Solutions",
                "AI Chatbot Development",
                "Logistics Technology solutions",
                "Healthcare Digital Transformation",
                "Ecommerce Digital Solutions",
                "Digital Marketing Solutions"
            ],
            ExploreBtn: "Explore What We Offer",
            Section_video: "/assets/img/Home.mov"
        },
        AboutSection: {
            heading_1: "WHO WE ARE",
            Paragraph: " We are a team of passionate and skilled professionals dedicated to delivering top-notch web and app development services, along with digital marketing initiatives. With our client-centric approach, we make technology accessible and easy to use. We understand that every business is unique, and our team of experts will collaborate with you to understand your specific needs and challenges. Our goal is to become your partner of choice in the constantly changing technological landscape.",
            contactBtn: "Connect With Our Experts",
            AboutSectionImg: "/assets/img/who-we-are.png"
        },
        OurRatingSection: {
            heading_1: "Our Ratings",
            RatingImg: [
                "/assets/img/clutch.png",
                "/assets/img/trust-pilot.png",
                "/assets/img/google.png",
                "/assets/img/gartner.png"
            ]
        },
        GuestSection: {
            GuestImgMap: [
                {
                    GuestImg: "/assets/img/trblimg1.png",
                    className: "guest-content guest-border-right-bottom"
                },
                {
                    GuestImg: "/assets/img/trblimg2.png",
                    className: "guest-content guest-border-right-bottom"
                },
                {
                    GuestImg: "/assets/img/trblimg3.png",
                    className: "guest-content guest-border-bottom"
                },
                {
                    GuestImg: "/assets/img/trblimg4.png",
                    className: "guest-content guest-border-right-bottom"
                },
                {
                    GuestImg: "/assets/img/trblimg5.png",
                    className: "guest-content guest-border-right-bottom"
                },
                {
                    GuestImg: "/assets/img/trblimg6.png",
                    className: "guest-content guest-border-bottom"
                },
                {
                    GuestImg: "/assets/img/trblimg7.png",
                    className: "guest-content guest-border-right-bottom"
                },
                {
                    GuestImg: "/assets/img/trblimg8.png",
                    className: "guest-content guest-border-right-bottom"
                },
                {
                    GuestImg: "/assets/img/trblimg9.png",
                    className: "guest-content guest-border-bottom"
                },
                {
                    GuestImg: "/assets/img/trblimg10.png",
                    className: "guest-content guest-border-right"
                }
            ],
            heading_1: "OUR CLIENTS & PARTNERS",
            heading_2: "Trusted by Startups, Small Businesses and Global Brands.   "
        },
        OurServicesHomeSection: {
            heading_1: "Our Services",
            Paragraph: "We are dedicated to delivering effective solutions to our clients, through which they can stand strongly in the competitive market and feel secure in the changing trends of the digital landscape.",
            Img_1: "/assets/img/it solutions.webp",
            Img_2: "/assets/img/webImg.webp",
            Img_3: "/assets/img/digital marketing.webp",
            Img_4: "/assets/img/support system.webp"
        },
        ProjectSection: {
            heading_1: "Our Client’s Success Makes Us Proud",
            Paragraph: "Our Client’s achievements reflect our hard work, dedication, and commitment to excellence and drive us to continuously push our limits.",
            InnerCard_1: {
                Img: "/assets/img/ourstr-1.png",
                FlagImg: "/assets/img/flagA.svg",
                LogoImg: "/assets/img/medifellows.png",
                heading: "Medifellows",
                Paragraphinner: "Healthcare and Lifestyle"
            },
            InnerCard_2: {
                Img: "/assets/img/ourstr-2.png",
                FlagImg: "/assets/img/flagB.svg",
                LogoImg: "/assets/img/F&F.png",
                heading: "Floor & Furnishings",
                Paragraphinner: "E-commerce"
            },
            InnerCard_3: {
                Img: "/assets/img/ourstr-3.png",
                FlagImg: "/assets/img/flagC.svg",
                LogoImg: "/assets/img/G&G.png",
                heading: "Green Central.",
                Paragraphinner: "Delivery System"
            },
            InnerCard_4: {
                Img: "/assets/img/portfolio3.webp",
                FlagImg: "/assets/img/Flag_of_Jordan.svg",
                LogoImg: "/assets/img/caseLogo2.webp",
                heading: "E-Learing & Education",
                Paragraphinner: "The Arab Board of Health Specialisations"
            },
            InnerCard_5: {
                Img: "/assets/img/portfolio13.webp",
                FlagImg: "/assets/img/flagA.svg",
                LogoImg: "/assets/img/portfolioLogo13.webp",
                heading: "Golfplayed",
                Paragraphinner: "Sports & Games"
            },
            InnerCard_6: {
                Img: "/assets/img/portfolio12.webp",
                FlagImg: "/assets/img/flagC.svg",
                LogoImg: "/assets/img/portfolioLogo12.webp",
                heading: "Kinu noir.",
                Paragraphinner: "Healthcare and Lifestyle"
            }
        },
        ServicesSection: {
            heading_1: "Explore Our Dynamic Service & Solutions",
            heading_2: "Digital Transformation, eCommerce & Products",
            ServiceItem_1: {
                heading: "Digital Transformation",
                Paragraphinner: "Boost Their Digital Capabilities To Transform Your Business.",
                Img: "/assets/img/DigitalTransformation2.webp"
            },
            ServiceItem_2: {
                heading: "Digital Product",
                Paragraphinner: "Reduce The Cost Of Ownership And Time To Market By Getting Our Products Perfectly Developed.",
                Img: "/assets/img/DigitalProducts2.webp"
            },
            ServiceItem_3: {
                heading: "Digital eCommerce",
                Paragraphinner: "With The Help Of Our Trusted Ecommerce Agency, Grow Your Business.",
                Img: "/assets/img/DigitalECommerce2.webp"
            }
        },
        OurHomeTechSection: {
            heading_1: "Our Technology and Stack",
            Paragraph: "Combining our team's years of expertise and the latest technologies to deliver innovative solutions.",
            TechSection: [
                {
                    Img: "/assets/img/ourtech1.svg",
                    language: "Node"
                },
                {
                    Img: "/assets/img/ourtech2.svg",
                    language: "Python"
                },
                {
                    Img: "/assets/img/ourtech3.svg",
                    language: "Angular"
                },
                {
                    Img: "/assets/img/ourtech4.svg",
                    language: "Shopify"
                },
                {
                    Img: "/assets/img/ourtech5.svg",
                    language: ".NET"
                },
                {
                    Img: "/assets/img/ourtech6.svg",
                    language: "Amazon Web Services"
                },
                {
                    Img: "/assets/img/ourtech7.svg",
                    language: "React"
                },
                {
                    Img: "/assets/img/ourtech8.svg",
                    language: "Laravel"
                },
                {
                    Img: "/assets/img/ourtech9.svg",
                    language: "Java"
                },
                {
                    Img: "/assets/img/ourtech10.svg",
                    language: "Ionic"
                },
                {
                    Img: "/assets/img/ourtech11.svg",
                    language: "Codeigniter"
                },
                {
                    Img: "/assets/img/ourtech12.svg",
                    language: "Moodle"
                },
                {
                    Img: "/assets/img/ourtech13.svg",
                    language: "Magento"
                },
                {
                    Img: "/assets/img/ourtech14.svg",
                    language: "MySQL"
                },
                {
                    Img: "/assets/img/ourtech15.svg",
                    language: "Android"
                },
                {
                    Img: "/assets/img/ourtech16.svg",
                    language: "Wordpress"
                }
            ]
        },
        HealthCareSection: {
            heading_1: "Assisting health care organisations realise their potential to offer the highest standards in delivery of primary care.",
            Paragraph: " Global Primary Care Consultants is to assist organisations to realise their potential in offering the highest standards for the delivery of primary care. Global Primary Care Consultants will work with its partners to educate leaders and staff and facilitate change.",
            Img: "/assets/img/Rectangle 2342.png",
            HealthList: [
                "Optimising the health of patients through the development of high quality primary care organizations;",
                "Optimising the health of communities through the integration of community and population health strategies in its program development;",
                "Providing resources to medical organisations who desire to improve their health care delivery through practice redesign, quality improvement and the transformation of primary care;",
                "Providing resources to medical universities and health staff colleges in the training of medical students,residents and staff in primary care."
            ]
        },
        SolutionSection: {
            heading_1: "Our Latest Blogs And Articles",
            Paragraph: "Stay informed with our latest blogs and articles, offering valuable insights, ideas, and industry news.",
            SolutionCarditem_1: {
                Img: "/assets/img/woo-commerce.webp",
                heading: "Healthcare",
                Paragraphinner: " Ecommerce App Development Company in India."
            },
            SolutionCarditem_2: {
                Img: "/assets/img/solution1.webp",
                heading: "Education",
                Paragraphinner: " Custom LMS Boosting Technology For Education."
            },
            SolutionCarditem_3: {
                Img: "/assets/img/DigitalECommerce2.webp",
                heading: "E-commerce",
                Paragraphinner: "Digital Health Transformation through Our IT Solution."
            }
        }
    };
    return {
        props: {
            sliderData: HomeSliderData/* sliderData */.Z,
            data: data
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F&preferredRegion=&absolutePagePath=private-next-pages%2Findex.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/index","pathname":"/","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: pages_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 5245:
/***/ ((module) => {

module.exports = require("canvas-confetti");

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

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 6981:
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ }),

/***/ 81:
/***/ ((module) => {

module.exports = import("@studio-freight/lenis");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1388,2636,5152,5675,4947,32], () => (__webpack_exec__(8200)));
module.exports = __webpack_exports__;

})();