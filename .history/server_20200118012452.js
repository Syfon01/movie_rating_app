const express = require('express');
const bodyParser = require('body-parser');
mongoose = require('mongoose');
cors = require('cors');
morgan = require('morgan');
fs = require('fs');
const app = express();
const router = express.Router();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
//connect to mongodb
mongoose.connect('mongodb://localhost/movie_rating_app', function () {
    console.log('Connection has been made');
  })
  .catch(err => {
    console.error('App starting error:', err.stack);
    process.exit(1);
  });
router.get('/', function (req, res) {
  res.json({
    message: 'API Initialized!'
  });
});

const port = process.env.API_PORT || 8081;
app.use('/', router);
app.listen(port, function () {
  console.log(`api running on port ${port}`);
});