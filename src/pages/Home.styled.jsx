import styled from 'styled-components';

export const ImgMain = styled.img`
width: 100%;
height: auto;
border-radius: 24px;
@media only screen and (min-width: 768px) {
width: 50%;
}
`
export const ContainerMain = styled.div`
display:flex;
flex-direction: column;
gap: 24px;
justify-content: center;
align-items:center;
@media only screen and (min-width: 768px) {
flex-direction: row;
}
`

export const TitleMain = styled.h1`
color: #3470FF;
font-size: 56px;
margin: 56px 0 12px;
`

export const SubtitleMain = styled.h2`
font-size: 44px;
text-transform: uppercase;
margin: 56px 0 74px;
`

export const ListContainer = styled.div`
text-transform: uppercase;
font-size: 32px;
`
export const LabelLi= styled.span`
color: #3470FF;
 font-weight: 700;
font-size: 42px;
`
export const StyledUl = styled.ul` 
display:flex;
flex-direction: column;
gap:24px;
`