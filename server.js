'use strict';

let koa = require('koa');
let app = koa();

app.use(function* () {
  this.body = 'hello.';
});

app.listen(process.env.PORT || 3000);
