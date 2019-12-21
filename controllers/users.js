const models = require('../models')
const User = models.users
const Articles = models.article
const Comment = models.comments
const Categories = models.categories



exports.index = (req, res) => {
    User.findAll()
    .then(User=>res.send(User))
}

exports.show = (req, res) => {
    User.findOne({
                where: { id: req.params.id },
                // include : [
                //     {model: Articles,
                //     as : "createdBy"
                // }
                // ]
    }).then(User=> res.send(User))
}

exports.store = (req, res) => {
    User.create(req.body).then(User=> {
        res.send({
            message: "success",
            User
        })
    })
}

exports.update = (req, res) => {
    User.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(User=> {
        res.send({
            message: "success",
            User
        })
    })
}

exports.delete = (req, res) => {
    User.destroy({where: {id: req.params.id}}).then(User=> {
        res.send({
            message: "success",
            User
        })
    })
}