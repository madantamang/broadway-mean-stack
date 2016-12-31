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
    next();
});
UserSchema.methods.validPassword = function(password) {
};
module.exports=mongoose.model("User",UserSchema);

