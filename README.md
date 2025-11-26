# 🌤️ Shyne Cast - Weather Application

A modern, responsive weather application that provides real-time weather information and 5-day forecasts for any city worldwide.

![Shyne Cast](./assets/img/favicon.png)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

- **Current Weather Data**: Get real-time weather information for any city
- **Auto-Location Detection**: Automatically detects and displays weather for your current location
- **5-Day Forecast**: View detailed weather predictions for the next 5 days
- **Comprehensive Weather Metrics**:
  - Current temperature
  - Minimum and maximum temperatures
  - Feels-like temperature
  - Humidity levels
  - Wind speed
  - Atmospheric pressure
  - Visibility range
  - Sea level pressure
  - Sunrise and sunset times
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern gradient design with smooth animations
- **Search Functionality**: Search weather for any city worldwide

## 🚀 Demo

Visit the live application: [Shyne Cast](https://deceptiveneeraj.github.io/shynecast/)

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- OpenWeatherMap API key

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/deceptiveneeraj/shyne-cast.git
   cd shyne-cast
   ```

2. **Get your API Key**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Generate a free API key

3. **Configure API Key**
   - Open `asset/js/script.js`
   - Replace the API key on line 1:
     ```javascript
     const API_KEY = "YOUR_API_KEY_HERE";
     ```

4. **Launch the application**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

## 📁 Project Structure

```
shyne-cast/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # Stylesheet
│   ├── js/
│   │   └── script.js      # JavaScript logic
│   └── img/
│       ├── favicon.png    # Favicon
│       └── search-icon.svg # Search icon
├── manifest.json          # PWA manifest
└── README.md             # This file
```

## 🎨 Technologies Used

- **HTML5**: Structure and semantics
- **CSS3**: Styling with modern features
  - Flexbox & Grid layouts
  - CSS animations
  - Gradient backgrounds
  - Responsive design
- **JavaScript (ES6+)**: Application logic
  - Fetch API for HTTP requests
  - Geolocation API
  - DOM manipulation
- **Font Awesome**: Icon library
- **OpenWeatherMap API**: Weather data provider

## 💻 Usage

### Search for a City
1. Type the city name in the search bar
2. Click the "Search" button or press Enter
3. View the current weather and 5-day forecast

### Use Current Location
1. Click the location icon in the navigation bar
2. Allow location access when prompted
3. Weather for your current location will be displayed

### Default Behavior
- On page load, the app automatically requests your location
- If location access is denied, it defaults to Indore, India

## 🌐 API Reference

The application uses the following OpenWeatherMap API endpoints:

### Current Weather
```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

### 5-Day Forecast
```
GET https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API_KEY}&units=metric
```

## 📱 Responsive Breakpoints

- **Desktop**: > 600px
- **Mobile**: ≤ 600px

## 🎯 Key Features Explained

### Auto-Location Detection
The app automatically detects your location on page load using the browser's Geolocation API and displays relevant weather information.

### 5-Day Forecast
Shows weather predictions for the next 5 days (excluding today), displaying one forecast per day at midday for consistency.

### Weather Cards
Interactive cards display various weather metrics with hover effects and smooth transitions.

## 🔒 Privacy

- Location data is only used to fetch weather information
- No user data is stored or transmitted to any server except OpenWeatherMap
- Location access can be denied; the app will use a default city

## 🐛 Known Issues

- API rate limits apply (60 calls/minute for free tier)
- Some cities with duplicate names may require state/country codes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [Neeraj Solanki](https://github.com/deceptiveneeraj)
- Website: [My Portfolio](https://deceptiveone.github.com)

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Inspired by modern weather applications

## 📧 Contact

For questions or feedback, please reach out to: neera.link@gmail.com

---

**© 2026 Shyne Cast. All rights reserved.**