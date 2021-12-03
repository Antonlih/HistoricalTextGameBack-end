const {Style} = require('../models/models')
const path = require('path')
const ApiError = require('../error/ApiError');

class StyleController {
    async create(req, res){
        const {style} = req.files
        const styleName = style.name
        style.mv(path.resolve(__dirname, '..', 'styles', styleName))
        const newFont = await Style.create({style: styleName})
        return res.json(newFont)

    }

    async getAll(req, res){
        const styles = await Style.findAll()
        return res.json(styles)
    }

    async getOne(req, res) {
        const {id} = req.params
        const style = await Style.findOne({where: {id}})
        return res.json(style)
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

module.exports = new StyleController()