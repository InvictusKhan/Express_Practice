import games from "../data/games.js";

function getGameById(req, res, next) {
    const ID = parseInt(req.params.ID, 10);
    const game = games.find((game) => game.ID === ID);

    if (!game) {
        const error = new Error(`Game not found with ID ${ID}`);
        return next(error);
    }

    res.send(game);
}

export default getGameById;