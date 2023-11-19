import { NavLink } from 'react-router-dom';
import { CarSportSharp } from 'react-ionicons'
import styled, { keyframes } from 'styled-components';


const fadeIn = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
`;
export const CarIcon = styled(CarSportSharp)`
animation: ${fadeIn} 800ms ease-in-out;
`

export const StyledLink = styled(NavLink)`
padding: 12px;
font-size: 16px;
font-weight: 500;
color: #121417;
text-transform: uppercase;
&.active {
    background: rgba(18, 20, 23, 0.50);
    border-radius: 16px;
    padding: 14px;
    color: #fff;
  }
`
export const HeaderContainer = styled.header`
width: 100%;
position: fixed;
z-index: 100;
display: flex;
top: 0;
right: 0;
padding: 32px;
justify-content: space-evenly;
align-items: center;
background: #fff;
`
export const NavWrapper = styled.nav`
display: flex;
gap: 14px;
`