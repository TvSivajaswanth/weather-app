# 🌤️ Real-Time Weather App

A responsive weather web application that allows users to search for a city and view its current weather information in real time.

The application uses the **Open-Meteo API** to retrieve location and weather data without requiring an API key.

## 🚀 Features

* 🔍 Search weather by city name
* 🌡️ Current temperature
* 💧 Relative humidity
* 💨 Wind speed
* 🌡️ Feels-like temperature
* 🌤️ Weather condition
* ⌨️ Search using the Enter key
* 📱 Responsive design for mobile and desktop
* ⚡ Real-time weather data
* 🔑 No API key required

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* Open-Meteo API

## 📁 Project Structure

```text
weather-app/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
```

## 🔄 How It Works

The application follows these steps:

```text
User enters a city
        ↓
Geocoding API finds the city
        ↓
Latitude + Longitude
        ↓
Weather API gets current weather
        ↓
JavaScript processes the data
        ↓
Weather information appears on the screen
```

## 🌐 APIs Used

### Open-Meteo

This project uses Open-Meteo for:

* City geocoding
* Current weather data
* Temperature
* Humidity
* Wind speed
* Apparent temperature
* Weather codes

No API key is required for this project.

## ▶️ How to Run

1. Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/weather-app.git
```

2. Open the project folder:

```bash
cd weather-app
```

3. Open `index.html` in your browser.

You can also use **VS Code Live Server** for development.

## 📸 Preview

Add a screenshot of your application here after you finish the UI:

```markdown
![Weather App Screenshot](screenshot.png)
```

## 🔮 Future Improvements

Planned improvements include:

* ☀️ 3D animated weather background
* ☁️ Animated clouds
* 🌧️ Rain animation
* ❄️ Snow animation
* 🌙 Day/night system
* 🕐 Local time for searched city
* 📅 5-day weather forecast using live API data
* 🌡️ Celsius/Fahrenheit switch
* 📍 Current-location weather
* ✨ Improved animations and UI

## 📚 What I Learned

While building this project, I practiced:

* DOM manipulation
* JavaScript functions
* `async/await`
* Fetch API
* Working with JSON
* REST APIs
* Error handling with `try/catch`
* Template literals
* Array indexing
* Responsive CSS
* Git and GitHub

## 👨‍💻 Author

**Your Name**

Built as a learning project using HTML, CSS, JavaScript, and Open-Meteo.

---

⭐ If you found this project useful, consider giving it a star!
