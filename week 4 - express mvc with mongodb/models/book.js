var mongoose = require('mongoose');

var BookSchema=new mongoose.Schema({
    title:{type:String,require:true,unique:true,index:true},
    isbn:String,
    pageCount:String,
    publishedDate:{type:Date,Default:Date.now()},
    thumbnailUrl:{type:String},
    shortDescription: {type: String},
    longDescription:String,
    status:Boolean,
    authors:[{type:String}],
    categories:[{type:String}]

});

module.exports=mongoose.model("bookCatalog",BookSchema);

