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

    /*$scope.registrations = [
        {
            "name": "İrem Küçükali",
            "organization": "beraber",
            "title": "cofounder"
        }, {
            "name": "Hüseyin Küçükali",
            "organization": "beraber",
            "title": "cofounder"
        }, {
            "name": "Elif Okur",
            "organization": "beraber",
            "title": "cofounder"
        }
    ];*/


}]);
