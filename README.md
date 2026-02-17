# 🌦️ Weather App

A modern, responsive weather application built with **React (Vite)**, **Tailwind CSS**, and the **OpenWeatherMap API**. Features real-time weather data, 5-day forecasts, and location-based services.


---

## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Reference](#-api-reference)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ Features

- **🔍 City Search** - Search weather information for any city worldwide
- **📍 Geolocation** - Automatic weather detection using device location
- **🌡️ Real-time Data** - Current temperature, humidity, wind speed, and conditions
- **📅 5-Day Forecast** - Extended weather predictions with daily breakdowns
- **⚠️ Smart Error Handling** - User-friendly messages for invalid inputs or API errors
- **⏳ Loading States** - Smooth loading indicators for better UX
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop
- **🎨 Modern UI** - Clean, intuitive interface with Tailwind CSS

---

## 🎥 Demo

![Weather App Screenshot](screenshot.png)

**Live Demo:** [View App](your-deployment-link)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library for building interactive interfaces |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS** | Utility-first CSS framework |
| **JavaScript (ES6+)** | Modern JavaScript features |
| **OpenWeatherMap API** | Weather data provider |
| **Axios/Fetch** | HTTP client for API requests |

---

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- OpenWeatherMap API key ([Get one free](https://openweathermap.org/api))

### Steps

1. **Clone the repository**
```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
```

2. **Install dependencies**
```bash
   npm install
   # or
   yarn install
```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
```env
   VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
```

4. **Start the development server**
```bash
   npm run dev
   # or
   yarn dev
```

5. **Open your browser**
```
   http://localhost:5173
```

---

## 🎯 Usage

### Search by City
1. Enter a city name in the search bar
2. Press Enter or click the search button
3. View current weather and 5-day forecast

### Use Current Location
1. Click the location button
2. Allow location permissions in your browser
3. Weather data loads automatically for your area

---

## 🌐 API Reference

### Endpoints Used

| Endpoint | Purpose | Documentation |
|----------|---------|---------------|
| `/weather` | Current weather data | [Docs](https://openweathermap.org/current) |
| `/forecast` | 5-day forecast | [Docs](https://openweathermap.org/forecast5) |

### Example Request
```javascript
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Current weather
fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`)

// 5-day forecast
fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`)
```

---

## 📁 Project Structure
```
weather-app/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── Forecast.jsx
│   │   └── ErrorMessage.jsx
│   ├── services/
│   │   └── weatherService.js
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🔐 Environment Variables

This project uses Vite's environment variable system. All variables must be prefixed with `VITE_`.

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_WEATHER_API_KEY` | OpenWeatherMap API key | Yes |

**Usage in code:**
```javascript
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
```

**Security Note:** Never commit your `.env` file. It's already included in `.gitignore`.

---

## 🚀 Future Enhancements

- [ ] Dark/Light mode toggle
- [ ] Weather alerts and notifications
- [ ] Historical weather data
- [ ] Multiple language support
- [ ] Air quality index
- [ ] UV index display
- [ ] Save favorite cities
- [ ] Progressive Web App (PWA) support

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Contact

**Mohit**  
Frontend Developer

- GitHub: [username](https://github.com/mohityadav-14)
- LinkedIn: [Profile](https://www.linkedin.com/in/mohit-yadav-09282436b/)
- Email: my1494810@gmail.com

---

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for the weather API
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [React](https://react.dev/) for the UI library
- [Vite](https://vitejs.dev/) for the build tool

---

<div align="center">
  Made with ❤️ by Mohit
  </div>