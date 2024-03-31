const weatherController = {

  async getWeather(req, res) {

        try {

            let obj = {}

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=toronto,%20ca&appid=${process.env.OPENWEATHER_KEY}&units=metric`);
            const weather = await response.json();

            obj.current = weather;

            const response2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=${process.env.OPENWEATHER_KEY}&units=metric`);
            const onecall = await response2.json();

            obj.daily = onecall;
    
            res.json(obj);

        }

        catch(err) { res.json(err) }

    },

};

module.exports = weatherController;
