

import styled from "styled-components";
import PropTypes from "prop-types";
import React from 'react';



const ToggleButton = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  font-size: 1rem;
  background-color: ${(props) => (props.theme.darkMode ? "#f0f8ff" : "#222")};
  color: ${(props) => (props.theme.darkMode ? "#000" : "#fff")};
  border: none;
  border-radius: 5px;
  cursor: pointer;npm install --save-dev jest-styled-components

  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const ToggleButtonComponent = ({ toggleTheme, theme }) => (
  <ToggleButton onClick={toggleTheme}>
    {theme.darkMode ? "Light Mode" : "Dark Mode"}
  </ToggleButton>
);

ToggleButtonComponent.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    darkMode: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ToggleButtonComponent;
