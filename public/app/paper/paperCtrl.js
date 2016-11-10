angular.module('fifty-three')
.controller('paperCtrl', ($scope, $timeout) => {


$timeout(() => {
  $(() => {
      $('.shade').fadeOut(2000)
  })
}, 1000)


})
