//静态方法

//buffer是否支持某编码  isEncoding
console.log(Buffer.isEncoding('utf-8'))
console.log(Buffer.isEncoding('gbk'))

//是否是buffer对象
var arr =[1,3,4];var b =new Buffer('abc')
console.log( Buffer.isBuffer(arr))
console.log( Buffer.isBuffer(b))

//返回字节长度
var str1= '你好'
console.log(str1.length)
console.log(Buffer.byteLength(str1))

//concat拼接
var a="hello";var b="world";
var list = [new Buffer(a), new Buffer(b)];
console.log(Buffer.concat(list).toString())
