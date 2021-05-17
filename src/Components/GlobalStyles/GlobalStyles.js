const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
const palleteColors= {
  colorP:'#825236',
  colorS:'#EEB62E',
  colorT:'#171C24',
  colorF:"#222B36",
  colorAzulOsc:"#161C24",
  colorAmarillo:"#FDA92D",
  colorAmarilloTransp:"RGBA(253,169,45,0.3)",
  colorCafe:"rgb(182, 104, 22)",
}
export const Device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export const Colors = {
  background: {
    login: "#515966",
    dashboard: `${palleteColors.colorT}`,
  },
  cardLogin: {
    background: "#2C2F35",
    color: "#FFFFFF",
    botonBackground: "#515966",
    botonHoverBackground: "#515966",
    botonColor:"#FFFFFF",
    inputBackground: "#515966",
    inputColor:"#FFFFFF",
    LabelColor: "#515966",
    textErrorColor:"red",
  },
  sidebar: {
    background: `${palleteColors.colorAzulOsc}`,
    color: "#eaecef",
    colorHover:`${palleteColors.colorAmarillo}`,
    BackgroundHoverLink:"#282C34",
    BackgroundActiveLink:`${palleteColors.colorAmarilloTransp}`,
  },
  navbar: {
    background: `${palleteColors.colorAzulOsc}`,
    color: "#FFFFFF",
  },
  cardDashboard: {
    cardHeaderBackground: `${palleteColors.colorF}`,
    cardHeaderColor: "#FFFFFF",
    cardBodyBackground:`${palleteColors.colorF}`,
    cardBodyColor: "#FFFFFF",
  },
  boton: {
    background: `${palleteColors.colorS}`,
    Hoverbackground: `${palleteColors.colorP}`,
    color: "rgb(33, 43, 54)",
  },
  form: {
    Errorcolor: "#C26C75",
    labelColor:"#4C5967",
    labelColorFocus:`${palleteColors.colorAmarillo}`,
    borderIpunt:"#4C5967",
    borderIpuntFocus:`${palleteColors.colorAmarillo}`,
  }
};