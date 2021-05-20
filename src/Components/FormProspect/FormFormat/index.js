import React from "react";
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
export const FormFormat = ({itemsForm, setItemsForm, register, handleSubmit, errors, onSubmit, dataComercial, role}) => {
  return (
      <>
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
                          <option value="hjVZQez4R60tY6DBP8Sm-">Llamada</option>
                          <option value="ScE_14_PKWYSA4PHa-u6y">Cita</option>
                          <option value="sDHVFGS-sjSzVNLIdZyvY">Sentado</option>
                          <option value="kO9lZo_OsMaHdVA5dCClf">Cerrado</option>
                        </FormPSelect>
                        <FormPLabel>Estado de proceso:</FormPLabel>
                        <MessageError>{errors.statusId?.type === 'required' && "*El estado es obligatorio"}</MessageError>
                      </ContainerField>
                    </div>
                    {role == "Administrador" ? (
                      <div className="row">
                      <ContainerField className="form-group">
                        <FormPSelect
                          {...register("userId", { required: true })}
                          className="form-control"
                        >
                           {dataComercial ? dataComercial.map((dataComercial) => 
                           <option key={dataComercial.userId} value={dataComercial.userId}>{dataComercial.userName}</option>):''} 
      
                        </FormPSelect>
                        <FormPLabel>Asignar Comercial</FormPLabel>
                        <MessageError>{errors.userId?.type === 'required' && "*Asignar Comercial es obligatorio"}</MessageError>
                      </ContainerField>
                    </div>
                    ) : '' }
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
    </>
  )
}
