"use strict";
(() => {
var exports = {};
exports.id = 500;
exports.ids = [500];
exports.modules = {

/***/ 831:
/***/ ((module) => {

module.exports = require("@solana/web3.js");

/***/ }),

/***/ 215:
/***/ ((module) => {

module.exports = require("bignumber.js");

/***/ }),

/***/ 932:
/***/ ((module) => {

module.exports = import("@solana/pay");;

/***/ }),

/***/ 364:
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ 849:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(364);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_pay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(932);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__, _solana_pay__WEBPACK_IMPORTED_MODULE_2__]);
([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__, _solana_pay__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function handler(req, res) {
    try {
        const input_data = req.query;
        const amount = input_data.amount;
        const shopAddress = input_data.shopAddress;
        const reference = input_data.reference;
        const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletAdapterNetwork.Devnet;
        const endpoint = (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.clusterApiUrl)(network);
        const connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Connection(endpoint);
        const urlParams = {
            recipient: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(shopAddress),
            splToken: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey("Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr"),
            amount: new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(Number(amount)),
            reference: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(reference),
            label: "Cookies Inc",
            message: "Thanks for your order! \uD83C\uDF6A"
        };
        // Check if there is any transaction for the reference
        const signatureInfo = await (0,_solana_pay__WEBPACK_IMPORTED_MODULE_2__.findReference)(connection, new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(reference), {
            finality: "confirmed"
        });
        // Validate that the transaction has the expected recipient, amount and SPL token
        const data = await (0,_solana_pay__WEBPACK_IMPORTED_MODULE_2__.validateTransfer)(connection, signatureInfo.signature, {
            recipient: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(shopAddress),
            amount: new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(Number(amount)),
            splToken: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey("Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr"),
            reference: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(reference)
        }, {
            commitment: "confirmed"
        });
        console.log(data);
        res.status(200).json({
            signature: "recieved",
            message: "Thanks for your order! \uD83C\uDF6A"
        });
    } catch  {
        res.status(200).json({
            signature: "not_yet",
            message: "be patient my guy"
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(849));
module.exports = __webpack_exports__;

})();