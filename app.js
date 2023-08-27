'use strict';
(function () {

angular.module('LunchCheck', [])
.controller('LunchController', LunchController)


LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.listOfItems = '';
  $scope.message = 'Please enter your food list first!';

  $scope.checkItem = function() {
    if ($scope.listOfItems.length == 0) {
      return $scope.message = 'Please enter your food list first!';
    } 
    else {
      let listItems = $scope.listOfItems.split(',').filter(value => value.trim().length != 0);
      if (listItems.length <= 3) {
        $scope.message = 'Enjoy!';
      }
      else {
        $scope.message = 'Too much!';
      }      
    }
  }
}

})();