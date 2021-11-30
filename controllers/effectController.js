const {Effect} = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const ApiError = require('../error/ApiError')

class EffectController {
    async create(req, res, next) {
        try {
            const {object, imageDescription, endGame, actionId} = req.body

            const {effectImage} = req.files
            let imageName = uuid.v4() + ".jpg"
            effectImage.mv(path.resolve(__dirname, '..', 'static', imageName))

            const newEffect = await Effect.create({effect: object,effectImage: imageName ,imageDescription, endGame, actionId})
            return res.json(newEffect)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const object = await Effect.findAll()
        return res.json(object)
    }

    async getOne(req, res){
        const {id} = req.params
        const effect = await Effect.findOne({where: {id}})
        return res.json(effect)
    }

    async getEffectForAction(req, res){
        const {actionId} = req.params
        const action = await Effect.findAll({where: {actionId}})
        return res.json(action)
    }

}


module.exports = new EffectController()