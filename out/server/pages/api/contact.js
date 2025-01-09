"use strict";
(() => {
var exports = {};
exports.id = 2091;
exports.ids = [2091];
exports.modules = {

/***/ 2139:
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ 1720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sgmail = __webpack_require__(2139);
sgmail.setApiKey("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");
const CONTACT_MESSAGE_FIELDS = {
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message"
};
const generateEmailContent = (data)=>{
    // const stringData = Object.entries(data).reduce(
    //   (str, [key, val]) =>
    //     (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    //   ""
    // );
    const htmlData = Object.entries(data).reduce((str, [key, val])=>{
        return str += `<h3 className="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p className="form-answer" align="left">${val}</p>`;
    }, "");
    return `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" className="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" className="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " className="padding message-content" > <h2>New Contact Message</h2> <div className="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`;
};
const handler = async (req, res)=>{
    if (req.method === "POST") {
        const data = req.body;
        if (!data || !data.name || !data.email || !data.phone || !data.message) {
            return res.status(400).send({
                message: "Bad request"
            });
        }
        try {
            const mailOptions = {
                from: "fanzatapp@gmail.com",
                to: "iwebwiserinfo@gmail.com",
                subject: "For come to iwebwiser site",
                html: generateEmailContent(data)
            };
            sgmail.send(mailOptions, (err, info)=>{
                if (err) {
                    console.log(err);
                } else {
                // console.log("------------------------->", info);
                }
            });
            return res.status(200).json({
                status: true,
                message: "Data send successfully"
            });
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                status: false,
                message: err.message
            });
        }
    }
    return res.status(400).json({
        message: "Bad request"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1720));
module.exports = __webpack_exports__;

})();