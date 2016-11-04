//===REQUIRE=============================
const express = require('express');
const session = require('express-sessions');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const bcrypt = require('bcrypt');
const passport = require('passport');

//===INITIALIZE EXPRESS APP===================
const app = module.exports = express();

//===MIDDLEWARE===========================
app.use(bodyParser.json());
app.use(express.static('./../public'));
app.use(cors());

//===CONNECT TO POSTGRESS SERVER===========
const massiveServer = massive.connectSync({
  connectionString: 'postgress://localhost/fifty-three-clone'
})
app.set('db', massiveServer);
const db = app.get('db');

//===REQUIRE CONTROLLERS(BELOW APP.SET)========
const productsCtrl = require('./productsCtrl');

// ===ENDPOINTS============================
app.get('/api/products', productsCtrl.getProducts);
app.get('/api/cart', productsCtrl.getCart);





//===PORT====================================
const port = 8000;
app.listen(port, () => {
  console.log('Listening on port: ' + port);
})
