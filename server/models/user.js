var mongoose = require('mongoose');
var User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    requred: true,
    trim: true,
    minlength: 1
  }
});
module.exports = {User};
