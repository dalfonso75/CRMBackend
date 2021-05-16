import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast} from "react-toastify";
import {
  Login,
  ContenedorForm,
  Inputform,
  Fieldform,
  Labelform,
  Buttonform,
  TitleForm,
  LogoEye,
} from "./styles";
import { FcHome } from "react-icons/fc";
import logo from "../../assets/img/logoEyetrade.png";
import PageLoading from "../PageLoadign/PageLoading";
import useUser from "../../Hooks/useUser";

const FormLogin = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { isLogged, isLoginLoading, hasLoginError, login } = useUser();

  useEffect(() => {
    if (hasLoginError) toast.error('🚀 Credenciales Incorrectas!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }, [hasLoginError]);
  useEffect(() => {
    if (isLogged) history.push("/");
  }, [isLogged, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      userCC: username,
      password: password,
    });
  };
  return (
    <Login>
      {isLoginLoading && <PageLoading />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {!isLoginLoading && (
        <ContenedorForm>
          <form onSubmit={handleSubmit}>
            <LogoEye src={logo} alt="" />
            <TitleForm>Login</TitleForm>
            <Fieldform>
              <Labelform>Username</Labelform>
              <Inputform
                type="text"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                value={username}
                required
              />
            </Fieldform>
            <Fieldform>
              <Labelform>Password</Labelform>
              <Inputform
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                required
              />
            </Fieldform>
            <Fieldform>
              <Buttonform>
                <FcHome /> Sign In
              </Buttonform>
            </Fieldform>
          </form>
        </ContenedorForm>
      )}
    </Login>
  );
};

export default FormLogin;
