var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', ['$scope', function($scope){
  $scope.message = "Hey Y'all"

  $scope.ninjas = [
    {
      name: 'yoshi',
      belt: 'green',
      rate: 50,
      available: true
    },
    {
      name: 'crystal',
      belt: 'yellow',
      rate: 30,
      available: true
    },
    {
      name: 'Ryu',
      belt: 'orange',
      rate: 10,
      available: false
    },
    {
      name: 'shaun',
      belt: 'black',
      rate: 1000,
      available: true
    }
  ]
}])

// myNinjaApp.config(function(){

// })
// config runs before application does

// myNinjaApp.run(function(){

// })
// run runs when application does