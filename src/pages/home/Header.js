// Header.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #282c34;
  color: white;
  padding: 1rem 0;
  text-align: center;
`;

const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Nome da Sua Aplicação</HeaderTitle>
      <nav>
        <Link to="/">Home</Link>
        {/* Adicione outros links de navegação, se necessário */}
      </nav>
    </HeaderContainer>
  );
};

export default Header;
