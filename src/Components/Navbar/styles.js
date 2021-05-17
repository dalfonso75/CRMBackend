import styled from "styled-components";
import { Device, Colors } from '../GlobalStyles/GlobalStyles';
import { AiOutlineMenuUnfold as logo } from "react-icons/ai";

export const NavbarHeader = styled.header`
  position:fixed;
  top:0 !important;
  width:100vw;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 10px 30px;
  background: ${Colors.navbar.background};
  border-bottom:1px solid ${Colors.form.borderIpunt};
  z-index:99;
  & p {
    margin:0;
    padding:0 20px 0 0;
    text-transform:uppercase;
    font-size:14px;
    font-weight:bold;
    color:${Colors.navbar.color};
  }
`;
export const GiHamburgerMenu = styled(logo)`
    font-size: 25px;
    color:${Colors.navbar.color};
    cursor: pointer;
`;
