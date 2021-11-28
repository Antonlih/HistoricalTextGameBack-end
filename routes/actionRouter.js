const Router = require('express')
const router = new Router()
const ActionController = require('../controllers/actionController')

router.post('/', ActionController.create)
router.get('/', ActionController.getAll)


module.exports = router