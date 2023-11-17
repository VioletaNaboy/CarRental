import {
  CarsItem, PhotoWrapper, Photo, MainInfo, AdiitionalInfo, ButtonMore
  
} from './CarsList.styled';
export const CarsListItem = ({ car }) => {
  return (
    <CarsItem>
    <PhotoWrapper>
      <Photo src={car.img} alt={` Photo of a car ${car.make} ${car.model} `}/>        
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
    <ButtonMore type="button">Learn more</ButtonMore>      
    </CarsItem>
  );
};