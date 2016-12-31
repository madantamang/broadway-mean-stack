var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    //mongodb://localhost/database
    var url="mongodb://localhost:27017/broadwayDb";
//mongodb://username:password@hostname:port/database
    var db = mongoose.connect(config.dev.db);
   
    var connection=mongoose.connection;

    connection.on('connected', function(){
        console.log('Mongoose connected to ' + url);
    });

    connection.on("open",function () {
        console.log("Connection open on  " + url)
    });

    connection.on('error', function() {
        console.log("Sorry, there is no mongo db server running.")
    });
    return db;
};