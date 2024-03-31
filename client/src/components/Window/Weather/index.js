import { useWindowsEX } from "../../../context/WindowContext";
import Loading from "../../Loading";
import "./index.css";

import { useEffect, useCallback, useState } from "react";

const Weather = () => {

	const [ loading, setLoading ] = useState(true);
	const { weather, setWeather } = useWindowsEX();

	const getWeather = useCallback(async (weather) => {

		try {

			if (!weather) {

				// const position = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
				const response = await fetch(`/api/weather`);
				const weatherData = await response.json();

				weatherData.current.dt = new Date(weatherData.current.dt * 1000);

				setWeather(weatherData);
				setLoading(false);

			}

			else return;

		} 
		
		catch (error) { console.error("Error fetching weather data:", error); }

	}, [ setLoading, setWeather ]);

	useEffect(() => {

		const fetchData = async () => await getWeather(weather);
		fetchData();

	}, [ getWeather, weather ]);

	return (

		<div className="flex col center weather_spacer">

			{ loading && <Loading text_color="black" /> }

			{ 
				!loading &&
				
					<>

                    <div className="flex row weather_data">

                        <div className="flex" id="weather_date">{weather.current.dt.toLocaleString("en-us")}</div>
                        <div className="flex" id="weather_location">{`${weather.current.name}, ${weather.current.sys.country}`}</div>
                        <div className="flex" id="weather_temp">{`${parseInt(weather.current.main.temp)}  \u00B0C`}</div>
                        <div className="flex" id="weather_icon"><img src={`http://openweathermap.org/img/wn/${weather.daily.daily[0].weather[0].icon}@2x.png`} alt="" /></div>

                    </div>

                    <div className="flex row center weather_select">

                        <div className="flex center weather_select_day">
                            <div className="flex weather_daily_date"></div>
                            <div className="flex weather_daily_temp"></div>
                        </div>

                        <div className="flex center weather_select_day">
                            <div className="flex weather_daily_date"></div>
                            <div className="flex weather_daily_temp"></div>
                        </div>

                        <div className="flex center weather_select_day">
                            <div className="flex weather_daily_date"></div>
                            <div className="flex weather_daily_temp"></div>
                        </div>

                        <div className="flex center weather_select_day">
                            <div className="flex weather_daily_date"></div>
                            <div className="flex weather_daily_temp"></div>
                        </div>

                        <div className="flex center weather_select_day">
                            <div className="flex weather_daily_date"></div>
                            <div className="flex weather_daily_temp"></div>
                        </div>

                    </div>

					</>
					
			}
		
		</div>

	);
};
export default Weather;
