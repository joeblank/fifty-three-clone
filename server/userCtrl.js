const app = require('./server');
const db = app.get('db');

module.exports = {
  register: (req, res) => {
    const user = req.body;
    user.password = hashPassword(user.password);

    db.user_create([user.name, user.email, user.password], (err, user) => {
      if (err) return res.status(500).send(err);

      user = user[0]
      db.order_create([user.id], (err, order) => {
        if (err) {
          return res.status(500).send(err);
        }
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
