var User = require('../models/userModel');
var jwt = require('jsonwebtoken');


exports.loginUser=function (req,res){
  User.findOne({'username':req.body.username,"password":req.body.password},function(err,user){
      if(err){
          res.send({ success: false, message: 'Authentication failed. User not found.' });
      }
      // Create token if the password matched and no error was thrown
      var token = jwt.sign(user, "putsomethingtopsecrethere", {
          expiresIn: 10080 // in seconds
      });
      res.json({ success: true, token: 'JWT ' + token });
  })
};
exports.getUserList= function(req, res) {
    console.log('session',req.user);
    User.find(function (err,data) {
        if(err)
            res.json('error');
        res.json(data);
    });
    };

exports.findUser=function(req, res) {
    console.log(req.user);
    User.findById(req.user._id, function (err, data) {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
             console.log(data);
            res.json({title:"profile" + data.firstName,profiledata:req.user});
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
                return res.json({ success: false, message: 'That email address already exists.'});
            }
            else{
                console.log(response);
                res.json({ success: true, message: 'Successfully created new user.' });
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