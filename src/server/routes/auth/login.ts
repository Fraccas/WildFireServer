import * as express from 'express';
import * as passport from 'passport';

import { CreateToken } from '../../utils/security/tokens';

const router = express.Router();

router.post('/', passport.authenticate('local'), async (req: any, res, next) => {
    try {
        console.log("WildFire Attempting Login: " + req.user.email);
        let token = await CreateToken({ userid: req.user.id });
        res.json({
            token,
            name: req.user.name,
            role: req.user.role,
            userid: req.user.id,
            phone: req.user.phone
        });
        console.log("Login Success...");
    } catch (e) {
        console.log("Login Failed...")
        console.log(e);
        res.sendStatus(500);
    }
});


export default router;