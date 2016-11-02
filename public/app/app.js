angular.module('fifty-three', ['ui.router'])
.config(($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise('/pencil')

  $stateProvider
  .state('paper', {
    url: '/paper',
    templateUrl: './app/paper/paper.html',
    controller: 'paperCtrl'
  })
  .state('pencil', {
    url: '/pencil',
    templateUrl: './app/pencil/pencil.html',
    controller: 'pencilCtrl'
  })
  .state('shop', {
    url: '/shop',
    templateUrl: './app/shop/shop.html',
    controller: 'shopCtrl'
  })



})
