var express = require('express');
var router = express.Router();

var bookController = require('../controllers/bookController');

/* GET users listing. */
router.get('/', bookController.getBookList);

router.get('/create',function (req,res) {
    res.render("bookCreate");
} );
router.get('/update',function (req,res) {
    res.render("bookCreate");
} );
module.exports = router;
