import express from "express"
import path from 'path';
import { fileURLToPath } from 'url';
const PORT = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


let games = [
    {ID: 1, Name: "Lies of P"},
    {ID: 2, Name: "Elden Ring"},
    {ID: 3, Name: "Metro Exodus"},
]

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/About', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
})

//To get all games
app.get('/api/games', (req, res) => {
    res.json(games);
})
//To get 1 game
app.get('/api/games/:ID', (req, res) => {
    const ID = parseInt(req.params.ID);
    res.json(games.filter((games) => {
        return games.ID === ID;
    })
)});


app.listen(PORT, () => {
    console.log(`Server is up on PORT ${PORT}`);
});

