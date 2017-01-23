var gulp = require('gulp');
gulp.task('inject',function () {
    var wiredep = require('wiredep').stream;
    var options={
        bowerJson : require('./bower.json'),
        directory:'./public/lib',
        ignorePath:'../public'
    };
    
    return gulp.src(['./views/*.ejs']).pipe(wiredep(options))
        .pipe(gulp.dest('./views'));
});