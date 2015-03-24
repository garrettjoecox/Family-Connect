(function(){
  var gulp  = require('gulp');

gulp.task('default', startServer);

function startServer(){
  require('./server');
}

})();