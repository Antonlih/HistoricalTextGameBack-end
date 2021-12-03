const uuid = require('uuid')
const path = require('path')
const {Page} = require('../models/models')
const ApiError = require('../error/ApiError')

class PageController {
    async create(req, res, next){
        try {
            const{imageDescription} = req.body
            const {image} = req.files
            let imageName = uuid.v4() + ".jpg"  //jpg
            image.mv(path.resolve(__dirname, '..', 'static', imageName))


            const {description} = req.files
            let descriptionName = uuid.v4() + ".html"   ///txt
            description.mv(path.resolve(__dirname, '..', 'text', descriptionName))


            const page = await Page.create({description: descriptionName, imageDescription, image: imageName})
            return res.json(page)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res){
        const page = await Page.findAll()
        return res.json(page)
    }

    async getOne(req, res){
        const {id} = req.params
        const page = await Page.findOne({where: {id}})
        return res.json(page)
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                return res.json({message: "Не указан id"})
            }
            const page = await Page.findOne({where: {id}})
            if (page === null){
                return res.json({message: "Указан несуществующий id"})
            }
            await Page.destroy({where: {id}})
            return res.json({message: "Страница удалена"})
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new PageController()