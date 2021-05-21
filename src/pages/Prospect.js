import React, { useContext } from 'react'
import Context from "../context/UserContext";
import { FormAdmin } from '../Components/FormProspect/FormAdmin'
import { FormComercial } from '../Components/FormProspect/FormComercial'
import { FormCommunity } from '../Components/FormProspect/FormCommunity'
const Prospect = () => {
    const { user } = useContext(Context);
    if (user.roleId === "D_hTgWm55CoUMacxbNWvO"){
        return (
        <FormAdmin role={user.roleId}/>
    )
    }
    if (user.roleId === "zr_Cj9nB5LkJx-j_MVcdg"){
        return (
        <FormComercial role={user.roleId} userId={user.userId}/>
        )
    }
    if (user.roleId === "-NUhl4ekJwl_FuY5mhA62"){
        return (
        <FormCommunity role={user.roleId}/>
        )
    }
}


export default Prospect
