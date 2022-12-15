// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const windSpeed = document.querySelector('#wind-speed');
const windChill = document.querySelector('#wind-chill');
const captionDesc = document.querySelector('figcaption');
const url = "https://api.openweathermap.org/data/2.5/weather?id=5334223&units=imperial&appid=4d13c09b98f2fc261f7c6cd83886167c"

/*temp - condition description - humidity - three day forecast*/
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }

    function displayResults(weatherData) {
        const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
        const desc = weatherData.weather[0].description;
    
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = desc;

        currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
        windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
        windChill.innerHTML = `<strong>N/A</strong>`;
      }
  }
  
  apiFetch();