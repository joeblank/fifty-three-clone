const app = require('./server');
const db = app.get('db');

const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

module.exports = {
  register: (req, res) => {
    const user = req.body;
    user.password = hashPassword(user.password);

    db.user_create([user.name, user.email, user.password]).then((user) => {

      user = user[0]
      db.order_create([user.id]).then((order) => {
        delete user.password;
        res.status(200).send(user);
      })

    });
  },
  me: (req, res) => {
    if (!req.user) return res.status(401).send('current user not defined');

    //remove password for security, do not send it back
    const user = req.user[0];
    console.log(user);
    delete user.password;
    console.log(user);

    //return user object without passwordreturn
    return res.status(200).json(user);
  }












  //end of export
}
