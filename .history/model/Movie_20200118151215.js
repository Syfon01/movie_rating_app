const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
      name: String,
      description: String,
      release_year: Number,
      genre: String,