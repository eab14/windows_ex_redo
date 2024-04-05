import "./index.css";

import { useWindowsEX } from "../../../context/WindowContext";
import { useEffect, useCallback, useState } from "react";

import axios from "axios";

import Loading from "../../Loading";
import Search from "../../Form/Search";
import WeatherCard from "./WeatherCard";

const Weather = () => {

	const [ loading, setLoading ] = useState(true);
	const { weather, setWeather } = useWindowsEX();

	const submitHandler = async (e) => {

		e.preventDefault();
		const { currentTarget } = e;

		await getWeather(null, currentTarget.querySelector("input").value);

	}

	const getWeather = useCallback(async (weather, location) => {

		location = location.split(' ').join('%20');
    	location = location.toLowerCase();

		setLoading(true);

		try {

			if (!weather) {

				// const position = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
				const response = await axios.get(`/api/weather?location=${location}`);
				const weatherData = response.data;

				weatherData.current.dt = new Date(weatherData.current.dt * 1000);
				weatherData.daily.daily.forEach(item => item.dt = new Date(item.dt * 1000));

				weatherData.selected = {};
				weatherData.selected.dt = weatherData.current.dt;
				weatherData.selected.location = `${weatherData.current.name}, ${weatherData.current.sys.country}`;
				weatherData.selected.temp = `${parseInt(weatherData.current.main.temp)}  \u00B0C`;
				weatherData.selected.icon = `${weatherData.daily.daily[0].weather[0].icon}`;

				setWeather(weatherData);
				setLoading(false);

			}

			else { 
				
				setWeather(weather);
				setLoading(false);
				
			}

		} 
		
		catch (error) { console.error("Error fetching weather data:", error); }

	}, [ setLoading, setWeather ]);

	useEffect(() => {

		const fetchData = async () => await getWeather(weather, "Toronto, CA");
		fetchData();

	}, [ getWeather, weather ]);

	return (

		<div className="flex col center weather_spacer">

			{ loading && <Loading text_color="black" /> }

			{ 
				!loading &&
				
					<>

					<div className="flex weather_search">

						<form onSubmit={submitHandler}>
							<Search placeholder={weather.selected.location} />
						</form>

					</div>

                    <div className="flex row weather_data">

                        <div className="flex" id="weather_date">{weather.selected.dt.toLocaleString("en-us", { month: "long", day: "numeric", year: "numeric" })}</div>
                        <div className="flex" id="weather_location">{weather.selected.location}</div>
                        <div className="flex" id="weather_temp">{weather.selected.temp}</div>
                        <div className="flex" id="weather_icon"><img src={`http://openweathermap.org/img/wn/${weather.selected.icon}@2x.png`} alt="" /></div>

                    </div>

                    <div className="flex row center weather_select">
						
						{ weather.daily.daily.slice(0, 5).map((item, index) => <WeatherCard key={index} data={weather} index={index} /> ) }

                    </div>

					</>
					
			}
		
		</div>

	);
};
export default Weather;
