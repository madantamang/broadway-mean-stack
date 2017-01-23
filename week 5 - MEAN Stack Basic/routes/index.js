var express = require('express');
var router = express.Router();

var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.getHomePage);
router.get('/partials/:name', indexController.partials);

module.exports = router;
