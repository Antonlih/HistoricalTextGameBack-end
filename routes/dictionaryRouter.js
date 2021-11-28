const Router = require('express')
const router = new Router()
const dictionaryController = require('../controllers/dictionaryController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/',checkRole('ADMIN'),dictionaryController.create)
router.get('/', dictionaryController.getAll)


module.exports = router