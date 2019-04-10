/**
 * 单例模式
 */
(function() {
    function Single(name) {
        this.name = name
        this.getName = function() {
            this.name
        }
    }
    
    let getInstance = (function() {
        let instance = null
        return function(name) {
            if(!instance) {
                instance = new Single(name)
            }
            return instance
        }
    })()
    
    let aa = getInstance('aa')
    let bb = getInstance('bb')
    
    console.log(aa === bb)
})()

/**
 * 单例模式+代理模式
 */
(function(){
    function creditDiv(name,age) {
        let div = document.createElement('div')
        div.innerHTML = name + age
        div.style.width = '120px'
        div.style.backgroundColor = '#580973'
        document.body.appendChild(div)
        return div
    }

    let getInstance = function(fn) {
        let instance = null
        return function() {
            return  instance || (instance = fn.apply(this,arguments))
        }
    }

    let creditDivProxy = getInstance(creditDiv)

    creditDivProxy('fuck',14)
    creditDivProxy('操',22)
})()

/**
 * 使用代理模式来做图片预加载
 */
(function(){

    let myImage = (function() {
        let img = document.createElement('img')
        document.body.appendChild(img)
        return {
            setSrc: function(src) {
                img.src = src
            }
        }
    })()

    let proxyImage = (function() {
        let img = new Image()
        img.onload = function() {
            myImage.setSrc(this.src)
        }
        return {
            setSrc: function(src) {
                myImage.setSrc('http://img.lanrentuku.com/img/allimg/1212/5-121204193Q9-50.gif')
                img.src = src
            }
        }
    })()

    proxyImage.setSrc('https://img.alicdn.com/tps/i4/TB1b_neLXXXXXcoXFXXc8PZ9XXX-130-200.png')

})()

/**
 * 防抖与节流:
 * 防抖是将多次执行变为最后一次执行（比如搜索框），节流是将多次执行变为在规定时间内只执行一次（比如滚动加载）
 */

/**
 * 虚拟代理http合并请求,比如按钮延迟响应，较少服务器压力（防抖）
 */
(function() {
    let createButton = function() {
        document.addEventListener('click',proxyHttp(ajaxFn))
    }

    let ajaxFn = function() {
        // ajax
        console.log('jjj')
    }

    let proxyHttp = function(fn) {
        let instance = null
        return function() {
            clearTimeout(instance)
            instance = setTimeout(function() {
                fn.apply(this,arguments)
            },2000)
        }
    }
    createButton()
})()

/**
 * 虚拟代理http合并请求,比如按钮延迟响应，较少服务器压力（节流）
 */
(function() {
    let createButton = function() {
        document.addEventListener('click',proxyHttp(ajaxFn))
    }

    let ajaxFn = function() {
        // ajax
        console.log('jjj')
    }

    let proxyHttp = function(fn) {
        let instance = null
        return function() {
            if(!instance) {
                instance = setTimeout(function() {
                    instance = null
                    fn.apply(this,arguments)
                },2000)
            }
        }
    }
    createButton()
})()

/**
 * 缓存代理
 */
(function() {
    let add = function() {
        let sum = 0
        return Array.prototype.reduce.call(arguments,function(sum, item) {
            sum = sum + item
            return sum
        })
    }

    let proxyCache = function(fn) {
        let cache = {}
        return function() {
            let args = Array.prototype.join.call(arguments, ',')
            return cache[args] || (cache[args] = fn.apply(this, arguments))
        }
    }

    let addFn = proxyCache(add)

    console.log(addFn(1,2,4,5))
})()


/**
 * 构造函数和原型对象
 * 原型链的图在手机里，很直观
 */
(function(){
 function Person(name,age){
     this.name = name;
     this.age = age;
     this.sayHello = function(){
         console.log(this.name + "say hello");
     }
 }
 var person = new Person("bella",23);
 function Girl(sex){
    this.sex = sex
 }
 // 继承
 Girl.prototype = Person.prototype
 Girl.prototype.constructor = Girl
 console.log(person.name);  //bella
 console.log(person.constructor === Person)  //true
 console.log(Person.prototype.constructor === Person)  //true
 console.log(person.__proto__ === Person.prototype)  //true
 console.log(person.__proto__.__proto__ === Object.prototype)  //true
 console.log(person.__proto__.__proto__.__proto__ === null)  //true
})()

/**
 * 策略模式--策略模式指的是定义一系列的算法，并且把它们封装起来，但是策略模式不仅仅只封装算法，我们还可以对用来封装一系列的业务规则，只要这些业务规则目标一致，我们就可以使用策略模式来封装它们
 */
(function() {
    let obj = {
        'A': function(num) {
            return num * 4
        },
        'B': function(num) {
            return num * 3
        },
        'C': function(num) {
            return num * 2
        }
    }

    let celv = function(leave,num) {
        return obj[leave](num)
    }

    console.log(celv('A', 30000))
})()

/**
 * 策略模式在表单验证中应用
 */
(function() {
    let strages = {
        isNotEmpty: function(value, errorMsg) {
            if(value === '' ) {
                return errorMsg
            }
        },
        validMobile: function(value, errorMsg) {
            if(!/^1\d{10}$/.test(value)) {
                return errorMsg
            }
        }
    }

    let Validator = function() {
        this.cache = []
        this.add = function(dom, rule, errorMsg) {
            this.cache.push(function() {
                strages[rule].call(dom, dom.value, errorMsg)
            })
        }
        this.start = function() {
            let errorMsg
            for(let i=0,len=this.cache.length;i<len;i++) {
                if(this.cache[i]()) {
                    errorMsg = this.cache[i]()
                    return
                }
            }
            return errorMsg
        }
    }

    let validatorFun = function(form) {
        let validator = new Validator()
        // 这里添加规则
        validator.add(form.userName, 'isNotEmpty', '用户名不能为空')
        validator.add(form.mobile, 'validMobile', '请填写正确的手机号')
        validator.add(form.address, 'isNotEmpty', '地址不能为空')
        return validator.start()
    }

    let registerForm = document.getElementById('registerForm')
    registerForm.onsubmit = function() {
        let errorMsg = validatorFun(registerForm)
        if(errorMsg) {
            alert(errorMsg)
            return
        }
        // 下面是校验通过的代码
    }

})()

/**
 * 发布-订阅模式（观察者模式）
 * vue组件通信中的bus就是观察者
 */
(function() {
    // 封装成一个对象
    let Event = (function() {
        let list = {}, listen, trigger, remove

        listen = function(key, fn) {
            if(!list[key]) {
                list[key] = []
            }
            list[key].push(fn)
        }
        trigger = function() {
            let key = Array.prototype.shift.apply(arguments)
            let fns = list[key]
            if(!fns || fns.length === 0) {
                return false
            }
            fns.forEach(fn => {
                fn.apply(this,arguments)
            })
        }
        remove = function(key, fn) {
            let fns = list[key]
            if(!list[key]) {
                return false
            }
            if(!fn) {
                fns && (fns.length = 0)
            }
            fns.forEach((_fn, index) => {
                if(_fn === fn) {
                    list.splice(index,1)
                }
            })
        }

        return {
            listen,
            trigger,
            remove
        }
    })()

    // 使得响应对象有发布和订阅功能
    for(let i in Event){
        window[i] = Event[i]
    }

    window.listen('tip',fn1 = function(msg) {
        alert(msg)
    })

    // window.remove('tip', fn1)

    document.addEventListener('click',function() {
        window.trigger('tip', '你好')
    })
})()

/**
 * 装饰者模式
 */
(function() {
    Function.prototype.after = function(fn) {
        let _self = this
        return function() {
            let ret = _self.apply(this, arguments)
            fn.apply(this, arguments)
            return ret
        }
    }

    let showTip = function() {
        console.log('showTip:',this)
    }

    let log = function() {
        console.log('log:',this)
    }

    showTip = showTip.after(log)

    document.onclick = showTip
})()

/**
 * 迭代器模式
 */
(function() {
    let arr = [9,4,8,5]
    Array.prototype.kanEvery = function(fn) {
        for(let i = 0,len = this.length;i < len; i++) {
            let item = this[i]
            let index = i
            fn.call(this, item, index)
        }
    }
    arr.kanEvery(function(item, index) {
        console.log(item,index);
    })
})()

/**
 * 适配器模式
 */
(function() {
    var googleMap = { 
        show: function(){
            console.log( '开始渲染谷歌地图' ); 
        }
    };
    var baiduMap = {
        display: function(){
            console.log( '开始渲染百度地图' ); 
        }
    };
    var baiduMapAdapter = {
        show: function(){
            return baiduMap.display();
        } 
    };
    renderMap( googleMap ); // 输出:开始渲染谷歌地图
    renderMap( baiduMapAdapter ); // 输出:开始渲染百度地图
})()

/**
 * vue通信方式：
 * 1.bus（小项目，非父子组件间）
 * 2.vuex（大项目，非父子组件间）
 * 3.props和emit（父子组件）
 * 4.router路由query
 * 5.storage
*/

 /**
  * 数组常用方法
  */


/**
 * 字符串常用方法和正则
 */

/**
 * 圣杯布局
 *   <style>
.container{padding:0 220px 0 200px;}
.middle,.left,.right{
    position:relative;
    float: left;
    min-height: 300px;
}
.middle{background-color: red;width:100%;}
.left{width:200px;background-color: yellow;margin-left:-100%;left:-200px;}
.right{width:220px;background-color: blue;margin-left:-220px;left:220px;}
</style>
*/


/**
* flex布局
*/

/**
* 柯里化
*/

/**
 * git reset revert
 */

/**
 * 高阶函数性能：
 * https://juejin.im/entry/5815876c8ac247004fb6d132
 */

/**
 * xss和csrf攻击
 */


/**
 * http1.1和http2.0
 * 简单请求和非简单请求（options预检请求，非GET/HEAD/POST || 自定义请求头字段  || POST请求的content-type值为application/json）
 * https://blog.csdn.net/z609373067/article/details/78055429
 * SSL/TLS增加安全性
 */

/**
* 状态码 
200  正确返回
204  正确返回，但是没有返回响应体，浏览器不做任何反应
3xx  资源重定向
400  请求报文中有语法错误，服务器无法识别
403  服务器拒绝请求
404  资源未找到
500  一般在执行后端代码时出错
503  服务器挂了
*/

/**
 * mvc/mvp/mvvm
 */


/**
 * this指针问题
 * 箭头函数中的this指向的是外层代码块中的this；而不是指向定义函数所在的对象（箭头函数并没有 this，this 会作为变量一直向上级词法作用域查找，直至找到位置）
 * 绑定优先级：
 * new绑定 > 硬绑定（call/apply/bind） > 隐式绑定（obj.fn()） > 默认绑定（window）
 */

 /**
  * 词法作用域  箭头函数
  * 全局作用域
  * 函数作用域  
  * 块级作用域  let，const（这两个不像var一样有变量提升）
  * 作用域链
  */

/**
 * 主线程/微队列/宏队列
 */

/**
* es6
*/

/**
 * websocket
 */

/**
 * 请求优化：
 * 1.考虑http2.0(多路复用，header头压缩，服务端推送文件<把一些css和js文件名放请求头中，服务器根据这个主动推送css和js文件>，请求优先级)，目前使用的http1.1已经具有长链接  https://juejin.im/entry/5981c5df518825359a2b9476
 * 2.域名分片（不同资源不同域名，减少cookie累赘；因为同一域名并发请求数为4个，多个域名可以增加并发请求书）
 * 3.webpack gzip
 * 
 */


/**
 * eslint
 */


 /**
  * 实现一个new操作符
  */
 (function() {
     function New(fn) {
        let obj = {}
        return function() {
            fn.call(obj,...arguments)
            return obj
        }
     }

     function myFun(name) {
         this.name = name
         this.getName = function() {
            return this.name
         }
     }

     let fuck = New(myFun)('fuck')
 })()

 /**
  * 深拷贝
  */
 (function() {
     function isJSON(data) {
        return typeof data === 'object' && data !==null && data.constructor === Object
     }
     function isArray(data) {
        return Object.prototype.toString.call(data) === '[object Array]'
     }
     function isBaseType(data) {
        return typeof data === 'number' || typeof data === 'boolean' || typeof data === 'string'
     }
     function myStringify(data) {
        let obj
        if((isJSON(data) && (obj = {})) || (isArray(data) && (obj = []))) {
            console.log('tag1')
            for(let key in data) {
                if(isJSON(data[key]) || isArray(data[key])) {
                    obj[key] = myStringify(data[key])
                    continue
                }
                if(isBaseType(obj[key]) || obj[key] === null || obj[key] === undefined) {
                    obj[key] = data[key]
                    continue
                }
            }
        }
        if(isBaseType(data) || data === null || data === undefined) {
            obj = data
        }
        return obj
     }

     let hello = {
         name: 'zhangsan',
         age: 24,
         dcri: undefined,
         arr: [1,{'game':44}]
     }

     let copyHello = myStringify(hello)

     console.log(copyHello)
 })()

 /**
  * 实现一个call或apply
  */
 (function() {
     Function.prototype.myCall = function(obj, ...args) {
        var _self = this
        _self.bind(obj)(...args)
     }

     function Person(name) {
         this.name = name
     }

     let obj = {}

     Person.myCall(obj,'balabara')

     console.log(obj)
 })()

 /**
  * promise
  */
(function() {
    function random1To100() {
        return Math.ceil(Math.random() * 100)
    }
    let p1 = new Promise(function(resolve, reject) {
        let random = random1To100()
        if(random > 50) {
            resolve(random)
        } else {
            reject(random)
        }
    })
    p1.then(function(value) {
        console.log('成功' + value)
        throw new Error('llllll')
    }).catch(function(e) {
        console.log('error', e)
    })
})()

/**
 * 实现一个instanceof
 * @method
 * @description 验证某个变量是否为某个类型的实例
 * @param {*} left 需要校验的变量
 * @param {string} right 目标类型
 * @returns {boolean} false:不是目标类型的实例，true:是目标类型的实例
 * @example
 * instanceOf([], 'Array')  // 返回true
 * instanceOf(‘hello’, 'Object')  // 返回false
 */
(function() {
    function instanceOf(left, right) {
        let proto = left.__proto__
        let prototype = right.prototype
        while(true) {
            if(proto === prototype) {
                return true
            }
            if(proto === null) {
                return false
            }
            proto = proto.__proto__
        }
    }

    var obj = {
        a: 'a',
        b: 2,
        c: []
    }
    console.log(instanceOf(obj, 'Object'))
    }
)()
/*
 * ajax封装
*/
(function() {
    /**
     * @description 装饰者模式
     * @param {Function} fn 后执行函数
     */
    Function.prototype.after = function(fn) {
        var self = this
        return function() {
            var rest = self.apply(this, arguments)
            fn.apply(this, arguments)
            return rest
        }
    }

    /**
     * @description 节流函数
     * @param {Function} fn 需要节流的操作函数
     */
    var deubles = function(fn) {
        let instance = null
        return function() {
            if(!instance) {
                instance = setTimeout(function() {
                    instance = null
                    fn.apply(this, arguments)
                },1000)
            }
        }
    }

    var log = function() {
        console.log('')
    }

    /**
     * @description post请求
     * @param {Object} post请求的配置
     * @returns {Promise}
     * @example
     * POST({
     *  url: 'http://api.com',
     *  data: {
     *      name: 'zhangsan'
     *  }
     * }).then((res) => {
     *  
     * }).catch((err) => {
     *  
     * })
     */
    var POST = function(config) {
        let {url, data} = config || {}
        return new Promise((resolve, reject) => {
            ajax({
                url,
                method: 'post',
                data,
                sussess: function(res) {
                    resolve(res)
                },
                fail: function(err) {
                    reject(err)
                }
            })
        })
    }

    POST = POST.after(log)

    var appendList = function(data = []) {
        this.list.splice(this.list.length-1, 0, ...data)
    }

    var toastFail = function(e) {
        toast(e.msg)
    }

    var state = {
        loading: false
    }

    var getNews = function(url, data) {
        return POST({
            url, 
            data
        })
    }
    
    var getMoreNews1 = (function() {
        let loading = false
        return function() {
            if(loading === true) {
                return
            }
            loading = true
            POST(arguments).then((res) => {
                loading = false
                appendList(res.data)
            }).catch((err) => {
                loading = false
                toastFail(err)
            })
        }  
    })()

    /**
     * 采用双节流，至少1秒执行一次节流操作，ajax正在请求的时候不重复请求。可以用在滚动加载的场景
     */
    document.getElementById('id1').scroll = deubles(function() {
        getMoreNews1.call(this, {
            url: 'jttp://api.com',
            data: {
                param1: 1
            }
        })
    })

})()

/**
 * cookies/localStorage/sessionStorage/indexDB
 */

 /**
  * web worker处理大量计算
  */


  /**
   * lodash库
   */

 /**
  * vue异步组件 和 code splitting
  */

/**
 * 依赖注入
 */

/**
 * 基本数据类型转换
 * 例如：
 * console.log(1+undefined)   // NaN
 * console.log('1'+undefined)   // 1undefined
 * console.log(1+null)   // 1
 * console.log('1'+null)   // 1null
 * console.log(1+'1')   // 11
 * console.log(1+{})   // 1[object Object],对象调用了toString方法
 */

 /**
  * typeof 1   // number
  * typeof undefined   // undefined
  * typeof null   // object   特殊
  * typeof function(){}   // function
  * typeof []   // object
  * 结论：null比较特殊，function也比较特殊
  */

 /**
  * get post的区别
  * 1.get没有请求体，post通过请求体传参
  * 2.对大小的限制
  * 3.安全性：get可能遭受csrf攻击，地址栏容易被看到重要数据，get可能被浏览器缓存，被其他人看到暴露重要信息
  * 4.最大区别：get请求是幂等性的（同一请求具有相同的副作用），网络不好的网络隧道中容易尝试重连，多次get请求。
  */

  /**
   * 重要的http请求头：
   * Cache-Control：no-cache/max-age=3600  // 用来指定当前的请求/回复中的，是否使用缓存机制。
   * Origin   //发起一个针对跨域资源共享的请求（该请求要求服务器在响应中加入一个Access-Control-Allow-Origin的消息头，表示访问控制所允许的来源）。
   * http响应头：
   * Access-Control-Allow-Origin： // 指定哪些网站可以跨域源资源共享
   * Expires：  // 指定一个日期/时间，超过该时间则认为此回应已经过期
   * Last-Modified	: // 所请求的对象的最后修改日期
   * ETag: // 对于某个资源的某个特定版本的一个标识符，通常是一个 消息散列
   * 缓存总结：对于强制缓存，服务器通知浏览器一个缓存时间，在缓存时间内，下次请求，直接用缓存，不在时间内，执行比较缓存策略。
对于比较缓存，将缓存信息中的Etag和Last-Modified通过请求发送给服务器，由服务器校验，返回304状态码时，浏览器直接使用缓存。
   */

   /**
    * 跨域解决方案：
    * 1.ngnix反向代理，同域名
    * 2.Access-Control-Allow-Origin设置
    * 3.jsonp（只能get请求，主要用户老浏览器，不利于前后端分离）
    */


    /**
     * polyfill：某些浏览器不支持某些api，它填补这些缺失的api，比如某些浏览器不支持localstorage
     * shim：是一个库，他将一个新的api引入到一个旧的环境中，它不光只正对浏览器，也包括nodejs。polyfill是shim的子集
     * babel：只能转义es6语法，比如箭头函数。但是像promise这种新增的api只能用polyfill去做兼容
     * 
     */

     /**
      * 继承
      */


/**
 * for of,
 * for in,
 * forEach,
 * map
 * for in循环遍历的是数组的键值(索引)，而for of循环遍历的是数组的值。
 * for循环能打断，map和forEach不能。
 * map返回新的数组，forEach不会
 * @example
 * var arr = [4,5,6]
 * for (var key in arr) {
 *     console.log(arr[key])
 * }
 * for (var item in arr) {
 *      console.log(item)
 * }
 */


 /**
  * 类数组：不具有数组所具有的方法，比如argumemnts，dom对象列表，比如document.querySelectorAll
  * 类数组转换成数组的方法：
  * 1. Array.from(new Set([1,2,2]))
  * 2. [...new Set([1,2,2])]
  * 3. Array.prototype.slice.call([1,2,2],0)
  */

  /**
   * == 和 ===
   * ==是如何进行类型转换的？
   * null,0,undefined互不相等；除null和undefined外，比较的时候都会向number类型转换再比较
   * @example   
   *    0 == undefined  // false
        0 == null //false
        undefined === null //false
        '' == 0 // true
        '0' == false //true
        另外，[] == ![]
        因为右边![] -> !true -> false -> 0, 左边[] -> 0,所以 0==0
        另外Number([]) -> 0,Number([1]) -> 1, Number([1,2]) -> NaN
   */

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
   
  }
}
</script>