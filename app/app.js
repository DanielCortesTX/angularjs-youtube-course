var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html'
  }).when('/directory', {
    templateUrl: 'views/directory.html',
    controller: 'NinjaController'
  }).otherwise({
    redirectTo: '/home'
  })
}])

myNinjaApp.controller('NinjaController', ['$scope', function($scope){

  $scope.removeNinja = function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja)
    $scope.ninjas.splice(removedNinja, 1)
  } 
  $scope.addNinja = function(){
    $scope.ninjas.push({
      name: $scope.newninja.name,
      belt: $scope.newninja.belt,
      rate: parseInt($scope.newninja.rate),
      available: true
    });
    $scope.newninja.name = "";
    $scope.newninja.belt = "";
    $scope.newninja.rate = "";
  }

  $scope.ninjas = [
    {
      name: 'yoshi',
      belt: 'green',
      rate: 50,
      available: true,
      thumbnail:"http://placehold.it/50x50/666666/ffffff"
    },
    {
      name: 'crystal',
      belt: 'yellow',
      rate: 30,
      available: true,
      thumbnail:"http://placehold.it/50x50/666666/ffffff"
    },
    {
      name: 'Ryu',
      belt: 'orange',
      rate: 10,
      available: false,
      thumbnail:"http://placehold.it/50x50/666666/ffffff"
    },
    {
      name: 'shaun',
      belt: 'black',
      rate: 1000,
      available: true,
      thumbnail:"http://placehold.it/50x50/666666/ffffff"
    }
  ]
}])

// myNinjaApp.config(function(){

// })
// config runs before application does

// myNinjaApp.run(function(){

// })
// run runs when application does