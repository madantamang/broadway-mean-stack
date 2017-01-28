var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var User = require('./models/userModel');

module.exports=function(passport) {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = "putsomethingtopsecrethere";
    passport.use(new JwtStrategy(opts,
        function (jwt_payload, done) {
            User.findOne({id: jwt_payload.id}, function (err, user) {
                if (err) {
                    return done(err,false);
                }
                if (!user) {
                    return done(null, false);
                }
                // if (!user.validPassword(password)) {
                //     return done(null, false, {message: 'Incorrect password.'});
                // }
                return done(null, user);
            });
        }
    ));
};