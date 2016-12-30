var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//pass parameters
// Pattern matched routes  /:id([0-9]{5})
router.get('/:id', function(req, res){
    res.send('The id you specified is ' + req.params.id);
});

module.exports = router;
