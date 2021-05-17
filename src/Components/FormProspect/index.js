import React, { useState, useEffect } from "react";
import useProspect from "../../Hooks/useProspect";
import { useForm } from "react-hook-form";
import { ToastContainer, toast} from "react-toastify";
import PageLoading from "../PageLoadign/PageLoading";
import {
  ContainerCard,
  ContainerForm,
  ContainerField,
  FormPButton,
  FormPCardHeader,
  FormPSelect,
  FormPAddItems,
  MessageError,
  FcPlus,
  FormPCardBody,
  FormPLabel,
  FormPInput,
  TitleHeader,

} from "./styles";
export const FormProspect = () => {
  const [itemsForm, setItemsForm] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { create, hasError, isLoading, data } = useProspect();
  useEffect(() => {
    if (hasError) toast.error(`'🚀 El número de teléfono ya existe!'`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }, [hasError]);
  useEffect(() => {
    if (data) 
    {
      toast.success('🚀 Prospecto Registrado!', {
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
  }, [data]);
  const onSubmit = (data) => {
    if(!itemsForm){
      data = {
        "userId": "",
        "object":{
          "prospectName": data.prospectName, 
          "prospectLastName": data.prospectLastName,
          "prospectCellPhone": data.prospectCellPhone, 
          "prospectEmail": data.prospectEmail, 
          "observation": data.observation, 
          "statusId": "7SbAE5zx27Prfpl92pOFP"
        }
      };
      create(data);
    }else {
      console.log(data);
    }
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
      {isLoading && <PageLoading />}
      {!isLoading && (
        <ContainerCard className="row d-flex justify-content-center">
          <ContainerForm className="card col-md-6">
            <FormPCardHeader className="card-header">
              <TitleHeader>Formulario Registro Prospecto</TitleHeader>
            </FormPCardHeader>
            <FormPCardBody className="card-body">
              <div className="row">
                <div className="col">
                  <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} >
                    <div className="row">
                      <ContainerField className="form-group col-md-6">
                        <FormPInput
                          type="text"
                          className='form-control'
                          {...register("prospectName", { 
                            required: true, 
                            maxLength: 80 })}
                        ></FormPInput>
                        <FormPLabel>Nombres:</FormPLabel>
                        <MessageError>{errors.prospectName?.type === 'required' && "*El nombre es obligatorio"}</MessageError>
                      </ContainerField>
                      <ContainerField className="form-group col-md-6">
                        <FormPInput
                          type="text"
                          className="form-control"
                          {...register("prospectLastName", {
                            required: true,
                            maxLength: 80,
                          })}
                        />
                        <FormPLabel>Apellidos:</FormPLabel>
                        <MessageError>{errors.prospectLastName?.type === 'required' && "*El apellido es obligatorio"}</MessageError>
                      </ContainerField>
                    </div>
                    <div className="row">
                      <ContainerField className="form-group col-md-6">
                        <FormPInput
                          type="tel"
                          className="form-control inputP"
                          {...register("prospectCellPhone", {
                            required: true,
                            minLength: 6,
                            maxLength: 12,
                          })}
                        />
                        <FormPLabel className="labelP">Teléfono:</FormPLabel>
                        <MessageError>{errors.prospectCellPhone?.type === 'required' && "*El celular es obligatorio"}</MessageError>
                        <MessageError>{errors.prospectCellPhone?.type === 'minLength' && "*El numero debe ser mayor a 6 dígitos"}</MessageError>
                        <MessageError>{errors.prospectCellPhone?.type === 'maxLength' && "*El numero debe ser menor a 12 dígitos"}</MessageError>
                      </ContainerField>
                      <ContainerField className="form-group col-md-6">
                        <FormPInput
                          className="form-control"
                          {...register("prospectEmail", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                          })}
                        />
                        <FormPLabel>Email:</FormPLabel>
                        <MessageError>{errors.prospectEmail?.type === 'required' && "*El emial es obligatorio"}</MessageError>
                        <MessageError>{errors.prospectEmail?.type === 'pattern' && "*Debe ingresar formato valido de email"}</MessageError>
                      </ContainerField>
                    </div>
                    <div className="row">
                      <ContainerField className="form-group">
                        <FormPSelect
                          {...register("statusId", { required: true })}
                          className="form-control"
                        >
                          <option value="1" disabled selected></option>
                          <option>Estado1</option>
                          <option>Estado2</option>
                          <option>Estado3</option>
                          <option>Estado4</option>
                        </FormPSelect>
                        <FormPLabel>Estado de proceso:</FormPLabel>
                        <MessageError>{errors.statusId?.type === 'required' && "*El estado es obligatorio"}</MessageError>
                      </ContainerField>
                    </div>
                    <FcPlus className={ itemsForm ? 'active' : '' } onClick={()=>{
                      setItemsForm(!itemsForm);
                    }}/>
                    {itemsForm && (
                      <FormPAddItems>
                        <div className="row">
                          <ContainerField className="form-group col-md-6">
                            <FormPInput type="number" className="form-control" {...register("edad", { min: 10, max: 99 })}/>
                            <FormPLabel>Edad:</FormPLabel>
                            <MessageError>{errors.edad?.type === 'min' && "*La edad mínima es 10"}</MessageError>
                            <MessageError>{errors.edad?.type === 'max' && "*La edad máxima es 99"}</MessageError>
                          </ContainerField>
                          <ContainerField className="form-group col-md-6">
                            <FormPInput type="text" className="form-control" {...register("salario")}/>
                            <FormPLabel>Rango Salarial:</FormPLabel>
                          </ContainerField>
                        </div>
                        <div className="row">
                          <ContainerField className="form-group col-md-6">
                            <FormPInput type="text" 
                              className="form-control" 
                              {...register("ocupacion", { 
                                maxLength: 80 })}
                            />
                            <FormPLabel>Ocupación:</FormPLabel>
                          </ContainerField>
                          <ContainerField className="form-group col-md-6">
                            <FormPInput type="text" 
                              className="form-control" 
                              {...register("origen", { 
                                maxLength: 80 })}
                            />
                            <FormPLabel>Origen:</FormPLabel>
                          </ContainerField>
                        </div>
                        <div className="row">
                          <ContainerField className="form-group col-md-6">
                            <FormPInput type="text" className="form-control" {...register("pais")}/>
                            <FormPLabel>País:</FormPLabel>
                          </ContainerField>
                          <ContainerField className="form-group col-md-6">
                            <FormPInput type="text" className="form-control" {...register("ciudad")}/>
                            <FormPLabel>Ciudad:</FormPLabel>
                          </ContainerField>
                        </div>
                      </FormPAddItems>
                    )}
                    <div className="row">
                      <ContainerField className="form-group">
                        <FormPInput className="form-control" rows="2" {...register("observation")} ></FormPInput>
                        <FormPLabel>Observación</FormPLabel>
                      </ContainerField>
                    </div>
                    <FormPButton type="submit" className="btn btn-secondary">
                      Enviar
                    </FormPButton>
                  </form>
                </div>
              </div>
            </FormPCardBody>
          </ContainerForm>
        </ContainerCard>
      )}
    </>
  );
};


 /* ${FormPInput}:focus ~ &, ${FormPInput}:not(:focus):valid ~ & {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
    background-color:#222B36;
  } */