var User = require('../models/userModel');


exports.loginUser=function (req,res){
  User.findOne({'username':req.body.username,"password":req.body.password},function(err,data){
      if(err){
          res.redirect("/login");
      }
      req.session.isAuth=true;
      req.session.user=data;
      res.redirect("/users/profile");
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
    console.log('session',req.session.user._id);
    User.findById(req.session.user._id, function (err, data) {
        if (err) {
            console.log(err);
            res.render("error",err);
        } else {
             console.log(data);
            res.render("profile",{title:"profile" + data.firstName,profiledata:req.session.user});
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