angular.module('fifty-three')
.directive('carouselDir', () => {

  return {
    restrict: 'E',
    templateUrl: './app/directives/carouselDir/carouselDir.html',
    controller: ($scope, carouselDirService, authService) => {

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

      $scope.addToCart = (pencil) => {
        console.log('controller to service: ');
        console.log(pencil);
        carouselDirService.addToCart(pencil);
      };

      $scope.register = (user) => {
        authService.registerUser(user).then((response) => {
          if (!response.data) {
            alert('unable to create user');
          } else {
            alert('user created');
            $scope.newUser = {};
          }
        }).catch((err) => {
          alert('unable to create user');
        });
      };
      //===JQUERY==================================
      $(() =>  {
        $('.gold').on('click', () => {
          $('.gold').removeClass('gold-h');
          $('.graphite').removeClass('selected');
          $('.walnut').removeClass('selected');
          $('.gold').addClass('selected');
          $('.graphite').addClass('graphite-h');
          $('.walnut').addClass('walnut-h')
          })
        });
      $(() =>  {
        $('.graphite').on('click', () => {
          $('.graphite').removeClass('graphite-h');
          $('.gold').removeClass('selected');
          $('.walnut').removeClass('selected');
          $('.graphite').addClass('selected');
          $('.gold').addClass('gold-h');
          $('.walnut').addClass('walnut-h')
          })
        });
      $(() =>  {
        $('.walnut').on('click', () => {
          $('.walnut').removeClass('walnut-h');
          $('.graphite').removeClass('selected');
          $('.gold').removeClass('selected');
          $('.walnut').addClass('selected');
          $('.graphite').addClass('graphite-h');
          $('.gold').addClass('gold-h')
          })
        });


    //===END CONTROLLER==
    }
  //===END RETURN========
  }
//===END=================
})
