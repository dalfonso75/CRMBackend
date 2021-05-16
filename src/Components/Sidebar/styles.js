import styled from "styled-components";
import { Device, Colors } from '../GlobalStyles/GlobalStyles';
import { NavLink as LinkRouter } from "react-router-dom";

export const Sidenav = styled.div`
  margin-top:45px;
  width: 200px;
  background: ${Colors.sidebar.background};
  position: fixed;
  height: 100vh;
  padding: 0 30px;
  transition: all 1s;
  left: -100%;
  z-index:100;
  &.active {
    left: 0;
  }
  & img {
    padding-left: 15px;
    margin-top: 50px;
    margin-bottom: 20px;
    width: 70px;
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
  border-radius: 6px;
  &:hover {
    background: #282c34;
    color: ${Colors.sidebar.color};
  }
  & svg {
    margin-right: 10px;
  }
  &.active {
    background: ${Colors.sidebar.BackgroundHoverLink};
  }
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

