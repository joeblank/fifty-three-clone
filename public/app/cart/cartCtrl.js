angular.module('fifty-three')
.controller('cartCtrl', ($scope, cartService, $stateParams, authService, $timeout) => {

$scope.something = cartService.something;

const fetchCart = () => {
  authService.getUserOrder($stateParams.userid)
  .then((response) => {
    console.log('second get to order: ');
    console.log(response);
    $scope.userCart = response.data;
  })
};

fetchCart();

//===GET CART====
// authService.getUserOrder($stateParams.userid)
// .then((response) => {
//   console.log('second get to order: ');
//   console.log(response);
//   $scope.userCart = response.data;
// })


//===CHANGE QTY OF ITEM========
$scope.addQty = (item_id, item_qty) => {
  const somethingnew = item_qty + 1;
  console.log('item qty to update: ')
  console.log(somethingnew);
  cartService.updateQty(item_id, somethingnew).then((response) => {
  fetchCart();
  });
}

$scope.subtractQty = (item_id, item_qty) => {
  const somethingelse = item_qty - 1;
  console.log('item subtract');
  console.log(somethingelse);
  cartService.updateQty(item_id, somethingelse);
  fetchCart();
}


//===SUBTOTAL==============




 //===END CTRL=======
})
