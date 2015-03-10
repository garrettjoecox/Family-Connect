(function(){
angular.module('app.core')
  .controller('SettingsController', SettingsController);

function SettingsController($rootScope){
  this.color = $rootScope.color;
  this.username = $rootScope.username;
  var _this = this;
  this.save = function(){
    $rootScope.color = _this.color;
    $rootScope.username = _this.username;
  };
}





}).call(this);
