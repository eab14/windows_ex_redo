require('dotenv').config();

const router = require('express').Router()
router.route("/").get(async (req, res) => {
  console.log(process.env.OPENWEATHER_KEY)
  const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${
    req.query.lat
  }&lon=${
    req.query.long
  }&appid=${process.env.OPENWEATHER_KEY}`
)
const weather = await response.json();
res.json(weather);
});

module.exports = router;