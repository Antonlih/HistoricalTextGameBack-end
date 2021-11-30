const Router = require('express')
const router = new Router()
const PageController = require('../controllers/pageController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/',checkRole('ADMIN'),PageController.create)
router.get('/', PageController.getAll)
router.get('/:id', PageController.getOne)


module.exports = router