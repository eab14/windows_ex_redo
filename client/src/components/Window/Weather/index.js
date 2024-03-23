import "./index.css";

import { useState, useEffect } from "react";
const Weather = () => {
  const [weatherLoaded, setWeatherLoaded] = useState(false);
  const [temperature, setTemperature] = useState();
  const [weather, setWeather] = useState();
  const [windSpeed, setWindSpeed] = useState();
  useEffect(() => {
    const getWeather = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        let response = await fetch(
          `/api/weather?long=${position.coords.longitude}&lat=${position.coords.latitude}`
        );
        let weather = await response.json();
        console.log(weather);

        setTemperature(weather.main.temp);
        setWeather(weather.weather[0].main);
        setWindSpeed(weather.wind.speed);
        setWeatherLoaded(true);
      });
    };
    getWeather();
  });
  return (
    <div id="weather-spacer" className="">
      {weatherLoaded ? (
        <div>
          <p>Temperature: {temperature}</p>
          <p>Weather: {weather}</p>
          <p>Wind speed: {windSpeed}</p>
        </div>
      ) : (
        <p>Currently loading weather data</p>
      )}
    </div>
  );
};
export default Weather;
