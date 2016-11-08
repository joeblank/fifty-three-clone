angular.module('fifty-three')
.service('carouselDirService', function($http, $q) {

this.getProducts = () => {
  return $http({
    method: 'GET',
    url: '/api/products'
  }).then((response) => {
    const products = response.data;
    const gold = {
      name: products[0].prod_desc,
      price: products[0].price,
      product_id: 1,
      images: [],
      cart_img: products[3].image_path
    };
    const graphite = {
      name: products[4].prod_desc,
      price: products[4].price,
      product_id: 2,
      images: [],
      cart_img: products[7].image_path
    };
    const walnut = {
      name: products[8].prod_desc,
      price: products[8].price,
      product_id: 3,
      images: [],
      cart_img: products[12].image_path
    };
    for (let i = 0; i < products.length; i++) {
      if (i < 3) {
        gold.images.push(products[i].image_path);
      } else if (i > 3 && i < 7) {
        graphite.images.push(products[i].image_path);
      } else if (i > 7 && i < 12) {
        walnut.images.push(products[i].image_path);
      }
    }
    return [gold, graphite, walnut];
  })
}


//==END=====
})
