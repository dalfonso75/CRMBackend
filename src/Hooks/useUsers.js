import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import userService from "../services/user";

export default function useUsers() {
  const { user, setUser } = useContext(Context);
  const [stateGetUser, setStateGetUser] = useState({ loadingGetUser: false, errorGetUser: null, dataGetUser: null});
  const [stateUpUser, setStateUpUse] = useState({ loadingUpUser: false, errorUpUser: null, dataUpUser: null});
  const getUser = useCallback(
    () => {
      setStateGetUser({ loadingGetUser: true, errorGetUser: null });
      userService.getUser(( user ? user.sign : ''), ( user ? user.userCC : ''))
        .then((data) => {
          setStateGetUser({ loadingGetUser: false, errorGetUser: null, dataGetUser: data.body });
        })
        .catch((err) => {
          console.log(err);
          setStateGetUser({ loadingGetUser: false, errorGetUser: err, dataGetUser: null });
        });
    },
    [setUser]
  );
  
  const createUser = useCallback(
    (newObject) => {
      newObject.userId = user.userId;
      // setState({ loading: true, error: false });
      userService.createUser(( user ? user.sign : ''), newObject )
        .then((data) => {
          // console.log(data);
          // setState({ loading: false, error: null, data: data });
        })
        .catch((err) => {
          console.log(err);
          // setState({ loading: false, error: err, data: null });
        });
    },
    []
  );
  const updateUser = useCallback(
    (newObject) => {
      newObject.userId = user.userId;
      setStateUpUse({ loadingUpUser: true, errorUpUser: false });
      userService.updateUser(( user ? user.sign : ''), newObject )
        .then((data) => {
          setStateUpUse({ loadingUpUser: false, errorUpUser: null, dataUpUser: data });
        })
        .catch((err) => {
          console.log(err);
          setStateUpUse({ loadingUpUser: false, errorUpUser: err, dataUpUser: null });
        });
    },
    []
  );
  

  return {
    isLoadingGetUser: stateGetUser.loadingGetUser,
    hasErrorGetUser: stateGetUser.errorGetUser,
    dataGetUser: stateGetUser.dataGetUser,
    successGetUser: Boolean(stateGetUser.dataGetUser),
    isLoadingUpUser: stateUpUser.loadingUpUser,
    hasErrorUpUser: stateUpUser.errorUpUser,
    dataUpUser: stateUpUser.dataUpUser,
    successUpUser: Boolean(stateUpUser.dataUpUser),
    getUser,
    createUser,
    updateUser,
  };
}
