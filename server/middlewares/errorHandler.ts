import * as STATUS_CODE from 'http-status-codes';
import * as Router from 'koa-router';

const errorHandler: Router.IMiddleware = async (ctx: Router.IRouterContext, next: () => Promise<any>) => {
    try {
        await next();

    } catch (err) {
        ctx.status = STATUS_CODE.INTERNAL_SERVER_ERROR;
        ctx.body = 'error';
    }
};

export default errorHandler;
