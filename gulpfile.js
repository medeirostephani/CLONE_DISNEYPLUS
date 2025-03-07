const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

function styles() {
    return gulp.src('./src/styles/*.scss') /*recupera o arquivo de origem*/
        .pipe(sass({outputStyle: 'compressed'})) /*comprime o css*/
        .pipe(gulp.dest('./dist/css')); /*destino do css comprimido*/
}

function images() {
    return gulp.src('./src/images/**/*', {encoding: false}) /* ** é pasta, * é arquivo*/
        .pipe(imagemin()) /*executa a função*/
        .pipe(gulp.dest('./dist/images')); /*destino do arquivo comprimido*/
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}