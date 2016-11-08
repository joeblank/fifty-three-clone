angular.module('fifty-three')
.service('cartService', function($http, $q, $state) {




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
})
