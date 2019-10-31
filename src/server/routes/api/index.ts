import { Router } from 'express';

import firesRouter from './fires';
import tokensRouter from './tokens';
import usersRouter from './users';
import {tokenCheckpoint} from '../../middleware/authCheckpoints';

const router = Router();

router.use(tokenCheckpoint);
router.use('/fires', firesRouter);
router.use('/tokens', tokensRouter);
router.use('/users', usersRouter);

export default router;