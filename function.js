import { APIT_LINK } from "./api.js";
const searchButton  = document.querySelector('.button');
const searchInput = document.querySelector('.search-input');
const weatherLocation =document.querySelector('h1');
const temprature = document.getElementById('temperature');
const temperatureIcon = document.getElementById('temperatureIcon');
const temperatureLabel = document.getElementById('temperatureLabel');
searchButton.addEventListener('click',()=>{
    
        fetch(APIT_LINK+searchInput.value.toLowerCase())
        .then(response => response.json())
        .then(value=>{
            weatherLocation.textContent = value.name;
            console.log(value);
            temprature.textContent = value.main.temp;

            let iconTempPath = 'https://openweathermap.org/img/wn/';
            value.weather.forEach(weather => {
                iconTempPath+=`${weather.icon}@2x.png`;
                temperatureIcon.src =iconTempPath;
                temperatureLabel.textContent = weather.main;
            });
        })
        .catch(error=>{weatherLocation.textContent="Invalid Input"
            temperatureIcon.src='';
            temperatureLabel.textContent='';
            temprature.textContent='';
        });
});