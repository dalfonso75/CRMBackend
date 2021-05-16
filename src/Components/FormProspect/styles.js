import styled from "styled-components";
import { Device, Colors } from '../GlobalStyles/GlobalStyles';
import { FcPlus as plus} from "react-icons/fc";

export const ContainerCard = styled.div`
  padding:0 20px;
`;

export const ContainerForm = styled.div`
  margin-top:90px;
  padding:0;
  
`;
export const FormPButton = styled.button`
  background-color: ${Colors.boton.background};
  color: ${Colors.boton.color};;
  margin-top:10px;
`;

export const FormPCardHeader = styled.div`
  background-color: ${Colors.cardDashboard.cardHeaderBackground};
  color: ${Colors.cardDashboard.cardHeaderColor};;
`;
export const FormPSelect = styled.select`
  background-color: #fff !important;
`;
export const FormPAddItems = styled.div`
  
`;
export const MessageError = styled.p`
  color:${Colors.form.color};
  font-size:12px;
  padding-left:4px;
  margin-bottom:2px;
 
`;

export const FcPlus = styled(plus)`
  font-size:35px;
  padding:0 4px;
  cursor: pointer;
  transition: transform 1s;
  &.active {
    transform: rotate(45deg);
    transform-origin: center;
  }
`;
