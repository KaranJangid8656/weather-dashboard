// script.js
const apiKey = 'efde049d778afcfec97b8160454f01e5';  // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById('city').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Clear the existing weather info content before adding new data
  const weatherInfo = document.getElementById('weather-info');
  weatherInfo.innerHTML = "";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);  // Log the response to inspect it

      if (data.cod === "404") {
        alert('City not found. Please check the city name.');
      } else if (data.cod === 200) {
        // Create and append elements dynamically
        const cityName = document.createElement('h2');
        cityName.id = 'city-name';
        cityName.innerText = `${data.name}, ${data.sys.country}`;
        weatherInfo.appendChild(cityName);

        const temperature = document.createElement('p');
        temperature.id = 'temperature';
        temperature.innerText = `Temperature: ${data.main.temp}°C`;
        weatherInfo.appendChild(temperature);

        const humidity = document.createElement('p');
        humidity.id = 'humidity';
        humidity.innerText = `Humidity: ${data.main.humidity}%`;
        weatherInfo.appendChild(humidity);

        const weatherCondition = document.createElement('p');
        weatherCondition.id = 'weather-condition';
        weatherCondition.innerText = `Condition: ${data.weather[0].description}`;
        weatherInfo.appendChild(weatherCondition);
      }
    })
    .catch(error => {
      alert('Error fetching weather data!');
      console.error(error);
    });
}
