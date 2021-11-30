const Router = require('express')
const router = new Router()
const actionRouter = require('./actionRouter')
const termRouter = require('./termRouter')
const pageRouter = require('./pageRouter')
const userProgressRouter = require('./userProgressRouter')
const userRouter = require('./userRouter')
const effectRouter = require('./effectRouter')



router.use('/user', userRouter)
router.use('/progress', userProgressRouter)
router.use('/page', pageRouter)
router.use('/action', actionRouter)
router.use('/term', termRouter)
router.use('/effect', effectRouter)


module.exports = router