import React from 'react'

const WeatherCard = ({tempInfo}) => {
    const {
        temp,
        name,
        humidity,
        pressure,
        weathermood,
        speed,
        country,
        sunset
    } = tempInfo
    return (
    <>
      <article className="widget">
            <div className="weatherIcon">
                <i className={"wi wi-day-sunny"}></i>
            </div>
            <div className="weatherInfo">
                <div className="temperature">
                    <span>{temp}</span>
                </div>
                <div className="description">
                    <div className="weatherCondition">
                        Cloudy
                    </div>
                    <div className="place">Rawalpindi, Pakistan</div>
                </div>
            </div>
            <div className="date">{new Date().toLocaleString()}</div>
            {/* 4 column section */}
            <div className="extra-temp">
                <div className="temp-info-minmax">
                <div className="two-sided-section">
                    <p>
                        <i className={"wi wi-sunset"}></i>
                    </p>
                    <p className='extra-info-leftside'>
                    {sunset} <br />
                    Sunset
                    </p>
                    </div>
                    <div className="two-sided-section">
                    <p>
                        <i className={"wi wi-humidity"}></i>
                    </p>
                    <p className='extra-info-leftside'>
                    Humidity <br />
                    {humidity}
                    </p>
                    </div>
                </div>
                <div className="weather-extra-info">
                <div className="two-sided-section">
                    <p>
                        <i className={"wi wi-rain"}></i>
                    </p>
                    <p className='extra-info-leftside'>
                    19:19 PM <br />
                    Pressure
                    </p>
                    </div>
                    <div className="two-sided-section">
                    <p>
                        <i className={"wi wi-strong-wind"}></i>
                    </p>
                    <p className='extra-info-leftside'>
                    19:19 PM <br />
                    Speed
                    </p>
                    </div>
                </div>
            </div>
        </article>

    </>
  )
}

export default WeatherCard