import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from '../redux/cars/operations';
import { CarsList } from '../components/CarsList/CarsList';
import { LoadMoreButton } from '../components/LoadMoreButton/LoadMoreButton.styled';

const Catalog = () => {
    const [page, setPage] = useState(1);
    // const page = 1;
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchCars(page));
    }, [page]);
    const handleClickMore = () => {
        console.log(page + 1);
        setPage(page + 1);  
    }
  return (
    <div>
      <h1>Catalog</h1>
          <CarsList />
          <LoadMoreButton type="button" onClick={handleClickMore}>Load More</LoadMoreButton>
    </div>
  );
};

export default Catalog;