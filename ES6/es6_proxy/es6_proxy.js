//Proxy可以理解为，在目标对象之前架设一层“拦截”，外界对该对象的访问，都先必须通过这层拦截，因此提供了一种机制。
var obj = new Proxy({}, {
    get: function(target, key, receiver) {
        console.log(`i am getting ${key}`)
        return Reflect.get(target, key, receiver);
    },
    set: function(target, key, value, receiver) {
        console.log(`i am setting ${key}`);
        return Reflect.set(target, key, value, receiver);
    }
});

obj.count = 1;

++obj.count;


//var proxy = new Proxy(target, handler);

var proxy = new Proxy({}, {
    get: function(target, projecty) {
        return 19930620;
    }
});
//get方法用来拦截目标对象树形的访问请求。get方法的两个参数分别是  目标对象  和  所要访问的属性。
//拦截到的总是19930620，所以访问任何属性都会返回19930620
console.log(proxy.time);

console.log(proxy.name);

console.log(proxy.title);

//如果handler 若果没有设置任何拦截，那就相当于直接访问原对象
var target = {};

var handler = {};

var proxy = new Proxy(target, handler);

proxy.a = 'b';

console.log(proxy.a); //预计输出 b

//Proxy 实例作为其他对象的原型，当在对象上没有访问到的属性，则也会向上查找(向proxy上查找)
var object = { proxy: new Proxy(target, handler) };

var proxy = new Proxy({}, {
    get: function(target, propety) {
        return 19930620;
    }
});

//let obj = Object.create(proxy);
console.log(obj.time);

var handler = {
    get: function(target, name) {
        if (name === 'prototype') {
            return Object.prototype;
        }
        return 'Hello,' + name;
    },
    apply: function(target, thisBinding, args) {
        return args[0];
    },

    construct: function(target, args) {
        return { value: args[1] };
    }
};

var fproxy = new Proxy(function(target, args) {
    return x + y;
}, handler);


console.log(fproxy(1, 2));

console.log(new fproxy(1, 2));

fproxy.prototype === Object.prototype;

console.log(fproxy.foo);