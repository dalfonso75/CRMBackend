import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import userUsers from "../../Hooks/useUsers";
import { ToastContainer, toast } from "react-toastify";
import PageLoading from "../PageLoadign/PageLoading";
import Gravatar from "../Gravatar";
import {
  ContenedorPerfil,
  ContainerCardPerfil,
  ContPerfilCol,
  ContainerCard,
  ContainerForm,
  ContainerField,
  FormPButton,
  FormPCardHeader,
  MessageError,
  FormPCardBody,
  FormPLabel,
  FormPInput,
  TitleHeader,
} from "./styles";
export const FormPerfil = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const watchAllFields = watch();
  const { 
    getUser, 
    hasErrorGetUser, 
    isLoadingGetUser, 
    dataGetUser,
    updateUser,
    isLoadingUpUser,
    hasErrorUpUser,
    dataUpUser,
    } =
    userUsers();
  useEffect(() => {
    getUser();
  }, [dataUpUser]);
  useEffect(() => {
    if (hasErrorGetUser)
      toast.error(`'🚀 Error en el servidor'`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      if (dataGetUser) {
        toast.success("🚀Carga de Datos!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        reset();
      }
  }, [hasErrorGetUser]);
  useEffect(() => {
    if (hasErrorUpUser)
      toast.error(`'🚀 Error al Actualizar los Datos!'`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      if (dataUpUser) {
        toast.success("🚀Datos Actualizados!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        reset();
      }
  }, [hasErrorUpUser, dataUpUser]);

  const onSubmit = (data) => {
    if (data.password){
      data = {
        "userId": "",
        "object":{
          userCC: data.userCC,
          userEmail: data.userEmail,
          userLastName: data.userLastName,
          userName: data.userName,
          userPhone: data.userPhone,
          userId: dataGetUser[0].userId,
          active : "1",
          password: data.password,
        }
      };
    }else{
      data = {
        "userId": "",
        "object":{
          userCC: data.userCC,
          userEmail: data.userEmail,
          userLastName: data.userLastName,
          userName: data.userName,
          userPhone: data.userPhone,
          userId: dataGetUser[0].userId,
          active : "1",
        }
      };
    }
    updateUser(data);
  };

  return (
    <>
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
      {isLoadingGetUser && <PageLoading />}
      {dataGetUser && (
        <ContenedorPerfil className="row">
          <ContPerfilCol className="col-lg-5">
            <ContainerCardPerfil className="row">
              {/* <FormPCardHeader className="card-header">
              </FormPCardHeader> */}
              <FormPCardBody className="card-body">
                <div className="row justify-content-center">
                  <Gravatar
                    mameClass={"perfil"}
                    email={watchAllFields.userEmail ? watchAllFields.userEmail :  dataGetUser[0].userEmail}

                  />
                  <p>{watchAllFields.userName ? watchAllFields.userName : dataGetUser[0].userName} {watchAllFields.userLastName ? watchAllFields.userLastName :  dataGetUser[0].userLastName}</p>
                  <p>{watchAllFields.userEmail ? watchAllFields.userEmail : dataGetUser[0].userEmail}</p>
                  <p>Télefono: {watchAllFields.userPhone ? watchAllFields.userPhone :  dataGetUser[0].userPhone}</p>
                  <p>Cédula: {watchAllFields.userCC ? watchAllFields.userCC :  dataGetUser[0].userCC}</p>
                </div>
              </FormPCardBody>
            </ContainerCardPerfil>
          </ContPerfilCol>
          <div className="col-lg-7">
            <ContainerCard className="row">
              <ContainerForm className="card col-md-10">
                <FormPCardHeader className="card-header">
                  <TitleHeader>Mis Datos</TitleHeader>
                </FormPCardHeader>
                <FormPCardBody className="card-body">
                  <div className="row">
                    <div className="col">
                      <form
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="row">
                          <ContainerField className="form-group col-md-6">
                            <FormPInput
                              type="text"
                              className="form-control"
                              defaultValue={
                                dataGetUser ? dataGetUser[0].userName : ""
                              }
                              {...register("userName", {
                                required: true,
                                maxLength: 80,
                              })}
                            ></FormPInput>
                            <FormPLabel>Nombres:</FormPLabel>
                            <MessageError>
                              {errors.userName?.type === "required" &&
                                "*El nombre es obligatorio"}
                            </MessageError>
                          </ContainerField>
                          <ContainerField className="form-group col-md-6">
                            <FormPInput
                              type="text"
                              className="form-control"
                              defaultValue={
                                dataGetUser ? dataGetUser[0].userLastName : ""
                              }
                              {...register("userLastName", {
                                required: true,
                                maxLength: 80,
                              })}
                            />
                            <FormPLabel>Apellidos:</FormPLabel>
                            <MessageError>
                              {errors.userLastName?.type === "required" &&
                                "*El apellido es obligatorio"}
                            </MessageError>
                          </ContainerField>
                        </div>
                        <div className="row">
                          <ContainerField className="form-group col-md-6">
                            <FormPInput
                              type="tel"
                              className="form-control inputP"
                              defaultValue={
                                dataGetUser ? dataGetUser[0].userPhone : ""
                              }
                              {...register("userPhone", {
                                required: true,
                                minLength: 6,
                                maxLength: 12,
                              })}
                            />
                            <FormPLabel className="labelP">
                              Teléfono:
                            </FormPLabel>
                            <MessageError>
                              {errors.userPhone?.type === "required" &&
                                "*El celular es obligatorio"}
                            </MessageError>
                            <MessageError>
                              {errors.userPhone?.type === "minLength" &&
                                "*El numero debe ser mayor a 6 dígitos"}
                            </MessageError>
                            <MessageError>
                              {errors.userPhone?.type === "maxLength" &&
                                "*El numero debe ser menor a 12 dígitos"}
                            </MessageError>
                          </ContainerField>
                          <ContainerField className="form-group col-md-6">
                            <FormPInput
                              className="form-control"
                              defaultValue={
                                dataGetUser ? dataGetUser[0].userEmail : ""
                              }
                              {...register("userEmail", {
                                required: true,
                                pattern: /^\S+@\S+$/i,
                              })}
                            />
                            <FormPLabel>Email:</FormPLabel>
                            <MessageError>
                              {errors.userEmail?.type === "required" &&
                                "*El emial es obligatorio"}
                            </MessageError>
                            <MessageError>
                              {errors.userEmail?.type === "pattern" &&
                                "*Debe ingresar formato valido de email"}
                            </MessageError>
                          </ContainerField>
                        </div>
                        <div className="row">
                          <ContainerField className="form-group col-md-6">
                            <FormPInput
                              type="tel"
                              className="form-control inputP"
                              defaultValue={
                                dataGetUser ? dataGetUser[0].userCC : ""
                              }
                              {...register("userCC", {
                                required: true,
                                minLength: 6,
                                maxLength: 12,
                              })}
                            />
                            <FormPLabel className="labelP">
                              Cédula:
                            </FormPLabel>
                            <MessageError>
                              {errors.userCC?.type === "required" &&
                                "*La cédula es obligatorio"}
                            </MessageError>
                            <MessageError>
                              {errors.userCC?.type === "minLength" &&
                                "*La cédula debe ser mayor a 6 dígitos"}
                            </MessageError>
                            <MessageError>
                              {errors.userCC?.type === "maxLength" &&
                                "*La cédula debe ser menor a 12 dígitos"}
                            </MessageError>
                          </ContainerField>

                          <ContainerField className="form-group col-md-6">
                            <FormPInput
                              type="text"
                              className="form-control"
                              {...register("password")}
                            ></FormPInput>
                            <FormPLabel>Contraseña:</FormPLabel>
                          </ContainerField>
                        </div>
                        <FormPButton
                          type="submit"
                          className="btn btn-secondary"
                        >
                          Guardar Cambios
                        </FormPButton>
                      </form>
                    </div>
                  </div>
                </FormPCardBody>
              </ContainerForm>
            </ContainerCard>
          </div>
        </ContenedorPerfil>
      )}
    </>
  );
};
