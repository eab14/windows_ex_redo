import { useWindowsEX } from "../../../context/WindowContext";
import Loading from "../../Loading";
import "./index.css";

import { useEffect, useCallback } from "react";

const Weather = () => {

  // Changing to Window context for weather, setWeather, using an object

  const { weather, setWeather } = useWindowsEX();

  // const [weatherLoaded, setWeatherLoaded] = useState(false);
  // const [temperature, setTemperature] = useState();
  // const [weather, setWeather] = useState();
  // const [windSpeed, setWindSpeed] = useState();

  const setWeatherExample = () => {

    // setTemperature(14);
    // setWindSpeed(20);
    // setWeather("Clear");

    setWeather({
        loaded: true,
        temperature: 14,
        windSpeed: 20,
        conditions: "Clear"
    })

  }

  const getWeather = useCallback(async (weather) => {

    try {

      const position = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
      const response = await fetch(`/api/weather?long=${position.coords.longitude}&lat=${position.coords.latitude}`);
      const weatherData = await response.json();

      (!weather.loaded) && setWeather({ 

        loaded: false,
        temperature: weatherData.main.temp,
        windSpeed: weatherData.wind.speed,
        conditions: weatherData.weather[0].main

      })

      (weather.loaded) && setWeather({

        loaded: true,
        temperature: weather.temperature,
        windSpeed: weather.windSpeed,
        conditions: weather.conditions

      })


    } 
    
    catch (error) { console.error("Error fetching weather data:", error); }

  }, [ setWeather ]);

  useEffect(() => {

    const fetchData = async () => await getWeather(weather);
    fetchData();
  
  }, [ getWeather, weather ]);

  return (

    <div id="weather_spacer" className="flex col">

      {weather.loaded? (
        <>
        <div className="flex col">
          <p>Temperature: {weather.temperature}</p>
          <p>Weather: {weather.conditions}</p>
          <p>Wind speed: {weather.windSpeed}</p>
        </div>

        <div className="flex center">
          <button onClick={setWeatherExample}>Change Example</button>
        </div>
        </>

      ) : (
        <Loading />
      )}
      
    </div>

  );
};
export default Weather;
