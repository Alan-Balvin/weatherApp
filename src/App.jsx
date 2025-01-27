import { useState, useEffect } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: ${(props) => (props.theme.darkMode ? "#121212" : "#f0f8ff")};
    color: ${(props) => (props.theme.darkMode ? "#ffffff" : "#000000")};
    margin: 0;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    transition: background-color 0.3s ease-in-out;
  }
`;


const themes = {
  light: { darkMode: false },
  dark: { darkMode: true },
};

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Header = styled.header`
  background-color: ${(props) => (props.theme.darkMode ? "#333" : "#46b0b4")};
  color: white;
  padding: 40px 20px; 
  margin: 0;
`;

const Content = styled.div`
  background-color: ${(props) => (props.theme.darkMode ? "#222" : "#ffffff")};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: inline-block;
  margin-top: 20px;
  padding: 20px;
  transition: background-color 0.3s ease-in-out;
`;

const ToggleButton = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  font-size: 1rem;
  background-color: ${(props) => (props.theme.darkMode ? "#f0f8ff" : "#222")};
  color: ${(props) => (props.theme.darkMode ? "#000" : "#fff")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const URL =
  "https://api.weatherapi.com/v1/current.json?key=e4ded2049c894ae49aa162428251401&q=Mazatlan";

export default function App() {
  const [weather, setWeather] = useState({
    temp: 0,
    condition: "",
    localtime: "",
  });
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then((json) => {
        setWeather({
          temp: json.current.temp_c,
          condition: json.current.condition.text,
          localtime: json.location.localtime,
        });
      });
    };
    fetchData();
  }, []);

  const toggleTheme = () => {
    setTheme(theme.darkMode ? themes.light : themes.dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header>
          <h1>Mazatlán Weather</h1>
        </Header>
        <Content>
          <img
            src="https://www.skyscrapercity.com/cdn-cgi/image/format=auto,onerror=redirect,width=1920,height=1920,fit=scale-down/https://www.skyscrapercity.com/attachments/fb_img_1676768286577-jpg.4644113/"
            alt="Mazatlán"
            className="mazatlan-image"
            style={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: "10px",
              margin: "20px auto",
              display: "block",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
          <p>
            <strong>Temperature:</strong> {weather.temp}°C
          </p>
          <p>
            <strong>Condition:</strong> {weather.condition}
          </p>
          <p>
            <strong>Local Time:</strong> {weather.localtime}
          </p>
          <ToggleButton onClick={toggleTheme}>
            {theme.darkMode ? "Light Mode" : "Dark Mode"}
          </ToggleButton>
        </Content>
      </Container>
    </ThemeProvider>
  );
}
