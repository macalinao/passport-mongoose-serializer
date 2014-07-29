'use strict';

var expect = require('chai').expect;
var mongoose = require('mongoose');
var passwords = require('mongoose-password-bcrypt-nodejs');

describe('passport-mongoose-serializer', function() {
  var User, bob;

  beforeEach(function(done) {
    var conn = mongoose.createConnection('mongodb://localhost:27017/test');

    var UserSchema = new mongoose.Schema({
      name: String,
      password: String // required for this module to work
    });
    UserSchema.plugin(passwords);

    User = conn.model('User', UserSchema);

    bob = new User({
      username: 'bob',
      password: 'mfw'
    });
    bob.save(done);
  });

  afterEach(function(done) {
    User.find().remove().exec(done);
  });
});
