angular.module('fifty-three')
.service('authService', function($http) {

  this.registerUser = (user) => {
    return $http({
      method: 'POST',
      url: '/register',
      data: user
    }).then((response) => {
      return response;
    });
  };


})
