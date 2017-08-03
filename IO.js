//阻塞版代码
var fs = require("fs");

var data = fs.readFileSync('dist/input.txt');
console.log(data.toString());
console.log("第一种方式，读取文件结束~~~\n--------------------------------------------");

//非阻塞版代码
var fs2 = require("fs");

fs2.readFile("dist/input.txt", function(err, data) {
    //如果读取出现错误，则输出错误，并且退出方法
    if (err) return console.error(err);
    //如果没有错误，则转换为字符串输出
    console.log(data.toString());
});

console.log("第二种方式，非阻塞代码读取完毕");

//第三种方式演示IO文件输入
var fs3 = require("fs");

fs3.readFile("dist/input.txt", function(err, data) {
    if (err) {
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});
console.log("第三种方式读取完毕，THX\n--------------------------------------------");