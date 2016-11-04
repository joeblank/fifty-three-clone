angular.module('fifty-three')
.service('cartService', function($http, $q) {

  this.getCart = () => {
    return $http({
      method: 'GET',
      url: '/api/cart'
    }).then((response) => {
      console.log('cart service: ');
      console.log(response);
      return response.data;
    })
  }







 //===END SERVICE=======
})
