var User = require('../models/userModel');

exports.getUserList= function(req, res) {
    console.log('session',req.user);
    User.find(function (err,data) {
        if(err)
            res.json('error');
        res.json(data);
    });
    };

exports.findUser=function(req, res) {
    User.findById(req.params.id, function (err, data) {
        if (!err) {
            res.json(data);
        } else {
             console.log(err);
            res.json(err.error);
        }
    });
};
exports.saveUser=function(req, res, next) {
    var formData=req.body;
    var newUser=new User({
        username:formData.username,
        firstName:formData.fname,
        lastName:formData.lname,
        password:formData.pwd,
        email:formData.email,
        contactNo:formData.contact,
        address:{
            city:formData.city,
            State:formData.state,
            country:formData.country
        }

    });
    newUser.save(
        function (err,response) {
            if(err){
                console.log(err.errmsg);
                res.json(err.errmsg);
            }
            else{
                console.log(response);
                res.json(response);
            }

        });
};

exports.update = function(req, res, next) {
    User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
        if (err) {
            return next(err);
        }
        else {
            res.json(user);
        }
    });
};

exports.delete = function(req, res, next) {
    /*
     When callback is not passed, the action is not invoked on the collection
     until the exec() method is called.
     In this case I am not passing the callback and instead executing the action
     by invoking the exec() method.
     */
    User.find({ _id:req.body.id }).remove().exec(function callback (err, numAffected) {
        if (err) return console.error(err);
        console.dir(numAffected);
    });
};