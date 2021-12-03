const Router = require('express')
const router = new Router()
const EffectController = require('../controllers/effectController')
const checkRole = require("../middleware/checkRoleMiddleware");
const {Effect} = require("../models/models");

router.post('/',checkRole('ADMIN'),EffectController.create)
router.get('/', EffectController.getAll)
router.get('/:id', EffectController.getOne)
router.get('/actionId/:actionId', EffectController.getEffectForAction)
router.delete('/:id', checkRole('ADMIN'), EffectController.delete)

module.exports = router