const currentDate = new Date();
const year = currentDate.getFullYear();

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: "numeric", minute: "numeric", second: "numeric"};
const today = new Date().toLocaleDateString('en-UK', options);

document.querySelector('#lastUpdated').textContent = `Last Updated: ${document.lastModified}`;

document.querySelector('#copyRight').textContent = `\u00A9 ${year} | Maki Canedo Aranas | Philippines`;


//weather information
async function getWeather() {
  const apiKey = 'cc62e66d8130004846514727c1635ade';
  const lat = 10.266182;
  const lon = 123.997292;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  const temp = data.main.temp - 273.15;
  const icon = data.weather[0].icon;
  const description = data.weather[0].description;

  document.querySelector('#current-temp').textContent = temp.toFixed(1) + '°C';
  document.querySelector('#weather-icon').src = `http://openweathermap.org/img/w/${icon}.png`;
  document.querySelector('figcaption').textContent = description;
}

getWeather();