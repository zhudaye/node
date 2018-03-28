'use strict'
const host = 3001;
const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
  let startTime = new Date().getTime();
  await next();
  let usems = new Date().getTime() - startTime;
  console.log(`use time ${usems}ms`)
})

app.use(async (ctx, next) => {
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = '<p>fuck you</p>';
})

app.listen(host);
console.log(`seaver runing at ${host}`);

