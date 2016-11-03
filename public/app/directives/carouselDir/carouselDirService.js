angular.module('fifty-three')
.service('carouselDirService', function($http, $q) {

  const gold = {
    name: 'Gold',
    price: 49.95,
    images: [
      './../../images/pencil-gold-1.jpg',
      './../../images/pencil-gold-2.jpg',
      './../../images/pencil-gold-3.jpg'
    ]
  };
  const graphite =  {
    name: 'Graphite',
    price: 49.95,
    images: [
      './../../images/pencil-graphite-1.jpg',
      './../../images/pencil-graphite-2.jpg',
      './../../images/pencil-graphite-3.jpg'
    ]
  };
  const walnut =  {
    name: 'Walnut + Magnetic Snap',
    price: 59.95,
    images: [
      './../../images/pencil-walnut-1.jpg',
      './../../images/pencil-walnut-2.jpg',
      './../../images/pencil-walnut-3.jpg'
    ]
  };
const pencils = [gold, graphite, walnut];
this.pencil = pencils[0];
this.gold = function () {
  console.log('gold service');
  this.pencil = pencils[0];
  console.log(this.pencil);
};
this.graphite = function () {
  this.pencil = pencils[1];
  console.log(this.pencil);

};
this.walnut = function() {
  this.pencil = pencils[2];
  console.log(this.pencil);

};
this.addToCart = (pencil) => {
console.log('service to cart: ');
console.log(pencil);
}

})
