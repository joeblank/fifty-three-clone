const app = require('./server');
const db = app.get('db');

module.exports = {
  createOrder: (req, res, next) => {
    db.order_create([req.params.userid], (err,order) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(200).send('Order created successfully');
    });
  },
  completeOrder: (res, req, next) => {
    db.order_complete([req.params.orderid], (err,order) => {
        if (err) {
          return res.status(500).send(err);
        };
        next();
    });
  },
  getUserOrder: (req, res, next) => {
    const completeOrder = {};
    db.get_user_order([req.params.userid], (err, order) => {
      if (err) {
        return res.status(500).send(err);
      };

      completeOrder.order = order[0];
      console.log(order);
      // res.status(200).send(completeOrder);
      db.product_cart_find([completeOrder.order.id], (err, products) => {
        if (err) {
          return res.status(500).send(err);
        };

        completeOrder.products = products;
        res.status(200).send(completeOrder);
      })
    });
  },
  getUserHistory: (req, res, next) => {
    db.order_history_by_user([req.params.userid], (err, orders) => {
      if (err) {
        return res.status(500).send(err);
      };
      res.status(200).send(orders);
    })
  },
  completeOrder: (req,res,next) => {
    db.order_complete([req.params.orderid], (err, order) => {
      if (err) {
        return res.status(500).send(err);
      }
      next();
    });
  }





// MODULE.EXPORTS END
}
