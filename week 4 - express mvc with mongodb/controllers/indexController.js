/**
 * Created by madan.tamang on 12/31/2016.
 */

exports.getHomePage=function(req, res, next) {
    res.render('index', { title: 'Express' });
};

exports.getSignUpPage=function(req, res, next) {
    res.render('signup', { title: 'Sign Up' });
};

exports.getLoginPage=function(req, res, next) {
    res.render('login', { title: 'Login' });
};

exports.logoutUser=function(req, res, next) {
    req.session.destroy();
    res.redirect("/");
};