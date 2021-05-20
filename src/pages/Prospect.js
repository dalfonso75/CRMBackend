import React, { useContext } from 'react'
import Context from "../context/UserContext";
import { FormAdmin } from '../Components/FormProspect/FormAdmin'
import { FormComercial } from '../Components/FormProspect/FormComercial'
const Prospect = () => {
    const { user } = useContext(Context);
    if (user.roleName=== "Administrador"){
        return (
        <FormAdmin role={user.roleName}/>
    )
    }
    if (user.roleName=== "Comercial"){
        return (
        <FormComercial role={user.roleName} userId={user.userId}/>
        )
    }
}

export default Prospect
