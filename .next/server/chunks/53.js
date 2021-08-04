exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 4053:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3289);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7644);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);




function Header() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().navbar),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: "Color Console"
      })
    })
  });
}

const Link = ({
  children,
  href
}) => {
  const router = useRouter();
  return /*#__PURE__*/_jsxs("a", {
    href: "#",
    onClick: e => {
      e.preventDefault(); // typically you want to use `next/link` for this usecase
      // but this example shows how you can also access the router
      // and use it manually

      router.push(href);
    },
    className: "jsx-1213245191",
    children: [children, /*#__PURE__*/_jsx(_JSXStyle, {
      id: "1213245191",
      children: ["a.jsx-1213245191{margin-right:10px;}"]
    })]
  });
};

/***/ }),

/***/ 7644:
/***/ (function(module) {

// Exports
module.exports = {
	"navbar": "Home_navbar__14ZRa",
	"container": "Home_container__1EcsU",
	"feed": "Home_feed__1LMji",
	"box": "Home_box__1Ri2p",
	"inner": "Home_inner__1o6Eu",
	"tagName": "Home_tagName__3sigX",
	"img": "Home_img__2EAsu",
	"detailBoxRight": "Home_detailBoxRight__2Scq7",
	"detailBoxLeft": "Home_detailBoxLeft__2AK4Z",
	"row": "Home_row__88lPM",
	"col1": "Home_col1__3JD1f",
	"col8": "Home_col8__1nDfE",
	"infoContainer": "Home_infoContainer__BmMik",
	"center": "Home_center__2Zxdr"
};


/***/ })

};
;