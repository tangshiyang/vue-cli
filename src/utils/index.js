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
 */
(function(){
 function Person(name,age){
     this.name = name;
     this.age = age;
     this.sayHello = function(){
         console.log(this.name + "say hello");
     }
 }
 var girl = new Person("bella",23);
 console.log(girl.name);  //bella
 console.log(girl.constructor === Person)  //true
 console.log(Person.prototype.constructor === Person)  //true
 console.log(girl.__proto__ === Person.prototype)  //true
 console.log(girl.__proto__.__proto__ === Object.prototype)  //true
 console.log(girl.__proto__.__proto__.__proto__ === null)  //true
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
*/

/**
 * mvc/mvp/mvvm
 */


/**
 * this指针问题
 * 箭头函数中的this指向的是外层代码块中的this；而不是指向定义函数所在的对象
 * 绑定优先级：
 * new绑定 > 硬绑定（call/apply/bind） > 隐式绑定（obj.fn()） > 默认绑定（window）
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
