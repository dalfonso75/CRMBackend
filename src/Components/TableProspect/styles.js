import styled from "styled-components";
import { Device, Colors } from '../GlobalStyles/GlobalStyles';
export const ContainerCard = styled.div`
  padding:0 20px;
`;

export const ContainerTable = styled.div`
  margin-top:90px;
  padding:10px;
  background-color:${Colors.cardDashboard.cardBodyBackground};
  border:none;
  border-radius:20px;
  
`;
export const TableCardHeader = styled.div`
 background-color: ${Colors.cardDashboard.cardHeaderBackground};
  color: ${Colors.cardDashboard.cardHeaderColor};
  border:none;
  padding-bottom:0;
`;
export const TitleHeader = styled.h3`
  font-size:16px;
  font-weight:bold;
  letter-spacing:.5px;
  font-family: 'Roboto', sans-serif;
  margin-bottom:0;
`
export const TableCardBody = styled.div`
  background-color: ${Colors.cardDashboard.cardBodyBackground};
  color: ${Colors.cardDashboard.cardBodyColor};
`
