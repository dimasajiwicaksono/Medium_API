const models = require('../models')
const Users = models.users
const Follow = models.follow


// get all data
exports.index = (req, res) => {
    Follow.findAll( {
        include: [
            {model: Users, 
            as: 'user',
            attributes : [
                'id', 'email'
            ]
            }
        ], attributes : [
            'id'
        ]
    }).then(Follow => res.send(Follow))
}



exports.store = (req, res) => {
    Follow.create(req.body).then(Follow => {
        res.send({
            message: "success",
            Follow
        })
    })
}

exports.update = (req, res) => {
    Follow.update(
        req.body,
        { where: { id: req.params.id } }
    ).then(Follow => {
        res.send({
            message: "success",
            Follow
        })
    })
}

exports.delete = (req, res) => {
    Follow.destroy({ where: { id: req.params.id } }).then(Follow => {
        res.send({
            message: "success",
            Follow
        })
    })
}