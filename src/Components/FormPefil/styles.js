import styled from "styled-components";
import { Device, Colors } from "../GlobalStyles/GlobalStyles";

export const ContenedorPerfil = styled.div`
  margin-top:90px;
`;
export const ContPerfilCol = styled.div`
  align-self: center;
`;
export const ContainerCardPerfil = styled.div`
  padding: 0 20px;
  width:calc(100% - 200px);
  margin:0 0 auto auto;
`;

export const ContainerCard = styled.div`
  padding: 0 20px;
`;

export const ContainerForm = styled.div`
  padding: 10px;
  background-color: ${Colors.cardDashboard.cardBodyBackground};
  border: none;
  border-radius: 20px;
`;
export const ContainerField = styled.div`
  position: relative;
`;

export const FormPCardHeader = styled.div`
  background-color: ${Colors.cardDashboard.cardHeaderBackground};
  color: ${Colors.cardDashboard.cardHeaderColor};
  border: none;
  padding-bottom: 0;
`;
export const TitleHeader = styled.h3`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.5px;
  font-family: "Roboto", sans-serif;
  margin-bottom: 0;
`;
export const FormPCardBody = styled.div`
  background-color: ${Colors.cardDashboard.cardBodyBackground};
  color: ${Colors.cardDashboard.cardBodyColor};
`;

export const FormPInput = styled.input`
  width: 100%;
  padding: 10px 10px;
  font-size: 16px;
  color: #fff;
  margin-top: 20px;
  border: 2px solid ${Colors.form.borderIpunt};
  outline: none;
  background: transparent;
  &:focus {
    background: transparent;
    color: #fff;
    border: 2px solid ${Colors.form.borderIpuntFocus};
    box-shadow: none;
  }
`;
export const FormPLabel = styled.label`
  position: absolute;
  margin: 30px 20px;
  padding: 0px 5px;
  pointer-events: none;
  transition: 0.5s;
  top: -20px;
  left: 0;
  color: ${Colors.form.labelColor};
  font-size: 12.5px;
  letter-spacing: 0.5px;
  font-weight: bold;
  background-color: #222b36;
  ${FormPInput}:focus ~ & {
    color: ${Colors.form.labelColorFocus};
  }
`;

export const MessageError = styled.p`
  color: ${Colors.form.Errorcolor};
  font-size: 12px;
  letter-spacing: 0.2px;
  padding-left: 4px;
  margin-bottom: 0px;
`;

export const FormPButton = styled.button`
  background-color: #fda92d;
  color: ${Colors.boton.color};
  margin-top: 20px;
  border: none;
  border-radius: 7px;
  outline: 0px;
  text-decoration: none;
  font-weight: 700;
  display: inline-block;
  padding: 5px 25px;
  -webkit-transition-property: background-color;
  -moz-transition-property: background-color;
  -o-transition-property: background-color;
  transition-property: background-color;
  -webkit-transition-duration: 700ms;
  -moz-transition-duration: 700ms;
  -o-transition-duration: 700ms;
  transition-duration: 700ms;
  box-shadow: rgb(253 169 45 / 24%) 0px 8px 16px 0px;
  &:active,
  &:focus,
  &:hover {
    background-color: rgb(182, 104, 22);
    box-shadow: none;
    color: ${Colors.boton.color};
  }
`;
