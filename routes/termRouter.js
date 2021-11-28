const Router = require('express')
const router = new Router()
const TermController = require('../controllers/termController')

router.post('/' ,TermController.create)
router.get('/', TermController.getAll)
router.get('/:id', TermController.getOne)


module.exports = router