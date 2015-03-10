(function(){

angular.module('app.core', ['ui.router', 'firebase'])
  .config(function($stateProvider){
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'src/app/core/views/home.html',
        controller: 'HomeController as home'
      });
  });

}).call(this);