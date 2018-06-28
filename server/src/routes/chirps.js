import { Router } from 'express';

let router = Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id
    if (id) {
        res.json(chirpsStore.GetChirp(id));
    } else {
        res.send(chirpsStore.GetChirps());
    }
});

router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
})

router.put('/:id', (req, res) => {
    let id = req.params.id
    chirpsStore.UpdateChirp(id, req.body);
    res.sendStatus(200);
})

router.delete('/:id', (res, req) => {
    let id = req.params.id
    res.json(chirpsStore.DeleteChirp(id, req.body));
    res.sendStatus(200);
})

export default router;