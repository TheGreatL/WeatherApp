import APIT_LINK  from "./api.js";
const searchButton  = document.querySelector('.button');
const searchInput = document.querySelector('.search-input');
const weatherLocation =document.querySelector('h1');
const temprature = document.getElementById('temperature');
const temperatureIcon = document.getElementById('temperatureIcon');
const temperatureLabel = document.getElementById('temperatureLabel');
searchButton.addEventListener('click',()=>{
    
        fetch(APIT_LINK+searchInput.value.toLowerCase())
        .then(response => {
            if(!response.ok){
                throw error();
            }
            return response.json();
        })
        .then(value=>{

            const {name:location,
                   main:{temp:temperature},
                   weather:[{description:temperatureDescription,icon:temperatureIcn}]    
                } =value;
            console.log(location);
            console.log(temperature);
            console.log(temperatureDescription);
            console.log(temperatureIcn);
            weatherLocation.textContent = location;
            console.log(value);
            temprature.textContent = temperature;
            temperatureIcon.src=`https://openweathermap.org/img/wn/${temperatureIcn}@2x.png`;
            temperatureLabel.textContent = temperatureDescription;
        })
        .catch(error=>{weatherLocation.textContent="Invalid Input"
            temperatureIcon.src='';
            temperatureLabel.textContent='';
            console.error(error);
            temprature.textContent='';
        });
});