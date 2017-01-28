/**
 * Created by madan.tamang on 12/29/2016.
 */
var port = 3000;

module.exports = {
    dev: {
        port: port,
        db: 'mongodb://localhost:27017/broadwayDb'
    },
    prod:{
        port: port,
        db: 'mongodb://localhost:27017/broadwayDb'
    }
};

//process.env.NODE_ENV
//set NODE_ENV=Dev
