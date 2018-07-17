/// <reference path="./index.d.ts"/>

import * as koa from 'koa';

import './configurations/logger';
import errorHandler from './middlewares/errorHandler';
import logger from './middlewares/logger';
import Test from './routes/test';

import * as config from 'config';

const app = new koa();

app
  .use(errorHandler)
  .use(logger)
  .use(Test.routes())
  .use(Test.allowedMethods());

app.listen(3000, () => {
  /* tslint:disable-next-line no-console */
  console.log('App running on port 3000!');
  /* tslint:disable-next-line no-console */
  console.log(config.get('logLevel'));
});

// import { MongoClient } from 'mongodb';
// import * as assert from 'assert';
// // Connection URL
// const url = 'mongodb://migue1coel6oserver-k55vj.local:27017';
// // Database Name
// const dbName = 'myproject';
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//   const db = client.db(dbName);
//   client.close();
// });
