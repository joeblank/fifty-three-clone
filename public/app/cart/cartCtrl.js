angular.module('fifty-three')
.controller('cartCtrl', ($scope, cartService, $stateParams, authService) => {

$scope.something = cartService.something;


//===GET CART====
authService.getUserOrder($stateParams.userid)
.then((response) => {
  console.log('second get to order: ');
  console.log(response);
  $scope.userCart = response.data;
})


//===CHANGE QTY OF ITEM========



//===SUBTOTAL==============




 //===END CTRL=======
})
