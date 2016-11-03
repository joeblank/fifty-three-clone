angular.module('fifty-three')
.directive('navDir', () => {
  return {
    restrict: 'E',
    templateUrl: './app/directives/navDir/navDir.html',
    controller: ($scope) => {
      
    }
  }
})
