var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');



gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});


gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: './' // Директория для сервера - app
		},
		notify: false // Отключаем уведомления
	});
});
 
gulp.task('watch', ['browser-sync'], function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./**.html',browserSync.reload);
});


gulp.task('build', [ 'sass'], function() {
	var buildCss = gulp.src([ // Переносим библиотеки в продакшен
		'app/css/main.css',
		'app/css/libs.min.css'
		])
	.pipe(gulp.dest('dist/css'))

	var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
	.pipe(gulp.dest('dist/fonts'))

	var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
	.pipe(gulp.dest('dist/js'))

	var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
	.pipe(gulp.dest('dist'));

});

gulp.task('default',['watch']);