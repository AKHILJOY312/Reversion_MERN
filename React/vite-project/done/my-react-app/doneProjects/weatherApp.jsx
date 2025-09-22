import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

// Weather Component
function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=Thrissur&appid=8985c5313f4421fd92664ea35e684e62`)
      .then((response) => setWeatherData(response.data))
      .catch((error) => console.error('Error fetching weather data:', error));
  }, []);

  if (!weatherData) return <div className="card loading">Loading weather data...</div>;

  const tempCelsius = (weatherData.main.temp - 273.15).toFixed(1);

  return (
    <div className="card weather-card">
      <h2>Weather in {weatherData.name}</h2>
      <p><strong>Temperature:</strong> {tempCelsius} °C</p>
      <p><strong>Description:</strong> {weatherData.weather[0].description}</p>
    </div>
  );
}

// Welcome Component
function Welcome({ name }) {
  return (
    <div className="card welcome-card">
      <h2>Welcome, {name} 👋</h2>
    </div>
  );
}

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

// App Component
function App() {
  return (
    <div className="container">
      <h1 className="app-title">React Weather & Welcome App</h1>
      <div className="card-grid">
        <Welcome name="Alice" />
        <Welcome name="Bob" />
        <Welcome name="Charlie" />
        <Weather />
        <MyButton/>
        <img src="" alt="" className='avather' />
      </div>
    </div>
  );
}

export default App;
