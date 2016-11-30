module.exports = angular.module("MAPS.tiles", [require("../services/maps.js")])
    .controller('TilesCtrl', function ($scope, TileDS) {
        $scope.tiles = TileDS.query();
    }).name;
