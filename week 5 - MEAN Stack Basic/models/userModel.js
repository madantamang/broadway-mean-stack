var mongoose = require('mongoose');

var UserSchema=new mongoose.Schema({
    username:{type:String,require:true,unique:true,index:true},
    firstName:String,
    lastName:String,
    password:{type:String,unique:true},
    ContactNo:{type:Number},
    email: {type: String, index: true, lowercase: true},
    address:{
        city:String,
        State:String,
        country:String
    },
    dob: { type: Date, default: Date.now },
    isAdmin: {type:Boolean,default:false},

    active:{type:Boolean,default:true},
    createdAt: {type: Date, default: Date.now}
});

UserSchema.pre('save', function(next) {
    // var user = this;
    // if (this.isModified('password') || this.isNew) {
    //     bcrypt.genSalt(10, function (err, salt) {
    //         if (err) {
    //             return next(err);
    //         }
    //         bcrypt.hash(user.password, salt, function(err, hash) {
    //             if (err) {
    //                 return next(err);
    //             }
    //             user.password = hash;
    //             next();
    //         });
    //     });
    // } else {
    //     return next();
    // }
    next();
});
UserSchema.methods.validPassword = function(password) {
    // bcrypt.compare(pw, this.password, function(err, isMatch) {
    //     if (err) {
    //         return cb(err);
    //     }
    //     cb(null, isMatch);
    // });
};
module.exports=mongoose.model("User",UserSchema);

