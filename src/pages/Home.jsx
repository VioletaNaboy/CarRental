import React from 'react';
import mainPhoto from '../img/main.jpg';
import { ImgMain, ContainerMain, TitleMain, SubtitleMain, ListContainer, LabelLi, StyledUl } from './Home.styled'


const Home = () => {
  return (
    <div>
      <TitleMain>CarRental Ukraine</TitleMain>
      <SubtitleMain>We are a Ukrainian car rental service!</SubtitleMain>
      <ContainerMain>
      <ImgMain src={mainPhoto} alt="Home page photo" />
      <ListContainer>
        <h3>How it works:</h3>
      <StyledUl>
        <li><LabelLi >Choose What Suits You:</LabelLi> Browse our cars and select what fits your needs.</li>
        <li><LabelLi >Add to Favorites:</LabelLi> Save cars you like in your "Favorites" and review them from any device.</li>
        <li><LabelLi >Book Online:</LabelLi> Easily and quickly book your favorite car through our website.</li>
        <li><LabelLi >Pick Up and Enjoy:</LabelLi> Embark on your journey in style and comfort. Your adventure starts now!</li>
        </StyledUl>
      </ListContainer>
      </ContainerMain>
    </div>
  );
};

export default Home;