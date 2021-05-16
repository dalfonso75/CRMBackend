import React from 'react'
import { Sidenav, Sideul, Link, CerraSesion } from'./styles'
import { FcHome, FcAddDatabase, FcComboChart, FcDownLeft } from 'react-icons/fc';

import logo from '../../assets/img/logoEyetrade.png'

import useUser from '../../Hooks/useUser'

export const Sidebar = ({showSide}) => {
    const {isLogged, logout} = useUser();
    return (
        <Sidenav className={showSide ? 'active' : ''}>
            <img src={logo} alt="Logo"/>
            <Sideul>
                <li>
                    <Link to="/home"> <FcHome/> Home</Link>
                </li>
                <li>
                    <Link to="/prospect"> <FcAddDatabase/> Prospect</Link>
                </li>
                <li>
                    <Link to="/contact"> <FcComboChart/> Contact us</Link>
                </li>
            </Sideul>
            <CerraSesion>
                <a onClick={logout}>Cerrar Sesión <FcDownLeft/></a>
            </CerraSesion>
            
        </Sidenav>
    )
}

