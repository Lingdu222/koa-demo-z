/**
 * 中间件如果有异步操作（比如读取数据库），中间件就必须写成 async 函数。
 */
const Koa = require("koa")
const fs = require("fs.promised")

const app = new Koa()

const main = async function (ctx,next) {
    ctx.response.type = 'html'
    ctx.response.body = await fs.readFile("./demos/1.html")//fs.readFile是一个异步操作，必须写成await fs.readFile()，然后中间件必须写成 async 函数。
}


app.use(main)
app.listen(3030,()=>{
    console.log("hello koa")
})