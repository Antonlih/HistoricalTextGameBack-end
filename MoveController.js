import GameMove from "./GameMove.js";
import GameMoveService from "./GameMoveService.js";

class MoveController {
    async create(req, res) {
        try{
            const gameMove = await GameMoveService.create(req.body)
            res.json(gameMove)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const gameMoves = await GameMoveService.getAll()
            return res.json(gameMoves);
        } catch(e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const gameMove = await GameMoveService.getOne(req.params.id)
            return res.json(gameMove)
        } catch(e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedGameMove = await GameMoveService.update(req.body)
            return res.json(updatedGameMove);
        } catch(e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const gameMove = await GameMoveService.delete(req.params.id)
            return res.json(gameMove)
        }catch(e) {
            res.status(500).json(e)
        }
    }
}

export default new MoveController();