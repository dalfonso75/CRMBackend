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
      prospectService.getAll(( user ? user.sign : ''))
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
  const get = useCallback(
    () => {
      setState({ loading: true, error: null });
      prospectService.get(( user ? user.sign : ''), (user ? user.userId : ''))
        .then((data) => {
          console.log(data);
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
      prospectService.create(( user ? user.sign : ''), newObject )
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

  const update = useCallback(
    (newObject) => {
      newObject.userId = user.userId;
      newObject.object.userId = user.userId;
      setState({ loading: true, error: false });
      console.log(newObject);
      prospectService.update(( user ? user.sign : ''), newObject )
        .then((data) => {
          console.log(data);
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
    get,
    getAll,
    create,
    update,
  };
}
