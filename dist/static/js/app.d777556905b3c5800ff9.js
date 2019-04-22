webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(21)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(29),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-f5e90c2e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__booklist__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__booklist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__booklist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comp__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__comp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compd__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__compd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__list__);





const components = [__WEBPACK_IMPORTED_MODULE_1__booklist___default.a, __WEBPACK_IMPORTED_MODULE_2__comp___default.a, __WEBPACK_IMPORTED_MODULE_3__compd___default.a, __WEBPACK_IMPORTED_MODULE_4__list___default.a
]

components.map(component => {
  __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(component.name, component)
})

/* harmony default export */ __webpack_exports__["default"] = ({
  booklist: __WEBPACK_IMPORTED_MODULE_1__booklist___default.a, comp: __WEBPACK_IMPORTED_MODULE_2__comp___default.a, list: __WEBPACK_IMPORTED_MODULE_4__list___default.a, compd: __WEBPACK_IMPORTED_MODULE_3__compd___default.a
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(20)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(28),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(30);


const compLoad = (name) => (resolve) => __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(37)(`./${name}`)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
const viewLoad = (name) => (resolve) => __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(38)(`./${name}`)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */])

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [
    {
      path: '/',
      name: 'default',
      component: viewLoad('index')
    },
    {
      path: '/index',
      name: 'index',
      component: viewLoad('index')
    },
    {
      path: '/booklist',
      name: 'booklist',
      component: compLoad('booklist')
    },
    {
      path: '/bookDetail/:id',
      name: 'bookDetail',
      component: compLoad('bookDetail')
    },
    {
      path: '/login',
      name: 'login',
      component: viewLoad('login')
    },
    {
      path: '/myinfo',
      name: 'myinfo',
      component: viewLoad('myinfo')
    },
  
    {
      path: '/compDemo',
      name: 'compDemo',
      component: viewLoad('compDemo')
    },
    {
      path: '*',
      name: 'p404',
      component: viewLoad('p404')
    }
  ]
}));


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__api_js__);


__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */])



/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state: {
        loginname: localStorage.getItem('loginname')?localStorage.getItem('loginname'):'xxx',
        count: '0',
        token:localStorage.getItem('token')?localStorage.getItem('token'): '',

    },
    mutations: {
        loginOut(state, payload) {
            localStorage.removeItem('loginname');
            localStorage.removeItem('token');
            state.loginname = 'xxx';
            state.accesstoken = '';
        },
        loginIn(state, loginmsg) {
            localStorage.setItem('loginname', loginmsg.loginname);
            localStorage.setItem('token', loginmsg.token);
            state.loginname = loginmsg.loginname;
            state.token = loginmsg.token;
        },
        
    },
    getters: {
            namelen:state=>{ return state.loginname.length;}
    },
    actions: {
        getUnreadMessages({ commit, state }, payload) {
            __WEBPACK_IMPORTED_MODULE_2__api_js___default.a.getUnreadMessages({
                accesstoken: payload.accesstoken
            })
                .then((res) => {
                    let result = res['data'];
                    if (result.success) {
                        commit('updateMessage', { messageCount: result.data })
                    }
                })
        }
    }
}));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(19)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(27),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2f5dace1",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(18)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(26),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1f3c03cb",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(17)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(25),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0df3c810",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 11 */,
/* 12 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_booklist_json__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_booklist_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__data_booklist_json__);
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
  name: 'booklist',
  data() {
    return {
      booklist: __WEBPACK_IMPORTED_MODULE_0__data_booklist_json___default.a.books
    };
  }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'comp',
  props: ['message', 'mySize'],
  methods: {
    adddata() {

      var item = {
        id: 1,
        message: "hello"
      };
      bus.$emit('updata', item);
    }

  },
  data() {

    return {};
  }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'compd',
  mounted() {
    bus.$on('updata', data => {
      console.log(data);
    });
  },
  props: ['message', 'mySize'],
  methods: {
    adddata() {

      var item = {
        id: 1,
        message: "hello"
      };
      this.$emit('updata', item);
    },
    changedata() {

      //  that.message='ascf'

    }
  },
  data() {

    return {};
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comp__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__comp__);
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
  name: 'list',
  comments: [__WEBPACK_IMPORTED_MODULE_0__comp___default.a],
  methods: {

    updatedata: function (data) {

      this.list.push(data);
    },

    update: function () {
      var dataitem = {
        id: 1,
        message: "hello", size: 5
      };
      this.list.push(dataitem);
    },
    deletedata: function () {
      this.list.pop();
    }

  },
  // props: ['list'],
  data() {
    return {

      item: {
        id: 1,
        message: "hello",
        size: 1
      },
      list: [{
        id: 1,
        message: "hello",
        size: 1
      }, {
        id: 2,
        message: "world",
        size: 155
      }]

    };
  }
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "demo"
    }
  }, [_vm._l((_vm.list), function(item) {
    return _c('li', {
      key: item.id
    }, [_vm._v("\n    " + _vm._s(item.id) + ":"), _c('comp', {
      attrs: {
        "message": item.message,
        "my-size": item.size
      },
      on: {
        "updata": _vm.updatedata
      }
    })], 1)
  }), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.update
    }
  }, [_vm._v("添加数据")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.deletedata
    }
  }, [_vm._v("删除数据")])], 2)
},staticRenderFns: []}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_vm._v(_vm._s(_vm.message) + _vm._s(_vm.mySize))])
},staticRenderFns: []}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h2', [_vm._v("书单列表")]), _vm._v(" "), _c('ul', {
    staticClass: "m-booklist"
  }, _vm._l((_vm.booklist), function(book) {
    return _c('li', {
      key: book.id
    }, [_c('router-link', {
      attrs: {
        "to": '/bookDetail/' + book.id
      }
    }, [_vm._v(" " + _vm._s(book.id) + _vm._s(book.pubdate))])], 1)
  }), 0)])
},staticRenderFns: []}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_vm._v(_vm._s(_vm.message) + _vm._s(_vm.mySize)), _c('button', {
    on: {
      "click": _vm.adddata
    }
  }, [_vm._v("添加数据")])])
},staticRenderFns: []}

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports) {

module.exports = {"count":10,"start":1,"total":98,"books":[{"rating":{"max":10,"numRaters":1,"average":"0.0","min":0},"subtitle":"","author":["Ulmer, Wendy/ Knorr, Laura (ILT)"],"pubdate":"2007-12","tags":[{"count":1,"name":"繪本","title":"繪本"}],"origin_title":"","image":"https://img3.doubanio.com/mpic/s5564651.jpg","binding":"","translator":[],"catalog":"","pages":"","images":{"small":"https://img3.doubanio.com/spic/s5564651.jpg","large":"https://img3.doubanio.com/lpic/s5564651.jpg","medium":"https://img3.doubanio.com/mpic/s5564651.jpg"},"alt":"https://book.douban.com/subject/4371678/","id":"4371678","publisher":"","isbn10":"1585363197","isbn13":"9781585363193","title":"\"A\" Isn't for Fox","url":"https://api.douban.com/v2/book/4371678","alt_title":"","author_intro":"","summary":"Experts know that sometimes the best way to teach a child what something is is to teach him what it isn't. Educator Wendy Ulmer applies that principle in her jaunty, out-of-the-box alphabet A isn't for Fox: An Isn't Alphabet. Running through the alphabet, beginning readers are given a letter and then told what the letter topic isn't. A isn't for box; it isn't for fox. A is for ants that crawl over your socks. Laura Knorr's colorful, engaging artwork perfectly captures the wit and whimsy behind the alphabet that isn't what it seems but is so much more","price":"$ 19.15"},{"rating":{"max":10,"numRaters":0,"average":"0.0","min":0},"subtitle":"","author":["Jane Belk Moncure"],"pubdate":"2001-1","tags":[{"count":1,"name":"认知","title":"认知"},{"count":1,"name":"英文","title":"英文"},{"count":1,"name":"图书馆","title":"图书馆"}],"origin_title":"","image":"https://img3.doubanio.com/mpic/s11286372.jpg","binding":"","translator":[],"catalog":"","pages":"29","images":{"small":"https://img3.doubanio.com/spic/s11286372.jpg","large":"https://img3.doubanio.com/lpic/s11286372.jpg","medium":"https://img3.doubanio.com/mpic/s11286372.jpg"},"alt":"https://book.douban.com/subject/3702390/","id":"3702390","publisher":"","isbn10":"0717265005","isbn13":"9780717265008","title":"My \"a\" book My first steps to reading","url":"https://api.douban.com/v2/book/3702390","alt_title":"","author_intro":"","summary":"Little a fills his box with things beginning with the letter \"a\" and is treated to a ride by an astronaut.","price":"0.00"},{"rating":{"max":10,"numRaters":1,"average":"0.0","min":0},"subtitle":"","author":["Etnier, Jennifer L./ Alderman, Dominy (ILT)"],"pubdate":"2009-12","tags":[{"count":1,"name":"seld","title":"seld"},{"count":1,"name":"improvment","title":"improvment"}],"origin_title":"","image":"https://img3.doubanio.com/mpic/s4870703.jpg","binding":"","translator":[],"catalog":"","pages":"232","images":{"small":"https://img3.doubanio.com/spic/s4870703.jpg","large":"https://img3.doubanio.com/lpic/s4870703.jpg","medium":"https://img3.doubanio.com/mpic/s4870703.jpg"},"alt":"https://book.douban.com/subject/4581079/","id":"4581079","publisher":"","isbn10":"0807859907","isbn13":"9780807859902","title":"Bring Your \"A\" Game","url":"https://api.douban.com/v2/book/4581079","alt_title":"","author_intro":"","summary":"Mental training is just as important as physical training when it comes to success in sport. And like physical fitness, mental toughness is something that can be taught and learned. Yet many young athletes have not learned the psychological skills needed to develop their best game. This book was written specifically for young athletes interested in improving their performance and reaching their potential in sport. \"Bring Your aAa Game\"introduces key strategies for mental training, such as goal setting, pre-performance routines, confidence building, and imagery. Each of the seventeen chapters focuses on a single mental skill and offers key points and exercises designed to reinforce the concepts. The book encourages athletes to incorporate these mental skills into their daily lives and practice sessions so that they become second nature during competition. Whether used at home by student athletes or assigned by coaches as part of team development, \"Bring Your aAa Game\" will help young performers develop a plan for success and learn to deal with the challenges of pursuing excellence in sport.","price":"$ 21.47"},{"rating":{"max":10,"numRaters":0,"average":"0.0","min":0},"subtitle":"","author":["Marian Picton"],"pubdate":"","tags":[],"origin_title":"","image":"https://img1.doubanio.com/f/shire/5522dd1f5b742d1e1394a17f44d590646b63871d/pics/book-default-medium.gif","binding":"","translator":[],"catalog":"","pages":"","images":{"small":"https://img1.doubanio.com/f/shire/9ec0301cff99c866e9b4f386743f612d594f1836/pics/book-default-small.gif","large":"https://img3.doubanio.com/f/shire/5522dd1f5b742d1e1394a17f44d590646b63871d/pics/book-default-large.gif","medium":"https://img1.doubanio.com/f/shire/5522dd1f5b742d1e1394a17f44d590646b63871d/pics/book-default-medium.gif"},"alt":"https://book.douban.com/subject/17816122/","id":"17816122","publisher":"","isbn10":"1853564036","isbn13":"9781853564031","title":"&quot;A&quot; Level English Language and Literature","url":"https://api.douban.com/v2/book/17816122","alt_title":"","author_intro":"","summary":"","price":""},{"rating":{"max":10,"numRaters":0,"average":"0.0","min":0},"subtitle":"","author":["Andrea Rose"],"pubdate":"","tags":[],"origin_title":"","image":"https://img1.doubanio.com/f/shire/5522dd1f5b742d1e1394a17f44d590646b63871d/pics/book-default-medium.gif","binding":"","translator":[],"catalog":"","pages":"","images":{"small":"https://img1.doubanio.com/f/shire/9ec0301cff99c866e9b4f386743f612d594f1836/pics/book-default-small.gif","large":"https://img3.doubanio.com/f/shire/5522dd1f5b742d1e1394a17f44d590646b63871d/pics/book-default-large.gif","medium":"https://img1.doubanio.com/f/shire/5522dd1f5b742d1e1394a17f44d590646b63871d/pics/book-default-medium.gif"},"alt":"https://book.douban.com/subject/17818780/","id":"17818780","publisher":"","isbn10":"1854440241","isbn13":"9781854440242","title":"&quot;&quot;The Germ&quot;","url":"https://api.douban.com/v2/book/17818780","alt_title":"","author_intro":"","summary":"","price":""},{"rating":{"max":10,"numRaters":0,"average":"0.0","min":0},"subtitle":"","author":["Dimsdale, Thomas"],"pubdate":"","tags":[],"origin_title":"","image":"https://img3.doubanio.com/mpic/s6723465.jpg","binding":"","translator":[],"catalog":"","pages":"150","images":{"small":"https://img3.doubanio.com/spic/s6723465.jpg","large":"https://img3.doubanio.com/lpic/s6723465.jpg","medium":"https://img3.doubanio.com/mpic/s6723465.jpg"},"alt":"https://book.douban.com/subject/6661267/","id":"6661267","publisher":"","isbn10":"1171005865","isbn13":"9781171005865","title":"Observations on the Introduction to the Plan of the Dispensary for General Inoculation with Remarks on a Pamphlet, Entitled, \"\"An Examination of a Cha","url":"https://api.douban.com/v2/book/6661267","alt_title":"","author_intro":"","summary":"","price":"$ 24.58"},{"rating":{"max":10,"numRaters":0,"average":"0.0","min":0},"subtitle":"","author":["Multiple Contributors"],"pubdate":"2010-9","tags":[],"origin_title":"","image":"https://img1.doubanio.com/mpic/s10448409.jpg","binding":"","translator":[],"catalog":"","pages":"70","images":{"small":"https://img1.doubanio.com/spic/s10448409.jpg","large":"https://img1.doubanio.com/lpic/s10448409.jpg","medium":"https://img1.doubanio.com/mpic/s10448409.jpg"},"alt":"https://book.douban.com/subject/10836542/","id":"10836542","publisher":"","isbn10":"0699108322","isbn13":"9780699108324","title":"An Abstract of Some Important Parts of a Bill, Now Depending in Parliament, Intituled, \"\"A Bill for the Better Support and Maintenance of the Poor.\"\" Prepared by a Committee of the Joint Vestry of the United Parishes","url":"https://api.douban.com/v2/book/10836542","alt_title":"","author_intro":"","summary":"","price":"$ 20.06"},{"rating":{"max":10,"numRaters":0,"average":"0.0","min":0},"subtitle":"","author":["Multiple Contributors"],"pubdate":"2010-9","tags":[],"origin_title":"","image":"https://img3.doubanio.com/mpic/s10448435.jpg","binding":"","translator":[],"catalog":"","pages":"66","images":{"small":"https://img3.doubanio.com/spic/s10448435.jpg","large":"https://img3.doubanio.com/lpic/s10448435.jpg","medium":"https://img3.doubanio.com/mpic/s10448435.jpg"},"alt":"https://book.douban.com/subject/10836572/","id":"10836572","publisher":"","isbn10":"0699110416","isbn13":"9780699110419","title":"History of the Four Last Elections for the County of Suffolk to Which Is Added a PostScript, Relative to MR Sawbridge's Intended Motion \"\"For Shortening the Duration of Parliaments","url":"https://api.douban.com/v2/book/10836572","alt_title":"","author_intro":"","summary":"","price":"$ 20.06"},{"rating":{"max":10,"numRaters":0,"average":"0.0","min":0},"subtitle":"","author":["Multiple Contributors"],"pubdate":"2010-9","tags":[],"origin_title":"","image":"https://img1.doubanio.com/mpic/s10448528.jpg","binding":"","translator":[],"catalog":"","pages":"46","images":{"small":"https://img1.doubanio.com/spic/s10448528.jpg","large":"https://img1.doubanio.com/lpic/s10448528.jpg","medium":"https://img1.doubanio.com/mpic/s10448528.jpg"},"alt":"https://book.douban.com/subject/10836663/","id":"10836663","publisher":"","isbn10":"0699117852","isbn13":"9780699117852","title":"A Short State of the Proceedings in the House of Commons, in the Year 1765, on the Petition of the Duke and Duchess of Atholl, Against the Bill, \"\"For the More Effectual Preventing the Mischiefs ... Isle of Man.\"\"","url":"https://api.douban.com/v2/book/10836663","alt_title":"","author_intro":"","summary":"","price":"$ 17.80"},{"rating":{"max":10,"numRaters":0,"average":"0.0","min":0},"subtitle":"","author":["Multiple Contributors"],"pubdate":"2010-9","tags":[],"origin_title":"","image":"https://img3.doubanio.com/mpic/s10448724.jpg","binding":"","translator":[],"catalog":"","pages":"26","images":{"small":"https://img3.doubanio.com/spic/s10448724.jpg","large":"https://img3.doubanio.com/lpic/s10448724.jpg","medium":"https://img3.doubanio.com/mpic/s10448724.jpg"},"alt":"https://book.douban.com/subject/10836855/","id":"10836855","publisher":"","isbn10":"0699132916","isbn13":"9780699132916","title":"Uggeshall Inclosure. a State of the Claims, Delivered to the Commissioners Named and Authorised, in and by an Act of Parliament Entitled \"\"An ACT for Dividing and Inclosing the Heaths","url":"https://api.douban.com/v2/book/10836855","alt_title":"","author_intro":"","summary":"","price":"$ 16.67"}]}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(7);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




__webpack_require__(4)

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
})

window.bus = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]()


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/* import axios from 'axios'
import qs from 'qs'
axios.defaults.baseURL = 'https://cnodejs.org/api/v1';
export default {
    getTopics(params) {
        return axios.get(`/topics?tab=${params.tab}&page=${params.page}&limit=${params.limit}&mdrender=${params.mdrender}`)
    },
    getTopic(params) {
        return axios.get(`/topic/${params.accesstoken}?mdrender=${params.mdrender}`)
    },
    createTopic(params) {
        return axios.post(`/topics`, params)
    },
    updateTopic(params) {
        return axios.post(`/topics/update`, params)
    },
    collectTopic(params) {
        return axios.post(`/topic_collect/collect`, params)
    },
    deCollectTopic(params) {
        return axios.post(`/topic_collect/de_collect`, params)
    },
    getCollectTopics(params) {
        return axios.get(`/topic_collect/${params.loginname}`)
    },
    createReply(params) {
        return axios.post(`/topic/${params.topic_id}/replies`, params)
    },
    upReply(params) {
        return axios.post(`/reply/${params.reply_id}/ups`, params)
    },
    getUser(params) {
        return axios.get(`/user/${params.loginname}`)
    },
    checkAccessToken(params) {
        return axios.post(`/accesstoken`, params)
    },
    getUnreadMessages(params) {
        return axios.get(`/message/count?accesstoken=${params.accesstoken}`)
    },
    getMessages(params) {
        return axios.get(`/messages?accesstoken=${params.accesstoken}&mdrender=${params.mdrender}`)
    },
    remarkTopic(params) {
        return axios.post(`/message/mark_all`, params)
    },
    remarkTopic(params) {
        return axios.post(`/message/mark_all`, params)
    }

}
 */

/***/ })
],[33]);
//# sourceMappingURL=app.d777556905b3c5800ff9.js.map