app.controller("PrinterCtrl", ["$scope", "$http", "$filter", "$rootScope", function ($scope, $http, $filter, $rootScope) {


    $scope.event = {};
    $scope.hideForm = false;
    $scope.hideBadges = true;

    $scope.createBadges = function () {
        $scope.hideForm = true;
        $scope.event.registrations = JSON.parse($scope.registrations);
        $scope.background = {"background-image": "url('" + $scope.backgroundImage + "')"};
        $scope.hideBadges = false;
    };

}]);
