const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
    return gulp.src('server/index.js')
        .pipe(babel({
            presets: ['transform-es2015-parameters']
        }))
        .pipe(gulp.dest('dist/server'));
});
