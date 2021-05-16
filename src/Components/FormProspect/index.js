import React, { useState, useEffect } from "react";
import useProspect from "../../Hooks/useProspect";
import { useForm } from "react-hook-form";
import { ToastContainer, toast} from "react-toastify";
import PageLoading from "../PageLoadign/PageLoading";
import {
  ContainerCard,
  ContainerForm,
  FormPButton,
  FormPCardHeader,
  FormPSelect,
  FormPAddItems,
  MessageError,
  FcPlus,
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
              Formulario Registro Prospecto
            </FormPCardHeader>
            <div className="card-body">
              <p>Formulario para ingresar nuevo prospecto</p>
              <div className="row">
                <div className="col">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label>Nombres:</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("prospectName", { 
                            required: true, 
                            maxLength: 80 })}
                        ></input>
                        <MessageError>{errors.prospectName?.type === 'required' && "*El nombre es obligatorio"}</MessageError>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Apellidos:</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("prospectLastName", {
                            required: true,
                            maxLength: 80,
                          })}
                        />
                        <MessageError>{errors.prospectLastName?.type === 'required' && "*El apellido es obligatorio"}</MessageError>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label>Teléfono:</label>
                        <input
                          type="tel"
                          className="form-control"
                          {...register("prospectCellPhone", {
                            required: true,
                            minLength: 6,
                            maxLength: 12,
                          })}
                        />
                        <MessageError>{errors.prospectCellPhone?.type === 'required' && "*El celular es obligatorio"}</MessageError>
                        <MessageError>{errors.prospectCellPhone?.type === 'minLength' && "*El numero debe ser mayor a 6 dígitos"}</MessageError>
                        <MessageError>{errors.prospectCellPhone?.type === 'maxLength' && "*El numero debe ser menor a 12 dígitos"}</MessageError>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Email:</label>
                        <input
                          type="email"
                          className="form-control"
                          {...register("prospectEmail", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                          })}
                        />
                        <MessageError>{errors.prospectEmail?.type === 'required' && "*El emial es obligatorio"}</MessageError>
                        <MessageError>{errors.prospectEmail?.type === 'pattern' && "*Debe ingresar formato valido de email"}</MessageError>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Estado de proceso:</label>
                      <FormPSelect
                        {...register("statusId", { required: true })}
                        className="form-control"
                      >
                        <option>Estado1</option>
                        <option>Estado2</option>
                        <option>Estado3</option>
                        <option>Estado4</option>
                      </FormPSelect>
                      <MessageError>{errors.statusId?.type === 'required' && "*El estado es obligatorio"}</MessageError>
                    </div>
                    <FcPlus className={ itemsForm ? 'active' : '' } onClick={()=>{
                      setItemsForm(!itemsForm);
                    }}/>
                    {itemsForm && (
                      <FormPAddItems>
                        <div className="row">
                          <div className="form-group col-md-6">
                            <label>Edad:</label>
                            <input type="number" className="form-control" {...register("edad", { min: 10, max: 99 })}/>
                            <MessageError>{errors.edad?.type === 'min' && "*La edad mínima es 10"}</MessageError>
                            <MessageError>{errors.edad?.type === 'max' && "*La edad máxima es 99"}</MessageError>
                          </div>
                          <div className="form-group col-md-6">
                            <label>Rango Salarial:</label>
                            <input type="text" className="form-control" {...register("salario")}/>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-md-6">
                            <label>Ocupación:</label>
                            <input type="text" 
                              className="form-control" 
                              {...register("ocupacion", { 
                                maxLength: 80 })}
                              />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Origen:</label>
                            <input type="text" 
                              className="form-control" 
                              {...register("origen", { 
                                maxLength: 80 })}
                              />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-md-6">
                            <label>País:</label>
                            <input type="text" className="form-control" {...register("pais")}/>
                          </div>
                          <div className="form-group col-md-6">
                            <label>Ciudad:</label>
                            <input type="text" className="form-control" {...register("ciudad")}/>
                          </div>
                        </div>
                      </FormPAddItems>
                    )}
                    <div className="form-group">
                      <label>Observación</label>
                      <textarea className="form-control" rows="2" {...register("observation")} ></textarea>
                    </div>
                    <FormPButton type="submit" className="btn btn-secondary">
                      Enviar
                    </FormPButton>
                  </form>
                </div>
              </div>
            </div>
          </ContainerForm>
        </ContainerCard>
      )}
    </>
  );
};
