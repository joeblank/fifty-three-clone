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
  });
});
'use strict';

angular.module('fifty-three').service('mainService', function ($http, $q) {

  this.broken = 'working';
});
'use strict';

angular.module('fifty-three').controller('mainCtrl', function ($scope, mainService) {

  $scope.broken = mainService.broken;
});
'use strict';

angular.module('fifty-three').controller('paperCtrl', function ($scope, mainService) {});
'use strict';

angular.module('fifty-three').controller('pencilCtrl', function ($scope, mainService) {});
//# sourceMappingURL=all.js.map
