const Koa = require("koa");
const router = require("koa-router")(); //注意：引入的方式
const app = new Koa();
router.get("/login", function (ctx, next) {
  ctx.body = "Hello koa";
});

router.get("/news", (ctx, next) => {
  ctx.body = "新闻page";
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8000, () => {
  console.log("starting at port 8000");
});
