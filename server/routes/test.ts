import * as Router from 'koa-router';

import { testGet } from '../controllers/test';
import BodyParser from '../middlewares/external';

const Test = new Router();

Test
    .get('/', BodyParser(), testGet);

export default Test;  