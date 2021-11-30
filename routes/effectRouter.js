const Router = require('express')
const router = new Router()
const EffectController = require('../controllers/effectController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/',checkRole('ADMIN'),EffectController.create)
router.get('/', EffectController.getAll)
router.get('/:id', EffectController.getOne)
router.get('/actionId/:id', EffectController.getEffectForAction)


module.exports = router