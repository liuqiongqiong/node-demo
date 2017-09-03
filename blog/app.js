//启动入口页
//加载express模块
var express = require('express')


//加载模块处理模块
var swig = require('swig')

//创建app应用 =》NodeJs Http.createServer
var app = express();

//设置静态文件托管
//当用户访问的url以/public(自定义的名称)开始,那么直接返回对应的__dirname+/public下的文件
app.use('/public', express.static(__dirname + '/public'))

/*
配置应用模板
定义当前应用所使用的模板引擎
第一个参数；模板引擎的名称，同时也是模板文件的后缀
第二个参数；用于解析处理模板内容的方法
 */
app.engine('html', swig.renderFile)

/*
设置模板文件存放的目录
第一个参数：必须是views
第二个参数：是目录
 */
app.set('views', './views')
/*
注册所使用的模板引擎，
第一个参数：必须是view engine
第二个参数：和app.engine这个方法中定义的模板引擎的名称(第一个参数)一致
 */
app.set('view engine', 'html')
//在开发过程中，需要取消模板缓存
swig.setDefaults({
	cache: false
})

app.get('/', function(req, res, next){
	//res.send('<h1>欢迎</h1>')
	/*
	读取views目录下的指定文件,解析并返回给客户端
	第一个参数：表示模板的文件，相对于views目录 views/index.html
	第二个参数：传递给模板使用的数据
	 */
	res.render('index')
})

app.listen(8081)

/* 
用户发送http请求 -> url -> 解析路由 -> 找到匹配的规则 -> 执行指定的绑定函数, 返回对应内容至用户

/public -> 静态 -> 直接读取指定目录下的文件,返回给用户
->动态 -> 处理业务逻辑,加载模板,解析模板 -> 返回数据给用户
 */