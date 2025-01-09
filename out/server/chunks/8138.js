"use strict";
exports.id = 8138;
exports.ids = [8138];
exports.modules = {

/***/ 8138:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ApiUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3260);
/* harmony import */ var _hooks_useapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(757);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useapi__WEBPACK_IMPORTED_MODULE_4__]);
_hooks_useapi__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Footer = ()=>{
    const [FooterLink, setFooterLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [globalBranches, setGlobalBranches] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [IndiaBranches, setIndiaBranches] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // console.log(FooterLink)
    // console.log(IndiaBranches);
    // console.log(globalBranches)
    const fetchData = async ()=>{
        try {
            const res = await (0,_hooks_useapi__WEBPACK_IMPORTED_MODULE_4__/* .callApi */ .t)(_Utility_ApiUrl__WEBPACK_IMPORTED_MODULE_3__/* .ApiUrl */ .l.getActivesocialMedia);
            const data = await res.data;
            // console.log(data)
            const iconDetails = {
                linkedin: {
                    className: "btn btn-socials Linkedin",
                    spanClassName: "social-linkedin",
                    iconClassName: "fab fa-linkedin-in",
                    SocialName: "LinkedIn"
                },
                instagram: {
                    className: "btn btn-socials instagram",
                    spanClassName: "social-instagram",
                    iconClassName: "fab fa-instagram",
                    SocialName: "Instagram"
                },
                facebook: {
                    className: "btn btn-socials facebook",
                    spanClassName: "social-facebook",
                    iconClassName: "fab fa-facebook-f",
                    SocialName: "Facebook"
                },
                twitter: {
                    className: "btn btn-socials twitter",
                    spanClassName: "social-twitter",
                    iconClassName: "fab fa-twitter",
                    SocialName: "Twitter"
                },
                youtube: {
                    className: "btn btn-socials youtube",
                    spanClassName: "social-youtube",
                    iconClassName: "fab fa-youtube",
                    SocialName: "YouTube"
                }
            };
            const formattedData = data.map((item)=>({
                    link: item.link,
                    ...iconDetails[item.type]
                }));
            setFooterLink({
                Links: formattedData
            });
        } catch (err) {
            console.log(err);
        }
    };
    const classes = [
        {
            headingClass: "footer-link",
            textClass: "footer-text footer-mb"
        },
        {
            headingClass: "footer-link",
            textClass: "footer-text footer-mb"
        },
        {
            headingClass: "footer-link",
            textClass: "footer-text footer-mb"
        },
        {
            headingClass: "footer-link",
            textClass: "footer-text"
        },
        {
            headingClass: "footer-link",
            textClass: "footer-text"
        }
    ];
    const pTagClasses = [
        "footer-text footer-mb",
        "footer-text footer-mb",
        "footer-text footer-mb",
        "footer-text",
        "footer-text"
    ];
    const fetchFooterData = async ()=>{
        try {
            const res = await (0,_hooks_useapi__WEBPACK_IMPORTED_MODULE_4__/* .callApi */ .t)(_Utility_ApiUrl__WEBPACK_IMPORTED_MODULE_3__/* .ApiUrl */ .l.getBranchByPageId);
            const data = await res.data;
            setGlobalBranches(data.globalBranches);
            setIndiaBranches(data.localBranches);
        } catch (err) {
            console.log(err);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchData();
        fetchFooterData();
    }, []);
    const d = new Date();
    const year = d.getFullYear().toString();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
            className: "footer",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "max-content-width",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 px-0 d-none d-lg-block",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "footer-section social-section",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-12 col-lg-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    className: "footer-title",
                                                    children: "Social Media"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col-12 col-lg-10 d-flex justify-content-between",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "social-icons",
                                                        children: FooterLink?.Links?.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                target: "_blank",
                                                                href: item.link,
                                                                className: item.className,
                                                                role: "button",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: item.spanClassName,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: item.iconClassName
                                                                        })
                                                                    }),
                                                                    item.SocialName
                                                                ]
                                                            }, index))
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "truseted-logo",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/assets/img/trusted-by.png"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 px-0 d-none d-lg-block",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "footer-section",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-12 col-lg-2",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                    className: "footer-title",
                                                    children: [
                                                        "Globle",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                            className: "d-none d-lg-block"
                                                        }),
                                                        "branches"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-12 col-lg-10",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                        globalBranches.map((branch, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "col-6 col-lg-3",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                        className: "footer-link",
                                                                        children: branch.title
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                        className: pTagClasses[index % pTagClasses.length],
                                                                        children: [
                                                                            branch.address ? `${branch.address}, ` : "",
                                                                            branch.city ? `${branch.city}, ` : "",
                                                                            branch.state ? `${branch.state}, ` : "",
                                                                            branch.zip_code ? `${branch.zip_code}, ` : "",
                                                                            branch.country ? `${branch.country}` : ""
                                                                        ]
                                                                    })
                                                                ]
                                                            }, branch.id)),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-6 mt-2 col-lg-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    className: "footer-link",
                                                                    children: "AYN Tech Pvt. Ltd."
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "footer-text",
                                                                    children: "London EC2A 4NE"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "footer-text",
                                                                    children: "Raj Kumar Bagari"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "footer-text",
                                                                    children: "Founder & CEO"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "btn footer-text p-0",
                                                                    role: "button",
                                                                    href: "mailto:support@ayntech.co.uk",
                                                                    children: "Email : support@ayntech.co.uk"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-6 mt-2 col-lg-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    className: "footer-link",
                                                                    children: "iWebwiser Pvt. Ltd."
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "footer-text",
                                                                    children: "Malaysia"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "footer-text",
                                                                    children: "Dr. Ghassan ALYafie"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "footer-text",
                                                                    children: "Technical Advisor"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "btn footer-text p-0",
                                                                    role: "button",
                                                                    href: "mailto:ghassanalyafie@gmail.com",
                                                                    children: "Email : ghassanalyafie@gmail.com"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 px-0 d-none d-lg-block",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "footer-section",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-12 col-lg-2",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                    className: "footer-title",
                                                    children: [
                                                        "India",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                            className: "d-none d-lg-block"
                                                        }),
                                                        "branches"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-12 col-lg-10",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                        IndiaBranches.map((branch, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "col-6 col-lg-3",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                        className: "footer-link",
                                                                        children: branch.title
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                        className: "footer-text  footer-mb",
                                                                        children: [
                                                                            branch.address ? `${branch.address}, ` : "",
                                                                            branch.city ? `${branch.city}, ` : "",
                                                                            branch.state ? `${branch.state}, ` : "",
                                                                            branch.zip_code ? `${branch.zip_code}, ` : "",
                                                                            branch.country ? `${branch.country}` : ""
                                                                        ]
                                                                    })
                                                                ]
                                                            }, branch.id)),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-6 col-lg-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    className: "footer-link",
                                                                    children: "iWebwiser Pvt. Ltd."
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "footer-text",
                                                                    children: "Jaipur "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    className: "footer-link soon",
                                                                    children: "Coming Soon..."
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "footer-sm d-block d-lg-none",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "footer-sm-content",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                className: "btn title",
                                                type: "button",
                                                "data-bs-toggle": "collapse",
                                                "data-bs-target": "#collapseOne",
                                                "aria-expanded": "true",
                                                "aria-controls": "collapseOne",
                                                children: [
                                                    "Social media",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fas fa-angle-down"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "collapse show",
                                                id: "collapseOne",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "card",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "social-icons list-unstyled",
                                                        children: FooterLink?.Links?.slice(0, 4).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    target: "blank",
                                                                    href: item.link,
                                                                    className: item.className,
                                                                    role: "button",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: item.spanClassName,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: item.iconClassName
                                                                            })
                                                                        }),
                                                                        item.SocialName
                                                                    ]
                                                                })
                                                            }, index))
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                className: "btn title",
                                                type: "button",
                                                "data-bs-toggle": "collapse",
                                                "data-bs-target": "#collapseTwo",
                                                "aria-expanded": "false",
                                                "aria-controls": "collapseTwo",
                                                children: [
                                                    "Globle branches",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fas fa-angle-down"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "collapse",
                                                id: "collapseTwo",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "card",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "address-content list-unstyled",
                                                        children: [
                                                            globalBranches.map((branch, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                            className: classes[index % classes.length].headingClass,
                                                                            children: branch.title
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                            className: classes[index % classes.length].textClass,
                                                                            children: [
                                                                                branch.address ? `${branch.address}, ` : "",
                                                                                branch.city ? `${branch.city}, ` : "",
                                                                                branch.state ? `${branch.state}, ` : "",
                                                                                branch.zip_code ? `${branch.zip_code}, ` : "",
                                                                                branch.country ? `${branch.country}` : ""
                                                                            ]
                                                                        })
                                                                    ]
                                                                }, branch.id)),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                        className: "footer-link",
                                                                        children: "iWebwiser Pvt. Ltd."
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "footer-text mb-2",
                                                                        children: "Malaysia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "footer-text mb-2",
                                                                        children: "Dr. Ghassan ALYafie"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "footer-text mb-2",
                                                                        children: "Technical Advisor"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: "btn footer-text p-0",
                                                                        role: "button",
                                                                        href: "mailto:ghassanalyafie@gmail.com",
                                                                        children: "Email : ghassanalyafie@gmail.com"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                        className: "footer-link",
                                                                        children: "AYN Tech Pvt. Ltd."
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "footer-text mb-2",
                                                                        children: "London EC2A 4NE"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "footer-text mb-2",
                                                                        children: "Raj Kumar Bagari"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "footer-text mb-2",
                                                                        children: "Founder & CEO"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: "btn footer-text p-0",
                                                                        role: "button",
                                                                        href: "mailto:support@ayntech.co.uk",
                                                                        children: "Email : support@ayntech.co.uk"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                className: "btn title",
                                                type: "button",
                                                "data-bs-toggle": "collapse",
                                                "data-bs-target": "#collapseThird",
                                                "aria-expanded": "false",
                                                "aria-controls": "collapseThird",
                                                children: [
                                                    "India branches",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fas fa-angle-down"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "collapse",
                                                id: "collapseThird",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "card",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "address-content list-unstyled",
                                                        children: IndiaBranches.map((branch, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                        className: "footer-link",
                                                                        children: branch.title
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                        className: "footer-text footer-mb",
                                                                        children: [
                                                                            branch.address ? `${branch.address}, ` : "",
                                                                            branch.city ? `${branch.city}, ` : "",
                                                                            branch.state ? `${branch.state}, ` : "",
                                                                            branch.zip_code ? `${branch.zip_code}, ` : "",
                                                                            branch.country ? `${branch.country}` : ""
                                                                        ]
                                                                    })
                                                                ]
                                                            }, branch.id))
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "footer-logo d-none",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "footer-logo-img",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/assets/img/Logo.svg",
                                                    alt: "Logo"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                children: "Iwebwiser"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 px-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "footer-section",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row align-items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-12 col-lg-5",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                    className: "footer-title",
                                                    children: [
                                                        "\xa9 Copyright iWebwiser ",
                                                        year,
                                                        " ."
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-12 col-lg-7 d-none d-lg-block",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "bottom-item d-none",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/graphic-and-ui-ux-design-company",
                                                                as: "/graphic-and-ui-ux-design-company",
                                                                className: "btn footer-bottom-btn",
                                                                children: "Services"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "bottom-item",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/pricing",
                                                                as: "/pricing",
                                                                className: "btn footer-bottom-btn",
                                                                children: "Our pricing"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "bottom-item d-none",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/e-learning-and-education",
                                                                as: "/e-learning-and-education",
                                                                className: "btn footer-bottom-btn",
                                                                children: "Industry"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "bottom-item d-none",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/case-study-unlock-your-solutions",
                                                                as: "/case-study-unlock-your-solutions",
                                                                className: "btn footer-bottom-btn",
                                                                children: "Case study"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "bottom-item",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/career",
                                                                as: "/career",
                                                                className: "btn footer-bottom-btn",
                                                                children: "Career"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "bottom-item",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/our-portfolio",
                                                                as: "/our-portfolio",
                                                                className: "btn footer-bottom-btn",
                                                                children: "Success story"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "bottom-item",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/privacy-policy",
                                                                as: "/privacy-policy",
                                                                className: "btn footer-bottom-btn",
                                                                children: "Privacy policy"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "bottom-item",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/terms-conditions",
                                                                as: "/terms-conditions",
                                                                className: "btn footer-bottom-btn",
                                                                children: "Terms of use"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;