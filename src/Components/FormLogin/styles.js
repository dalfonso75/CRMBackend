import styled from "styled-components";
import { Device, Colors } from '../GlobalStyles/GlobalStyles';

export const LogoEye = styled.img`
  display:block;
  margin:auto;
  width: 70px;
  border-radius:50%;
`
export const TitleForm = styled.h2`
  text-align: center;
  padding:0px;
  font-size:30px;
  color:${Colors.cardLogin.color};
`
export const Login = styled.div`
  background-color: #161C24;
  display:flex;
  align-items:center;
  justify-content:center;
  max-width:100vw;
  max-height:100vh;
  width:100vw;
  height:100vh;
  @media ${Device.mobileL} { 
    /* background-color: #000; */
  }
  & p {
    text-align:center;
    margin-top:10px;
    margin-bottom:0;
    color:${Colors.cardLogin.textErrorColor};
  }
`
export const ContenedorForm = styled.div`
  max-width:400px;
  width:350px;
  padding:40px;
  background-color: #222B36;
  border-radius:15px;
  box-shadow: 0px 0px 15px 0px RGBA(253,169,45,0.7);
`

export const Fieldform = styled.div`
  display:grid;
`
export const Inputform = styled.input`
  /* width:95%;  */
  font-size:14px;
  padding:8px;
  background-color: #161C24;
  border-radius:8px;
  border:none;
  margin-bottom:20px;
  color: ${Colors.cardLogin.inputColor};
  outline: none;
`
export const Labelform = styled.label`
  font-size:10px;
  padding:4px;
  color:#FFF;
  text-transform:uppercase;
  text-align:left;
`
export const Buttonform = styled.button`
  background-color:#161C24;
  width:50%;
  margin:10px auto 0 auto;
  border:none;
  border-radius:5px;
  color:${Colors.cardLogin.botonColor};
  padding:8px 0px;
  cursor: pointer;
  font-size:15px;
  text-transform:uppercase;
  outline: none;
  &:hover{
    box-shadow: 0px 2px 10px 1px ${Colors.cardLogin.botonHoverBackground};; 
  }
`