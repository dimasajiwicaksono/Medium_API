const models = require('../models')
const Categories = models.categories
const Articles = models.articles


// get all data
exports.index = (req, res) => {
    Categories.findAll(
        { attributes: ['id', 'name'] }
    ).then(categories => res.send(categories))
}


//get data by id
exports.show = (req, res) => {
    Categories.findOne(
        {
            where: { id: req.params.id },
            include: [
                {
                    model: Articles,
                    as: 'article',
                    attributes: ['id', 'title', 'content', 'image', 'createdAt', 'updatedAt']
                }
            ], attributes : [ 'id', 'name']
        }).then(articles => res.send(articles))
}


exports.store = (req, res) => {
    Categories.create(req.body).then(categories => {
        res.send({
            message: "success",
            categories
        })
    })
}

exports.update = (req, res) => {
    Categories.update(
        req.body,
        { where: { id: req.params.id } }
    ).then(categories => {
        res.send({
            message: "success",
            categories
        })
    })
}

exports.delete = (req, res) => {
    Categories.destroy({ where: { id: req.params.id } }).then(categories => {
        res.send({
            message: "success",
            categories
        })
    })
}