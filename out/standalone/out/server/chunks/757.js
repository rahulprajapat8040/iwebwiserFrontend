"use strict";
exports.id = 757;
exports.ids = [757];
exports.modules = {

/***/ 757:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ callApi)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/**
 * This function call apis via axios.
 *
 * @param {string} url  - base url apis.
 * @param {object} options - api options like method data and multipart .
 * @returns response of api
 */ const callApi = async (url, options)=>{
    // dispatch(setLoading(true));
    // const token = getToken()
    try {
        const res = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])(url, {
            headers: {
                "Content-Type": options?.multipart === true ? "multipart/form-data" : "application/json"
            },
            ...options?.multipart === true && {
                onUploadProgress: options.progressEvent
            },
            method: options?.method || "GET",
            data: options?.data && options?.multipart === true ? options?.data : options?.data ? JSON.stringify(options?.data) : undefined
        });
        if (!res.statusText && res.status != 200) throw new Error(res.data.message);
        return res.data;
    } catch (error) {
        console.log("error", error);
        return error;
    } finally{
    // dispatch(setLoading(false))
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;