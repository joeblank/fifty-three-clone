//===REQUIRE=============================
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');

const secret = require('./secret');
//===INITIALIZE EXPRESS APP===================
const app = module.exports = express();


//===MIDDLEWARE===========================
app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));
// app.use(cors());

//===CONNECT TO POSTGRESS SERVER===========
const massiveServer = massive.connectSync({
  connectionString: 'postgress://localhost/53-auth-cart'
});
app.set('db', massiveServer);
const db = app.get('db');

//===REQUIRE CONTROLLERS(BELOW APP.SET)========
const productsCtrl = require('./productsCtrl');
//===REQUIRE PASSPORT==================
const passport = require('./passport');

//===POLICIES===========================
const isAuthed = (req,res,next) => {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};

//===SESSION AND PASSPORT=====================
app.use(session({
	secret: secret.secret,
	saveUninitialized: false,
	resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

//===PASSPORT ENDPOINTS===================
app.post('/login', passport.authenticate('local', {
  successRedirect: '/me'
}))
app.get('/logout', (req,res, next) => {
  req.logout();
  return res.status(200).send('logged out');
});

//===USER ENDPOINTS=========================
app.post('/register', productsCtrl.register);
// app.get('/user', productsCtrl.read);
app.get('/me', isAuthed, productsCtrl.me);
// app.put('/user/:_id', isAuthed, productsCtrl.update);


// ===ENDPOINTS for orig db============================
// app.get('/api/products', productsCtrl.getProducts);
// app.get('/api/cart', productsCtrl.getCart);





//===PORT====================================
const port = 8000;
app.listen(port, () => {
  console.log('Listening on port: ' + port);
})
