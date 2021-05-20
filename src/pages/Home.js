import React, { useContext } from 'react'
import Context from "../context/UserContext";
import { TableProspect } from "../Components/TableProspect";

const Home = () => {
  const { user } = useContext(Context);
  return(
    <TableProspect role={user.roleId}/>
  ) 
};

export default Home;
