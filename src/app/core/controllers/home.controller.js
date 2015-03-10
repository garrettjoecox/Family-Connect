(function(){

angular.module('app.core')
  .controller('HomeController', HomeController);

function HomeController($firebaseArray, $rootScope, $anchorScroll){
  this.messages = $firebaseArray(new Firebase("https://yourfamily.firebaseio.com/Families/Cox/Messages"));
  this.newMessage = {
    username: $rootScope.username,
    text: '',
    timestamp: '',
    color: $rootScope.color
  };

  this.sendMessage = sendMessage;
}

function sendMessage(){
  var messagesRef = new Firebase("https://yourfamily.firebaseio.com/Families/Cox/Messages");
  this.newMessage.timestamp = Date.now();
  messagesRef.push(this.newMessage);
  this.newMessage.text = '';
}

}).call(this);