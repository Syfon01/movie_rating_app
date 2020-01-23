const mongoose = require('mongoose')
const Schema = mongoose.Schema
const RatingSchema = new Schema({
  name: String,
  email: String,
})
const Rating = mongoose.model("Rating", RatingSchema)
module.exports = Rating