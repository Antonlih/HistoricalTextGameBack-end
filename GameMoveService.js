import GameMove from "./GameMove.js";
import e from "express";

class GameMoveService{
    async create(gameMove) {
            const createdGameMove = await GameMove.create(gameMove)
            return createdGameMove;
    }

    async getAll() {
            const gameMoves = await GameMove.find();
            return gameMoves;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const gameMove = await GameMove.findById(id);
        return gameMove;
    }

    async update(gameMove) {
        if (!gameMove._id) {
            throw  new Error('не указан ID')
        }
        const updatedGameMove = await GameMove.findByIdAndUpdate(gameMove._id, gameMove, {new: true})
        return updatedGameMove;
    }

    async delete(id) {
        if (!id) {
            throw  new Error('не указан ID')
        }
            const gameMove = await GameMove.findByIdAndDelete(id);
            return gameMove;
    }
}

export default new GameMoveService();