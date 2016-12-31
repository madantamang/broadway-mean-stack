var express = require('express');
var router = express.Router();

var categoryController = require('../controllers/userController');


function authentication(req,res,next){
if(req.session.user !=null){
    next();
}
    else{
    res.redirect("/")
}
}
/* GET users listing. */
router.get('/', categoryController.getUserList);

router.get('/register',function (req,res) {
    res.render("index")
} );

router.post('/register',categoryController.saveUser );

route.post('/login',categoryController.loginUser);

module.exports = router;
