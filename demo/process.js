//console.log(module)

//console.log(process)//全局对象
//console.log(process.argv)
//console.log(process.env)
//console.log(process.pid, process.title)
//process.stdout.write('hello')

//全局变量process，有输入stdin 输出stdout方法
//默认情况下，输入流是关闭的，要监听处理输入流数据，首先要开启输入流
process.stdin.resume();
//用于监听用户的输入数据
process.stdin.on('data', function(chunk){
	console.log('你输入了： ' +chunk)
})






