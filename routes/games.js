import express from 'express';
import getGameById from '../middleware/controller.js';
import games from "../data/games.js";
const router = express.Router();

// GET /api/games
router.get('/', (req, res) => {
    res.json(games);
});

// GET /api/games/:ID
router.get('/:ID', getGameById);

router.post('/', (req, res) => {
    const newGame = {
        ID: games.length + 1,
        title: req.body.title
    };
    if (!req.body.title) {
        return res.status(404).json({ Message: 'Please include a title' });
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