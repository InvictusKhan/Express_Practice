import e from 'express';
import express from 'express';
const router = express.Router();

let games = [
    {ID: 1, Name: "Lies of P"},
    {ID: 2, Name: "Elden Ring"},
    {ID: 3, Name: "Metro Exodus"},
];



// GET /api/games 
router.get('/', (req, res) => {
    res.json(games);
});

// GET /api/games/:ID
router.get('/:ID', (req, res, next) => {
    const ID = parseInt(req.params.ID, 10);
    const game = games.find((game) => game.ID === ID);

    if (!game) {
        const error = new Error(`Game not found with ${ID}`);
        return next(error);
        
    }
    res.send(game);
});

router.post('/', (req, res) => {
    const newGame = {
        ID: games.length + 1,
        title: req.body.title
    };
    if (!newGame){
        return res.status(404).json({Message: 'Please include a title'});
    }
    games.push(newGame);

    res.status(201).json(games);
});

router.put('/:ID', (req, res) => {
    const ID = parseInt(req.params.ID, 10);
    const game = games.find((game) => game.ID === ID);

    if (!game) {
        return res.status(404).json({ Message: `Game not found with ${ID}` });
    }

    game.Name = req.body.Name ?? game.Name;
    res.status(200).json(game);
});

export default router;