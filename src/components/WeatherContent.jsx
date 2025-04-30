import styled from "styled-components";
import PropTypes from "prop-types";

const Content = styled.div`
  background-color: ${(props) => (props.theme.darkMode ? "#222" : "#ffffff")};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: block; /* Cambiado a block para que ocupe todo el ancho disponible */
  margin-top: 20px;
  padding: 20px;
  transition: background-color 0.3s ease-in-out;
  text-align: center; /* Asegura que el contenido dentro de Content esté centrado */
`;

const WeatherContent = ({ weather, imageUrl }) => (
  <Content>
    <img
      src={imageUrl}
      alt="Mazatlán"
      style={{
        width: "100%",
        maxWidth: "600px",
        borderRadius: "10px",
        margin: "20px auto",
        display: "block",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    />
    <p><strong>Temperature:</strong> {weather.temp}°C</p>
    <p><strong>Condition:</strong> {weather.condition}</p>
    <p><strong>Local Time:</strong> {weather.localtime}</p>
   
  </Content>
);

WeatherContent.propTypes = {
  weather: PropTypes.shape({
    temp: PropTypes.number.isRequired,
    condition: PropTypes.string.isRequired,
    localtime: PropTypes.string.isRequired,
  }).isRequired,
  imageUrl: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default WeatherContent;
