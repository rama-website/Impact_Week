const express = require('express');
const userController = require('../controller/userController');
const taskController = require('../controller/taskController');
const route = express.Router();
const auth = require('../midlewere/auth')
route.get('/', auth.checkhomePage, taskController.homePage);
route.post('/new-account', userController.signUp)
route.post('/login',userController.logIn)
route.post('/logOut',userController.logOut)
route.get('/feed',auth.checkFeedToken, taskController.feed)

module.exports = route;