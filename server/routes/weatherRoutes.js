const router = require('express').Router()
router.route("/").get(async (req, res) => {
  const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${
    req.query.lat
  }&lon=${
    req.query.long
  }&appid=${"e9dc30a76caa67c782fb10c3ba6c49a1"}`
)
const weather = await response.json();
res.json(weather);
});

module.exports = router;