/**
 * Created by asus on 2018/1/8.
 */
var gulp = require('gulp');//表示引进gulp模块
var sass = require('gulp-sass');//表示引进gulp模块
gulp.task('sass', function(){
    //sass()方法用于转换sass到css
    return gulp.src('scss/index.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('css/'))
});

gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['sass']);
    // Other watchers
});