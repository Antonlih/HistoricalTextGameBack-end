import Router from 'express'
import MoveController from "./MoveController.js";

const router = new Router()

router.post('/moves' , MoveController.create)
router.get('/moves', MoveController.getAll)
router.get('/moves/:id', MoveController.getOne)
router.put('/moves', MoveController.update)
router.delete('/moves/:id', MoveController.delete)

export default router;