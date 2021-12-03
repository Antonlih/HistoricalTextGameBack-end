const Router = require('express')
const router = new Router()
const termController = require('../controllers/termController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/',checkRole('ADMIN'),termController.create)
router.get('/', termController.getAll)
router.get('/:id', termController.getOne)
router.delete('/:id', checkRole('ADMIN'), termController.delete)


module.exports = router