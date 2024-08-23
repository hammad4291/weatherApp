import React, { useState , useEffect } from 'react'
import WeatherCard from './weatherCard';
import "./style.css"
const Temp = () => {

    const [searchValue, setSearchValue] = useState("islamabad");
    const [tempInfo, setTempInfo] = useState({})
    const getWeatherInfo = async () => {
        try {
            let URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ed28cc5e89b9297f4a137f5f1caa84ef`
            let res = await fetch(URL);
            let data = await res.json();
            console.log(data);
            const {temp ,humidity, pressure} = data.main;
            const { main : weathermood } = data.weather[0];
            const name = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;
            const newWeatherInfo = {
                temp,
                name,
                humidity,
                pressure,
                weathermood,
                speed,
                country,
                sunset
            }
            setTempInfo(newWeatherInfo);
        } catch (error) {
            console.log(console.error())
          alert("Check your internet or spelling")
        }
    }

    const resetInput = () => {
        setSearchValue("");
    }

    // To call it on relod

    useEffect(() => {
        getWeatherInfo();
    },[])

  return (
    <>
      <div className="wrap">
        <div className="search">
            <input type="search" 
                placeholder='Search...'
                autoFocus
                id='search'
                className='searchTerm'
                value={searchValue}
                onClick={() => {resetInput()}}
                onChange={(event) => {setSearchValue(event.target.value)}}
            />
            <button className='searchButton' type='button' onClick={() => {getWeatherInfo()}}>
        Search</button>
        </div>
      </div>

        {/* temp card */}
        <WeatherCard tempInfo={tempInfo}/>
    </>
  )
}

export default Temp
