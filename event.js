// 首先引入 events 模块
var events = require('events');
//再者创建 eventEmitter对象
var eventEmitter = new events.EventEmitter();


//创建事件处理程序，即事件被触发后，用于处理事件的方法
var connectHandler = function connected() {
    console.log('连接成功');

    //手动触发 data_received 事件
    eventEmitter.emit('data_received');

}

//绑定 connection  事件处理程序
eventEmitter.on('connection', connectHandler);

//使用匿名函数绑定在data_received事件上
eventEmitter.on('data_received', function() {
    console.log('数据接收成功。');

});

//触发  connection 事件
eventEmitter.emit('connection');

console.log('程序执行完毕');