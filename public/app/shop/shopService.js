angular.module('fifty-three')
.service('shopService', function($http, $q) {

  this.getProducts = () => {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then((response) => {
      return response.data;
    })
  }



})
