import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import prospectService from "../services/prospect";

export default function useProspect() {
  // const { token, setToken } = useContext(Context);
  const { user, setUser } = useContext(Context);
  const [state, setState] = useState({ loading: false, error: null, data: null});
  const getAll = useCallback(
    () => {
      // console.log(user.sign);
      setState({ loading: true, error: null });
      prospectService.getAll( user.sign )
        .then((data) => {
          // console.log(data);
          setState({ loading: false, error: null, data: data.body });
        })
        .catch((err) => {
          console.log(err);
          setState({ loading: false, error: err, data: null });
        });
    },
    [setUser]
  );
  const create = useCallback(
    (newObject) => {
      newObject.userId = user.userId;
      setState({ loading: true, error: false });
      prospectService.create( user.sign, newObject )
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
    isuserToken: Boolean(user),
    isLoading: state.loading,
    hasError: state.error,
    data: state.data,
    success: Boolean(state.data),
    getAll,
    create,
  };
}