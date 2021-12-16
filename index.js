require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 80


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.static(path.resolve(__dirname, 'text')))
app.use(express.static(path.resolve(__dirname, 'fonts')))
app.use(express.static(path.resolve(__dirname, 'styles')))
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorHandler)



const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`)) //IP:${IP}`))
    } catch (e) {
        console.log(e)
    }
}

start()