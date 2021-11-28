const Router = require('express')
const router = new Router()
const MoveController = require('../controllers/MoveController')

router.post('/', MoveController.create)
router.get('/', MoveController.getAll)
router.get('/:id', MoveController.getOne)


module.exports = router