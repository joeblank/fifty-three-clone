angular.module('fifty-three')
.controller('cartCtrl', ($scope, cartService, $stateParams, authService, $timeout) => {

$scope.something = cartService.something;

const fetchCart = () => {
  authService.getUserOrder($stateParams.userid)
  .then((response) => {
    // console.log('second get to order: ');
    // console.log(response);
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
  const adding = item_qty + 1;
  // console.log('item qty to update: ')
  // console.log(adding);
  cartService.updateQty(item_id, adding).then((response) => {
  fetchCart();
  });
}

$scope.subtractQty = (item_id, item_qty) => {
  const subtracting = item_qty - 1;
  if (subtracting <= 0) {
      swal({
        title: "Remove item?",
        type: "warning",
        showCancelButton: true,
        animation: "slide-from-top"
      },
      () => {
      cartService.removeItem(item_id).then((response) => {
        fetchCart();
      });
      }

    );
  } else {
    // console.log('item subtract');
    // console.log(subtracting);
    cartService.updateQty(item_id, subtracting);
    fetchCart();
  }
}


//===SUBTOTAL==============




 //===END CTRL=======
})
