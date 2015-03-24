(function(){

  'use strict';
  var express = require('express');
  var app = express();

  app.use(express.static(__dirname));

  app.listen(9000, function(){
    console.log('App Listening on localhost:9000');
  });

})();