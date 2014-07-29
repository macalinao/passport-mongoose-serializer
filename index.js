'use strict';

var passport = require('passport');

module.exports = function(model) {
  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    model.findById(id, done);
  });
};
