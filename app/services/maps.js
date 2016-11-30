module.exports = angular.module('MAPS.services',["ngResource"])
    .factory('TileDS', function ($resource) {
        var data = $resource('/rest/tile', {tile: '@id'}, {
            update: {
                method: 'PUT',
                isArray:false
            }
        });
        return data;
    }).name;
