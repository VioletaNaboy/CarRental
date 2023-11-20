import styled from 'styled-components';


export const Filter = styled.form`
width:100%;
height: 74px; 
margin: 0 auto;
display:flex;
flex-wrap:wrap;
justify-content: center;
align-items:flex-end;
gap: 18px;
@media only screen and (min-width: 1200px) {
  flex-wrap:nowrap; 
}
`
export const FilterLabel = styled.label`
color: #8A8A89;
font-weight: 500;
line-height: 1.285;
`
export const FilterSelect = styled.select`
display: flex;
padding: 14px 160px 14px 18px;
justify-content: center;
align-items: center;
gap: 32px;
border-radius: 14px;
background: #F7F7FB;
height: 48px;
border:none;
`
export const FilterInputGroup = styled.fieldset`
border:none;
padding:0;
`
export const GroupLegend = styled.legend`
color: #8A8A89;
font-weight: 500;
line-height: 1.285;
`

export const SearchBtn = styled.button`
height: 48px;
border-radius: 12px;
background: #3470FF;
display: flex;
padding: 14px 44px;
justify-content: center;
align-items: center;
color: #FFF;
font-weight: 600;
line-height: 1.43;
border:none;
&:hover, &:focus {
    background: #0B44CD;
}
`
export const FilterMileageFrom = styled.input`
border-radius: 14px 0px 0px 14px;
border:none;
border-right: 1px solid rgba(138, 138, 137, 0.20);
width: 160px;
height: 48px;
background: #F7F7FB;
padding: 16px 16px 16px 74px;
font-size: 18px;
font-weight: 500;
line-height: 1.11;

`
export const FilterMileageTo = styled.input`
width: 160px;
height: 48px;
border:none;
border-radius: 0px 14px 14px 0px;
background: #F7F7FB;
padding: 16px 16px 16px 74px;
font-size: 18px;
font-weight: 500;
line-height: 1.11;
`
export const FormElContainer = styled.div`
display: flex;
flex-direction: column;
gap: 8px; 
align-items: flex-start;
`
export const FilterLabelFrom = styled.label`
font-size: 18px;
font-weight: 500;
position:absolute;
left: 24px;
top:15px;
`
export const FilterLabelTo = styled.label`
font-size: 18px;
font-weight: 500;
position:absolute;
left: 184px;
top:15px;
`