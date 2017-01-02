var mongoose = require('mongoose');

var BookSchema=new mongoose.Schema({
    title:{type:String,require:true,unique:true,index:true},
    isbn:String,
    pageCount:String,
    publishedDate:{type:Date,Default:Date.now()},
    thumbnailUrl:{type:String,default:"http://placehold.it/800x500"},
    shortDescription: {type: String},
    longDescription:String,
    status:{type:Boolean,default:"PUBLISH"},
    authors:[{type:String}],
    categories:[{type:String}],
    price:{type:Number,default:99}

});

module.exports=mongoose.model("bookcatalog",BookSchema);

