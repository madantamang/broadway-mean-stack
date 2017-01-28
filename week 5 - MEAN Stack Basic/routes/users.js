var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

module.exports=function (passport) {

    /* GET users listing. */
    router.get('/', userController.getUserList);

    router.post('/register',userController.saveUser );

    router.post('/login',userController.loginUser);

    router.get('/profile',passport.authenticate('jwt', { session: false }),userController.findUser);

    return router;

};
