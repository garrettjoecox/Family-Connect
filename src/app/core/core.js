(function(){

angular.module('app.core', ['ui.router', 'firebase'])
  .config(function($stateProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/app/core/views/home.html',
        controller: 'HomeController as home'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'src/app/core/views/login.html',
        controller: 'AuthController as auth'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'src/app/core/views/settings.html',
        controller: 'SettingsController as settings'
      })
  });

}).call(this);