import React from 'react'
import { Sidenav, Sideul, Link, Linkperfil, CerraSesion, ContainerRowPerfil, InternRowPerfil, AvatarPerfil } from'./styles'
import { AiOutlineCluster, AiOutlineUser, AiOutlineDatabase, AiOutlineExport  } from "react-icons/ai";

import logo from '../../assets/img/logoEyetrade.png'

import useUser from '../../Hooks/useUser'

export const Sidebar = ({showSide, role}) => {
    const dataUser = JSON.parse(window.localStorage.getItem('user'));
    const {isLogged, logout} = useUser();
    return (
        <Sidenav className={showSide ? 'active' : ''}>
            <ContainerRowPerfil>
                <Linkperfil to="/perfil">
                    <InternRowPerfil className="row align-items-center">
                            <div className="col-3">
                                <AvatarPerfil src={logo} alt="Logo"/>
                            </div>
                            <div className="col-9">
                                <h3>{dataUser ? dataUser.userName : 'Nombre' }</h3>
                                <p>{dataUser ? dataUser.roleName : 'Role' }</p>
                            </div>
                    </InternRowPerfil>
                </Linkperfil>
            </ContainerRowPerfil>
            {role == 'D_hTgWm55CoUMacxbNWvO' ? (
                <Sideul>
                <h3>General</h3>
                <div className="row">
                    <li>
                        <Link to="/home"> <AiOutlineCluster/>Dashboard</Link>
                    </li>
                </div>
                <h3>Prospectos</h3>
                <div className="row">
                    <li>
                        <Link to="/prospect"> <AiOutlineUser/>Prospectos</Link>
                    </li>
                </div>
                <h3>Comerciales</h3>
                <div className="row">
                    <li>
                        <Link to="/comercial"> <AiOutlineDatabase/>Comerciales</Link>
                    </li>
                </div>
            </Sideul>
            ): 
            role == 'zr_Cj9nB5LkJx-j_MVcdg' ? (
            <Sideul>
                <h3>General</h3>
                <div className="row">
                    <li>
                        <Link to="/home"> <AiOutlineCluster/>Dashboard</Link>
                    </li>
                </div>
                <h3>Prospectos</h3>
                <div className="row">
                    <li>
                        <Link to="/prospect"> <AiOutlineUser/>Prospectos</Link>
                    </li>
                </div>
                {/* <h3>Comerciales</h3>
                <div className="row">
                    <li>
                        <Link to="/contact"> <AiOutlineDatabase/>Comerciales</Link>
                    </li>
                </div> */}
            </Sideul>):
            role == "-NUhl4ekJwl_FuY5mhA62" ? (
            <Sideul>
                <h3>Prospectos</h3>
                <div className="row">
                    <li>
                        <Link to="/"> <AiOutlineUser/>Prospectos</Link>
                    </li>
                </div>
                {/* <h3>Comerciales</h3>
                <div className="row">
                    <li>
                        <Link to="/contact"> <AiOutlineDatabase/>Comerciales</Link>
                    </li>
                </div> */}
            </Sideul>):
            role == "FJ2A4JD7z92rkR6-8qmyg" ? (
                <Sideul>
                    <h3>Prospectos</h3>
                    <div className="row">
                        <li>
                            <Link to="/"> <AiOutlineUser/>Prospectos</Link>
                        </li>
                    </div>
                    {/* <h3>Comerciales</h3>
                    <div className="row">
                        <li>
                            <Link to="/contact"> <AiOutlineDatabase/>Comerciales</Link>
                        </li>
                    </div> */}
                </Sideul>):
            ''
            }
            
            <CerraSesion>
                <div className="row">
                    <a onClick={logout}><AiOutlineExport/> Cerrar Sesión </a>
                </div>
            </CerraSesion>
            
        </Sidenav>
    )
}

