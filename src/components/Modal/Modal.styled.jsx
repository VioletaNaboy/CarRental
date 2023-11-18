import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContainer = styled.div`
  width: 461px;
  background: white;
  padding: 40px;
  border-radius: 8px;
  position: relative;
`

export const BtnClose= styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`
export const Photo = styled.img`
width: 469px;
height:248px;
border-radius: 14px;
margin-bottom:14px;
`
export const MainInfo = styled.p`
width: 100%;
color: #121417;
font-size: 18px;
font-weight: 500;
line-height: 1.33;
`
export const AdditionalInfo = styled.p`
color: rgba(18, 20, 23, 0.50);
font-size: 12px;
line-height: 1.5;
` 
export const Description = styled.p`
line-height: 1.43;
` 
export const InfoBlock = styled.div`
width:100%;
display:flex;
flex-direction:column;
gap: 8px;
font-weight: 500;
line-height: 1.43;
margin-bottom:24px;
`
export const InfoUnit = styled.span`
display: inline-block;
font-size: 12px;
font-weight: 400;
line-height: 1.5;
letter-spacing: -0.24px;
padding: 7px 14px;
border-radius: 35px;
background: #F9F9F9;
margin-right: 8px;
`