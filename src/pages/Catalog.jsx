import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
    selectVisibleCars
} from '../redux/cars/selectors';
import { fetchCars } from '../redux/cars/operations';
import { CarsList } from '../components/CarsList/CarsList';
import { LoadMoreButton } from '../components/LoadMoreButton/LoadMoreButton.styled';
import { FilterForm } from '../components/FilterForm/FilterForm';

const Catalog = () => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchCars(page));
    }, [page, ]);
    const handleClickMore = () => {
        setPage(page + 1);  
    }
    const cars = useSelector(selectVisibleCars);
  return (
    <div>
      <h1>Catalog</h1>
          <FilterForm/>
          <CarsList cars={cars} />
          <LoadMoreButton type="button" onClick={handleClickMore}>Load More</LoadMoreButton>
    </div>
  );
};

export default Catalog;