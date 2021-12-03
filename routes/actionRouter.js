const Router = require('express')
const router = new Router()
const ActionController = require('../controllers/actionController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/',checkRole('ADMIN'),ActionController.create)
router.get('/', ActionController.getAll)
router.get('/:id', ActionController.getOne)
router.get('/pageId/:actionId', ActionController.getAllActionsForMove)
router.delete('/:id', checkRole('ADMIN'), ActionController.delete)


module.exports = router