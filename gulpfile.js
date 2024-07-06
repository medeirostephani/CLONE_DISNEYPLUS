const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss') /*recupera o arquivo de origem*/
        .pipe(sass({outputStyle: 'compressed'})) /*comprime o css*/
        .pipe(gulp.dest('./dist/css')); /*destino do css comprimido*/
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}