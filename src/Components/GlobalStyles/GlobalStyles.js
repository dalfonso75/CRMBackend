const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
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
    dashboard: "#EDEEF2",
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
    background: "#21252B",
    color: "#eaecef",
    BackgroundHoverLink:"#282C34",
  },
  navbar: {
    background: "#21252B",
    color: "#FFFFFF",
    boxshadow:"#999",
  },
  cardDashboard: {
    cardHeaderBackground: "#21252B",
    cardHeaderColor: "#FFFFFF",
    cardBodyBackground:"#FFFFFF",
    cardBodyColor: "#000000",
  },
  boton: {
    background: "#21252B",
    Hoverbackground: "#21252B",
    color: "#FFFFFF",
  },
  form: {
    color: "red",
  }
};