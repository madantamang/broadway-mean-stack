var express = require('express');
var router = express.Router();

// Authentication and authorization middleware function
var authMiddleware = function(req, res, next) {
    if (req.session && req.session.user && req.session.isAuth)
        return next();
    else
        return res.redirect("/login");
};

var userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', userController.getUserList);

router.post('/register',userController.saveUser );

router.post('/login',userController.loginUser);

router.get('/profile',authMiddleware,userController.findUser);


module.exports = router;
