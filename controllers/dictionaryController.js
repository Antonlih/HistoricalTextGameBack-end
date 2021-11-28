const {Dictionary} = require('../models/models')
const ApiError = require('../error/ApiError');

class DictionaryController{
    async create(req, res){
        const {term} = req.body
        const dictionary = await Dictionary.create({term})
        return res.json(dictionary)
    }

    async getAll(req, res){
        const dictionaries = await Dictionary.findAll()
        return res.json(dictionaries)
    }

}

module.exports = new DictionaryController()