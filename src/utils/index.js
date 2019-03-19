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
 * 虚拟代理http合并请求,比如按钮延迟响应，较少服务器压力
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