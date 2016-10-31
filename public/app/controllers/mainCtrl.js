angular.module('fifty-three')
.controller('mainCtrl', ($scope, mainService) => {

  $scope.broken = mainService.broken;


})
