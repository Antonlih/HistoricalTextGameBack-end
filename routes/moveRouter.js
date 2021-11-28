const Router = require('express')
const router = new Router()
const MoveController = require('../controllers/MoveController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/',checkRole('ADMIN'),MoveController.create)
router.get('/', MoveController.getAll)
router.get('/:id', MoveController.getOne)


module.exports = router