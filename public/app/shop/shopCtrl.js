angular.module('fifty-three')
.controller('shopCtrl', ($scope, shopService) => {

const getProducts = () => {
  shopService.getProducts()
  .then((response) => {
    console.log('response from server: ' + response);
    $scope.products = response;
  })
}
getProducts();




})
