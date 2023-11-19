import React from "react";
import { StyledLink, HeaderContainer, NavWrapper, CarIcon } from "./Header.styled";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <HeaderContainer>
           <NavLink to="/"><CarIcon  height="48px"
  width="48px"/></NavLink> 
     <NavWrapper>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
    </NavWrapper>
</HeaderContainer>  
    )
    
}