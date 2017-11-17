const Koa = require('koa');
const router = require('./router');
const views = require('koa-view');
const bodyparser = require('koa-bodyparser');
const path = require('path');

const app = new Koa();

app.use(views(path.join(__dirname, '/public/views'), {
  map: {
    heml: 'undersocre',
  },
}));

app.use(bodyparser());


app.use(router.routes());

// handle 404 page
app.use(async (ctx) => {
  ctx.response.status = 404;
  // ctx.body = 'Oops, Not Found!';
  await ctx.render('404', {
    // user: 'John',
  });
});

app.listen(3000);
