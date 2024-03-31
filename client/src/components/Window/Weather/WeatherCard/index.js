import { gsap } from 'gsap';
import { useWindowsEX } from '../../../../context/WindowContext';

const WeatherCard = (props) => {

    const { setWeather } = useWindowsEX();

    const enterHandler = ({ currentTarget }) => gsap.to(currentTarget, { scale: 1.2, duration: 0.3 })
    const leaveHandler = ({ currentTarget }) => gsap.to(currentTarget, { scale: 1, duration: 0.3 })

    const clickHandler = (index) => {

        let selectedWeather = {
            dt: props.data.daily.daily[index].dt,
            temp: (index === 0) ? `${parseInt(props.data.current.main.temp)}  \u00B0C` : `${parseInt(props.data.daily.daily[props.index].temp.day)}  \u00B0C`,
            icon: `${props.data.daily.daily[index].weather[0].icon}`,
            location: `${props.data.current.name}, ${props.data.current.sys.country}`
        }
        
        setWeather(prevWeather => ({ ...prevWeather, selected: selectedWeather }));

    }

    return (
        <div className="flex center weather_select_day" onClick={() => clickHandler(props.index)} onMouseEnter={enterHandler} onMouseLeave={leaveHandler}>
            <div className="flex weather_daily_date">

                { props.index === 0 ?

                    props.data.current.dt.toLocaleString("en-us", { month: "short", day: "numeric"})

                    :

                    props.data.daily.daily[props.index].dt.toLocaleString("en-us", { month: "short", day: "numeric"})
                    
                }

            </div>
            <div className="flex weather_daily_temp">

                { props.index === 0 ?

                    `${parseInt(props.data.current.main.temp)}  \u00B0C`

                    :
                    
                    `${parseInt(props.data.daily.daily[props.index].temp.day)}  \u00B0C`

                }

            </div>
        </div>
    )

}

export default WeatherCard;