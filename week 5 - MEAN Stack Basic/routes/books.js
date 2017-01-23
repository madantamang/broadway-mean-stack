var express = require('express');
var router = express.Router();

var bookController = require('../controllers/bookController');

/* GET users listing. */
router.get('/', bookController.getBookList);

router.post('/create',bookController.saveNewBook);

router.get('/details/:id',bookController.getBookDetails);

//router.get('/update',bookController.getCreateBook);
module.exports = router;
