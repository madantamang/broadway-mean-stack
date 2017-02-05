var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.renderFile('../../client/index.html');
});

module.exports = router;
