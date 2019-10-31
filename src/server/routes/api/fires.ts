import { Router } from 'express';
import db from '../../db';
import { isLogged } from '../../middleware/authCheckpoints';

const router = Router();


// get all fires
router.get('/', isLogged, async (req, res) => {
    try {
        res.json(await db.Fires.getFires());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// get fire by id
router.get('/:id', isLogged, async (req, res) => {
    try {
        res.json(await db.Fires.getFireById(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

// add new fire
router.post('/new', isLogged, async (req, res) => {
    try {
        res.json(await db.Fires.addFire(req.body.lat, req.body.lon, req.body.userid, req.body.threat, req.body.photo, req.body.description));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// delete fire by id
router.delete('/delete/:id', isLogged, async (req, res) => {
    try {
        res.json(await db.Fires.deleteFire(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// update fire by id
router.put('/:id/update', isLogged, async (req, res) => {
    try {
        res.json(await db.Fires.updateFire(req.body.title, req.body.price, req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


export default router;