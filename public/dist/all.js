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
  });
});
"use strict";
"use strict";
'use strict';

angular.module('fifty-three').controller('pencilCtrl', function ($scope) {});
'use strict';

angular.module('fifty-three').controller('paperCtrl', function ($scope) {});
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

angular.module('fifty-three').directive('footerDir', function () {
  return {
    restrict: 'AE',
    templateUrl: './app/directives/footerDir/footerDir.html',
    controller: function controller($scope) {}
  };
});
//# sourceMappingURL=all.js.map
