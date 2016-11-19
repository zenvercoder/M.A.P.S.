angular
    .element( document )
    .ready( function() {
        var body = document.getElementsByTagName("body")[0];
        // require will return MAPS from app.js
        angular.bootstrap( body, [ require("./app.js") ]);
    });

