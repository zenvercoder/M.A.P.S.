require("./controllers/home.js")

var app = angular.module("MAPS", ['ngResource', 'ngAnimate', 'ngMaterial', 'ngMessages', 'ui.router', 'MAPS.home']);

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('pink')
        .accentPalette('orange');
});

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: 'home',
        url: '/',
        templateUrl: '/views/home.html',
        controller: 'HomeCtrl'
    });

    $urlRouterProvider.otherwise('/');
});

app.controller('MainToolbarCtrl', function ($scope, $timeout, $mdSidenav) {
    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId, $scope) {
        return function () {
            $mdSidenav(componentId).toggle();
            // $scope.imagePath = '../images/treasuremap1.jpg';
        }
    }
});

// .config(function ($routeProvider, $locationProvider) {
//     $routeProvider
//         .when('/', {
//             templateUrl: '/views/home.html',
//             controller: 'homeController'
//         })
//         .when('/addQuest', {
//             templateUrl: '/views/addQuestForm.html',
//             controller: 'AddQuest'
//         })
//         .otherwise(
//             {redirectTo: '/'}
//         );
//     $locationProvider.html5Mode(true);
// });

module.exports = app.name;
