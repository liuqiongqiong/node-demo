//buf.write（要写入的字符串，从buffer对象中的第几位开始写入，写入的字符串长度，编码）

var str = 'hello'
var bf = new Buffer(5)
bf.write(str, 1, 3)
console.log(bf)

//buf.toString(编码，从buffer对象中的I几位开始，结束）;buffer对象直接拼接字符串也可以转换成字符串
var bf2 = new Buffer('hello')
var result = bf2.toString('utf-8', 1, 3)
console.log(result)

var bf3= new Buffer('你好')
var result3 = bf3.toString('utf-8', 1)
console.log(result3)



