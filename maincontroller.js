var app= angular.module ('mainApp',['ngRoute']);

app.config (function($routeProvider){
$routeProvider
.when ('/', {templateURL:'login.html'
}) 
.when ('./header', {
    templateURL:'header.html'
}) 
.otherwise({redirectTo:'/'}) ;
});

app.controller ('loginCtrl', function ($scope,$location){
    $scope.submit=function() {

    var yourName=$scope.username;
    var mail=$scope.mail;
    var password=$scope.password;
    var branches=$scope.branches;
    if ($scope.username=='admin'&& $scope.password=='admin'){
        $location.path('/header');
    }
    else {alert ('משתמש לא קיים');
        

};
});