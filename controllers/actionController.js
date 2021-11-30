const {Action} = require("../models/models");

class ActionController {
    async create(req, res) {
        const {option, score, effect, endGame, pageId} = req.body
        const object = await Action.create({option,score, effect, endGame, pageId})
        return res.json(object)
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

}


module.exports = new ActionController()