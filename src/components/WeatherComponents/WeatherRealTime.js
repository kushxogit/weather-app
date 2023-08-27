import React, { useState, useEffect } from "react";
import "./WeatherRealTime.css";
import { Link } from 'react-router-dom';
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import Weather from './Weather'

const WeatherRealTime = () => {
  const key = "7211f036e77b43f110bd81213a6e7a1f";

  const [wicon, setwicon] = useState(cloud_icon);
  const [weatherData, setWeatherData] = useState({
    humidity: "N/A",
    windSpeed: "N/A",
    temperature: "N/A",
    location: "City not found",
    weatherIcon: cloud_icon
  });
  
  const updateWeatherData = async (location) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=Metric`;

    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error('City not found'); // Throw an error for non-2xx responses
      }
      let data = await response.json();

      const weatherIconMap = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": drizzle_icon,
        "03n": drizzle_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon
      };

      const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-speed");
    const temp = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

      const newWeatherData = {
        humidity: data.main.humidity + " %",
        windSpeed: data.wind.speed + " km/h",
        temperature: Math.floor(data.main.temp),
        location: data.name,
        weatherIcon: weatherIconMap[data.weather[0].icon] || cloud_icon
      };

      setWeatherData(newWeatherData);
    } catch (error) {
      // Handle errors, such as setting default values or showing an error message
      console.error(error);
      setWeatherData({
        humidity: "N/A",
        windSpeed: "N/A",
        temperature: "N/A",
        location: "City not found",
        weatherIcon: cloud_icon
      });
    }
  };

  const handleLocationChange = (event) => {
    const newLocation = event.target.value;
    if (newLocation) {
      updateWeatherData(newLocation);
    } else {
      updateWeatherData("Bareilly"); // Set default city to Bareilly
    }
  };
  
  

  return (
    <>
      <div className="container">
        <div className="top-bar">
          <input type="text" className="cityInput" placeholder="search" onChange={handleLocationChange} />
        </div>
        <div className="weather-image">
          <img src={weatherData.weatherIcon} alt="Weather Icon" />
        </div>
        <div className="weather-temp">{weatherData.temperature}°c</div>
        <div className="weather-location">{weatherData.location}</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent">{weatherData.humidity}</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="" className="icon" />
            <div className="data">
              <div className="wind-speed">{weatherData.windSpeed}</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherRealTime;
