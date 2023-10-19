// Header.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  HeaderContainer,
  HeaderTitle
}from "./style"


const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Não sei o nome ainda</HeaderTitle>
      <nav>
        {/* Adicione outros links de navegação, se necessário */}
      </nav>
    </HeaderContainer>
  );
};

export default Header;
