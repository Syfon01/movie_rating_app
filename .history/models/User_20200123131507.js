const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
  name: String,
  email: String,
})
const User = mongoose.model("Rating", RatingSchema)
module.exports = Rating