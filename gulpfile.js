var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var babel = require('gulp-babel');
var minifyjs = require('gulp-js-minify');
var webserver = require('gulp-webserver');
var sourcemaps = require('gulp-sourcemaps');

var stylus = require('gulp-stylus');
var typographic = require('typographic');
var nib = require('nib');
var cleanCSS = require('gulp-clean-css');
var rupture = require('rupture');
var wait = require('gulp-wait');



//`gulp js` command for js files to compile
gulp.task('js', function () {
  return gulp.src("public/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    //.pipe(minifyjs())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"));
});


gulp.task('styles', function(){
    gulp.src('public/css/**/*.styl')
        .pipe(stylus({
            use: [typographic(), nib(), rupture()]
        }))
        .pipe(gulp.dest('./public/css/'));
});



gulp.task('watch:styles', function(){
    gulp.watch('public/css/**/*.styl', ['styles']);
});


gulp.task('minify-css', function() {
    return gulp.src('public/css/novarickStyle.css')
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('public/min_css/'));
});



//`gulp style` command for scss file to compile
gulp.task('sass', function () {
    var tailwindcss = require('tailwindcss');

    return gulp.src('./assets/**/*.scss')
        
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            tailwindcss('./tailwind.js'),
            require('autoprefixer'),
        ]))
        .pipe(gulp.dest('public/css'));
});




//watch command for `js` and `style`
gulp.task('watch', function() {
  gulp.watch('public/**/*.js', ['js']);
  gulp.watch('public/assets/tailwind.scss', ['sass']);
});

//live reload webserver 
//make sure will have included index file
// within dist/build(whatever you call) directory

/*
gulp.task('webserver', function() {
    gulp.src('src/assets/')
        .pipe(webserver({
            livereload: true,
            port: 3000,
            open: true
        }));
});
*/

//default action of `gulp` command
// 'webserver'
gulp.task('default', ['styles', 'watch:styles', 'minify-css', 'watch', 'sass']);