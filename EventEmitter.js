//Nodejs所有的一部I/O操作在完成时候，都会发送一个时间到事件队列

//Nodejs里面的许多对象都会分发事件:一个Net.Server对象会在每次有心联机时候分发一个事件，一个fs.readStream对象会在文件被打开的时候发出一个事件。所有这些产生时间的对象都是event.EventEmitter的实力。


//引入 events 模块
var events = require('events');





//--------------------------------------demo 1--------------------------------------------------
//创建  eventEmitter 对象

var eventEmitter = new events.EventEmitter();

/*EventEmitter 对象如果实例化的时候，发生错误，会触发error事件。当添加新的监听器时，newListener 事件会触发，当监听器被移除的时候，removeListener 事件被触发，当监听器被移除的是偶，
   removeListener事件被触发 */
var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();
//事件的绑定
event.on('some_event', function() {
    console.log('some_event is happened');
});

var i = 0;
var int = setInterval(function() {
    console.log(i++);
}, 200);


//---------------------------------------demo 2-------------------------------------------------
//设定定时器，在一秒后触发some_event
setTimeout(function() {
    event.emit('some_event');
    clearInterval(int);
}, 1000);

//最简单的来说，on用于绑定事件函数，emit树形用于触发事件
var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener2', arg1, arg2);
});

emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener2', arg1, arg2);
});

emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');

//-------------------------------------demo 3---------------------------------------------------

var events = require('events');

var eventEmitter = new events.EventEmitter();

//监听器 #1
var listener1 = function listener1() {
    console.log('监听器 listener1 执行。');
}
var listener2 = function listener2() {
    console.log('监听器 listener2 执行。');
}

//咱们为同一个connection事件绑定两个不同的处理方法
eventEmitter.addListener('connection', listener1);

eventEmitter.addListener('connection', listener2);

//返回绑定在Emitter上的事件数目
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(eventListeners + "个监听器监听连续事件");

//处理 connection 事件
eventEmitter.emit('connection');

//移除绑定的listener1函数
eventEmitter.removeListener("connection", listener1);

console.log("lisntener1 不再受监听。");

//触发连接事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "个监听器监听连接事件");

console.log("程序执行完毕");

//----------------------------------------------手动触发 error---------------------------------------------

var events = require('events');
var emitter = new events.EventEmitter();

emitter.emit('error');






//事件方法汇总
//     1、addListener(event, listener)

//     2、on(event, listener)

//     3、once(event, listener)    为指定事件注册一个单次监听器

//     4、removeListener(event, listener)   移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。

//     5、removeAllListeners([event])   移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。

//     6、setMaxListeners(n)    setMaxListeners 函数用于提高监听器的默认限制的数量。

//     7、 listeners(event)  返回指定事件的监听器数组。

//     8、emit(event, [arg1], [arg2], [...])   按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false。