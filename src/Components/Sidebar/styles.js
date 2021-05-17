import styled from "styled-components";
import { Device, Colors } from '../GlobalStyles/GlobalStyles';
import { NavLink as LinkRouter } from "react-router-dom";

export const Sidenav = styled.div`
  margin-top:45px;
  width: 300px;
  border-right:1px solid ${Colors.form.borderIpunt};
  background: ${Colors.sidebar.background};
  position: fixed;
  height: 100vh;
  padding: 0 0 0 30px;
  transition: all 0.4s;
  left: -500px;
  z-index:100;
  &.active {
    left: 0;
  }
`;

export const Sideul = styled.ul`
  padding: 0;
  & li {
    list-style-type: none;
    margin: 10px 0;
  }
`;

export const Link = styled(LinkRouter)`
  color:${Colors.sidebar.color};
  text-decoration: none;
  font-size: 16px;
  display: block;
  padding: 10px 15px;
  border-radius:6px 0 0 6px;
  &:hover {
    background: #282c34;
    color: ${Colors.sidebar.color};
  }
  & svg {
    margin-right: 10px;
  }
  &.active {
    background: ${Colors.sidebar.BackgroundActiveLink};
    border-right:4px solid ${Colors.sidebar.BackgroundActiveLink};
  }
`;

export const ContainerRowPerfil = styled.div`
  margin:40px 0 20px 0;
  padding:0;
`;
export const InternRowPerfil = styled.div`
  background-color:#252C35;
  padding:20px 0;
  border-radius:15px 0 0 15px;
  margin:0;
  border-right:4px solid ${Colors.form.borderIpunt};
  & div h3 {
    font-size:14px;
    color:#FFFFFF;
    font-weight:700;
    margin-bottom:2px;
  }
  & div p {
    font-size:12px;
    color:#86929F;
    font-weight:600;
    margin-bottom:0;
  }
  
`;
export const AvatarPerfil = styled.img`
  width: 50px;
`;

export const Linkperfil = styled(LinkRouter)`
  text-decoration: none;
  padding-right:20px;
`;

export const CerraSesion = styled.div`
  position:absolute;
  bottom:70px;
  color: ${Colors.sidebar.color};
  & a {
    text-decoration: none;
    font-size: 16px;
    display: block;
    padding: 10px 15px;
    border-radius: 6px;
    cursor: pointer;
    &:hover{
      background: ${Colors.sidebar.BackgroundHoverLink};
    }
    & svg {
      margin-left:5px;
    }
  }
`;

