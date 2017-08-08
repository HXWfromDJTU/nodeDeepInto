//三种创建Buffer实例的方法
var buf1 = new Buffer(10);

var buf2 = new Buffer([10, 20, 30, 40, 50]);

var buf3 = new Buffer("wongxuanwei.github.io", "utf-8");



buf = new Buffer(256);
len = buf.write("wongxuanwei.github.io");

console.log("写入字节数" + len);