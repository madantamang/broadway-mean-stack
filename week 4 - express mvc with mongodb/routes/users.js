var express = require('express');
var router = express.Router();

var categoryController = require('../controllers/userController');

/* GET users listing. */
router.get('/', categoryController.getUserList);

router.get('/register',function (req,res) {
    res.render("index")
} );

router.post('/register',categoryController.saveUser );



module.exports = router;
