import React, { useState, useEffect } from 'react';
import {
  CarsItem, PhotoWrapper, Photo, MainInfo, AdiitionalInfo, ButtonMore, ButtonHeart 
} from './CarsList.styled';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/favorites/favoritesSlice';
import { HeartOutline, Heart } from 'react-ionicons'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectFavoritesCars } from '../../redux/favorites/selectors';
import { Modal } from '../Modal/Modal';
import DummyPhoto from '../../img/dummyPhoto.jpg';
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
    const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      setModalOpen(false);
    }
  };
    useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyPress);
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }
  }, [isModalOpen]);
  return (
    <CarsItem>
      <Modal isOpen={isModalOpen} onClose={closeModal} car={car} />
    <PhotoWrapper>
        <Photo src={car.img} alt={` Photo of a car ${car.make} ${car.model} `}  onError={(e) => {
                      e.currentTarget.src = DummyPhoto;
                    }} />  
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
              {car.make}{" "}
              <span style={{ color: '#3470FF' }}>{car.model}</span>,{" "}
                  {car.year}
              </p>
            <span>{car.rentalPrice}</span>  
    </MainInfo>
      <AdiitionalInfo>{car.address} | {car.rentalCompany} | {car.type} | {car.make} | {car.mileage.toLocaleString()} | {car.functionalities[0]}</AdiitionalInfo> 
    <ButtonMore type="button" onClick={openModal}>Learn more</ButtonMore>      
    </CarsItem>
  );
};