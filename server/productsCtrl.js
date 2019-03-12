'use strict';

const app = require('./server');
const db = app.get('db');

const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  return hash;
};

module.exports = {

  getInCart: (req, res, next) => {
    db.product_cart_find([req.params.cartid]).then((err, products) => {
      res.status(200).send(products);
    })
  },
  addToCart: (req,res, next) => {
    const product = req.body;

    db.product_order_insert([req.params.cartid, product.id, product.qty]).then((productInCart) => {
      res.status(200).send('Item added successfully');
    })
  },
  updateProductInCart: (req, res, next) => {
    db.product_cart_update([req.params.itemid, req.params.qty]).then((productInCart) => {
      res.status(200).send('Item update successfully');
    });
  },
  deleteCartItem: (req,res, next) => {
    db.product_cart_remove([req.params.itemid]).then((product) => {
      res.status(200).send('Item removed successfully');
    });
  },
  getProducts: (req, res, next) => {
    db.products()
      .then((products) => {
        res.status(200).send(products);
      })
      .catch(err => res.sendStatus(500))
  }




//======for orig db====================
  // getProducts: (req, res) => {
  //   db.get_products((err, response) => {
  //     res.status(200).json(response);
  //   })
  // },
  //
  // getCart: (req, res) => {
  //   db.get_cart((err, response) => {
  //     res.status(200).json(response);
  //   })
  // }


}
