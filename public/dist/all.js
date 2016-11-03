'use strict';

angular.module('fifty-three', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/pencil');

  $stateProvider.state('paper', {
    url: '/paper',
    templateUrl: './app/paper/paper.html',
    controller: 'paperCtrl'
  }).state('pencil', {
    url: '/pencil',
    templateUrl: './app/pencil/pencil.html',
    controller: 'pencilCtrl'
  }).state('shop', {
    url: '/shop',
    templateUrl: './app/shop/shop.html',
    controller: 'shopCtrl'
  }).state('cart', {
    url: '/cart',
    templateUrl: './app/cart/cart.html',
    controller: 'shopCtrl'
  });
});
'use strict';

angular.module('fifty-three').controller('cartCtrl', function ($scope) {

  //===END CTRL=======
});
'use strict';

angular.module('fifty-three').service('cartService', function ($http, $q) {

  //===END SERVICE=======
});
'use strict';

angular.module('fifty-three').controller('paperCtrl', function ($scope) {});
'use strict';

angular.module('fifty-three').controller('pencilCtrl', function ($scope) {});
'use strict';

angular.module('fifty-three').controller('shopCtrl', function ($scope, shopService) {

  var getProducts = function getProducts() {
    shopService.getProducts().then(function (response) {
      console.log('response from server: ' + response);
      $scope.products = response;
    });
  };
  getProducts();
});
'use strict';

angular.module('fifty-three').service('shopService', function ($http, $q) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (response) {
      return response.data;
    });
  };
});
'use strict';

angular.module('fifty-three').directive('carouselDir', function () {

  return {
    restrict: 'E',
    templateUrl: './app/directives/carouselDir/carouselDir.html',
    controller: function controller($scope, carouselDirService) {

      $scope.gold = function () {
        console.log('gold dir');
        carouselDirService.gold();
        $scope.pencil = carouselDirService.pencil;
      };
      $scope.graphite = function () {
        carouselDirService.graphite();
        $scope.pencil = carouselDirService.pencil;
      };
      $scope.walnut = function () {
        carouselDirService.walnut();
        $scope.pencil = carouselDirService.pencil;
      };
      $scope.pencil = carouselDirService.pencil;

      $scope.addToCart = function (pencil) {
        console.log('controller to service: ');
        console.log(pencil);
        carouselDirService.addToCart(pencil);
      };
      //===JQUERY==================================
      $(function () {
        $('.gold').on('click', function () {
          $('.gold').removeClass('gold-h');
          $('.graphite').removeClass('selected');
          $('.walnut').removeClass('selected');
          $('.gold').addClass('selected');
          $('.graphite').addClass('graphite-h');
          $('.walnut').addClass('walnut-h');
        });
      });
      $(function () {
        $('.graphite').on('click', function () {
          $('.graphite').removeClass('graphite-h');
          $('.gold').removeClass('selected');
          $('.walnut').removeClass('selected');
          $('.graphite').addClass('selected');
          $('.gold').addClass('gold-h');
          $('.walnut').addClass('walnut-h');
        });
      });
      $(function () {
        $('.walnut').on('click', function () {
          $('.walnut').removeClass('walnut-h');
          $('.graphite').removeClass('selected');
          $('.gold').removeClass('selected');
          $('.walnut').addClass('selected');
          $('.graphite').addClass('graphite-h');
          $('.gold').addClass('gold-h');
        });
      });

      //===END CONTROLLER==
    }
    //===END RETURN========
  };
  //===END=================
});
'use strict';

angular.module('fifty-three').service('carouselDirService', function ($http, $q) {
  var _this = this;

  var gold = {
    name: 'Gold',
    price: 49.95,
    images: ['./../../images/pencil-gold-1.jpg', './../../images/pencil-gold-2.jpg', './../../images/pencil-gold-3.jpg']
  };
  var graphite = {
    name: 'Graphite',
    price: 49.95,
    images: ['./../../images/pencil-graphite-1.jpg', './../../images/pencil-graphite-2.jpg', './../../images/pencil-graphite-3.jpg']
  };
  var walnut = {
    name: 'Walnut + Magnetic Snap',
    price: 59.95,
    images: ['./../../images/pencil-walnut-1.jpg', './../../images/pencil-walnut-2.jpg', './../../images/pencil-walnut-3.jpg']
  };
  var pencils = [gold, graphite, walnut];

  this.pencil = pencils[0];

  this.gold = function () {
    console.log('gold service');
    _this.pencil = pencils[0];
    console.log(_this.pencil);
  };
  this.graphite = function () {
    _this.pencil = pencils[1];
    console.log(_this.pencil);
  };
  this.walnut = function () {
    _this.pencil = pencils[2];
    console.log(_this.pencil);
  };

  this.addToCart = function (pencil) {
    console.log('service to cart: ');
    console.log(pencil);
  };

  //==END=====
});
'use strict';

angular.module('fifty-three').directive('footerDir', function () {
  return {
    restrict: 'AE',
    templateUrl: './app/directives/footerDir/footerDir.html',
    controller: function controller($scope) {}
  };
});
'use strict';

angular.module('fifty-three').directive('navDir', function () {
  return {
    restrict: 'E',
    templateUrl: './app/directives/navDir/navDir.html',
    controller: function controller($scope) {}
  };
});
//# sourceMappingURL=all.js.map
