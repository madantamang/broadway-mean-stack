var Book = require('../models/book');

exports.getBookList= function(req, res) {
    Book.find(function (err,data) {
        if(err)
            res.json('error');
        res.json(data);
    });
};

exports.findBook=function(req, res) {
    Book.findById(req.params.id, function (err, data) {
        if (!err) {
            res.json(data);
        } else {
            console.log(err);
            res.json(err.error);
        }
    });
};