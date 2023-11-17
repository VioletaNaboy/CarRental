import React from "react";
import { StyledLink, HeaderContainer, NavWrapper, CarIcon } from "./Header.styled";

export const Header = () => {
    return (
        <HeaderContainer>
            <CarIcon  height="48px"
  width="48px"/>
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