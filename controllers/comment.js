const models = require('../models')
const Comment = models.comment



exports.index = (req, res) => {
    Comment.findAll()
    .then(Comment=>res.send(Comment))
}

exports.show = (req, res) => {
    Comment.findOne({where: {id: req.params.id}}).then(Comment=> res.send(Comment))
}

exports.store = (req, res) => {
    Comment.create(req.body).then(Comment=> {
        res.send({
            message: "success",
            Comment
        })
    })
}

exports.update = (req, res) => {
    Comment.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(Comment=> {
        res.send({
            message: "success",
            Comment
        })
    })
}

exports.delete = (req, res) => {
    Comment.destroy({where: {id: req.params.id}}).then(Comment=> {
        res.send({
            message: "success",
            Comment
        })
    })
}