import React, { useState } from "react";

const Context = React.createContext({});

export function UseContextProvider({ children }) {
  const [user, setUser] = useState(() => JSON.parse(window.localStorage.getItem('user')));
  // const [token, setToken] = useState(()=> user ? user.sign : null );
  // const [userId, serUserId] = useState(()=> user ? user.userId : null );
  return (
    // <Context.Provider value={{ userId, token, user, setUser, setToken, serUserId }}>
    <Context.Provider value={{ user, setUser }}>
        {children}
    </Context.Provider>
  );
}

export default Context;
