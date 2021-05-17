import React from 'react'
import { Sidenav, Sideul, Link, Linkperfil, CerraSesion, ContainerRowPerfil, InternRowPerfil, AvatarPerfil } from'./styles'
import { FcHome, FcAddDatabase, FcComboChart, FcDownLeft } from 'react-icons/fc';

import logo from '../../assets/img/logoEyetrade.png'

import useUser from '../../Hooks/useUser'

export const Sidebar = ({showSide}) => {
    const {isLogged, logout} = useUser();
    return (
        <Sidenav className={showSide ? 'active' : ''}>
            <ContainerRowPerfil>
                <Linkperfil to="">
                    <InternRowPerfil className="row align-items-center">
                            <div className="col-3">
                                <AvatarPerfil src={logo} alt="Logo"/>
                            </div>
                            <div className="col-9">
                                <h3>Sebastian Martinez</h3>
                                <p>Admin</p>
                            </div>
                    </InternRowPerfil>
                </Linkperfil>
            </ContainerRowPerfil>
                
            <Sideul>
                <div className="row">
                    <li>
                        <Link to="/home"> <FcHome/>Dashboard</Link>
                    </li>
                </div>
                <div className="row">
                    <li>
                        <Link to="/prospect"> <FcAddDatabase/>Prospecto</Link>
                    </li>
                </div>
                <div className="row">
                    <li>
                        <Link to="/contact"> <FcComboChart/>Otro</Link>
                    </li>
                </div>
            </Sideul>
            <CerraSesion>
                <a onClick={logout}>Cerrar Sesión <FcDownLeft/></a>
            </CerraSesion>
            
        </Sidenav>
    )
}

