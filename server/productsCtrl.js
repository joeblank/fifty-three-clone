const app = require('./server');
const db = app.get('db');

module.exports = {

  getProducts: (req, res) => {
    db.get_products((err, response) => {
      res.status(200).json(response);
    })
  },

  getCart: (req, res) => {
    db.get_cart((err, response) => {
      res.status(200).json(response);
    })
  }


}
