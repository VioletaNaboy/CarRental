import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "../../redux/cars/selectors";
import { setStatusFilter } from "../../redux/filter/filterSlice";
import { Filter, FilterSelect, FilterInputGroup, FilterLabel, GroupLegend, SearchBtn, FilterMileageFrom, FilterMileageTo } from "./FilterForm.styled";
import makes from '../../files/makes.json';
export const FilterForm = () => {
  const dispatch = useDispatch();
  const [priceRange, setPriceRange] = useState("all");
  const [make, setMake] = useState("all");
  const [mileageFrom, setMileageFrom] = useState(0);
  const [mileageTo, setMileageTo] = useState(Infinity);
  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
    };
    const handleMakeChange = (e) => {
    setMake(e.target.value);
  };
  const handleMileageFromChange = (e) => {
    setMileageFrom(e.target.value);
  }
    const handleMileageToChange = (e) => {
    setMileageTo(e.target.value);
  }
    const generatePriceOptions = () => {
  const options = [];
  for (let price = 20; price <= 100; price += 10) {
    options.push(
      <option key={price} value={price}>
        {price}$
      </option>
    );
        }
  return options;
    };
    const generateMakesOptions = () => {
        return makes.map((make, index) => (
            <option key={index} value={make}>
            {make}
        </option>
        ))
  }
  const handleFilterSubmit = (e) => {
    e.preventDefault(); 
    const make = e.currentTarget.carMake.value === 'all' ? "" : e.currentTarget.carMake.value;
    const price = e.currentTarget.carPrice.value === 'all' ? Infinity : e.currentTarget.carPrice.value;
    const mileageFrom = Number(e.currentTarget.mileageFrom.value) ? e.currentTarget.mileageFrom.value : 0;
    const mileageTo = Number(e.currentTarget.mileageTo.value) ? e.currentTarget.mileageTo.value : Infinity;
    dispatch(setStatusFilter({ make, price, mileageFrom, mileageTo }));
    e.currentTarget.reset();
  }
    return (
    <Filter onSubmit={handleFilterSubmit}>
            <div>
                <FilterLabel htmlFor="carMake">Car brand</FilterLabel>
          <FilterSelect id="carMake" value={make} onChange={handleMakeChange}><option value="all">ALL</option>
            {generateMakesOptions()}</FilterSelect>
            </div>   
            <div>
                <FilterLabel htmlFor="carPrice">Price/ 1 hour</FilterLabel>
                <FilterSelect   id="carPrice" value={priceRange} onChange={handlePriceRangeChange}><option value="all">ALL</option>{ generatePriceOptions()}</FilterSelect>
            </div>  
        <FilterInputGroup>
          <GroupLegend>Сar mileage / km</GroupLegend>
          <FilterLabel></FilterLabel>
          <FilterLabel></FilterLabel>
          <div style={{ display: "flex" }}>
            <FilterMileageFrom id="mileageFrom" value={mileageFrom} onChange={handleMileageFromChange}></FilterMileageFrom>
            <FilterMileageTo id="mileageTo" value={mileageTo} onChange={handleMileageToChange}></FilterMileageTo>
          </div>
        </FilterInputGroup>
        <SearchBtn type="submit">Search</SearchBtn>


    </Filter> 
    )
}