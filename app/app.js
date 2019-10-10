var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', ['$scope', function($scope){
  $scope.message = "Hey Y'all"

  $scope.ninjas = ['yoshi', 'crystal', 'ryu', 'shaun']
}])

// myNinjaApp.config(function(){

// })
// config runs before application does

// myNinjaApp.run(function(){

// })
// run runs when application does