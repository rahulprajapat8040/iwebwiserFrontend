"use strict";
exports.id = 8296;
exports.ids = [8296];
exports.modules = {

/***/ 8296:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _api_ApiHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3238);
/* harmony import */ var material_react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3213);
/* harmony import */ var material_react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5641);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
/* harmony import */ var _Utility_HomeSliderData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1345);
/* harmony import */ var _Utility_ApiUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3260);
/* harmony import */ var _hooks_useapi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(757);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, framer_motion__WEBPACK_IMPORTED_MODULE_6__, _hooks_useapi__WEBPACK_IMPORTED_MODULE_9__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, framer_motion__WEBPACK_IMPORTED_MODULE_6__, _hooks_useapi__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Header = ({ data })=>{
    const [loadScript, setLoadScript] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [show1, setShow1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [menuData, setMenuData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [previousMenu, setPreviousMenu] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [HeaderData, setHeaderData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [caseStudyData, setCaseStudyData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [industryData, setIndustryData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    // console.log(HeaderData)
    const fetchData = async ()=>{
        try {
            const res = await (0,_hooks_useapi__WEBPACK_IMPORTED_MODULE_9__/* .callApi */ .t)(_Utility_ApiUrl__WEBPACK_IMPORTED_MODULE_8__/* .ApiUrl */ .l.getField);
            const caseRes = await (0,_hooks_useapi__WEBPACK_IMPORTED_MODULE_9__/* .callApi */ .t)(_Utility_ApiUrl__WEBPACK_IMPORTED_MODULE_8__/* .ApiUrl */ .l.getCaseIndusty);
            const industryRes = await (0,_hooks_useapi__WEBPACK_IMPORTED_MODULE_9__/* .callApi */ .t)(_Utility_ApiUrl__WEBPACK_IMPORTED_MODULE_8__/* .ApiUrl */ .l.getAllIndustry);
            const data = await res.data;
            setHeaderData(data);
            setCaseStudyData(caseRes.data);
            setIndustryData(industryRes.data.industryData);
        } catch (err) {
            console.log(err);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        fetchData();
    }, []);
    const renderSubheaders = (subheaders)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "Drop-menu",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "drop-menu-content",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "list-unstyled",
                    children: subheaders.map((subheader)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "btn btn-link",
                                role: "button",
                                href: subheader.link,
                                as: subheader.link,
                                children: subheader.title
                            })
                        }, subheader.id))
                })
            })
        });
    const renderExpertiseMegaMenu = (subheaders)=>{
        const subheadersWithMenuHeaders = subheaders.filter((subheader)=>subheader.menuHeaders && subheader.menuHeaders.length > 0);
        const subheadersWithoutMenuHeaders = subheaders.filter((subheader)=>!subheader.menuHeaders || subheader.menuHeaders.length === 0);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "Mega-menu",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mega-menu-content mb-5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "title-content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "title",
                                    children: "Expertise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "desc",
                                    children: "iWebwiser's professional developers provide top-quality design & development services along with prime support services & IT solutions to grow your business."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    className: "btn btn-link",
                                    role: "button",
                                    href: "/app-web-software-design-development-services",
                                    as: "/app-web-software-design-development-services",
                                    children: "Show all expertise"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "our-expertise",
                            children: subheadersWithoutMenuHeaders.map((subheader)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "card",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "subcatlink",
                                        role: "button",
                                        href: subheader.link,
                                        as: subheader.link,
                                        children: subheader.title
                                    })
                                }, subheader.id))
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mega-menu-content",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "title-content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "title",
                                    children: "Services"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "megacategories",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/mobile-app-development-company",
                                                children: "Mobile app development"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/best-web-development-company",
                                                children: "Website Development"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/retail-ecommerce",
                                                children: "E-commerce Development"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/services-details",
                                                children: "Custom Software Development"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/services-details",
                                                children: "Bespoke Development"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/services-details",
                                                children: "CRM Solutions"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    className: "btn btn-link",
                                    role: "button",
                                    href: "/app-web-software-design-development-services",
                                    as: "/app-web-software-design-development-services",
                                    children: "Show all services"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "our-expertise",
                            children: subheadersWithMenuHeaders.map((subheader)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "card",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "subcards",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                className: "subcatlink",
                                                children: subheader.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "subcategoriesnew",
                                                children: subheader.menuHeaders.map((menuHeader)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: menuHeader.link,
                                                            children: menuHeader.title
                                                        })
                                                    }, menuHeader.id))
                                            })
                                        ]
                                    })
                                }, subheader.id))
                        })
                    ]
                })
            ]
        });
    };
    const renderIndustryMenu = (subheaders)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "Mega-menu",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mega-menu-content",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "title-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "title",
                                children: "Industry level"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "megacategories",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/mobile-app-development-company",
                                            children: "Mobile app development"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/best-web-development-company",
                                            children: "Website Development"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/retail-ecommerce",
                                            children: "E-commerce Development"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/services-details",
                                            children: "Custom Software Development"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/services-details",
                                            children: "Bespoke Development"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/services-details",
                                            children: "CRM Solutions"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "btn btn-link",
                                role: "button",
                                href: "/e-learning-and-education",
                                as: "/e-learning-and-education",
                                children: "Show all industry"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "our-expertise",
                        children: subheaders.map((subheader)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "card",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "subcards",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "subcatlink",
                                        role: "button",
                                        href: subheader.link,
                                        as: subheader.link,
                                        children: subheader.title
                                    })
                                })
                            }, subheader.id))
                    })
                ]
            })
        });
    const renderCaseStudyMenu = (subheaders)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "Mega-menu",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mega-menu-content",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "title-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "title",
                                children: "Case study"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "desc",
                                children: "Craft your success journey with iWebwiser look how closely we work with our client to unlock tailored solutions to expand our client's business globally."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "btn btn-link",
                                role: "button",
                                href: "/case-study-unlock-your-solutions",
                                as: "/case-study-unlock-your-solutions",
                                children: "Show all Case study"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "our-expertise",
                        children: subheaders.map((subheader)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "card",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "subcards",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "subcatlink",
                                        role: "button",
                                        href: subheader.link,
                                        as: subheader.link,
                                        children: subheader.title
                                    })
                                })
                            }, subheader.id))
                    })
                ]
            })
        });
    const renderMenuItem = (item)=>{
        if (!item.subheaders || item.subheaders.length === 0) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "nav-item",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    className: "nav-link",
                    role: "button",
                    href: item.link,
                    children: item.title
                })
            }, item.id);
        }
        switch(item.title.toLowerCase()){
            // case "home":
            //   return (
            //     <li className="nav-item" key={item.id}>
            //       <Link className="nav-link" role="button" href={item.link || "/"}>
            //         Home
            //       </Link>
            //     </li>
            //   );
            case "company":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "nav-item menu-hover position-relative",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            prefetch: true,
                            className: "nav-link",
                            role: "button",
                            href: "javascript:void(0);",
                            as: "javascript:void(0);",
                            children: [
                                "Company",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "nav-icon",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "15",
                                        height: "9",
                                        viewBox: "0 0 15 9",
                                        fill: "none",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M0.33503 0.641912C0.139254 0.838024 0.0292969 1.10381 0.0292969 1.38091C0.0292969 1.65802 0.139254 1.9238 0.33503 2.11991L6.23903 8.02991C6.46703 8.25791 6.77503 8.35991 7.07303 8.33191C7.34303 8.33191 7.61203 8.23091 7.81703 8.02591L13.724 2.11891C13.821 2.02193 13.8979 1.9068 13.9504 1.78009C14.0029 1.65337 14.0299 1.51757 14.0299 1.38041C14.0299 1.24326 14.0029 1.10745 13.9504 0.98074C13.8979 0.854028 13.821 0.738894 13.724 0.641912C13.627 0.544931 13.5119 0.468002 13.3852 0.415516C13.2585 0.36303 13.1227 0.336016 12.9855 0.336016C12.8484 0.336016 12.7126 0.36303 12.5859 0.415516C12.4591 0.468002 12.344 0.544931 12.247 0.641912L7.02703 5.86191L1.81103 0.641912C1.71416 0.544915 1.59912 0.467964 1.47249 0.415462C1.34586 0.362961 1.21012 0.335938 1.07303 0.335938C0.935946 0.335938 0.800205 0.362961 0.673573 0.415462C0.546941 0.467964 0.4319 0.544915 0.33503 0.641912Z",
                                            fill: "white"
                                        })
                                    })
                                })
                            ]
                        }),
                        renderSubheaders(item.subheaders)
                    ]
                }, item.id);
            case "expertise / services":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "nav-item menu-hover",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: "nav-link",
                            role: "button",
                            href: "javascript:void(0);",
                            as: "javascript:void(0);",
                            children: [
                                "Expertise / Services",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "nav-icon",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "15",
                                        height: "9",
                                        viewBox: "0 0 15 9",
                                        fill: "none",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M0.33503 0.641912C0.139254 0.838024 0.0292969 1.10381 0.0292969 1.38091C0.0292969 1.65802 0.139254 1.9238 0.33503 2.11991L6.23903 8.02991C6.46703 8.25791 6.77503 8.35991 7.07303 8.33191C7.34303 8.33191 7.61203 8.23091 7.81703 8.02591L13.724 2.11891C13.821 2.02193 13.8979 1.9068 13.9504 1.78009C14.0029 1.65337 14.0299 1.51757 14.0299 1.38041C14.0299 1.24326 14.0029 1.10745 13.9504 0.98074C13.8979 0.854028 13.821 0.738894 13.724 0.641912C13.627 0.544931 13.5119 0.468002 13.3852 0.415516C13.2585 0.36303 13.1227 0.336016 12.9855 0.336016C12.8484 0.336016 12.7126 0.36303 12.5859 0.415516C12.4591 0.468002 12.344 0.544931 12.247 0.641912L7.02703 5.86191L1.81103 0.641912C1.71416 0.544915 1.59912 0.467964 1.47249 0.415462C1.34586 0.362961 1.21012 0.335938 1.07303 0.335938C0.935946 0.335938 0.800205 0.362961 0.673573 0.415462C0.546941 0.467964 0.4319 0.544915 0.33503 0.641912Z",
                                            fill: "white"
                                        })
                                    })
                                })
                            ]
                        }),
                        renderExpertiseMegaMenu(item.subheaders)
                    ]
                }, item.id);
            case "industry":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "nav-item menu-hover",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: "nav-link",
                            role: "button",
                            href: "javascript:void(0);",
                            as: "javascript:void(0);",
                            children: [
                                "Industry",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "nav-icon",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "15",
                                        height: "9",
                                        viewBox: "0 0 15 9",
                                        fill: "none",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M0.33503 0.641912C0.139254 0.838024 0.0292969 1.10381 0.0292969 1.38091C0.0292969 1.65802 0.139254 1.9238 0.33503 2.11991L6.23903 8.02991C6.46703 8.25791 6.77503 8.35991 7.07303 8.33191C7.34303 8.33191 7.61203 8.23091 7.81703 8.02591L13.724 2.11891C13.821 2.02193 13.8979 1.9068 13.9504 1.78009C14.0029 1.65337 14.0299 1.51757 14.0299 1.38041C14.0299 1.24326 14.0029 1.10745 13.9504 0.98074C13.8979 0.854028 13.821 0.738894 13.724 0.641912C13.627 0.544931 13.5119 0.468002 13.3852 0.415516C13.2585 0.36303 13.1227 0.336016 12.9855 0.336016C12.8484 0.336016 12.7126 0.36303 12.5859 0.415516C12.4591 0.468002 12.344 0.544931 12.247 0.641912L7.02703 5.86191L1.81103 0.641912C1.71416 0.544915 1.59912 0.467964 1.47249 0.415462C1.34586 0.362961 1.21012 0.335938 1.07303 0.335938C0.935946 0.335938 0.800205 0.362961 0.673573 0.415462C0.546941 0.467964 0.4319 0.544915 0.33503 0.641912Z",
                                            fill: "white"
                                        })
                                    })
                                })
                            ]
                        }),
                        renderIndustryMenu(item.subheaders)
                    ]
                }, item.id);
            case "case study":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "nav-item menu-hover",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: "nav-link",
                            role: "button",
                            href: "javascript:void(0);",
                            as: "javascript:void(0);",
                            children: [
                                "Case study",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "nav-icon",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "15",
                                        height: "9",
                                        viewBox: "0 0 15 9",
                                        fill: "none",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M0.33503 0.641912C0.139254 0.838024 0.0292969 1.10381 0.0292969 1.38091C0.0292969 1.65802 0.139254 1.9238 0.33503 2.11991L6.23903 8.02991C6.46703 8.25791 6.77503 8.35991 7.07303 8.33191C7.34303 8.33191 7.61203 8.23091 7.81703 8.02591L13.724 2.11891C13.821 2.02193 13.8979 1.9068 13.9504 1.78009C14.0029 1.65337 14.0299 1.51757 14.0299 1.38041C14.0299 1.24326 14.0029 1.10745 13.9504 0.98074C13.8979 0.854028 13.821 0.738894 13.724 0.641912C13.627 0.544931 13.5119 0.468002 13.3852 0.415516C13.2585 0.36303 13.1227 0.336016 12.9855 0.336016C12.8484 0.336016 12.7126 0.36303 12.5859 0.415516C12.4591 0.468002 12.344 0.544931 12.247 0.641912L7.02703 5.86191L1.81103 0.641912C1.71416 0.544915 1.59912 0.467964 1.47249 0.415462C1.34586 0.362961 1.21012 0.335938 1.07303 0.335938C0.935946 0.335938 0.800205 0.362961 0.673573 0.415462C0.546941 0.467964 0.4319 0.544915 0.33503 0.641912Z",
                                            fill: "white"
                                        })
                                    })
                                })
                            ]
                        }),
                        renderCaseStudyMenu(item.subheaders)
                    ]
                }, item.id);
            // case "Reach us":
            //   return (
            //     <li className="nav-item" key={item.id}>
            //       <Link
            //         className="nav-link"
            //         role="button"
            //         href={"/contact-us"}
            //         as={"/contact-us"}
            //       >
            //         Reach us
            //       </Link>
            //     </li>
            //   );
            default:
                return null;
        }
    };
    const { register, handleSubmit, formState: { errors }, reset } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
        mode: "all"
    });
    const Expertise = [
        {
            name: "Design and development",
            path: "/software-design-and-development-company",
            as: "/software-design-and-development-company"
        },
        {
            name: "Strategic Marketing",
            path: "/strategic-marketing",
            as: "/strategic-marketing"
        },
        {
            name: "Support services",
            path: "/support-and-services",
            as: "/support-and-services"
        },
        {
            name: "Solutions",
            path: "/our-solutions",
            as: "/our-solutions"
        }
    ];
    const Company = [
        // { name: "About us", path: "/about-us", as: "/about-us" },
        {
            name: "Our Company",
            path: "/our-company",
            as: "/our-company"
        },
        {
            name: "Partnership & Certifications",
            path: "/partnership",
            as: "/partnership"
        },
        {
            name: "Career",
            path: "/career",
            as: "/career"
        }
    ];
    const Industrylevel = [
        {
            name: "E-Learning & Education",
            path: "/e-learning-and-education",
            as: "/e-learning-and-education"
        },
        {
            name: "Healthcare & Lifestyle",
            path: "/healthcare-and-lifestyle",
            as: "/healthcare-and-lifestyle"
        },
        {
            name: "RealEstate",
            path: "/real-estate",
            as: "/real-estate"
        },
        {
            name: "Tour & Travels",
            path: "/tour-and-travel",
            as: "/tour-and-travel"
        },
        {
            name: "Retail & eCommerce",
            path: "/retail-ecommerce",
            as: "/retail-ecommerce"
        }
    ];
    const Services = [
        {
            name: "Mobile app development",
            path: "/mobile-app-development-company",
            as: "/mobile-app-development-company"
        },
        {
            name: "Designs",
            path: "/graphic-and-ui-ux-design-company",
            as: "/graphic-and-ui-ux-design-company"
        },
        {
            name: "Digital Marketing",
            path: "/digital-marketing-services-company",
            as: "/digital-marketing-services-company"
        },
        {
            name: "Web development",
            path: "/best-web-development-company",
            as: "/best-web-development-company"
        },
        {
            name: "Blockchain development",
            path: "/blockchain-development-services",
            as: "/blockchain-development-services"
        }
    ];
    const SuccessStory = [
        {
            name: "Portfolio",
            path: "/our-portfolio",
            as: "/our-portfolio"
        },
        {
            name: "Case study",
            path: "/case-study-unlock-your-solutions",
            as: "/case-study-unlock-your-solutions"
        },
        {
            name: "Testimonials",
            path: "/iwebwiser-testimonials-your-trust",
            as: "/iwebwiser-testimonials-your-trust"
        }
    ];
    const toggle = ()=>{
        if (show1 == true) {
            setShow1(false);
        }
        setShow(!show);
    // console.log("fdsdffdf");
    };
    const toggle1 = ()=>{
        setShow1(!show1);
    // console.log("11111111111");
    };
    const toggleModal = ()=>{
        setShowModal(!showModal);
    // console.log("11111111111");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        document.getElementById("headerTogglebtn").classList.add("hideMenu");
        const script = document.createElement("script");
        const script1 = document.createElement("script");
        // const script2 = document.createElement("script");
        // const script3 = document.createElement("script");
        // const link3 = document.createElement("link");
        script.src = `./assets/slick-1.8.1/slick/slick.js`;
        script.async = true;
        script1.src = `./assets/js/Iwebwiser.js`;
        script1.async = true;
        // script2.src type="text/javascript" = `https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js`;
        // script2.async = true;
        // script3.src type="text/javascript" = `https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.min.js`;
        // script3.async = true;
        // link3.src = `https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.css`;
        // link3.async = true;
        document.body.appendChild(script);
        document.body.appendChild(script1);
        // document.body.appendChild(script2);
        // document.body.appendChild(script3);
        // document.head.appendChild(link3);
        return ()=>{
            if (loadScript) {
                document.body.removeChild(script);
                document.body.removeChild(script1);
                // document.body.removeChild(script2);
                // document.body.removeChild(script3);
                // document.head.removeChild(link3);
                setLoadScript(false);
            }
        };
    }, []);
    const Handletoggle = (e)=>{
        if (show1 && previousMenu !== e) {
            document.getElementById(`${previousMenu}`).classList.toggle("active");
        } else {
            toggle1();
        }
        switch(e){
            case "Expertise":
                setMenuData({
                    type: "expertise",
                    data: HeaderData
                });
                document.getElementById("Expertise").classList.toggle("active");
                break;
            case "Industry":
                setMenuData({
                    type: "industry",
                    data: industryData
                });
                document.getElementById("Industry").classList.toggle("active");
                break;
            case "CaseStudy":
                setMenuData({
                    type: "casestudy",
                    data: caseStudyData?.filter((item)=>item.caseStudies?.length > 0)
                });
                document.getElementById("CaseStudy").classList.toggle("active");
                break;
            case "Company":
                setMenuData({
                    type: "company",
                    data: [
                        {
                            name: "Our Company",
                            path: "/our-company"
                        },
                        {
                            name: "Partnership & Certifications",
                            path: "/partnership"
                        },
                        {
                            name: "Testimonials",
                            path: "/iwebwiser-testimonials-your-trust"
                        },
                        {
                            name: "Portfolio",
                            path: "/our-portfolio"
                        }
                    ]
                });
                document.getElementById("Company").classList.toggle("active");
                break;
        }
        setPreviousMenu(e);
    };
    const handleLinkCheck = (e)=>{
        if (e == location.pathname) {
            setShow(!show);
            setShow1(false);
        }
    };
    const handleContactForm = (data)=>{
        setLoading(true);
        (0,_api_ApiHelper__WEBPACK_IMPORTED_MODULE_10__/* .sendContactForm */ .m)(data).then((response)=>{
            if (response.status == true) {
                setLoading(false);
                reset({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                });
                toggleModal();
                material_react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("Thankyou I will reach soon");
            } else {
                setLoading(false);
                console.log("err");
            }
        });
    };
    const Path = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fill: "#ffffff",
            strokeWidth: "2",
            stroke: "#ffffff",
            strokeLinecap: "round",
            ...props
        });
    const renderMobileSubMenu = ()=>{
        switch(menuData?.type){
            case "expertise":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "submenu-section",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    children: "Expertise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "list-unstyled header-submenu-list",
                                    children: HeaderData?.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "submenu-item",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                className: "submenu-link",
                                                href: `/expertise/${item?.slug || ""}`,
                                                onClick: ()=>{
                                                    setShow(false);
                                                    setShow1(false);
                                                },
                                                children: item.title
                                            })
                                        }, item.id))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "submenu-section",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    children: "Services"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "list-unstyled header-submenu-list",
                                    children: HeaderData?.map((item)=>item.services?.map((service)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "submenu-item",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    className: "submenu-link",
                                                    href: `/services-details/${service?.service_detail?.slug || ""}`,
                                                    onClick: ()=>{
                                                        setShow(false);
                                                        setShow1(false);
                                                    },
                                                    children: service.title
                                                })
                                            }, service.id)))
                                })
                            ]
                        })
                    ]
                });
            case "industry":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "list-unstyled header-submenu-list",
                    children: industryData?.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "submenu-item",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "submenu-link",
                                href: `/our-industries/${item?.industry_page?.slug || ""}`,
                                onClick: ()=>{
                                    setShow(false);
                                    setShow1(false);
                                },
                                children: item.title
                            })
                        }, item.id))
                });
            case "casestudy":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "list-unstyled header-submenu-list",
                    children: caseStudyData?.filter((item)=>item.caseStudies?.length > 0).map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "submenu-item",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "submenu-link",
                                href: `/case-study/${item.caseStudies[0]?.slug || ""}`,
                                onClick: ()=>{
                                    setShow(false);
                                    setShow1(false);
                                },
                                children: item.title
                            })
                        }, item.id))
                });
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                className: "Header fixed-top",
                id: "navbar",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
                    variants: {
                        hidden: {
                            opacity: 0,
                            x: -100
                        },
                        visible: {
                            opacity: 1,
                            x: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -100
                        }
                    },
                    initial: "hidden",
                    animate: "visible",
                    transition: {
                        duration: 0.6,
                        delay: 0.8
                    },
                    className: "max-content-width",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                        className: "navbar navbar-expand-lg",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container-fluid",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    className: "navbar-brand",
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assets/img/Logo.svg",
                                        alt: "Logo"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    id: "headerTogglebtn",
                                    className: show ? "btn Menu-navbar-toggler toggler-open" : "btn Menu-navbar-toggler",
                                    type: "button",
                                    onClick: toggle,
                                    "aria-expanded": "false",
                                    "aria-label": "Toggle navigation",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            viewBox: "0 0 32 32",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    class: "line line-top-bottom",
                                                    d: "M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    class: "line",
                                                    d: "M7 16 27 16"
                                                })
                                            ]
                                        }),
                                        "Menu"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "header-nav",
                                    id: "headerNav",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "navbar-nav me-auto",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    className: "nav-link",
                                                    role: "button",
                                                    href: "/",
                                                    children: "Home"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "nav-item menu-hover position-relative",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        prefetch: true,
                                                        className: "nav-link",
                                                        role: "button",
                                                        href: "javascript:void(0);",
                                                        as: "javascript:void(0);",
                                                        children: [
                                                            "Company",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "nav-icon",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "15",
                                                                    height: "9",
                                                                    viewBox: "0 0 15 9",
                                                                    fill: "none",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M0.33503 0.641912C0.139254 0.838024 0.0292969 1.10381 0.0292969 1.38091C0.0292969 1.65802 0.139254 1.9238 0.33503 2.11991L6.23903 8.02991C6.46703 8.25791 6.77503 8.35991 7.07303 8.33191C7.34303 8.33191 7.61203 8.23091 7.81703 8.02591L13.724 2.11891C13.821 2.02193 13.8979 1.9068 13.9504 1.78009C14.0029 1.65337 14.0299 1.51757 14.0299 1.38041C14.0299 1.24326 14.0029 1.10745 13.9504 0.98074C13.8979 0.854028 13.821 0.738894 13.724 0.641912C13.627 0.544931 13.5119 0.468002 13.3852 0.415516C13.2585 0.36303 13.1227 0.336016 12.9855 0.336016C12.8484 0.336016 12.7126 0.36303 12.5859 0.415516C12.4591 0.468002 12.344 0.544931 12.247 0.641912L7.02703 5.86191L1.81103 0.641912C1.71416 0.544915 1.59912 0.467964 1.47249 0.415462C1.34586 0.362961 1.21012 0.335938 1.07303 0.335938C0.935946 0.335938 0.800205 0.362961 0.673573 0.415462C0.546941 0.467964 0.4319 0.544915 0.33503 0.641912Z",
                                                                        fill: "white"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "Drop-menu",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "drop-menu-content",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                className: "list-unstyled",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            className: "btn btn-link",
                                                                            role: "button",
                                                                            href: "/our-company",
                                                                            as: "/our-company",
                                                                            children: "Our Company"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            className: "btn btn-link",
                                                                            role: "button",
                                                                            href: "/partnership",
                                                                            as: "/partnership",
                                                                            children: "Partnership & Certifications"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            className: "btn btn-link",
                                                                            role: "button",
                                                                            href: "/iwebwiser-testimonials-your-trust",
                                                                            as: "/iwebwiser-testimonials-your-trust",
                                                                            children: "Testimonials"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            className: "btn btn-link",
                                                                            role: "button",
                                                                            href: "/iwebwiser-testimonials-your-trust",
                                                                            as: "/iwebwiser-testimonials-your-trust",
                                                                            children: "Portfolio"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "nav-item menu-hover",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        className: "nav-link",
                                                        role: "button",
                                                        href: "javascript:void(0);",
                                                        as: "javascript:void(0);",
                                                        children: [
                                                            "Expertise / Services",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "nav-icon",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "15",
                                                                    height: "9",
                                                                    viewBox: "0 0 15 9",
                                                                    fill: "none",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M0.33503 0.641912C0.139254 0.838024 0.0292969 1.10381 0.0292969 1.38091C0.0292969 1.65802 0.139254 1.9238 0.33503 2.11991L6.23903 8.02991C6.46703 8.25791 6.77503 8.35991 7.07303 8.33191C7.34303 8.33191 7.61203 8.23091 7.81703 8.02591L13.724 2.11891C13.821 2.02193 13.8979 1.9068 13.9504 1.78009C14.0029 1.65337 14.0299 1.51757 14.0299 1.38041C14.0299 1.24326 14.0029 1.10745 13.9504 0.98074C13.8979 0.854028 13.821 0.738894 13.724 0.641912C13.627 0.544931 13.5119 0.468002 13.3852 0.415516C13.2585 0.36303 13.1227 0.336016 12.9855 0.336016C12.8484 0.336016 12.7126 0.36303 12.5859 0.415516C12.4591 0.468002 12.344 0.544931 12.247 0.641912L7.02703 5.86191L1.81103 0.641912C1.71416 0.544915 1.59912 0.467964 1.47249 0.415462C1.34586 0.362961 1.21012 0.335938 1.07303 0.335938C0.935946 0.335938 0.800205 0.362961 0.673573 0.415462C0.546941 0.467964 0.4319 0.544915 0.33503 0.641912Z",
                                                                        fill: "white"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "Mega-menu",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "mega-menu-content mb-5",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "title-content",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                className: "title",
                                                                                children: "Experties"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                className: "desc",
                                                                                children: "iWebwiser's professional developers provide top-quality design & development services along with prime support services & IT solutions to grow your business."
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                className: "btn btn-link",
                                                                                role: "button",
                                                                                href: "/app-web-software-design-development-services",
                                                                                as: "/app-web-software-design-development-services",
                                                                                children: "Show all expertise"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "our-expertise",
                                                                        children: HeaderData?.map((item)=>{
                                                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "card",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                    className: "subcatlink",
                                                                                    // role="button"
                                                                                    href: `/expertise/${item?.slug || ""}`,
                                                                                    as: `/expertise/${item?.slug || ""}`,
                                                                                    children: item.title
                                                                                })
                                                                            }, item.id);
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "mega-menu-content",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "title-content",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                className: "title",
                                                                                children: "Services"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                                className: "megacategories",
                                                                                children: HeaderData?.map((item)=>{
                                                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                        children: item?.services?.slice(0, 5).map((megaMenu)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                    // role="button"
                                                                                                    href: `services-details/${megaMenu?.service_detail?.slug}` || "/",
                                                                                                    as: megaMenu.link,
                                                                                                    children: megaMenu.title
                                                                                                })
                                                                                            }, item?.id))
                                                                                    });
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                className: "btn btn-link",
                                                                                role: "button",
                                                                                href: "/app-web-software-design-development-services",
                                                                                as: "/app-web-software-design-development-services",
                                                                                children: "Show all services"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "our-expertise",
                                                                        children: HeaderData?.map((item)=>{
                                                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "card",
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "subcards",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                            className: "subcatlink",
                                                                                            // role="button"
                                                                                            href: "#",
                                                                                            children: item.title
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                                            className: "subcategoriesnew",
                                                                                            children: item?.services?.map((megaMenu)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        // role="button"
                                                                                                        href: `services-details/${megaMenu?.service_detail?.slug}` || "/",
                                                                                                        as: megaMenu.link,
                                                                                                        children: megaMenu.title
                                                                                                    })
                                                                                                }, item?.id))
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }, item.id);
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "nav-item menu-hover",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        className: "nav-link",
                                                        role: "button",
                                                        href: "javascript:void(0);",
                                                        as: "javascript:void(0);",
                                                        children: [
                                                            "Industry",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "nav-icon",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "15",
                                                                    height: "9",
                                                                    viewBox: "0 0 15 9",
                                                                    fill: "none",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M0.33503 0.641912C0.139254 0.838024 0.0292969 1.10381 0.0292969 1.38091C0.0292969 1.65802 0.139254 1.9238 0.33503 2.11991L6.23903 8.02991C6.46703 8.25791 6.77503 8.35991 7.07303 8.33191C7.34303 8.33191 7.61203 8.23091 7.81703 8.02591L13.724 2.11891C13.821 2.02193 13.8979 1.9068 13.9504 1.78009C14.0029 1.65337 14.0299 1.51757 14.0299 1.38041C14.0299 1.24326 14.0029 1.10745 13.9504 0.98074C13.8979 0.854028 13.821 0.738894 13.724 0.641912C13.627 0.544931 13.5119 0.468002 13.3852 0.415516C13.2585 0.36303 13.1227 0.336016 12.9855 0.336016C12.8484 0.336016 12.7126 0.36303 12.5859 0.415516C12.4591 0.468002 12.344 0.544931 12.247 0.641912L7.02703 5.86191L1.81103 0.641912C1.71416 0.544915 1.59912 0.467964 1.47249 0.415462C1.34586 0.362961 1.21012 0.335938 1.07303 0.335938C0.935946 0.335938 0.800205 0.362961 0.673573 0.415462C0.546941 0.467964 0.4319 0.544915 0.33503 0.641912Z",
                                                                        fill: "white"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "Mega-menu",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "mega-menu-content",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "title-content",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                            className: "title",
                                                                            children: "Industry level"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                            className: "megacategories",
                                                                            children: HeaderData?.map((item)=>{
                                                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                    children: item?.services?.slice(0, 5).map((megaMenu)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                // role="button"
                                                                                                href: `services-details/${megaMenu?.service_detail?.slug}` || "/",
                                                                                                as: megaMenu.link,
                                                                                                children: megaMenu.title
                                                                                            })
                                                                                        }, item?.id))
                                                                                });
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            className: "btn btn-link",
                                                                            role: "button",
                                                                            href: "/our-industries",
                                                                            as: "/our-industries",
                                                                            children: "Show all industry"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "our-expertise",
                                                                    children: industryData?.map((item)=>{
                                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "card",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "subcards",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                    className: "subcatlink",
                                                                                    // role="button"
                                                                                    href: `/our-industries/${item?.industry_page?.slug}`,
                                                                                    as: `/our-industries/${item?.industry_page?.slug}`,
                                                                                    children: item.title
                                                                                })
                                                                            })
                                                                        }, item.id);
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "nav-item menu-hover",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        className: "nav-link",
                                                        role: "button",
                                                        href: "javascript:void(0);",
                                                        as: "javascript:void(0);",
                                                        children: [
                                                            "Case study",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "nav-icon",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "15",
                                                                    height: "9",
                                                                    viewBox: "0 0 15 9",
                                                                    fill: "none",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M0.33503 0.641912C0.139254 0.838024 0.0292969 1.10381 0.0292969 1.38091C0.0292969 1.65802 0.139254 1.9238 0.33503 2.11991L6.23903 8.02991C6.46703 8.25791 6.77503 8.35991 7.07303 8.33191C7.34303 8.33191 7.61203 8.23091 7.81703 8.02591L13.724 2.11891C13.821 2.02193 13.8979 1.9068 13.9504 1.78009C14.0029 1.65337 14.0299 1.51757 14.0299 1.38041C14.0299 1.24326 14.0029 1.10745 13.9504 0.98074C13.8979 0.854028 13.821 0.738894 13.724 0.641912C13.627 0.544931 13.5119 0.468002 13.3852 0.415516C13.2585 0.36303 13.1227 0.336016 12.9855 0.336016C12.8484 0.336016 12.7126 0.36303 12.5859 0.415516C12.4591 0.468002 12.344 0.544931 12.247 0.641912L7.02703 5.86191L1.81103 0.641912C1.71416 0.544915 1.59912 0.467964 1.47249 0.415462C1.34586 0.362961 1.21012 0.335938 1.07303 0.335938C0.935946 0.335938 0.800205 0.362961 0.673573 0.415462C0.546941 0.467964 0.4319 0.544915 0.33503 0.641912Z",
                                                                        fill: "white"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "Mega-menu",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "mega-menu-content",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "title-content",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                            className: "title",
                                                                            children: "Case study"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "desc",
                                                                            children: "Craft your success journey with iWebwiser look how closely we work with our client to unlock tailored solutions to expand our client's business globally."
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            className: "btn btn-link",
                                                                            role: "button",
                                                                            href: "/case-study-unlock-your-solutions",
                                                                            as: "/case-study-unlock-your-solutions",
                                                                            children: "Show all Case study"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "our-expertise",
                                                                    children: caseStudyData?.filter((item)=>item.caseStudies && item.caseStudies.length > 0).map((item, index)=>{
                                                                        // Pick a random case study
                                                                        const randomCaseStudy = item.caseStudies[Math.floor(Math.random() * item.caseStudies.length)];
                                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "card",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "subcards",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                    href: randomCaseStudy?.slug ? `/case-study/${randomCaseStudy.slug}` : "#",
                                                                                    className: "subcatlink",
                                                                                    children: item?.title
                                                                                })
                                                                            })
                                                                        }, index);
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    className: "nav-link",
                                                    role: "button",
                                                    href: "/contact-us",
                                                    as: "/contact-us",
                                                    children: "Reach us"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    className: "nav-link btn nav-link join-team",
                                                    role: "button",
                                                    href: "/career",
                                                    as: "/career",
                                                    children: "Career With Us"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: "btn btn-contact",
                onClick: toggleModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "fas fa-headset"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Modal, {
                isOpen: showModal,
                centered: true,
                toggle: toggleModal,
                className: "contact-modal",
                style: {
                    zIndex: 1300
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.ModalHeader, {
                        toggle: toggleModal,
                        children: "Let us chat with you"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.ModalBody, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: handleSubmit(handleContactForm),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "contact-form",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "contact-field",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    for: "NameInput",
                                                    className: "form-label",
                                                    children: "Name"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    id: "NameInput",
                                                    placeholder: "John Doe",
                                                    ...register("name", {
                                                        required: "Field is required"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mb-0 text-danger",
                                                    children: errors?.name?.message
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "contact-field",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    for: "EmailInput",
                                                    className: "form-label",
                                                    children: "Email"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "email",
                                                    className: "form-control",
                                                    id: "EmailInput",
                                                    ...register("email", {
                                                        required: "Field is required",
                                                        pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                            message: "Invalid email address"
                                                        }
                                                    }),
                                                    placeholder: "JohnDoe@gmail.com"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mb-0 text-danger",
                                                    children: errors?.email?.message
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "contact-field",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    for: "PhoneInput",
                                                    className: "form-label",
                                                    children: "Phone"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "number",
                                                    className: "form-control",
                                                    id: "PhoneInput",
                                                    ...register("phone", {
                                                        pattern: {
                                                            value: /^\d{8,}$/,
                                                            message: `Please fill valid phone no`
                                                        },
                                                        required: "Field is required"
                                                    }),
                                                    placeholder: "+91-989898989"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mb-0 text-danger",
                                                    children: errors?.phone?.message
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "contact-field",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    for: "TextInput",
                                                    className: "form-label",
                                                    children: "How can we Help ?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                    className: "form-control",
                                                    id: "TextInput",
                                                    rows: "3",
                                                    ...register("message", {
                                                        required: "Field is required"
                                                    }),
                                                    placeholder: "Anything at all..."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mb-0 text-danger",
                                                    children: errors?.message?.message
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "modal-footer-btn",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        className: "btn btn-submit",
                                        children: loading == true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "spinner-border spinner-border-sm"
                                        }) : "Submit"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Offcanvas, {
                className: "Header-menubar",
                direction: "start",
                isOpen: show,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.OffcanvasBody, {
                    className: "header-menu-content",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "list-unstyled",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "list-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/",
                                    as: "/",
                                    className: "btn btn-header-link",
                                    onClick: ()=>handleLinkCheck("/"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Home"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "list-item dropdown",
                                id: "Company",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "btn btn-header-link",
                                    href: "javascript:void(0)",
                                    onClick: ()=>Handletoggle("Company"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Company"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "list-item dropdown",
                                id: "Expertise",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "btn btn-header-link",
                                    role: "button",
                                    onClick: ()=>Handletoggle("Expertise"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Expertise / Services"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "list-item dropdown",
                                id: "Industry",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "btn btn-header-link",
                                    href: "javascript:void(0)",
                                    onClick: ()=>Handletoggle("Industry"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Industry"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "list-item dropdown",
                                id: "CaseStudy",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "btn btn-header-link",
                                    href: "javascript:void(0)",
                                    onClick: ()=>Handletoggle("CaseStudy"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Case Study"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "list-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/contact-us",
                                    as: "/contact-us",
                                    className: "btn btn-header-link",
                                    onClick: ()=>handleLinkCheck("/contact-us"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Reach us"
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: show1 ? "Header-Submenubar isOpen" : "Header-Submenubar",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "header-submenu-content",
                    children: renderMobileSubMenu()
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header); // const Handletoggle = () => {
 // setTimeout(() => {
 //   document.getElementById("Menucontentoffcanvas").classList.add("show");
 // }, 500);
 // document.getElementById("sideToggle").classList.toggle("active");
 // if ($("#sideToggle1").hasClass("active")) {
 //   console.log("jhgfdfghjkl;lkjhvcvbnm,");
 //   document.getElementById("sideToggle1").classList.toggle("active");
 // }
 // if ($("#Submenu-offcanvas-2").hasClass("show")) {
 //   console.log("kjhgfghjklkjhggh");
 //   document.getElementById("Submenu-offcanvas-2").classList.toggle("show");
 // }

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;