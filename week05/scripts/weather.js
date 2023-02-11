async function getWeather() {
    const apiKey = 'cc62e66d8130004846514727c1635ade';
    const location = await getLocation();
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=10.266182&lon=123.997292&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const temp = data.main.temp - 273.15;
    const icon = data.weather[0].icon;
    const description = data.weather[0].description;
  
    document.querySelector('#current-temp').textContent = temp.toFixed(1) + '°C';
    document.querySelector('#weather-icon').src = `http://openweathermap.org/img/w/${icon}.png`;
    document.querySelector('figcaption').textContent = description;
  }
  
  function getLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
  
  getWeather();