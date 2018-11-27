var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    scss = require('gulp-scss'),
    rename = require('gulp-rename');


gulp.task('scss', function () {
    gulp.src(
        "./scss/build.scss"
    ).pipe(scss(

    )).pipe(gulp.dest("./css"));
});

gulp.task('browser-sync', function () { 
    browserSync({ 
        server: { 
            baseDir: './' 
        },
        notify: false 
    });
});
gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('./scss/*.scss', ['scss']); 
    gulp.watch('./*.html', browserSync.reload); 
    gulp.watch('./css/*.css', browserSync.reload); 
});