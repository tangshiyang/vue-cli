webpackJsonp([1],{

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bookDetail": 39,
	"./bookDetail.vue": 39,
	"./booklist": 8,
	"./booklist.vue": 8,
	"./comp": 3,
	"./comp.vue": 3,
	"./compd": 9,
	"./compd.vue": 9,
	"./index": 4,
	"./index.js": 4,
	"./index.vue": 66,
	"./list": 10,
	"./list.vue": 10
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 37;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(59)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(67),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-30e66074",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_book_json__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_book_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__data_book_json__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'bookDetail',

  data() {
    var id = this.$route.params.id;
    return {
      book: __WEBPACK_IMPORTED_MODULE_0__data_book_json___default.a
    };
  }
});

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'index',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
});

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(true);
// imports


// module
exports.push([module.i, "[data-v-30e66074]{margin:0;padding:0;border:none}li[data-v-30e66074]{list-style:none;line-height:40px;height:40px}", "", {"version":3,"sources":["/Users/hq-mac00721/workplace/vue-cli/src/components/bookDetail.vue"],"names":[],"mappings":"AACA,kBACE,SAAY,AACZ,UAAU,AACV,WAAa,CACd,AACD,oBACE,gBAAiB,AACjB,iBAAkB,AAClB,WAAa,CACd","file":"bookDetail.vue","sourcesContent":["\n*[data-v-30e66074]{\n  margin:0px ;\n  padding:0;\n  border: none;\n}\nli[data-v-30e66074]{\n  list-style: none;\n  line-height: 40px;\n  height: 40px;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(true);
// imports


// module
exports.push([module.i, ".m-h1[data-v-4331e2e8]{line-height:40px;font-weight:700;font-size:20px;text-align:center}.index a[data-v-4331e2e8]{display:block;text-align:center;text-decoration:none;line-height:25px}", "", {"version":3,"sources":["/Users/hq-mac00721/workplace/vue-cli/src/components/index.vue"],"names":[],"mappings":"AACA,uBACA,iBAAiB,AACjB,gBAAiB,AACjB,eAAe,AACf,iBAAkB,CACjB,AACD,0BACE,cAAe,AACf,kBAAmB,AACnB,qBAAsB,AACtB,gBAAkB,CACnB","file":"index.vue","sourcesContent":["\n.m-h1[data-v-4331e2e8]{\nline-height:40px;\nfont-weight:bold;\nfont-size:20px;\ntext-align:center;\n}\n.index a[data-v-4331e2e8] {\n  display: block;\n  text-align: center;\n  text-decoration: none;\n  line-height: 25px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("1a6d29da", content, true, {});

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("22858fef", content, true, {});

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(60)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(68),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4331e2e8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 67:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-bookDetail"
  }, [_c('h2', [_vm._v("book详情")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("info:" + _vm._s(_vm.book.updated))]), _vm._v(" "), _c('li', [_vm._v("info:" + _vm._s(_vm.book.user_id))]), _vm._v(" "), _c('li', [_vm._v("info:" + _vm._s(_vm.book.id))]), _vm._v(" "), _c('li', [_vm._v("info:more")])])])
},staticRenderFns: []}

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('h1', {
    staticClass: "m-h1"
  }, [_vm._v("基本应用实践")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": '/booklist'
    }
  }, [_vm._v("书籍列表")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": '/vuex'
    }
  }, [_vm._v("vuex实践")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": '/compDemo'
    }
  }, [_vm._v("components组件实践")])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

module.exports = {"status":"read","rating":{"max":5,"value":"5","min":0},"updated":"2012-11-2012:08:04","user_id":"33388491","book_id":"6548683","id":605519800}

/***/ })

});
//# sourceMappingURL=1.dc8a2fa4297782d934e6.js.map