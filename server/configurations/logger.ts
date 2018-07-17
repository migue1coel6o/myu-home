import * as bunyan from 'bunyan';

const log = bunyan.createLogger({
  name: 'LOG',
});

const reqSerializer = (req) => {
  return {
    headers: req.headers,
    method: req.method,
    url: req.url,
  };
};

log.addSerializers({
  req: reqSerializer,
});

(global as any).log = log;
