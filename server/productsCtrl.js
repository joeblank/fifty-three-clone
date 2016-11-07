'use strict';

const app = require('./server');
const db = app.get('db');

const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  return hash;
}

module.exports = {

register: (req, res) => {
  let user = req.body;
  user.password = hashPassword(user.password);

  db.user_create([user.name, user.email, user.password], (err, user) => {
    if (err) return res.status(500).send(err);

    delete user.password;
    res.status(200).send(user);
  });
},
me: (req, res) => {
  if (!req.user) return res.status(401).send('current user not defined');

  //remove password for security, do not send it back
  let user = req.user[0];
  console.log(user);
  delete user.password;
  console.log(user);
  //return user object without passwordreturn
  return res.status(200).json(user);
}

/////left off here


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
