import React, { useContext } from 'react'
import Context from "../context/UserContext";
import { TableProspect } from '../Components/TableProspect';
const HomeLiderC = () => {
    const { user } = useContext(Context);
    return (
        // <FormComercial role={user.roleName} userId={user.userId}/>
        <TableProspect role={user.roleId}/>
    )

}

export default HomeLiderC
