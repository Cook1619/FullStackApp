import { Router } from 'express';
import chirpsStore from '../chirpstore';


let chirps = [
    {
        user: "Chirp Johnson",
        text: "Get the motha chhirpin chirp outta here!!!!"
    },
    {
        user: "Chirp the value Johnson",
        text: "Just some of that random chirp ipsum son!!"
    },
    {
        user: "Arogd Chirpson",
        text: "BArr is gonna need therapy after all the minds games played"
    }
]
let router = Router();

router.get('/', (req, res) => {
     let id = req.params.id
     if (id) {
         res.json(chirpsStore.GetChirp(id));
     }else {
         res.send(chirpsStore.GetChirps());
}});

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