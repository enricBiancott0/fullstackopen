import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Country = ({country}) => {
    let [temperature, setTemperature] = useState(0)
    let [image, setImage] = useState("")
    let [wind, setWind] = useState(0)
    
    const api_key = process.env.REACT_APP_OPENWEATHER_API_KEY;
    useEffect(() => {
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${api_key}`)
            .then(response => {
                console.log(response.data)
                setWind(response.data.wind.speed)
                setTemperature((response.data.main.temp).toFixed(2))
                setImage(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
            })
    }, [])
    return (
    <>
        <h2>{country.name.common}</h2>
        <p>capital {country.capital[0]}</p>
        <p>area {country.area}</p>
        <h2>languages:</h2>
        <div>
            <ul>
            {Object.values(country.languages).map(lang => (
                <li key={lang}>{lang}</li>
            ))}
            </ul>
        </div>
        <img src={country.flags.png} width={200} height={130} />
        <h2>Weather in {country.name.common}</h2>
        <p>temperature {temperature}° Celsius</p>
        <img src={image} height={100} width={100} />
        <p>wind {wind} m/s</p>
    </>
    )
}
export default Country