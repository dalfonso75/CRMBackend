import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import loginService from "../services/login";

export default function useUser() {
  const { user, setUser } = useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });

  const login = useCallback(
    ({ userCC, password }) => {
      setState({ loading: true, error: false });

      loginService({ userCC, password })
        .then((user) => {
          window.sessionStorage.setItem("user", JSON.stringify(user));
          window.localStorage.setItem("user", JSON.stringify(user));
          setState({ loading: false, error: false });
          setUser(user);
        })
        .catch((err) => {
          console.log(err);
          window.sessionStorage.removeItem("user");
          window.localStorage.removeItem("user");
          setState({ loading: false, error: true });
        });
    },
    [setUser]
  );
  const logout = useCallback(() => {
    window.sessionStorage.removeItem("user");
    window.localStorage.removeItem("user");
    setUser(null);
  }, [setUser]);

  return {
    isLogged: Boolean(user),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
  };
}
