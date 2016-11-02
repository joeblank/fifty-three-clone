angular.module('fifty-three')
.directive('footerDir', () => {
  return {
    restrict: 'AE',
    templateUrl: './app/directives/footerDir/footerDir.html',
    controller: ($scope) => {

    }
  }
})
