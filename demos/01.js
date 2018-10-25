/**
 * 迄今为止，所有例子的中间件都是同步的，不包含异步操作。如果有异步操作（比如读取数据库），中间件就必须写成 async 函数。
 * 
 */

const Koa=require("koa")
const app=new Koa()

app.listen(3030,()=>{
    console.log("hello koa")
})