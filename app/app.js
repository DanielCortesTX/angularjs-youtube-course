var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);

myNinjaApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'NinjaController'
  }).when('/directory', {
    templateUrl: 'views/directory.html',
    controller: 'NinjaController'
  }).otherwise({
    redirectTo: '/home'
  })
}]);

myNinjaApp.directive('randomNinja', [function(){
  return {
    restict: 'E',
    scope: {
      ninjas: '=',
      title: '='
    },
    templateUrl: 'views/random.html',
    transclude: true,
    replace: true,
    controller: function($scope){
      $scope.random = Math.floor(Math.random() * 4)
    }
  };
}])

myNinjaApp.controller('NinjaController', ['$scope', '$http', function($scope, $http){

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

  $http.get('data/ninjas.json').then(function(data){
    $scope.ninjas = data.data;
  })
  
}])

// angular.toJson($scope.ninjas)

// myNinjaApp.config(function(){

// })
// config runs before application does

// myNinjaApp.run(function(){

// })
// run runs when application does