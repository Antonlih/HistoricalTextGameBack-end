const Router = require('express')
const router = new Router()
const actionRouter = require('./actionRouter')
const termRouter = require('./termRouter')
const pageRouter = require('./pageRouter')
const userProgressRouter = require('./userProgressRouter')
const userRouter = require('./userRouter')
const effectRouter = require('./effectRouter')
const fontRouter = require('./fontRouter')
const styleRouter = require('./styleRouter')



router.use('/user', userRouter)
router.use('/progress', userProgressRouter)
router.use('/page', pageRouter)
router.use('/action', actionRouter)
router.use('/term', termRouter)
router.use('/effect', effectRouter)
router.use('/font', fontRouter)
router.use('/style', styleRouter)


module.exports = router