const Router = require('express')
const router = new Router()
const FontController = require('../controllers/fontController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/',checkRole('ADMIN'),FontController.create)
router.get('/', FontController.getAll)
router.get('/:id', FontController.getOne)
router.delete('/:id', checkRole('ADMIN'), FontController.delete)

module.exports = router