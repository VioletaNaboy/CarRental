import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectFavoritesCars } from '../redux/favorites/selectors';
import { CarsList } from '../components/CarsList/CarsList';
const Favorites = () => {
    const favorites = useSelector(selectFavoritesCars);
  return (
    <div>
      <h1>Favorites</h1>
      <CarsList cars={favorites} />
    </div>
  );
};

export default Favorites;