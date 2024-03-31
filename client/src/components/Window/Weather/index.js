import { useWindowsEX } from "../../../context/WindowContext";
import Loading from "../../Loading";
import "./index.css";

import { useEffect, useCallback } from "react";

const Weather = () => {

	// Changing to Window context for weather, setWeather, using an object
	const { weather, setWeather } = useWindowsEX();

	const getWeather = useCallback(async (weather) => {

		try {

			// const position = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
			
			const response = await fetch(`/api/weather`);
			const weatherData = await response.json();

		} 
		
		catch (error) { console.error("Error fetching weather data:", error); }

	}, []);

	useEffect(() => {

		const fetchData = async () => await getWeather(weather);
		fetchData();

	}, [ getWeather, weather ]);

	return (

		<div id="weather_spacer" className="flex col center">

			<Loading text_color="black" />
		
		</div>

	);
};
export default Weather;
