const Koa = require("koa")
const fs = require("fs")
const app = new Koa();

/**
 * context对象
 */
const main = ctx => {
    // demo1
    // ctx.response.body = "hello world,hello zhangyuhong"

    // demo2:Koa 默认的返回类型是text/plain，如果想返回其他类型的内容，可以先用ctx.request.accepts判断一下，客户端希望接受什么数据（根据 HTTP Request 的Accept字段），然后使用ctx.response.type指定返回类型。
    // if(ctx.request.accepts('xml')){
    //     ctx.response.type='xml'
    //     ctx.response.body='<data>hello xml</data>'
    // }else if(ctx.request.accepts='json'){
    //     ctx.response.type='json'
    //     ctx.response.body={data:"hello json"}
    // }else if(ctx.request.accepts='html'){
    //     ctx.response.type='html'
    //     ctx.response.body='<p>hellp html</p>'
    // }else{
    //     ctx.response.type='text'
    //     ctx.response.body='hello text'
    // }

    // demo3:读取网页模版
    // ctx.response.type='html'
    // ctx.response.body=fs.createReadStream("./demos/1.html")//这个路径必须是绝对路径？？？？


    // demo4:原生的路由
    // if(ctx.request.path !== "/"){
    //     ctx.response.type='html'
    //     ctx.response.body='<a href="/">index page</a>'
    // }else{
    //     ctx.response.body='hello zhangyuhong'
    // }

    // demo5:koa-route


}
app.use(main)
app.listen(3030,(error)=>{
    console.log(error)
})