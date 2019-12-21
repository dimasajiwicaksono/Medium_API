
const jwt = require ('jsonwebtoken')

const models = require('../models')
const User = models.users

exports.login = (req, res) => {
    // check email and pass when macth with db

    const email = req.body.email
    const password = req.body.password // use encrypt in realcase

    User.findOne({where: {email, password}}).then(users=>{
        if(User){
            const token = jwt.sign({ userId: users.id }, 'my-secret-key')
            res.send({
                users,
                token
            }) 
        }else{
            res.send({
                error: true,
                message: "Wrong Email or Password!"
            })
        }
    }).catch (err => res.send(err))
}

