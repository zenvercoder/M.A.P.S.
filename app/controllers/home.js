module.exports = angular.module("MAPS.home", [require("../services/maps.js")])
    .controller('HomeCtrl', function ($scope, TileDS) {
        console.log("loaded home controller more test test test");
        $scope.tiles = TileDS.query();
    }).name;
