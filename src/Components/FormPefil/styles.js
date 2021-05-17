import styled from "styled-components";
import { Device, Colors } from '../GlobalStyles/GlobalStyles';
import { AiOutlineMenuUnfold as logo } from "react-icons/ai";



export const GiHamburgerMenu = styled(logo)`
    font-size: 25px;
    color:${Colors.navbar.color};
    cursor: pointer;
`;