var express = require('express');
var router = express.Router();

var bookController = require('../controllers/bookController');

/* GET users listing. */
router.get('/', bookController.getBookList);

router.get('/create',bookController.getCreateBook)
    .post('/create',bookController.saveNewBook);

router.get('/update',bookController.getCreateBook);
module.exports = router;
