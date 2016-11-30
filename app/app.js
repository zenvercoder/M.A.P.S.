var app = angular.module("MAPS", ['ngResource', 'ngAnimate', 'ngMaterial', 'ngMessages', 'ui.router',
    require("./controllers/home.js"),
    require("./controllers/quest.js"),
    require("./controllers/dashboard.js"),
    require("./controllers/tiles.js")]);

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('pink')
        .accentPalette('orange');
});

app.config(function ($stateProvider, $urlRouterProvider) {
    // add another route here, then add controller.
    // also need js file, html file, will need to require it in index.js
    $stateProvider
        .state({
            name: 'home',
            url: '/',
            template: require('./views/home.html'),
            controller: 'HomeCtrl'
        })
        .state({
            name: 'quest',
            url: '/quest',
            template: require('./views/quest.html'),
            controller: 'QuestCtrl'
        })
        .state({
            name: 'dashboard',
            url: '/dashboard',
            template: require('./views/dashboard.html'),
            controller: 'DashCtrl'
        })
        .state({
            name: 'tiles',
            url: '/tiles',
            template: require('./views/tiles.html'),
            controller: 'TilesCtrl'
        });

    $urlRouterProvider.otherwise('/');
});

app.controller('MainToolbarCtrl', function ($scope, $timeout, $mdSidenav) {
    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        }
    }
});


module.exports = app.name;