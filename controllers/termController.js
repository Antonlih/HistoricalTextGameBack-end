const {Term, Dictionary} = require('../models/models')
const ApiError = require('../error/ApiError');

class TermController{
    async create(req, res){
        const {term} = req.body
        const meaning = await Term.create({term})
        return res.json(meaning)
    }

    async getAll(req, res) {
        const terms = await Term.findAll()
        return res.json(terms)
    }


    async getOne(req, res){
        res.json('asdfhfds')
    }

}

module.exports = new TermController()