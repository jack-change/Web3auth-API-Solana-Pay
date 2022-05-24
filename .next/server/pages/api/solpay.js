"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/solpay";
exports.ids = ["pages/api/solpay"];
exports.modules = {

/***/ "@solana/web3.js":
/*!**********************************!*\
  !*** external "@solana/web3.js" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@solana/web3.js");

/***/ }),

/***/ "bignumber.js":
/*!*******************************!*\
  !*** external "bignumber.js" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("bignumber.js");

/***/ }),

/***/ "@solana/pay":
/*!******************************!*\
  !*** external "@solana/pay" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("@solana/pay");;

/***/ }),

/***/ "@solana/wallet-adapter-base":
/*!**********************************************!*\
  !*** external "@solana/wallet-adapter-base" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ "(api)/./pages/api/solpay.ts":
/*!*****************************!*\
  !*** ./pages/api/solpay.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"@solana/wallet-adapter-base\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_pay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/pay */ \"@solana/pay\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bignumber.js */ \"bignumber.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__, _solana_pay__WEBPACK_IMPORTED_MODULE_2__]);\n([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__, _solana_pay__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nasync function handler(req, res) {\n    try {\n        const input_data = req.query;\n        const amount = input_data.amount;\n        const shopAddress = input_data.shopAddress;\n        const reference = input_data.reference;\n        const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletAdapterNetwork.Devnet;\n        const endpoint = (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.clusterApiUrl)(network);\n        const connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Connection(endpoint);\n        const urlParams = {\n            recipient: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(shopAddress),\n            splToken: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(\"Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr\"),\n            amount: new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(Number(amount)),\n            reference: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(reference),\n            label: \"Cookies Inc\",\n            message: \"Thanks for your order! \\uD83C\\uDF6A\"\n        };\n        // Check if there is any transaction for the reference\n        const signatureInfo = await (0,_solana_pay__WEBPACK_IMPORTED_MODULE_2__.findReference)(connection, new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(reference), {\n            finality: \"confirmed\"\n        });\n        // Validate that the transaction has the expected recipient, amount and SPL token\n        const data = await (0,_solana_pay__WEBPACK_IMPORTED_MODULE_2__.validateTransfer)(connection, signatureInfo.signature, {\n            recipient: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(shopAddress),\n            amount: new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(Number(amount)),\n            splToken: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(\"Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr\"),\n            reference: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(reference)\n        }, {\n            commitment: \"confirmed\"\n        });\n        console.log(data);\n        res.status(200).json({\n            signature: \"recieved\",\n            message: \"Thanks for your order! \\uD83C\\uDF6A\"\n        });\n    } catch  {\n        res.status(200).json({\n            signature: \"not_yet\",\n            message: \"be patient my guy\"\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc29scGF5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0U7QUFDcUM7QUFFaUQ7QUFFbkg7QUFpQnRCLGVBQWVPLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUE2RCxFQUM3RDtJQUNBLElBQUk7UUFDRixNQUFNQyxVQUFVLEdBQUlGLEdBQUcsQ0FBQ0csS0FBSztRQUM3QixNQUFPQyxNQUFNLEdBQUdGLFVBQVUsQ0FBQ0UsTUFBTTtRQUNqQyxNQUFNQyxXQUFXLEdBQUdILFVBQVUsQ0FBQ0csV0FBVztRQUMxQyxNQUFNQyxTQUFTLEdBQUdKLFVBQVUsQ0FBQ0ksU0FBUztRQUN0QyxNQUFNQyxPQUFPLEdBQUdmLG9GQUEyQjtRQUMvQyxNQUFNaUIsUUFBUSxHQUFHaEIsOERBQWEsQ0FBQ2MsT0FBTyxDQUFDO1FBQ3ZDLE1BQU1HLFVBQVUsR0FBRyxJQUFJaEIsdURBQVUsQ0FBQ2UsUUFBUSxDQUFDO1FBQzNDLE1BQU1FLFNBQVMsR0FBNkI7WUFDMUNDLFNBQVMsRUFBRSxJQUFJakIsc0RBQVMsQ0FBQ1UsV0FBVyxDQUFDO1lBQ3JDUSxRQUFRLEVBQUUsSUFBSWxCLHNEQUFTLENBQUMsOENBQThDLENBQUM7WUFDdkVTLE1BQU0sRUFBRSxJQUFJTixxREFBUyxDQUFDZ0IsTUFBTSxDQUFDVixNQUFNLENBQUMsQ0FBQztZQUNyQ0UsU0FBUyxFQUFFLElBQUlYLHNEQUFTLENBQUNXLFNBQVMsQ0FBQztZQUNuQ1MsS0FBSyxFQUFFLGFBQWE7WUFDcEJDLE9BQU8sRUFBRSxxQ0FBMEI7U0FDakM7UUFDQSxzREFBc0Q7UUFDdEQsTUFBTUMsYUFBYSxHQUFHLE1BQU1yQiwwREFBYSxDQUFDYyxVQUFVLEVBQUUsSUFBSWYsc0RBQVMsQ0FBQ1csU0FBUyxDQUFDLEVBQUU7WUFBRVksUUFBUSxFQUFFLFdBQVc7U0FBRSxDQUFDO1FBQzFHLGlGQUFpRjtRQUNqRixNQUFNQyxJQUFJLEdBQUcsTUFBTXRCLDZEQUFnQixDQUNqQ2EsVUFBVSxFQUNWTyxhQUFhLENBQUNHLFNBQVMsRUFDdkI7WUFDRVIsU0FBUyxFQUFFLElBQUlqQixzREFBUyxDQUFDVSxXQUFXLENBQUM7WUFDckNELE1BQU0sRUFBRSxJQUFJTixxREFBUyxDQUFDZ0IsTUFBTSxDQUFDVixNQUFNLENBQUMsQ0FBQztZQUNyQ1MsUUFBUSxFQUFFLElBQUlsQixzREFBUyxDQUFDLDhDQUE4QyxDQUFDO1lBQ3ZFVyxTQUFTLEVBQUUsSUFBSVgsc0RBQVMsQ0FBQ1csU0FBUyxDQUFDO1NBQ3BDLEVBQ0Q7WUFBRWUsVUFBVSxFQUFFLFdBQVc7U0FBRSxDQUM1QjtRQUVPQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSSxDQUFDLENBQUM7UUFDaEJsQixHQUFHLENBQUN1QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUNmTCxTQUFTLEVBQUUsVUFBVTtZQUNyQkosT0FBTyxFQUFHLHFDQUEwQjtTQUNyQyxDQUFDLENBQUM7S0FBQyxDQUNILE9BQ0E7UUFDRWYsR0FBRyxDQUFDdUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDbEJMLFNBQVMsRUFBQyxTQUFTO1lBQ25CSixPQUFPLEVBQUcsbUJBQW1CO1NBQ2xDLENBQUMsQ0FBQztLQUNoQjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29sYWZyaWNhLy4vcGFnZXMvYXBpL3NvbHBheS50cz9kZDVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdhbGxldEFkYXB0ZXJOZXR3b3JrIH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItYmFzZVwiXG5pbXBvcnQgeyBjbHVzdGVyQXBpVXJsLCBDb25uZWN0aW9uLCBQdWJsaWNLZXksIFN5c3RlbVByb2dyYW0sIExBTVBPUlRTX1BFUl9TT0wgfSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCJcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgeyBjcmVhdGVRUiwgZW5jb2RlVVJMLCBUcmFuc2ZlclJlcXVlc3RVUkxGaWVsZHMsIGZpbmRSZWZlcmVuY2UsIHZhbGlkYXRlVHJhbnNmZXIsIEZpbmRSZWZlcmVuY2VFcnJvciwgVmFsaWRhdGVUcmFuc2ZlckVycm9yIH0gZnJvbSBcIkBzb2xhbmEvcGF5XCI7XG5pbXBvcnQgaW50ZXJuYWwgZnJvbSBcInN0cmVhbVwiO1xuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XG5cbmV4cG9ydCB0eXBlIE1ha2VUcmFuc2FjdGlvbklucHV0RGF0YSA9IHtcbiAgcmVmZXJlbmNlOiBzdHJpbmcsXG4gIGFtb3VudDogc3RyaW5nLFxuICBzaG9wQWRkcmVzczogc3RyaW5nLFxufVxuXG5leHBvcnQgdHlwZSBNYWtlVHJhbnNhY3Rpb25PdXRwdXREYXRhID0ge1xuICBzaWduYXR1cmU6IHN0cmluZyxcbiAgbWVzc2FnZTogc3RyaW5nLFxufVxuXG50eXBlIEVycm9yT3V0cHV0ID0ge1xuICBlcnJvcjogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPE1ha2VUcmFuc2FjdGlvbk91dHB1dERhdGEgfCBFcnJvck91dHB1dD5cbikge1xuICB0cnkge1xuICAgIGNvbnN0IGlucHV0X2RhdGEgID0gcmVxLnF1ZXJ5IGFzIE1ha2VUcmFuc2FjdGlvbklucHV0RGF0YTtcbiAgICBjb25zdCAgYW1vdW50ID0gaW5wdXRfZGF0YS5hbW91bnQ7XG4gICAgY29uc3Qgc2hvcEFkZHJlc3MgPSBpbnB1dF9kYXRhLnNob3BBZGRyZXNzXG4gICAgY29uc3QgcmVmZXJlbmNlID0gaW5wdXRfZGF0YS5yZWZlcmVuY2VcbiAgICBjb25zdCBuZXR3b3JrID0gV2FsbGV0QWRhcHRlck5ldHdvcmsuRGV2bmV0XG5jb25zdCBlbmRwb2ludCA9IGNsdXN0ZXJBcGlVcmwobmV0d29yaylcbmNvbnN0IGNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbihlbmRwb2ludCk7XG5jb25zdCB1cmxQYXJhbXM6IFRyYW5zZmVyUmVxdWVzdFVSTEZpZWxkcyA9IHtcbiAgcmVjaXBpZW50OiBuZXcgUHVibGljS2V5KHNob3BBZGRyZXNzKSxcbiAgc3BsVG9rZW46IG5ldyBQdWJsaWNLZXkoXCJHaDlad0VtZExKOERzY0tOVGtUcVBiTndMTk5CanVTemFHOVZwMktHdEtKclwiKSxcbiAgYW1vdW50OiBuZXcgQmlnTnVtYmVyKE51bWJlcihhbW91bnQpKSxcbiAgcmVmZXJlbmNlOiBuZXcgUHVibGljS2V5KHJlZmVyZW5jZSksXG4gIGxhYmVsOiBcIkNvb2tpZXMgSW5jXCIsXG4gIG1lc3NhZ2U6IFwiVGhhbmtzIGZvciB5b3VyIG9yZGVyISDwn42qXCIsXG59XG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYW55IHRyYW5zYWN0aW9uIGZvciB0aGUgcmVmZXJlbmNlXG4gICAgY29uc3Qgc2lnbmF0dXJlSW5mbyA9IGF3YWl0IGZpbmRSZWZlcmVuY2UoY29ubmVjdGlvbiwgbmV3IFB1YmxpY0tleShyZWZlcmVuY2UpLCB7IGZpbmFsaXR5OiAnY29uZmlybWVkJyB9KVxuICAgIC8vIFZhbGlkYXRlIHRoYXQgdGhlIHRyYW5zYWN0aW9uIGhhcyB0aGUgZXhwZWN0ZWQgcmVjaXBpZW50LCBhbW91bnQgYW5kIFNQTCB0b2tlblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZVRyYW5zZmVyKFxuICAgICAgY29ubmVjdGlvbixcbiAgICAgIHNpZ25hdHVyZUluZm8uc2lnbmF0dXJlLFxuICAgICAge1xuICAgICAgICByZWNpcGllbnQ6IG5ldyBQdWJsaWNLZXkoc2hvcEFkZHJlc3MpLFxuICAgICAgICBhbW91bnQ6IG5ldyBCaWdOdW1iZXIoTnVtYmVyKGFtb3VudCkpLFxuICAgICAgICBzcGxUb2tlbjogbmV3IFB1YmxpY0tleShcIkdoOVp3RW1kTEo4RHNjS05Ua1RxUGJOd0xOTkJqdVN6YUc5VnAyS0d0S0pyXCIpLFxuICAgICAgICByZWZlcmVuY2U6IG5ldyBQdWJsaWNLZXkocmVmZXJlbmNlKSxcbiAgICAgIH0sXG4gICAgICB7IGNvbW1pdG1lbnQ6ICdjb25maXJtZWQnIH1cbiAgICApXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZTogXCJyZWNpZXZlZFwiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAgXCJUaGFua3MgZm9yIHlvdXIgb3JkZXIhIPCfjapcIixcbiAgICAgICAgICAgICAgICAgIH0pO31cbiAgICAgICAgICAgICAgICAgICBjYXRjaFxuICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZTpcIm5vdF95ZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICBcImJlIHBhdGllbnQgbXkgZ3V5XCIsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiJdLCJuYW1lcyI6WyJXYWxsZXRBZGFwdGVyTmV0d29yayIsImNsdXN0ZXJBcGlVcmwiLCJDb25uZWN0aW9uIiwiUHVibGljS2V5IiwiZmluZFJlZmVyZW5jZSIsInZhbGlkYXRlVHJhbnNmZXIiLCJCaWdOdW1iZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaW5wdXRfZGF0YSIsInF1ZXJ5IiwiYW1vdW50Iiwic2hvcEFkZHJlc3MiLCJyZWZlcmVuY2UiLCJuZXR3b3JrIiwiRGV2bmV0IiwiZW5kcG9pbnQiLCJjb25uZWN0aW9uIiwidXJsUGFyYW1zIiwicmVjaXBpZW50Iiwic3BsVG9rZW4iLCJOdW1iZXIiLCJsYWJlbCIsIm1lc3NhZ2UiLCJzaWduYXR1cmVJbmZvIiwiZmluYWxpdHkiLCJkYXRhIiwic2lnbmF0dXJlIiwiY29tbWl0bWVudCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/solpay.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/solpay.ts"));
module.exports = __webpack_exports__;

})();