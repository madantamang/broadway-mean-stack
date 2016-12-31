var express = require('express');
var router = express.Router();

var categoryController = require('../controllers/userController');

/* GET users listing. */
router.get('/', categoryController.getUserList);

router.post('/register',categoryController.saveUser );

router.post('/login',categoryController.loginUser);

module.exports = router;
