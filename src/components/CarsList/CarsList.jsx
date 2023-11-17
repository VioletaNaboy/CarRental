import { CarsListItem } from './CarsListItem';
import { List } from './CarsList.styled';
import { useSelector } from 'react-redux';
import {
    selectCars
} from '../../redux/cars/selectors';

export const CarsList = () => {
  const cars = useSelector(selectCars);
  return (
    (
      <List >
      {cars.map((car) => (
        <CarsListItem key={car.id} car={car} />
      ))}
      </List> 
    )
    
  );
};