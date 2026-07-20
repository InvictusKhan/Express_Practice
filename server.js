import express from "express"
import path from 'path';
import { fileURLToPath } from 'url';
const PORT = process.env.PORT;
import gamesRouter from './routes/games.js';
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import getRouter from "./middleware/controller.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger);
app.use(getRouter);


app.use('/api/games', gamesRouter);
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Server is up on PORT ${PORT}`);
});

