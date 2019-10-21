import { Router } from 'express';
import db from '../../db';

const router = Router();


// get all fires
router.get('/', async (req, res) => {
    try {
        res.json(await db.Fires.getFires());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// get fire by id
router.get('/:id', async (req, res) => {
    try {
        res.json(await db.Fires.getFireById(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

// add new fire
router.post('/new', async (req, res) => {
    try {
        res.json(await db.Fires.addFire(req.body.lat, req.body.lon, req.body.userid, req.body.threat, req.body.photo));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// delete fire by id
router.delete('/delete/:id', async (req, res) => {
    try {
        res.json(await db.Fires.deleteFire(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// update fire by id
router.put('/:id/update', async (req, res) => {
    try {
        res.json(await db.Fires.updateFire(req.body.title, req.body.price, req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


export default router;