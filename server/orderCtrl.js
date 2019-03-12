const app = require('./server');
const db = app.get('db');

module.exports = {
  createOrder: (req, res, next) => {
    db.order_create([req.params.userid]).then((order) => {
      res.status(200).send('Order created successfully');
    });
  },
  completeOrder: (res, req, next) => {
    db.order_complete([req.params.orderid]).then((order) => {
        next();
    });
  },
  getUserOrder: (req, res, next) => {
    const completeOrder = {};
    db.get_user_order([req.params.userid]).then((order) => {
      completeOrder.order = order[0];
      console.log(order);
      // res.status(200).send(completeOrder);
      db.product_cart_find([completeOrder.order.id]).then((products) => {
        completeOrder.products = products;
        res.status(200).send(completeOrder);
      })
    });
  },
  getUserHistory: (req, res, next) => {
    db.order_history_by_user([req.params.userid]).then((orders) => {
      res.status(200).send(orders);
    })
  },
  completeOrder: (req,res,next) => {
    db.order_complete([req.params.orderid]).then((order) => {
      next();
    });
  }





// MODULE.EXPORTS END
}
