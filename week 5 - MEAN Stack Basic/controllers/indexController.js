/**
 * Created by madan.tamang on 12/31/2016.
 */

exports.getHomePage=function(req, res, next) {
    res.render('index', { title: 'Express' });
};
exports.partials = function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name);
};
