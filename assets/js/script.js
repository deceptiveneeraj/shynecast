import { hero } from "./hero.js";

function func(hero) {
    const regex = /[a-f0-9]{32}/i;   // 32-character hex
    const match = hero.match(regex);
    return match ? match[0] : null;
}

const subject = func(hero);

const API_KEY = subject ;

function getWeather(cityName = null) {
  let city = cityName || document.getElementById("city").value.trim();
  if (city == "") {
    city = "indore"; // Default city
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayWeatherData(data);
      getFiveDayForecastByCoords(data.coord.lat, data.coord.lon);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("Could not retrieve weather data. Please check the city name and try again.");
    });
}

function displayWeatherData(data) {
  const icon = data.weather[0].icon;
  const desc = data.weather[0].description;
  const temp = data.main.temp;
  const tempMin = data.main.temp_min;
  const tempMax = data.main.temp_max;
  const feels = data.main.feels_like;
  const humidity = data.main.humidity;
  const pressure = data.main.pressure;
  const visibility = (data.visibility / 1000).toFixed(1);
  const wind = data.wind.speed;
  const sea = data.main.sea_level || pressure;
  const cityName = data.name;

  // Convert sunrise & sunset to readable time
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  document.getElementById("city-name").innerHTML = cityName.toUpperCase();
  document.getElementById("temp").innerHTML = `${temp}°C`;
  document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  document.getElementById("weather-desc").innerHTML = `${desc.toUpperCase()}`;
  document.getElementById("sunrise").innerHTML = `<i class="fas fa-sun"></i> ${sunrise.toUpperCase()}`;
  document.getElementById("sunset").innerHTML = `<i class="fas fa-cloud-sun"></i> ${sunset.toUpperCase()}`;

  document.getElementById("temp-min").innerHTML = `${tempMin}°C`;
  document.getElementById("temp-max").innerHTML = `${tempMax}°C`;
  document.getElementById("feels-like").innerHTML = `${feels}°C`;
  document.getElementById("humidity").innerHTML = `${humidity}%`;
  document.getElementById("wind-speed").innerHTML = `${wind} m/s`;
  document.getElementById("pressure").innerHTML = `${pressure} hPa`;
  document.getElementById("visibility").innerHTML = `${visibility} km`;
  document.getElementById("sea-level").innerHTML = `${sea} hPa`;
}

function getFiveDayForecastByCoords(lat, lon) {
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  
  fetch(forecastUrl)
    .then((response) => response.json())
    .then((forecastData) => {
      let forecastHTML = "";
      const today = new Date().getDate();
      const shownDays = new Set();

      for (let i = 0; i < forecastData.list.length; i++) {
        const item = forecastData.list[i];
        const itemDate = new Date(item.dt * 1000);
        const dayNumber = itemDate.getDate();

        if (dayNumber === today || shownDays.has(dayNumber)) {
          continue;
        }

        shownDays.add(dayNumber);

        const dateText = itemDate.toLocaleDateString([], {
          weekday: "short",
          month: "short",
          day: "numeric",
        });

        const icon = item.weather[0].icon;
        const temp = item.main.temp;

        forecastHTML += `
          <div class="forecast-card">
            <h4>${dateText}</h4>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon">
            <p>${temp}°C</p>
          </div>
        `;

        if (shownDays.size === 5) break;
      }
      
      document.getElementById("forecast-title").innerHTML = "5-Day Forecast";
      document.getElementById("forecast").innerHTML = forecastHTML;
    })
    .catch((error) => {
      console.error("Error fetching forecast data:", error);
    });
}

// Get weather based on user's current location
function getLocationWeather() {
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser");
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then((res) => res.json())
        .then((data) => {
          displayWeatherData(data);
          getFiveDayForecastByCoords(lat, lon);
        })
        .catch((error) => {
          console.error("Error fetching location weather:", error);
          alert("Could not retrieve weather data for your location.");
        });
    },
    (error) => {
      console.error("Geolocation error:", error);
      alert("Could not access your location. Using default city instead.");
      // Fallback to default city if location access denied
      getWeather();
    }
  );
}

// Automatically detect location and show weather on page load
window.onload = function () {
  // Try to get location automatically
  if (navigator.geolocation) {
    getLocationWeather();
  } else {
    // If geolocation not supported, use default city
    getWeather();
  }
};