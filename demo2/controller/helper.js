var config=require("../config/index")
var request=require("request")

var Helper=function(){}
Helper.upload=async function(ctx){
    ctx.body=ctx.req.pipe(request(config.gift.upload))
}