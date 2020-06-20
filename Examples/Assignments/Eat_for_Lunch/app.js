(function () {
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchAppController);

LunchAppController.$inject=['$scope'];
function LunchAppController($scope) {
  $scope.name= "";
  $scope.qtyItems= 0;
  $scope.ms= ""; //check Message

  $scope.checkIfEmpty = function () {
    var str = $scope.name;
    var spl = str.split(',');
    var count= 0;
    for (var i=0; i<spl.length; i++){
      if(spl[i].trim()!=""){
        count++;
      }
    }
    $scope.qtyItems = count;
  }
  $scope.messageQuantity = function () {

    if($scope.qtyItems==0){
      $scope.ms= "Please enter data first";
    } else if($scope.qtyItems<=3) {
      $scope.ms= "Enjoy!";
    } else{
      $scope.ms= "Too much!";
    }

  }



}

})();
