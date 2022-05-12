var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
});

myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {
    
    $scope.people = [
        {
            name: 'Joe Doe',
            address: '555 Main St.',
            city: 'New York',
            state: 'NY',
            zip: '11111'
        },
        {
            name: 'Jane Doe',
            address: '333 Second St.',
            city: 'Buffalo',
            state: 'NY',
            zip: '22222'
        }, 
        {
            name: 'George Doe',
            address: '555 Main St.',
            city: 'Miami',
            state: 'NY',
            zip: '33333'
        }, 
        {
            name: 'David Doe',
            address: '555 Main St.',
            city: 'New York',
            state: 'NY',
            zip: '44444'
        }
    ]
    
    $scope.formattedAddress = function(person) {
        return person.address + ', ' + person.city + ', ' + person.state + ', ' + person.zip;   
    }
}]);


myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {
    
    
    
}]);

myApp.directive('searchResult', function () {
    return {
        restrict: 'AEC',
        templateUrl: 'directives/searchresult',
        replace: true,
        scope: {
            personeObject :  '=',
            formattedAddressFunction: '&'
        },
        transclude:
    }
});