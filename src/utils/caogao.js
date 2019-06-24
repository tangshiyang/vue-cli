let getInstance = function(fn) {
    let instance = null
    return function() {
        console.log(this)
        instance || (instance = fn.apply(this, arguments))
    }
}
let obj = {
    xxx(name) {
        return name
    }
}


let proxy = getInstance(obj.xxx)
let a = proxy('nihao')





let proxyHttp = function(fn) {
    let instance = null
    return function() {
        clearTimeout(instance)
        instance = setTimeout(function() {
            fn.apply(this, arguments)
        }, 2000)
    }
}

let ajax = function() {
    console.log('hehe')
}

document.addEventListener('click', proxyHttp(ajax))



let ajax = function() {
    console.log('hehe')
}

let pp = function(fn) {
    let instance = null
    return new Proxy(fn, {
        apply(target, context, args) {
            clearTimeout(instance)
            instance = setTimeout(function() {
                fn.apply(this, args)
            }, 2000)
        }
    })
}
document.addEventListener('click', pp(ajax))