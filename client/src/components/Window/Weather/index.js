import { useWindowsEX } from "../../../context/WindowContext";
import Loading from "../../Loading";
import "./index.css";

import { useEffect, useCallback } from "react";

const Weather = () => {

  // Changing to Window context for weather, setWeather, using an object

  const { weather } = useWindowsEX();

  const getWeather = useCallback(async (weather) => {

    try {

      const position = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
      const response = await fetch(`/api/weather?long=${position.coords.longitude}&lat=${position.coords.latitude}`);
      const weatherData = await response.json();

      console.log(weatherData);

    } 
    
    catch (error) { console.error("Error fetching weather data:", error); }

  }, []);

  useEffect(() => {

    const fetchData = async () => await getWeather(weather);
    fetchData();
  
  }, [ getWeather, weather ]);

  return (

    <div id="weather_spacer" className="flex col">

        <Loading text_color="black" />
      
    </div>

  );
};
export default Weather;
