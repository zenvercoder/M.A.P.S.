var app = angular.module("maps", ["ngMaterial", "ngResource", "ngMessages"])
    .config(function ($mdThemingProvider, $mdIconProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('orange');

        $mdIconProvider
            .defaultIconSet('node_modules/material-design-icons/iconfont/MaterialIcons-Regular.svg', 24);
    });

app.factory('QuestsDS', function ($resource) {
    var data = $resource('/quests/:quest', {quest: '@quest'}, {
        update: {
            method: 'PUT'
        }
    });
    return data;
});

app.controller('DialogController', function ($scope, $mdDialog) {
    $scope.quest = {};

    $scope.save = function () {
        $mdDialog.hide($scope.quest);
    };

    $scope.cancel = function(){
        $mdDialog.cancel();
    }
});

app.controller('QuestsController', function ($scope, $mdDialog, QuestsDS) {
    // used for the dropdown menu
    var originatorEv;

    $scope.showForm = function(){
        $mdDialog.show({
            controller: 'DialogController',
            templateUrl: '../form.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true
        })
            .then(function(newQuest) {
                // add a new quest to quests array
                $scope.quests.push(QuestsDS.save(newQuest));
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
    };

    $scope.menuItems = [
        {key: 'date', label: 'Date'},
        {key: 'title', label: 'Title'},
        {key: 'votes', label: 'Votes'}
        ];

    $scope.sorting = {
        columnName: 'date',
        desc: true
    };

    $scope.quests = QuestsDS.query();

    $scope.openMenu = function ($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };

    $scope.sort = function sort(by) {
        if ($scope.sorting.columnName == by) {
            $scope.sorting.desc = !$scope.sorting.desc;
        } else {
            $scope.sorting.desc = true;
        }
        $scope.sorting.columnName = by;
    };

    $scope.upvote = function(quest){
        likes = quest.likes++;
    };

    $scope.downvote = function(quest){
        likes = quest.likes--;
    };
});




