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
    url: '/cart/:userid',
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

  this.login = function (user) {
    return $http({
      method: 'POST',
      url: '/login',
      data: user
    }).then(function (response) {
      return response;
    });
  };

  this.getCurrentUser = function () {
    return $http({
      method: 'GET',
      url: '/me'
    });
  };

  this.getUserOrder = function (userid) {
    return $http({
      method: 'GET',
      url: '/api/order/' + userid
    });
  };

  this.addToCart = function (orderid, productid, qty) {
    return $http({
      method: "POST",
      url: '/api/add/item/cart/' + orderid,
      data: {
        id: productid,
        qty: qty
      }
    });
  };
});
'use strict';

angular.module('fifty-three').controller('cartCtrl', function ($scope, cartService) {

  $scope.something = cartService.something;

  //===GET CART====


  //===CHANGE QTY OF ITEM========


  //===SUBTOTAL==============


  //===END CTRL=======
});
'use strict';

angular.module('fifty-three').service('cartService', function ($http, $q, $state) {

  // this.getUserOrder = function (userid) {
  //   return $http({
  //     method: 'GET',
  //     url: '/api/order/' + userid
  //   }).then(function (user_basket) {
  //     console.log('user order: ')
  //     console.log(user_basket);
  //     const orderid = user_basket.data.order.id;
  //     cartService.addToCart(orderid, pencil.product_id, 1)
  //     .then(function (response) {
  //       console.log(response)
  //         $state.go('cart');
  //     })
  //   })
  // };


  // this.addToCart = (orderid, productid, qty) => {
  //   return $http({
  //     method: "POST",
  //     url: '/api/add/item/cart/' + orderid,
  //     data: {
  //       id: productid,
  //       qty: qty
  //     }
  //   }).then((response) => {
  //     console.log(response)
  //     this.something = response.data.products;
  //       $state.go('cart');
  //   })
  // };


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

  var scrollLocation = 5409;
  var scrollIncrement = 28;

  if (0 < winScroll) {
    $('.p-1').css({
      "z-index": "2"
    });
    $('.p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
      "z-index": "-1"
    });
  };
  if (scrollLocation < winScroll) {
    $('.p-2').css({
      "z-index": "2"
    });
    $('.p-1, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
      "z-index": "-1"
    });
  };
  if (scrollLocation + scrollIncrement * 2 < winScroll) {
    $('.p-3').css({
      "z-index": "2"
    });
    $('.p-1, .p-2, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
      "z-index": "-1"
    });
  };
  if (scrollLocation + scrollIncrement * 3 < winScroll) {
    $('.p-4').css({
      "z-index": "2"
    });
    $('.p-1, .p-2, .p-3, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
      "z-index": "-1"
    });
  };
  if (scrollLocation + scrollIncrement * 4 < winScroll) {
    $('.p-5').css({
      "z-index": "2"
    });
    $('.p-1, .p-2, .p-3, .p-4, .p-6, .p-7, .p-8, .p-9, .p-10, .p-11').css({
      "z-index": "-1"
    });
  };
  if (scrollLocation + scrollIncrement * 5 < winScroll) {
    $('.p-6').css({
      "z-index": "2"
    });
    $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-7, .p-8, .p-9, .p-10, .p-11').css({
      "z-index": "-1"
    });
  };
  if (scrollLocation + scrollIncrement * 6 < winScroll) {
    $('.p-7').css({
      "z-index": "2"
    });
    $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-8, .p-9, .p-10, .p-11').css({
      "z-index": "-1"
    });
  };
  if (scrollLocation + scrollIncrement * 7 < winScroll) {
    $('.p-8').css({
      "z-index": "2"
    });
    $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-9, .p-10, .p-11').css({
      "z-index": "-1"
    });
  };
  if (scrollLocation + scrollIncrement * 8 < winScroll) {
    $('.p-9').css({
      "z-index": "2"
    });
    $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-10, .p-11').css({
      "z-index": "-1"
    });
  };
  if (scrollLocation + scrollIncrement * 9 < winScroll) {
    $('.p-10').css({
      "z-index": "2"
    });
    $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-11').css({
      "z-index": "-1"
    });
  };
  if (scrollLocation + scrollIncrement * 10 < winScroll) {
    $('.p-11').css({
      "z-index": "2"
    });
    $('.p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-7, .p-8, .p-9, .p-10').css({
      "z-index": "-1"
    });
  };
});
'use strict';

angular.module('fifty-three').controller('shopCtrl', function ($scope, shopService) {});
'use strict';

angular.module('fifty-three').service('shopService', function ($http, $q) {});
'use strict';

angular.module('fifty-three').directive('footerDir', function () {
  return {
    restrict: 'AE',
    templateUrl: './app/directives/footerDir/footerDir.html',
    controller: function controller($scope) {}
  };
});
'use strict';

angular.module('fifty-three').directive('carouselDir', function () {

  return {
    restrict: 'E',
    templateUrl: './app/directives/carouselDir/carouselDir.html',
    controller: function controller($scope, carouselDirService, authService, $state, cartService) {

      $scope.crazy = 'crazy';

      $scope.getProducts = function () {
        carouselDirService.getProducts().then(function (response) {
          $scope.products = response;
          console.log(response);
          $scope.pencil = $scope.products[0];
        });
      };
      $scope.getProducts();

      $scope.getCurrentUser = function () {
        authService.getCurrentUser().then(function (response) {
          console.log('User on session?');
          console.log(response);
          $scope.currentUser = response.data;
        }).catch(function (err) {
          $scope.currentUser = null;
        });
      };
      $scope.getCurrentUser();

      $scope.gold = function () {
        $scope.pencil = $scope.products[0];
      };
      $scope.graphite = function () {
        $scope.pencil = $scope.products[1];
      };
      $scope.walnut = function () {
        $scope.pencil = $scope.products[2];
      };

      $scope.addToCart = function (pencil) {
        if (!$scope.currentUser) {
          return $scope.hideModal = false;
        }
        console.log(pencil);
        authService.getUserOrder($scope.currentUser.id).then(function (user_basket) {
          console.log('user order: ');
          console.log(user_basket);
          var orderid = user_basket.data.order.id;
          authService.addToCart(orderid, pencil.product_id, 1).then(function (response) {
            console.log(response);
            authService.getUserOrder($scope.currentUser.id).then(function (response) {
              console.log('second get to order: ');
              console.log(response);
              $state.go('cart');
            });
          });
        });
      };

      $scope.login = function (user) {
        authService.login(user).then(function (response) {
          console.log(response.data);
          $scope.currentUser = response.data;
          if (!response.data) {
            alert('User cannot be found');
            $scope.user.password = '';
          } else {
            $scope.addToCart($scope.pencil);
          }
        }).catch(function (err) {
          alert('Unable to login');
        });
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

      $scope.hideModal = true;
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

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (response) {
      var products = response.data;
      var gold = {
        name: products[0].prod_desc,
        price: products[0].price,
        product_id: 1,
        images: [],
        cart_img: products[3].image_path
      };
      var graphite = {
        name: products[4].prod_desc,
        price: products[4].price,
        product_id: 2,
        images: [],
        cart_img: products[7].image_path
      };
      var walnut = {
        name: products[8].prod_desc,
        price: products[8].price,
        product_id: 3,
        images: [],
        cart_img: products[12].image_path
      };
      for (var i = 0; i < products.length; i++) {
        if (i < 3) {
          gold.images.push(products[i].image_path);
        } else if (i > 3 && i < 7) {
          graphite.images.push(products[i].image_path);
        } else if (i > 7 && i < 12) {
          walnut.images.push(products[i].image_path);
        }
      }
      return [gold, graphite, walnut];
    });
  };

  //==END=====
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
