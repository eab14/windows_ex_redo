const weatherController = {

  async getWeather(req, res) {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${req.query.lat}&lon=${req.query.long}&appid=${process.env.OPENWEATHER_KEY}&units=metric`);
    const weather = await response.json();

    res.json(weather);

  },

};

module.exports = weatherController;
