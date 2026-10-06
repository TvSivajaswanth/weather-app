const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feelsLike = document.getElementById("feelsLike");


searchBtn.addEventListener("click", getWeather);


async function getWeather() {
//trim() ->removes whitespace (such as spaces, tabs, and newlines) from both the beginning and the end of a string.
    const city = cityInput.value.trim(); 

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    condition.textContent = "Searching...";

    try {

        // 1. Find the city's latitude and longitude
        const locationResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
        );

        const locationData = await locationResponse.json();

        if (!locationData.results) {
            throw new Error("City not found");
        }
// [0] = The 1st item in the list (the absolute best match)
// [0] (Bracket Notation): In JavaScript and most programming languages, arrays use zero-based indexing.
        const location = locationData.results[0];

        const latitude = location.latitude;
        const longitude = location.longitude;

        // 2. Get weather using latitude and longitude
        
        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&timezone=auto`
        );

        const weatherData = await weatherResponse.json();
        /*

        .current: This is a specific property inside that object. 
        The pen-Meteo API groups its data into sections like hourly, daily, and current. 
        Because you explicitly asked for &current=... in your API URL, 
        the server put all of those requested metrics inside a sub-folder named current.
        */
        const current = weatherData.current;

        // 3. Update the UI
        cityName.textContent = location.name;

        temperature.textContent = Math.round(current.temperature_2m);

        humidity.textContent = `${current.relative_humidity_2m}%`;

        wind.textContent = `${current.wind_speed_10m} km/h`;

        feelsLike.textContent = `${Math.round(current.apparent_temperature)}°C`;

        condition.textContent = getWeatherCondition(current.weather_code);

    } catch (error) {

        console.error(error);

        cityName.textContent = "Error";
        temperature.textContent = "--";
        humidity.textContent = "--";
        wind.textContent = "--";
        feelsLike.textContent = "--";
        condition.textContent = "City not found";

    }
}


function getWeatherCondition(code) {

    if (code === 0) {
        return "Clear Sky ☀️";
    }

    if (code >= 1 && code <= 3) {
        return "Partly Cloudy 🌤️";
    }

    if (code >= 45 && code <= 48) {
        return "Foggy 🌫️";
    }

    if (code >= 51 && code <= 67) {
        return "Rainy 🌧️";
    }

    if (code >= 71 && code <= 77) {
        return "Snowy ❄️";
    }

    if (code >= 80 && code <= 82) {
        return "Rain Showers 🌦️";
    }

    if (code >= 95) {
        return "Thunderstorm ⛈️";
    }

    return "Unknown";
}
