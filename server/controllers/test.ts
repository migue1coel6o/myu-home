import * as Router from 'koa-router';

export const testGet: Router.IMiddleware = (
  ctx: Router.IRouterContext,
  next: () => Promise<any>,
) => {
  ctx.body = 'teste';
};
