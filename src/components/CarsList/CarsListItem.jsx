import React, { useState } from 'react';
import {
  CarsItem, PhotoWrapper, Photo, MainInfo, AdiitionalInfo, ButtonMore, ButtonHeart 
} from './CarsList.styled';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/favorites/favoritesSlice';
import { HeartOutline, Heart } from 'react-ionicons'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectFavoritesCars } from '../../redux/favorites/selectors';
import { Modal } from '../Modal/Modal';

export const CarsListItem = ({ car }) => {
    const favorites = useSelector(selectFavoritesCars);

   const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(car));
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeFromFavorites(car));
  };
  const foundElement = favorites.find(function (item) {
    return item.id === car.id;
  });
  
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <CarsItem>
      <Modal isOpen={isModalOpen} onClose={closeModal} car={car} />
    <PhotoWrapper>
        <Photo src={car.img} alt={` Photo of a car ${car.make} ${car.model} `} />  
        {foundElement ?
          <ButtonHeart onClick={handleRemoveFromFavorites} type="button">
        <Heart
          color={'#3470FF'} 
          height="18px"
              width="18px" />
          </ButtonHeart>
          :
          <ButtonHeart onClick={handleAddToFavorites} type="button">
        <HeartOutline
           color={'#fff'} 
           height="18px"
              width="18px" />
          </ButtonHeart>}
    </PhotoWrapper>
      
    <MainInfo>
              <p>
              {car.make}
              <span>{car.model}</span>,
                  {car.year}
              </p>
            <span>{car.rentalPrice}</span>  
    </MainInfo>
      <AdiitionalInfo>{car.adress} | {car.make} | {car.make} | {car.rentalCompany} | {car.make} | {car.make} | {car.mileage}</AdiitionalInfo> 
    <ButtonMore type="button" onClick={openModal}>Learn more</ButtonMore>      
    </CarsItem>
  );
};