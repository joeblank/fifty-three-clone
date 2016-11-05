//PASSPORT
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//BCRYPT
var bcrypt = require('bcryptjs');

//APP
var app = require('./server');
var db = app.get('db');

//VERIFY PASSWORD
var verifyPassword = function(submittedPassword, userPassword) {
  return bcrypt.compareSync(submittedPassword, userPassword);
};

//RUN WHEN LOGGIN IN
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function(email, password, done) {
  db.user_search_email([email], function(err, user)  {
    user = user[0];

    //if err, return err
    if (err) done(err);

    //if no user is found, return false
    if (!user) return done(null, false);

    //if user is found, check to see if passwords match. if so, return user
    if (verifyPassword(password, user.password)) return done(null, user);

    //if no match, return false
    return done(null, false);

  });
}));

//puts the user on the session
passport.serializeUser(function(user, done)  {
  done(null, user.id);
});
passport.deserializeUser(function(id, done)  {
  db.user_search_id([id], function(err, user)  {
    done(err, user);
  });
});

module.exports = passport;
