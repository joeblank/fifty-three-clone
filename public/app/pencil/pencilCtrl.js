angular.module('fifty-three')
.controller('pencilCtrl', ($scope) => {

$scope.button = () => {
  swal({
    title: "Remove item from cart?",
    showCancelButton: true,
    confirmButtonText: "Yes, remove item.",
    imageUrl: 'https://cdn.shopify.com/s/files/1/0245/8513/t/7/assets/53-dark.svg?1246397996584665470',
    text: "Write something interesting:",
    type: "input",
    inputType: 'email',
    closeOnConfirm: false
}, function (inputValue) {
  $scope.valueSup = inputValue;
  alert($scope.valueSup);
swal({
  title: "Remove item from cart?",
  showCancelButton: true,
  confirmButtonText: "Yes, remove item.",
  imageUrl: 'https://cdn.shopify.com/s/files/1/0245/8513/t/7/assets/53-dark.svg?1246397996584665470',
  text: "Write something interesting:",
  type: "input"
})
}
)}






})
