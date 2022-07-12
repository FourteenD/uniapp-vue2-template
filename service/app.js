const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();

router.get("/", async (ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = `<h5>Hello, ${name}!</h5>`;
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000, () => {
  console.log("服务运行中:http://127.0.0.1:3000");
});
