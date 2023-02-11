const API_KEY = 'cc62e66d8130004846514727c1635ade';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

// Get the current location of the user
navigator.geolocation.getCurrentPosition(async position => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  
  // Make a request to the OpenWeather API to retrieve the weather information
  const response = await fetch(`${API_URL}&lat=${lat}&lon=${lon}`);
  const data = await response.json();
  
  // Extract the relevant information from the API response
  const temp = data.main.temp;
  const icon = data.weather[0].icon;
  const description = data.weather[0].description;
  
  // Create the HTML elements to display the information
  const weatherIcon = document.createElement('img');
  weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  weatherIcon.alt = description;
  
  const tempDisplay = document.createElement('p');
  tempDisplay.textContent = `Temperature: ${temp}°C`;
  
  const caption = document.createElement('figcaption');
  caption.appendChild(weatherIcon);
  caption.appendChild(tempDisplay);
  
  // Add the HTML elements to the page
  const figure = document.createElement('figure');
  figure.appendChild(caption);
  document.body.appendChild(figure);
});