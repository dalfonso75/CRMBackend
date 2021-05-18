import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import userUsers from "../../Hooks/useUsers";
import { ToastContainer, toast } from "react-toastify";
import PageLoading from "../PageLoadign/PageLoading";
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
    formState: { errors },
    reset,
  } = useForm();
  const { getUser, hasErrorGetUser, isLoadingGetUser, dataGetUser } =
    userUsers();
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (hasErrorGetUser)
      toast.error(`'🚀 El número de teléfono ya existe!'`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }, [hasErrorGetUser]);
  useEffect(() => {
    if (dataGetUser) {
      console.log(dataGetUser);
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
  }, [dataGetUser]);
  const onSubmit = (data) => {
    console.log(data);
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
      <ContenedorPerfil className="row">
        <ContPerfilCol className="col-md-5">
          <ContainerCardPerfil className="row">
            <FormPCardHeader className="card-header">
              <TitleHeader>Mi Perfil</TitleHeader>
            </FormPCardHeader>
            <FormPCardBody className="card-body">
              Hola
            </FormPCardBody>
          </ContainerCardPerfil>
        </ContPerfilCol>
        <div className="col-md-7">
          {isLoadingGetUser && <PageLoading />}
          {dataGetUser && (
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
                              defaultValue={dataGetUser ? dataGetUser[0].userName : ""}
                              {...register("prospectName", {
                                required: true,
                                maxLength: 80,
                              })}
                            ></FormPInput>
                            <FormPLabel>Nombres:</FormPLabel>
                            <MessageError>
                              {errors.prospectName?.type === "required" &&
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
                              {...register("prospectLastName", {
                                required: true,
                                maxLength: 80,
                              })}
                            />
                            <FormPLabel>Apellidos:</FormPLabel>
                            <MessageError>
                              {errors.prospectLastName?.type === "required" &&
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
                              {...register("prospectCellPhone", {
                                required: true,
                                minLength: 6,
                                maxLength: 12,
                              })}
                            />
                            <FormPLabel className="labelP">
                              Teléfono:
                            </FormPLabel>
                            <MessageError>
                              {errors.prospectCellPhone?.type === "required" &&
                                "*El celular es obligatorio"}
                            </MessageError>
                            <MessageError>
                              {errors.prospectCellPhone?.type === "minLength" &&
                                "*El numero debe ser mayor a 6 dígitos"}
                            </MessageError>
                            <MessageError>
                              {errors.prospectCellPhone?.type === "maxLength" &&
                                "*El numero debe ser menor a 12 dígitos"}
                            </MessageError>
                          </ContainerField>
                          <ContainerField className="form-group col-md-6">
                            <FormPInput
                              className="form-control"
                              defaultValue={
                                dataGetUser ? dataGetUser[0].userEmail : ""
                              }
                              {...register("prospectEmail", {
                                required: true,
                                pattern: /^\S+@\S+$/i,
                              })}
                            />
                            <FormPLabel>Email:</FormPLabel>
                            <MessageError>
                              {errors.prospectEmail?.type === "required" &&
                                "*El emial es obligatorio"}
                            </MessageError>
                            <MessageError>
                              {errors.prospectEmail?.type === "pattern" &&
                                "*Debe ingresar formato valido de email"}
                            </MessageError>
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
          )}
        </div>
      </ContenedorPerfil>
    </>
  );
};
