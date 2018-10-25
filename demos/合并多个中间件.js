/**
 * 中间件的合成:
 * koa-compose模块可以将多个中间件合成为一个
*/
const Koa = require("koa")
const fs = require("fs.promised")
const compose=require("koa-compose")

const app = new Koa()


const logger = (ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    next();
}
// const main = async function (ctx,next) {
//     ctx.response.type = 'html'
//     ctx.response.body = await fs.readFile("./demos/1.html")//fs.readFile是一个异步操作，必须写成await fs.readFile()，然后中间件必须写成 async 函数。
// }  /／为什么写成异步的就不行了？？？？？
const main =( ctx,next )=> {
    ctx.response.body = 'Hello World';
    next()
};

const middlewares=compose([logger,main])// 合并多个中间件为一个

app.use(middlewares)
app.listen(3030,()=>{
    console.log("hello koa")
})