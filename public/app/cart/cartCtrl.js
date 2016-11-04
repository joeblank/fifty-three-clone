angular.module('fifty-three')
.controller('cartCtrl', ($scope, cartService) => {



$scope.fake = [
  {
    name: 'Pencil',
    price: 49.95,
    desc: 'Gold',
    quantity: 1,
    image: './../../images/pencil-gold-graylightest_medium.jpg'
  },
  {
    name: 'Pencil',
    price: 59.95,
    desc: 'Walnut',
    quantity: 1,
    image: './../../images/pencil-walnut-graylightest_medium.jpg'
  },
  {
    name: 'Pencil',
    price: 59.95,
    desc: 'Walnut',
    quantity: 2,
    image: './../../images/pencil-walnut-graylightest_medium.jpg'
  },
  {
    name: 'Pencil',
    price: 59.95,
    desc: 'Walnut',
    quantity: 5,
    image: './../../images/pencil-walnut-graylightest_medium.jpg'
  },
]


$scope.getCart = () => {
  cartService.getCart()
  .then((response) => {
    console.log('cartCtrl: ');
    console.log(response);
    $scope.cart = response;
  })
}
$scope.getCart();

$scope.subtotal = () => {

}





 //===END CTRL=======
})
