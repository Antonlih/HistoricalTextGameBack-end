import express from 'express'
import mongoose from 'mongoose'
import router from './Router.js';


const Port = 5000;
const DataBase_URL = 'mongodb+srv://User:user@historycaltextgame.3mzih.mongodb.net/HistorycalTextGame?retryWrites=true&w=majority'
const app = express()

app.use(express.json());
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DataBase_URL)
        app.listen(Port, () => console.log('Server working on port ' + Port))
    } catch (e) {
        console.log(e)
    }
}

startApp()
