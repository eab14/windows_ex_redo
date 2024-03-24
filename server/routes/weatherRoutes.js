const router = require('express').Router()

const {
  getWeather
} = require('../controllers/weatherController');

router
  .route("/")
  .get(getWeather);

module.exports = router;