import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-wrap: wrap; 
justify-content:center;
align-items: center;
gap: 40px;
margin: 284px 0 51px;
@media only screen and (min-width: 768px) {
row-gap: 44px;
column-gap: 29px;   
margin: 136px 0 80px;
}
@media only screen and (min-width: 1200px) {
  margin: 40px 0 80px;  
}`

export const CarsItem = styled.li`
width: 274px;
height: 426px;
display: flex;
flex-direction: column;
gap: 18px;
`;
export const PhotoWrapper = styled.div`
position:relative;
width: 274px;
height: 268px;
border-radius: 14px;
overflow: hidden;
background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), url(<path-to-image>), lightgray 50% / cover no-repeat;
`
export const Photo = styled.img`
width: auto;
height: 268px;
`
export const MainInfo = styled.div`
width: 100%;
display:flex;
justify-content: space-between;
color: #121417;
font-size: 16px;
font-weight: 500;
line-height: 1.5;
`
export const AdiitionalInfo = styled.div`
width: 100%;
color: rgba(18, 20, 23, 0.50);
font-size: 12px;
line-height: 1.5;
`
export const ButtonMore= styled.button`
width: 100%;
padding: 12px 0;
justify-content: center;
align-items: center;
border-radius: 12px;
background: #3470FF;
color: #fff;
border: none;
&:hover, &:focus {
    background: #0B44CD;
}
`
export const ButtonHeart = styled.button`
width: 46px;
height: 46px;
position: absolute;
top:0;
right:0;
justify-content: center;
align-items: center;
border:none;
background: transparent;
`
