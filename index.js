require('express-group-routes')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.json())

//controllers
const categoriesController = require('./controllers/categories')
const articleController = require('./controllers/articles')
const commentController = require('./controllers/comment')
const userController = require('./controllers/users')
const authController = require('./controllers/auth')
const followController = require('./controllers/follow')


// middleware
const {authenticated} = require ('./middleware')

app.group("/api/v1", (router) => {

    /*------------------categories API----------*/

    // get all categories
    router.get('/categories', categoriesController.index)

    //get categories by id
    router.get('/category/:id', categoriesController.show)     
    router.post('/category', categoriesController.store)    
    router.patch('/category/:id', categoriesController.update)    

    //get categories artciles
    router.get('/category/:id/articles', categoriesController.show)

    /*----------Article API-----*/

    //get article all
    // router.method ('/path, authenticated, controllers) --> auth needed
    router.get('/article_detail', articleController.articleDetail)
    router.get('/articles', articleController.index)  
    router.get('/article/:id' , articleController.show)    
    router.post('/article', authenticated,articleController.store)
    router.delete('/article/:id', articleController.delete)    

    //get update article
    router.patch('/article/:id', articleController.update)    

    // get popular a
    router.get('/article_popular', articleController.popularDesc)  


    /*----------------------Comment -------*/
    // Comment  API
    router.get('/comments', commentController.index)    
    router.get('/comment/:id', commentController.show)    
    router.post('/comment', commentController.store)    
    router.patch('/comment/:id', commentController.update)    
    router.delete('/comment/:id', commentController.delete)

    /*----------------------User -------*/   
    // User API 
    // router.get('user/:id/articles', userController.show)
    router.get('/users', userController.index)
    router.get('/user/:id', userController.show)    
    router.post('/user/:id', userController.store)    
    router.patch('/user/:id', userController.update)    
    router.delete('/user/:id', userController.delete)


    /*----------------------Follow ------------*/
    // follow API
    router.get('/follow', followController.index)      
    router.post('/follow', authenticated, followController.store)    
    router.patch('/follow/:id', followController.update)    
    router.delete('/follow/:id', followController.delete)


    // /*--------middleware routes -------------*/
    // (path, middleware, action_in_controller)
    router.post('/login', authController.login)
    router.get('/login', authController.login)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))