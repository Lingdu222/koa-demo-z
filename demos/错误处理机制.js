/**
 * 错误处理
*/
const Koa = require("koa")
const fs = require("fs.promised")
const compose=require("koa-compose")

const app = new Koa()

// Koa 提供了ctx.throw()方法，用来抛出错误，ctx.throw(500)就是抛出500错误
const main =( ctx,next )=> {
    ctx.throw(500);
    next()
};


// demo1:将ctx.response.status设置成404，就相当于ctx.throw(404)，返回404错误。
// const main2 = (ctx,next)=> {
//     // ctx.throw(500);
//     ctx.response.status=404
//     ctx.response.body = 'Page Not Found';
// };


// demo2:为了方便处理错误，最好使用try...catch将其捕获。但是，为每个中间件都写try...catch太麻烦，我们可以让最外层的中间件，负责所有中间件的错误处理
// const handler = async(ctx,next)=>{
//     try{
//         await next()
//     } catch(err){
//         ctx.response.status= err.statusCode || err.status || 500;
//         ctx.response.body={
//             message:err.message
//         }
//     }
// }

// demo3:需要注意的是，如果错误被try...catch捕获，就不会触发error事件。这时，必须调用ctx.app.emit()，手动释放error事件，才能让监听函数生效。
// const handler = async(ctx,next)=>{
//     try{
//         await next()
//     } catch(err){
//         ctx.response.status= err.statusCode || err.status || 500;
//         ctx.response.body={
//             message:err.message
//         }
//         ctx.app.emit("error",err,ctx)//ctx.app.emit()手动释放error事件，才能让监听函数监听到。
//     }
// }
app.use(main)

//demo4: error 事件的监听:运行过程中一旦出错，Koa 会触发一个error事件。监听这个事件，也可以处理错误。
app.on("error",(er,ctx)=>{
    console.log("server error",er)
})
app.listen(3030,()=>{
    console.log("hello koa")
})