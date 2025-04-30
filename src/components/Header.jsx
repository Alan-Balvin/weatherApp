import styled from "styled-components";

const Header = styled.header`
  background-color: ${(props) => (props.theme.darkMode ? "#333" : "#46b0b4")};
  color: white;
  padding: 40px 20px;
  margin: 0;
`;

const HeaderComponent = () => (
  <Header>
    <h1>Mazatlán Weather</h1>
  </Header>
);

export default HeaderComponent;
