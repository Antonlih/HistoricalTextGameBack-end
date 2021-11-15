import express from 'express'
import mongoose from 'mongoose'
import GameMove from "./GameMove.js";

const Port = 5000;
const DataBase_URL = 'mongodb+srv://User:user@historycaltextgame.3mzih.mongodb.net/HistorycalTextGame?retryWrites=true&w=majority'
const app = express()

app.use(express.json());
app.post('/', async (req, res) => {
    const {description, question, answer_1, answer_2, answer_3,
        score_for_answer_1, score_for_answer_2, score_for_answer_3, illustration} =req.body
    const gameMove = await GameMove.create({description, question, answer_1, answer_2, answer_3,
        score_for_answer_1, score_for_answer_2, score_for_answer_3, illustration})
    res.json(gameMove)
})

async function startApp() {
    try {
        await mongoose.connect(DataBase_URL)
        app.listen(Port, () => console.log('Server working on port ' + Port))
    } catch (e) {
        console.log(e)
    }
}

startApp()
