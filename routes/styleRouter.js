const Router = require('express')
const router = new Router()
const StyleController = require('../controllers/styleController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/',checkRole('ADMIN'),StyleController.create)
router.get('/', StyleController.getAll)
router.get('/:id', StyleController.getOne)
router.delete('/:id', checkRole('ADMIN'), StyleController.delete)

module.exports = router