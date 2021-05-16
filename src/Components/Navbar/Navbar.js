import React, { useEffect, useState } from "react";
import { NavbarHeader, GiHamburgerMenu } from "./styles";
export const Navbar = ({ showSide, setShowSide }) => {
  const [dataUser, setDataUser] = useState(() => JSON.parse(window.localStorage.getItem('user')));
  return (
    <NavbarHeader>
      <GiHamburgerMenu
        onClick={() => {
          setShowSide(!showSide);
        }}
      />
      <p>{dataUser.userName +' ' +dataUser.userLastName }</p>
    </NavbarHeader>
  );
};
