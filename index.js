const Koa = require('koa');
const router = require('./router');

const app = new Koa();

app.use(router.routes());

// handle 404 page
app.use((ctx) => {
  ctx.response.status = 404;
  ctx.body = 'Oops, Not Found!';
});

app.listen(3000);
