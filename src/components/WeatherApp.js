import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null); // Corrected to weatherData

  const APIkey = "e54dc82b3abc9df51e812274ff7ecf6b";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`; // Corrected to use the correct API endpoint

  const getWeather = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url);
      const result = await response.json();

      if (result.cod === 200) {
        setWeatherData(result); // Store fetched data in the state
      } else {
        alert(result.message); // Show error if city is not found
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Weather App</h1>
      <div>
        <form>
          <input
            type="text"
            name="city"
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City Name: "
            className="form-control"
          />
          <br></br>
          <button type="submit" className="btn btn-dark" onClick={getWeather}>
            Search
          </button>
        </form>
      </div>
      {weatherData && (
        <div className="weather-info">
          <h3>Weather in {weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;