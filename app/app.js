require("./controllers/home.js")

var app = angular.module("MAPS", ['ngResource', 'ngAnimate', 'ngMaterial', 'ngMessages', 'ui.router', 'MAPS.home']);

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('pink')
        .accentPalette('orange');
});

app.config(function ($stateProvider, $urlRouterProvider) {
    // add another route here, then add controller.
    // also need js file, html file, will need to require it in index.js
    $stateProvider.state({
        name: 'home',
        url: '/',
        template: require('./views/home.html'),
        controller: 'HomeCtrl'
    })
        .state({
        name: 'quest',
        url: '/quest',
        template: require('./views/quest.html')
        // controller: 'QuestCtrl'
    });

    $urlRouterProvider.otherwise('/');
});

app.controller('MainToolbarCtrl', function ($scope, $timeout, $mdSidenav) {
    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId, $scope) {
        return function () {
            $mdSidenav(componentId).toggle();
            // $scope.imagePath = '../../images/treasuremap1.jpg';
        }
    }
});

module.exports = app.name;
