const {Effect, Action} = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const ApiError = require('../error/ApiError')

class EffectController {
    async create(req, res, next) {
        try {
            const {imageDescription, endGame, actionId} = req.body

            const {effectImage} = req.files
            const {effect} = req.files


            const checkEffect = await Effect.findOne({where: {actionId}})
            if (checkEffect !== null){
                return res.json({message: "Для этого действия уже существую последствия"})
            }

            const checkAction = await Action.findOne({where: {id: actionId}})
            if (checkAction === null){
                return res.json({message: "Вы указали последствия для несуществующего действия"})
            }

            let imageName = uuid.v4() + ".jpg"
            effectImage.mv(path.resolve(__dirname, '..', 'static', imageName))

            let effectName = uuid.v4() + ".html"
            effect.mv(path.resolve(__dirname, '..', 'text', effectName))

            const newEffect = await Effect.create({effect: effectName,effectImage: imageName ,imageDescription, endGame, actionId})
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
        const action = await Effect.findOne({where: {actionId}})
        return res.json(action)
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                return res.json({message: "Не указан id"})
            }
            const effect = await Effect.findOne({where: {id}})
            if (effect === null){
                return res.json({message: "Указан несуществующий id"})
            }
            await Effect.destroy({where: {id}})
            return res.json({message: "Последствие удалено"})
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


module.exports = new EffectController()