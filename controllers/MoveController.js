const uuid = require('uuid')
const path = require('path')
const {Move, Term} = require('../models/models')
const ApiError = require('../error/ApiError')

class MoveController{
    async create(req, res, next){
        try {
            const{description, action, term} = req.body
            const {image} = req.files
            let filename = uuid.v4() + ".jpg"
            image.mv(path.resolve(__dirname, '..', 'static', filename))

            const move = await Move.create({description, term, action, image: filename})
            return res.json(move)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res){
        const moves = await Move.findAll()
        return res.json(moves)
    }

    async getOne(req, res){
        const {id} = req.params
        const move = await Move.findOne({where: {id}})
        return res.json(move)
    }
}

module.exports = new MoveController()