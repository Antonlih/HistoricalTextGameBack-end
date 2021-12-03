const {Font} = require('../models/models')
const path = require('path')
const ApiError = require('../error/ApiError');

class FontController {
    async create(req, res){
        const {font} = req.files
        const fontName = font.name
        font.mv(path.resolve(__dirname, '..', 'fonts', fontName))
        const newFont = await Font.create({font: fontName})
        return res.json(newFont)

    }

    async getAll(req, res){
        const fonts = await Font.findAll()
        return res.json(fonts)
    }

    async getOne(req, res) {
        const {id} = req.params
        const font = await Font.findOne({where: {id}})
        return res.json(font)
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

module.exports = new FontController()