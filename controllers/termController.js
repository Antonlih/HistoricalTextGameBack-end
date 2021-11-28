const {Term} = require('../models/models')
const ApiError = require('../error/ApiError');

class TermController {
    async create(req, res){
        const {term, meaning} = req.body
        const object = await Term.create({term, meaning})
        return res.json(object)
    }

    async getAll(req, res){
        const dictionaries = await Term.findAll()
        return res.json(dictionaries)
    }

    async getOne(req, res) {
        const {id} = req.params
        const term = await Term.findOne({where: {id}})
        return res.json(term)
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                return res.json({message: "Не указан id"})
            }
            const term1 = await Term.findOne({where: {id}})
            if (term1 === null){
                return res.json({message: "Указан несуществующий id"})
            }
            await Term.destroy({where: {id}})  // Доделать
            return res.json({message: "Термин удалён"})
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

module.exports = new TermController()