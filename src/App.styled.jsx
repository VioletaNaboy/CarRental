import styled from '@emotion/styled';
import 'normalize.css';

export const AppWrapper = styled.div`
  mim-width: 320px;
  text-align: center;
  margin: 0 auto;
  padding: 120px 0;
  @media only screen and (min-width: 768px) {
   width: 748px;
   } 
   @media only screen and (min-width: 1220px) {
   width: 1180px;
  } 
  background-color: #fff;
`;
