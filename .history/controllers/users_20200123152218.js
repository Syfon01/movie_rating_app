const User = require('../models/User.js');
module.exports.controller = (app) => {
    // register a user
    app.post('/users/register', (req, res) => {
          const name = req.body.name;
          const email = req.body.email;
          const password = req.body.password;
          const newUser = new User({