var express = require('express');
var router = express.Router();

var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.getHomePage);

/* GET login page. */
router.get('/login', indexController.getLoginPage);

/* GET signup page. */
router.get('/signup', indexController.getSignUpPage);

router.get('/logout', indexController.logoutUser);
module.exports = router;
