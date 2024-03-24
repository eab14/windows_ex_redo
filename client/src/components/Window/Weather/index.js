import "./index.css";
import { faTemperatureHalf, faCloud, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        setTemperature(Math.round((weather.main.temp - 270) * 10) / 10);
        setWeather(weather.weather[0].main);
        setWindSpeed(weather.wind.speed);
        setWeatherLoaded(true);
      });
    };
    getWeather();
  });
  return (
    <div id="weather-spacer" className="flex col">
      {weatherLoaded ? (
        <div id="weather-display" className="flex col center">
          <p className="weather"><FontAwesomeIcon icon={faTemperatureHalf}/> Temperature: {temperature}</p>
          <p className="weather"><FontAwesomeIcon icon={faCloud}/> Weather: {weather}</p>
          <p className="weather"><FontAwesomeIcon icon={faWind}/> Wind speed: {windSpeed}</p>
        </div>
      ) : (
        <p>Currently loading weather data</p>
      )}
    </div>
  );
};
export default Weather;
