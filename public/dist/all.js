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

angular.module('fifty-three').service('authService', function ($http) {

  this.registerUser = function (user) {
    return $http({
      method: 'POST',
      url: '/register',
      data: user
    }).then(function (response) {
      return response;
    });
  };
});
'use strict';

angular.module('fifty-three').controller('cartCtrl', function ($scope, cartService) {

  $scope.fake = [{
    name: 'Pencil',
    price: 49.95,
    desc: 'Gold',
    quantity: 1,
    image: './../../images/pencil-gold-graylightest_medium.jpg'
  }, {
    name: 'Pencil',
    price: 59.95,
    desc: 'Walnut',
    quantity: 1,
    image: './../../images/pencil-walnut-graylightest_medium.jpg'
  }, {
    name: 'Pencil',
    price: 59.95,
    desc: 'Walnut',
    quantity: 2,
    image: './../../images/pencil-walnut-graylightest_medium.jpg'
  }, {
    name: 'Pencil',
    price: 59.95,
    desc: 'Walnut',
    quantity: 5,
    image: './../../images/pencil-walnut-graylightest_medium.jpg'
  }];

  //===GET CART====
  $scope.getCart = function () {
    cartService.getCart().then(function (response) {
      console.log('cartCtrl: ');
      console.log(response);
      $scope.cart = response;
    });
  };
  $scope.getCart();
  //===CHANGE QTY OF ITEM========
  $scope.sub = function (item) {

    cartService.sub(item);
  };
  $scope.add = function (item) {
    cartService.add(item);
  };
  //===SUBTOTAL==============
  $scope.subtotal = function () {};

  $scope.log = function (item) {
    console.log(item.qty);
  };

  //===END CTRL=======
});
'use strict';

angular.module('fifty-three').service('cartService', function ($http, $q) {

  this.getCart = function () {
    return $http({
      method: 'GET',
      url: '/api/cart'
    }).then(function (response) {
      console.log('cart service: ');
      console.log(response);
      return response.data;
    });
  };

  this.sub = function (item) {
    return $http({
      method: 'PUT',
      url: '/api/update-cart',
      data: {
        id: item.id,
        qty: item.qty
      }
    });
  };

  //===END SERVICE=======
});
'use strict';

angular.module('fifty-three').controller('paperCtrl', function ($scope) {});
'use strict';

angular.module('fifty-three').controller('pencilCtrl', function ($scope) {});
"use strict";

$(window).scroll(function () {

  var winScroll = $(this).scrollTop();

  //commented out console.log so it's not
  //logging all the time! Uncomment to debug.
  // console.log(winScroll);


  if (0 < winScroll) {
    $('.p-1').css({
      "z-index": "2"
    });
    $('.p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
      "z-index": "-1"
    });
  };
  if (5409 < winScroll) {
    $('.p-2').css({
      "z-index": "2"
    });
    $('.p-1, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
      "z-index": "-1"
    });
  };
  if (5429 < winScroll) {
    $('.p-3').css({
      "z-index": "2"
    });
    $('.p-1, .p-2, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
      "z-index": "-1"
    });
  };
  if (5449 < winScroll) {
    $('.p-4').css({
      "z-index": "2"
    });
    $('.p-1, .p-2, .p-3, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
      "z-index": "-1"
    });
  };
  if (5469 < winScroll) {
    $('.p-5').css({
      "z-index": "2"
    });
    $('.p-1, .p-2, .p-3, .p-4, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
      "z-index": "-1"
    });
  };
  if (5489 < winScroll) {
    $('.p-6').css({
      "z-index": "2"
    });
    $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-7, .p-8, .p-9, .p-10, .p-11').css({
      "z-index": "-1"
    });
  };
  if (5509 < winScroll) {
    $('.p-7').css({
      "z-index": "2"
    });
    $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-8, .p-9, .p-10, .p-11').css({
      "z-index": "-1"
    });
  };
  if (5529 < winScroll) {
    $('.p-8').css({
      "z-index": "2"
    });
    $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-9, .p-10, .p-11').css({
      "z-index": "-1"
    });
  };
  if (5549 < winScroll) {
    $('.p-9').css({
      "z-index": "2"
    });
    $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-10, .p-11').css({
      "z-index": "-1"
    });
  };
  if (5569 < winScroll) {
    $('.p-10').css({
      "z-index": "2"
    });
    $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-11').css({
      "z-index": "-1"
    });
  };
  if (5589 < winScroll) {
    $('.p-11').css({
      "z-index": "2"
    });
    $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10').css({
      "z-index": "-1"
    });
  };
});
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
    controller: function controller($scope, carouselDirService, authService) {

      $scope.hideModal = true;

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

      $scope.register = function (user) {
        authService.registerUser(user).then(function (response) {
          if (!response.data) {
            alert('unable to create user');
          } else {
            alert('user created');
            $scope.newUser = {};
          }
        }).catch(function (err) {
          alert('unable to create user');
        });
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
