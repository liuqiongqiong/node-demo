//toJSON
var bf= new Buffer('hello')
console.log(bf.toJSON())

//slice(star, end)  修改切片的数据也会影响原来的buffer对象
console.log(bf)
var bf_new = bf.slice(1,4)
console.log(bf_new)

bf_new[0] = 2;
console.log(bf_new, bf)

//copy(sr,targetStart, SourceStart,SouceEnd) 修改新的拷贝对象就不会影响原对象
var bf2 = new Buffer(10)
// bf.copy(bf2) //将bf拷贝到bf2
// console.log('bf2: ', bf2)

bf.copy(bf2, 1, 1, 3)//从新对象中的第一位，拷贝原对象的第一位到第三位，不包含第三位
console.log(bf2, bf)
