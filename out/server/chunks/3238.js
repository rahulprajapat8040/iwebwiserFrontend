"use strict";
exports.id = 3238;
exports.ids = [3238];
exports.modules = {

/***/ 3238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ sendContactForm)
/* harmony export */ });
/*
 * Api helper File
 * Use for all Api.
 **/ /*
npm run build
*/ // import axios from "axios";
// import cookie from "react-cookies";
// //
// // const MainUrl = "https://8acc-49-36-236-128.ngrok.io/api/v1/";
// // const MainUrl = "https://91a7-2401-4900-1c7b-b322-ac04-1c1c-723b-a9ae.ngrok.io/api/";
// const MainUrl = "http://168.235.81.206:3000/api/v1/";
// // const APP_URL = "https://91a7-2401-4900-1c7b-b322-ac04-1c1c-723b-a9ae.ngrok.io/api/";
// // export function APPURL() {
// //   return APP_URL;
// // }
// //Post Data Functions.
// export function PostData(url, data) {
//   // body..
//   //
//   var headers = {
//     "Content-Type": "application/json",
//     "X-localization": "en",
//   };
//   return axios
//     .post(MainUrl + url, data, { headers: headers })
//     .then((response) => {
//       //console.log(res);
//       //console.log(res.data);
//       return response.data;
//     })
//     .catch((error) => {
//       //return error.data;
//       //console.log(error.response);
//       let errorStatus = JSON.parse(JSON.stringify(error.response));
//       //console.log(errorStatus.data);
//       return errorStatus;
//     });
// }
// //Get Data Functions.
// export function GetData(url, data) {
//   // body...
//   var headers = {
//     "Content-Type": "application/json",
//     //'Authorization':'Bearer '+Token,
//     //'X-localization':'en'
//   };
//   //console.log("headers="+JSON.stringify(headers));
//   return axios
//     .get(MainUrl + url, data, { headers: headers })
//     .then((res) => {
//       //console.log(res);
//       //console.log(res.data);
//       return res.data;
//     })
//     .catch((error) => {
//       let errorStatus = JSON.parse(JSON.stringify(error.response));
//       //console.log(errorStatus.data);
//       return errorStatus;
//     });
// }
// //Post Data with token
// //Post Data Functions.
// export function PostDataWithToken(url, data) {
//   // body..
//   //
//   let tokens = "";
//   if (cookie.load("telimedicineToken")) {
//     tokens = cookie.load("telimedicineToken");
//   }
//   var headers = {
//     "Content-Type": "application/json",
//     // Authorization: "Bearer " + tokens,
//     Authorization: tokens,
//   };
//   return axios
//     .post(MainUrl + url, data, { headers: headers })
//     .then((response) => {
//       //console.log(res);
//       //console.log(res.data);
//       return response.data;
//     })
//     .catch((error) => {
//       //return error.data;
//       //console.log(error.response);
//       let errorStatus = JSON.parse(JSON.stringify(error.response));
//       //console.log(errorStatus.data);
//       return errorStatus;
//     });
// }
// //Post Data Functions.
// export function PostImageDataWithToken(url, data) {
//   // body..
//   //
//   let tokens = "";
//   if (cookie.load("telimedicineToken")) {
//     tokens = cookie.load("telimedicineToken");
//   }
//   var headers = {
//     "Content-Type": "multipart/form-data",
//     // Authorization: "Bearer " + tokens,
//     Authorization: tokens,
//   };
//   return axios
//     .post(MainUrl + url, data, { headers: headers })
//     .then((response) => {
//       //console.log(res);
//       //console.log(res.data);
//       return response.data;
//     })
//     .catch((error) => {
//       //return error.data;
//       //console.log(error.response);
//       let errorStatus = JSON.parse(JSON.stringify(error.response));
//       //console.log(errorStatus.data);
//       return errorStatus;
//     });
// }
// //Get Data with token Functions.
// export function GetDataWithToken(url, data) {
//   let tokens = "";
//   if (cookie.load("telimedicineToken")) {
//     tokens = cookie.load("telimedicineToken");
//   }
//   let config = {
//     headers: {
//       // Authorization: "Bearer " + tokens,
//       Authorization: tokens,
//     },
//     params: {},
//   };
//   //console.log("headers="+JSON.stringify(headers));
//   return axios
//     .get(MainUrl + url, config)
//     .then((res) => {
//       //console.log(res);
//       return res.data;
//     })
//     .catch((error) => {
//       console.log("errors", error);
//       let errorStatus = JSON.parse(JSON.stringify(error.response));
//       //console.log(errorStatus.data);
//       return errorStatus;
//     });
// }
// export function PostVideoDataWithToken(url, data, onUploadProgress) {
//   // body..
//   //
//   let tokens = "";
//   if (cookie.load("telimedicineToken")) {
//     tokens = cookie.load("telimedicineToken");
//   }
//   var headers = {
//     "Content-Type": "multipart/form-data",
//     // Authorization: "Bearer " + tokens,
//     Authorization: tokens,
//   };
//   return axios
//     .post(MainUrl + url, data, {
//       headers: headers,
//       onUploadProgress: onUploadProgress,
//     })
//     .then((response) => {
//       //console.log(res);
//       //console.log(res.data);
//       return response.data;
//     })
//     .catch((error) => {
//       //return error.data;
//       //console.log(error.response);
//       let errorStatus = JSON.parse(JSON.stringify(error.response));
//       //console.log(errorStatus.data);
//       return errorStatus;
//     });
// }
const sendContactForm = async (data)=>fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    }).then((res)=>{
        // if (!res.ok) throw new Error("Failed to send message");
        return res.json();
    });


/***/ })

};
;