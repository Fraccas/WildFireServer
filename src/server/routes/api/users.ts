import { Router } from 'express';
import db from '../../db';
import { isAdmin } from '../../middleware/authCheckpoints';

const router = Router();

// get user by id
router.get('/:id', async (req, res) => {
    try {
        res.json(await db.Users.getUserById(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// create new user
router.post('/new', async (req, res) => {
    try {
        res.json(await db.Users.createUser(req.body.name, req.body.phone, req.body.email, req.body.password));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/gmap/key', async (req, res) => {
    try {
        res.json(process.env.MAPS_KEY);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;