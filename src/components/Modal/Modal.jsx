import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import { MainInfo, AdditionalInfo, BtnClose, InfoBlock, InfoUnit, ModalBackdrop, ModalContainer, Photo, Description, BtnRentalCar, TagsWrapper } from './Modal.styled';
import { CloseOutline } from 'react-ionicons';
import DummyPhoto from '../../img/dummyPhoto.jpg';
export const Modal = ({ isOpen, onClose, car }) => {
  if (!isOpen) return null;
   const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
    };

  return ReactDOM.createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContainer>
        <BtnClose onClick={onClose}>
          <CloseOutline
  color={'#121417'} 
  height="24px"
  width="24px"
/>
        </BtnClose>
        <Photo src={ car.img } alt={` Photo of a car ${car.make} ${car.model}`} onError={(e) => {
                      e.currentTarget.src = DummyPhoto;
                    }}/>
              <MainInfo>
              {car.make}{" "}
              <span style={{ color: '#3470FF' }}>{car.model}</span>,{" "}
                  {car.year}
              </MainInfo>
              <AdditionalInfo> {car.address} | Year:{car.year} | Type: {car.type} | Fuel Consumption: {car.fuelConsumption} | Engine Size : {car.engineSize}</AdditionalInfo>
              <Description>{car.description}</Description>
              <InfoBlock>
                  <span> Accessories and functionalities:</span>
                  <AdditionalInfo>
                      {car.accessories.map((item, index) => (
                          <span key={index}>{item} | </span>
                      ))}
                      {car.functionalities.map((item, index) => (
                          <span key={index}>{item} | </span>
      ))} 
                  </AdditionalInfo>
              </InfoBlock>
              <InfoBlock>
                 <span>Rental Conditions:</span> 
          <TagsWrapper>
            {car.rentalConditions.split('\n').map((condition, index) => {
                      const [label, value] = condition.split(':');
                      return (
                      <InfoUnit key={index}>
                              {label} {value ? <span style={{ color: '#3470FF' }}>:{" "}{value}</span> : null}
                      </InfoUnit>)
                  })}
            <InfoUnit >
              Mileage:{" "}<span style={{ color: '#3470FF' }}> {car.mileage.toLocaleString()}</span>
            </InfoUnit>
            <InfoUnit >
              Price:{" "}<span style={{ color: '#3470FF' }}> {car.rentalPrice}</span>
            </InfoUnit>
          </TagsWrapper>            
        </InfoBlock>
        <BtnRentalCar href='tel:+380730000000'>Rental car</BtnRentalCar>
      </ModalContainer>
    </ModalBackdrop>,
    document.getElementById('portal-root')
  );
};
