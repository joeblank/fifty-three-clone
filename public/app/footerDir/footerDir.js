angular.module('fifty-three')
.directive('footerDir', () => {
  return {
    restrict: 'AE',
    templateUrl: './app/footerDir/footerDir.html',
    controller: ($scope) => {

    }
  }
})
