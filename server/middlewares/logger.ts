import * as Router from 'koa-router';
declare const log: any;

const logger: Router.IMiddleware = (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    global.log.info({
        req: ctx.request
    });
    next();
};

export default logger;
