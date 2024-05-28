import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div class="weather-app">
        <header>
          <form id="search-form">
            <input
              type="search"
              placeholder="Enter a city.."
              required
              class="search-input"
              id="search-input"
            />
            <input type="submit" value="Search" class="search-button" />
          </form>
        </header>
        <main>
          <div class="current-weather">
            <div>
              <h1 class="current-city" id="current-city">
                Paris
              </h1>
              <p class="current-details">
                <span id="current-date"></span>moderate rain <br />
                Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
              </p>
            </div>
            <div class="current-temperature">
              <span class="current-temperature-icon">☀️</span>
              <span class="current-temperature-value" id="current-temperature">
                24
              </span>
              <span class="current-temperature-unit">°C</span>
            </div>
          </div>
        </main>
        <footer>
          <p>
            This project was coded by
            <a href="https://github.com/Shecodes2024" target="_blank">
              Loise Musungu
            </a>
            and is
            <a
              href="https://github.com/Shecodes2024/Weather-App-Shecodes"
              target="_blank"
            >
              on GitHub
            </a>
            and
            <a
              href="https://remarkable-mousse-ed2f04.netlify.app/"
              target="_blank"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
