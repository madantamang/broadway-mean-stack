/**
 * Created by madan.tamang on 12/26/2016.
 */
var gulp = require('gulp');
gulp.task('inject',function () {
var wiredep = require('wiredep').stream;
var options={
    bowerJson : require('./bower.json'),
    directory:'./public/lib',
    ignorePath:'..'
};
    return gulp.src('./views/index.ejs').pipe(wiredep(options))
        .pipe(gulp.dest('./views'));
});