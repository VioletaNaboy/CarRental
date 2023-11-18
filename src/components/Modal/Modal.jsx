import React from 'react';
import ReactDOM from 'react-dom';
import { MainInfo, AdditionalInfo, BtnClose, InfoBlock, InfoUnit, ModalBackdrop, ModalContainer, Photo, Description } from './Modal.styled';
import { CloseOutline } from 'react-ionicons';
export const Modal = ({ isOpen, onClose, car }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalBackdrop>
      <ModalContainer>
        <BtnClose onClick={onClose}>
          <CloseOutline
  color={'#121417'} 
  height="24px"
  width="24px"
/>
        </BtnClose>
              <Photo src={car.img} alt={` Photo of a car ${car.make} ${car.model}`} />
              <MainInfo>
              {car.make}{" "}
              <span>{car.model}</span>,{" "}
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
                  <div>{car.rentalConditions.split('\n').map((condition, index) => {
                      const [label, value] = condition.split(':');
                      return (
                      <InfoUnit key={index}>
                              {label} {value ? <span style={{ color: '#3470FF' }}>:{" "}{value}</span> : null}
                      </InfoUnit>)}) }</div>            
              </InfoBlock>
      </ModalContainer>
    </ModalBackdrop>,
    document.getElementById('portal-root')
  );
};
