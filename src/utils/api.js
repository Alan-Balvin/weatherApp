export const fetchWeatherData = async () => {
    const URL = "https://api.weatherapi.com/v1/current.json?key=e4ded2049c894ae49aa162428251401&q=Mazatlan";
    const result = await fetch(URL);
    const json = await result.json();
    return {
      temp: json.current.temp_c,
      condition: json.current.condition.text,
      localtime: json.location.localtime,
    };
  };
  