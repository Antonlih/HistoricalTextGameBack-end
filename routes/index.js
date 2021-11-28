const Router = require('express')
const router = new Router()
const actionRouter = require('./actionRouter')
const dictionaryRouter = require('./dictionaryRouter')
const moveRouter = require('./moveRouter')
const termRouter = require('./termRouter')
const userProgressRouter = require('./userProgressRouter')
const userRouter = require('./userRouter')



router.use('/user', userRouter)
router.use('/progress', userProgressRouter)
router.use('/move', moveRouter)
router.use('/dictionary', dictionaryRouter)
router.use('/action', actionRouter)
router.use('/term', termRouter)


module.exports = router