var express = require("express");
var app = express();
var router=require('./router.js')
var path = __dirname + '/views/';


app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});