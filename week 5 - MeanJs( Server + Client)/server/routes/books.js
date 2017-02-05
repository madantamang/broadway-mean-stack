var express = require('express');
var router = express.Router();
var Book = require('../model/book');

/* GET users listing. */
router.get('/', function (req,res,next) {
    Book.find()
        .sort({'publishedDate': -1})
        .limit(16)
        .exec(function (err,data) {
            if(err)
                res.send(err);
            else {
                res.send(data);
            }
        });
});

router.post('/create',function (req,res,next) {
    var formData=req.body;
    var newBook=new Book({
        title:formData.title,
        isbn:formData.isbn,
        pageCount:formData.pageCount,
        publishedDate:formData.publishedDate,
        thumbnailUrl:"http://placehold.it/800x500",
        shortDescription: formData.shortDescription,
        longDescription:formData.longDescription,
        //status:formData.status,
        authors:formData.authors,
        categories:formData.categories
    });
    newBook.save(function (err,result) {
        if(err){
            res.send(err);
        }
        res.send(result);
    });
    });

router.get('/details/:id',function (req,res,next) {
    Book.findById(req.params.id, function (err, data) {
        if (!err) {
            res.send(data)
        } else {
            console.log(err);
            res.status(500);
            res.send(err)
        }
    });
});

router.post('/update',function (req,res,next) {
    Book.findByIdAndUpdate(req.id, {title:req.body.title}, function () {

    })
});
module.exports = router;