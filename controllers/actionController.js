const {Action} = require("../models/models");

class ActionController {
    async create(req, res) {
        const {option, score, pageId} = req.body
        const action = await Action.create({option, score, pageId})
        return res.json(action)
    }

    async getAll(req, res) {
        const action = await Action.findAll()
        return res.json(action)
    }

    async getOne(req, res){
        const {id} = req.params
        const action = await Action.findOne({where: {id}})
        return res.json(action)
    }

    async getAllActionsForMove(req, res){
        const {pageId} = req.params
        const action = await Action.findAll({where: {pageId}})
        return res.json(action)
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                return res.json({message: "Не указан id"})
            }
            const page = await Action.findOne({where: {id}})
            if (page === null){
                return res.json({message: "Указан несуществующий id"})
            }
            await Action.destroy({where: {id}})
            return res.json({message: "Действие удалено"})
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


module.exports = new ActionController()