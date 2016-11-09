angular.module('fifty-three')
.service('cartService', function($http, $q, $state) {

this.updateQty = (item_id, item_qty) => {
  return $http({
    method: "PUT",
    url: '/api/update/qty/' + item_id + '/' + item_qty
  })
};

this.removeItem = (item_id) => {
  return $http({
    method: "DELETE",
    url: "/api/delete/item/cart/" + item_id
  })
}

 //===END SERVICE=======
})
