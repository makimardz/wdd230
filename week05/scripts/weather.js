// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp')
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = 'cc62e66d8130004846514727c1635ade';
const city = 'Trier';
const units = 'imperial';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}';

fetch(url)
    .then((response) => response.json())
    .then((data) => displayData(data));

    function displayData(data) {
        console.log(data)

    }