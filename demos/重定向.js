/**
 * ctx.response.redirect()方法可以发出一个302跳转，将用户导向另一个路由。
 */

const Koa=require("koa")
const route=require("koa-route")

const app=new Koa()


const index=ctx=>{
    ctx.response.body="i am index page"
}
//重定向，用户访问这个页面的时候，我始终让它访问首页
const redirect = ctx =>{
    ctx.response.redirect('/')
}

app.use(route.get("/",index))
app.use(route.get("/redirect",redirect))


app.listen(3030,()=>{
    console.log("hello koa")
})