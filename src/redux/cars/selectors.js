
import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.items;
export const selectFilter = state => state.filter;
export const selectVisibleCars = createSelector(
    [selectCars, selectFilter],
  (cars, filter) => {
    const filteredByMake = cars.filter(car => car.make.toLowerCase().includes(filter.make.toLowerCase()));
    const filteredByPrice = filteredByMake.filter(car => car.rentalPrice.substring(1) <= filter.price);
    const filteredByMileage = filteredByPrice.filter(car => car.mileage >= filter.mileageFrom && car.mileage <= filter.mileageTo);
    return filteredByMileage;
    }
  );