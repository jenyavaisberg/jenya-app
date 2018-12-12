var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when ('/homepage', {
    templateUrl:'views/homepage.html'
    })

  .when ('/rooms', {
      templateUrl:'views/rooms.html',
        controller: 'RoomsController'
    })
  .otherwise ({redirectTo:'/homepage'});

}]);

myApp.controller('RoomsController',['$scope','$http', function ($scope,$http){
  $scope.removeRoom =function (room) {
    var removeRoom=$scope.rooms.indexOf(room);
    $scope.rooms.splice(removeRoom,1);
  }
$scope.addRoom=function(){
  $scope.rooms.push({
    name: $scope.newroom.name,
    size: $scope.newroom.size,
    type: $scope.newroom.type,
    available:true
  });
   $scope.newroom.name="";
   $scope.newroom.size="";
   $scope.newroom.type="";
   available:true
};

$http.get('data/rooms.json').success(function(data){
  $scope.rooms=data;
});
}]);
