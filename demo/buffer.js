//Buffer 长度不可修改
var bf = new Buffer("hello");
for(var i=0; i<bf.length; i++){ 
	console.log(String.fromCharCode(bf[i]))
}


 //bf.length字节的长度
var str1="hello";
var bf1 =new Buffer(str1);
console.log(str1.length, bf1.length)

var str2="你好";
var bf2 =new Buffer(str2);
console.log(str2.length, bf2.length)










