(function() {
var exports = {};
exports.id = 566;
exports.ids = [566];
exports.modules = {

/***/ 6819:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pokemon_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(821);

const LENGTH = _pokemon_json__WEBPACK_IMPORTED_MODULE_0__.length;
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  let index = parseInt(req.query.i);
  let lastIndex = index + 10;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  let data;
  let hasNextPage = false;

  if (lastIndex < LENGTH) {
    data = _pokemon_json__WEBPACK_IMPORTED_MODULE_0__.slice(index, lastIndex);
    hasNextPage = true;
  } else {
    data = _pokemon_json__WEBPACK_IMPORTED_MODULE_0__.slice(index);
  }

  res.end(JSON.stringify({
    data,
    hasNextPage
  }));
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [821], function() { return __webpack_exec__(6819); });
module.exports = __webpack_exports__;

})();