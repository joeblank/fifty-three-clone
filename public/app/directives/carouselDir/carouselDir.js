angular.module('fifty-three')
.directive('carouselDir', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/carouselDir/carouselDir.html',
    controller: ($scope, carouselDirService) => {

      $scope.gold = () => {
        console.log('gold dir')
        carouselDirService.gold();
        $scope.pencil = carouselDirService.pencil;
      } ;
      $scope.graphite = () => {
        carouselDirService.graphite();
        $scope.pencil = carouselDirService.pencil;
      };
      $scope.walnut = () => {
        carouselDirService.walnut();
        $scope.pencil = carouselDirService.pencil;
      };
      $scope.pencil = carouselDirService.pencil;

      $(function () {
        $('.gold').on('click', function() {
          $('.gold').removeClass('gold-h');
          $('.gold').addClass('selected')
          })
        })



    }
  }



})
