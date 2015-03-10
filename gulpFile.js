(function(){
  var gulp  = require('gulp');
  var $     = require('gulp-load-plugins')({lazy:false});

$.livereload();
$.livereload.listen();

var paths = {
  index: './index.html',
  root: '.',
  html: './**/*.html',
  scripts: './src/**/*.js',
  styles: './src/**/*.css'
}

gulp.task('default', $.sequence('inject', 'server', 'watch'));
gulp.task('server', startServer);
gulp.task('watch', startWatch);
gulp.task('inject', startInject)

function startServer(){
  require('./server');

}
function startWatch(){
  gulp.watch('./src/**/*.css', $.livereload.changed);
  gulp.watch('./src/**/*.js', $.livereload.changed);
  gulp.watch('./**/*.html', $.livereload.changed);
}

function startInject(){
  var target  = gulp.src( paths.index );
  var scripts = gulp.src( paths.scripts, {read:false} );
  var styles  = gulp.src( paths.styles, {read:false} );

  return target
    .pipe( $.inject( scripts,  {relative:true}) )
    .pipe( $.inject( styles,  {relative:true}) )
    .pipe( gulp.dest( paths.root ) );
}

})();