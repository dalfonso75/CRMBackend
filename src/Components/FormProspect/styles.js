// import styled from "styled-components";
// import { Device, Colors } from '../GlobalStyles/GlobalStyles';
// import { BiListPlus as plus} from "react-icons/bi";

// export const ContainerCard = styled.div`
//   padding:0 20px;
// `;

// export const ContainerForm = styled.div`
//   margin-top:90px;
//   padding:10px;
//   background-color:${Colors.cardDashboard.cardBodyBackground};
//   border:none;
//   border-radius:20px;
// `;
// export const ContainerField = styled.div`
//   position: relative;
// `;


// export const FormPCardHeader = styled.div`
//   background-color: ${Colors.cardDashboard.cardHeaderBackground};
//   color: ${Colors.cardDashboard.cardHeaderColor};
//   border:none;
//   padding-bottom:0;
// `;
// export const TitleHeader = styled.h3`
//   font-size:16px;
//   font-weight:bold;
//   letter-spacing:.5px;
//   font-family: 'Roboto', sans-serif;
//   margin-bottom:0;
// `
// export const FormPCardBody = styled.div`
//   background-color: ${Colors.cardDashboard.cardBodyBackground};
//   color: ${Colors.cardDashboard.cardBodyColor};
// `
// export const FormPSelect = styled.select`
//   width: 100%;
//   padding: 10px 10px;
//   font-size: 16px;
//   color: #fff;
//   margin-top: 20px;
//   border: 2px solid ${Colors.form.borderIpunt};
//   outline: none;
//   background: transparent !important;
//   &:focus{
//     background: transparent !important;
//     color: #fff;
//     border: 2px solid ${Colors.form.borderIpuntFocus};
//     box-shadow:none;
//   }
//   &:invalid {
//     color: #BDBDBD;
//   }
//   & option {
//     color:#000;
//   }
  
// `;
// export const FormPAddItems = styled.div`
  
// `;
// export const FormPInput = styled.input`
//   width: 100%;
//   padding: 10px 10px;
//   font-size: 16px;
//   color: #fff;
//   margin-top: 20px;
//   border: 2px solid ${Colors.form.borderIpunt};
//   outline: none;
//   background: transparent;
//   &:focus{
//     background: transparent;
//     color: #fff;
//     border: 2px solid ${Colors.form.borderIpuntFocus};
//     box-shadow:none;
//   }
// `;
// export const FormPLabel = styled.label`
//   position: absolute;
//   margin:30px 20px;
//   padding:0px 5px;
//   pointer-events: none;
//   transition: .5s;
//   top: -20px;
//   left: 0;
//   color:${Colors.form.labelColor};
//   font-size: 12.5px;
//   letter-spacing:0.5px;
//   font-weight:bold;
//   background-color:#222B36;
//   ${FormPInput}:focus ~ &, ${FormPSelect}:focus ~ & {
//     color:${Colors.form.labelColorFocus};
//   }
// `;

// export const MessageError = styled.p`
//   color:${Colors.form.Errorcolor};
//   font-size:12px;
//   letter-spacing:0.2px;
//   padding-left:4px;
//   margin-bottom:0px;
 
// `;

// export const FcPlus = styled(plus)`
//   font-size:35px;
//   padding:0 4px;
//   cursor: pointer;
//   transition: transform 1s;
//   margin-top:10px;
//   color:${Colors.form.labelColor};
//   -webkit-transition-property: color, transform;
//   -moz-transition-property: color, transform;
//   -o-transition-property: color, transform;
//   transition-property: color, transform;
//   -webkit-transition-duration: 700ms;
//   -moz-transition-duration: 700ms;
//   -o-transition-duration: 700ms;
//   transition-duration: 700ms;
//   &.active {
//     transform: rotate(45deg);
//     transform-origin: center;
//     color:#FDA92D;
//   }
// `;
// export const FormPButton = styled.button`
//   background-color: #FDA92D;
//   color: ${Colors.boton.color};
//   margin-top:20px;
//   border: none;
//   border-radius:7px;
//   outline:0px;
//   text-decoration: none;
//   font-weight: 700;
//   display: inline-block;
//   padding:5px 25px;
//   -webkit-transition-property: background-color;
//   -moz-transition-property: background-color;
//   -o-transition-property: background-color;
//   transition-property: background-color;
//   -webkit-transition-duration: 700ms;
//   -moz-transition-duration: 700ms;
//   -o-transition-duration: 700ms;
//   transition-duration: 700ms;
//   box-shadow: rgb(253 169 45 / 24%) 0px 8px 16px 0px;
//   &:active, &:focus, &:hover {
//     background-color: rgb(182, 104, 22);
//     box-shadow:none;
//     color: ${Colors.boton.color};
//   }
// `;