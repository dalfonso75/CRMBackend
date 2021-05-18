import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import userService from "../services/user";

export default function useUsers() {
  const { user, setUser } = useContext(Context);
  const [stateGetUser, setStateGetUser] = useState({ loading: false, error: null, data: null});
  const [state, setState] = useState({ loading: false, error: null, data: null});
  const getUser = useCallback(
    () => {
      setStateGetUser({ loading: true, error: null });
      userService.getUser(( user ? user.sign : ''), ( user ? user.userCC : ''))
        .then((data) => {
          setStateGetUser({ loading: false, error: null, data: data.body });
        })
        .catch((err) => {
          console.log(err);
          setStateGetUser({ loading: false, error: err, data: null });
        });
    },
    [setUser]
  );
  
  const createUser = useCallback(
    (newObject) => {
      newObject.userId = user.userId;
      setState({ loading: true, error: false });
      userService.createUser(( user ? user.sign : ''), newObject )
        .then((data) => {
          // console.log(data);
          setState({ loading: false, error: null, data: data });
        })
        .catch((err) => {
          console.log(err);
          setState({ loading: false, error: err, data: null });
        });
    },
    []
  );
  

  return {
    isLoadingGetUser: stateGetUser.loading,
    hasErrorGetUser: stateGetUser.error,
    dataGetUser: stateGetUser.data,
    successGetUser: Boolean(state.data),
    getUser,
    createUser,
  };
}
