import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import HeaderComponent from "./components/Header";
import WeatherContent from "./components/WeatherContent";
import ToggleButtonComponent from "./components/ToogleButton";
import { fetchWeatherData } from "./utils/api";

const themes = {
  light: { darkMode: false },
  dark: { darkMode: true },
};

export default function App() {
  const [weather, setWeather] = useState({ temp: 0, condition: "", localtime: "" });
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWeatherData();
      setWeather(data);
    };
    fetchData();
  }, []);

  const toggleTheme = () => {
    setTheme(theme.darkMode ? themes.light : themes.dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{ textAlign: "center", padding: "20px" }}>
        <HeaderComponent />
        <WeatherContent weather={weather} imageUrl="https://www.skyscrapercity.com/cdn-cgi/image/format=auto,onerror=redirect,width=1920,height=1920,fit=scale-down/https://www.skyscrapercity.com/attachments/fb_img_1676768286577-jpg.4644113/" />
        <ToggleButtonComponent toggleTheme={toggleTheme} theme={theme} />
      </div>
    </ThemeProvider>
  );
}
