const Koa = require("koa")
const fs = require("fs")
const route = require("koa-route")
const app = new Koa();

/**
 * context对象
 */
const main = ctx => {
    ctx.response.body="hello main"
}
const about = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>';
}

/**
 * 路由的使用
 */
app.use(route.get('/',main))
app.use(route.get('/about',about))



app.listen(3030,(error)=>{
    console.log(error)
})