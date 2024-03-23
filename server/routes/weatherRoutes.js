require('dotenv').config();
const {
  getWeather
} = require('../controllers/weatherController');

const router = require('express').Router()

router.route("/").get(getWeather);

module.exports = router;