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
export const ModalFormFormat = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
  statusProspect,
}) => {
  return (
    <>
      <ContainerCard className="row d-flex justify-content-center">
        <ContainerForm className="card col-md-12">
          <FormPCardHeader className="card-header">
            <TitleHeader>Formulario Registro Prospecto</TitleHeader>
          </FormPCardHeader>
          <FormPCardBody className="card-body">
            <div className="row">
              <div className="col">
                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <ContainerField className="form-group">
                      <FormPSelect
                        {...register("statusId", { required: true })}
                        className="form-control"
                      >
                        {/* <option value="1" disabled selected></option> */}
                        {statusProspect == "zDc_TzqP7g5n-8WyH_TL9"
                         ? (
                          <option value="hjVZQez4R60tY6DBP8Sm-">Llamada</option>
                        ) : (
                          ""
                        )}
                        {statusProspect == "hjVZQez4R60tY6DBP8Sm-" 
                        ? (
                          <option value="ScE_14_PKWYSA4PHa-u6y">Cita</option>
                        ) : (
                          ""
                        )}
                        {statusProspect == "ScE_14_PKWYSA4PHa-u6y" 
                        ? (
                          <option value="sDHVFGS-sjSzVNLIdZyvY">Sentado</option>
                        ) : (
                          ""
                        )}
                        {statusProspect == "sDHVFGS-sjSzVNLIdZyvY" || 
                        statusProspect == "kO9lZo_OsMaHdVA5dCClf" 
                        ? (
                          <option value="kO9lZo_OsMaHdVA5dCClf">Cerrado</option>
                        ) : (
                          ""
                        )}
                      </FormPSelect>
                      <FormPLabel>Estado de proceso:</FormPLabel>
                      <MessageError>
                        {errors.statusId?.type === "required" &&
                          "*El estado es obligatorio"}
                      </MessageError>
                    </ContainerField>
                  </div>
                  {statusProspect == "hjVZQez4R60tY6DBP8Sm-" ? (
                    <>
                      <div className="row">
                        <ContainerField className="form-group col-md-6">
                          <FormPInput
                            type="text"
                            className="form-control"
                            {...register("occupation")}
                          />
                          <FormPLabel>Profesión:</FormPLabel>
                        </ContainerField>
                        <ContainerField className="form-group col-md-6">
                          <FormPInput
                            type="text"
                            className="form-control"
                            {...register("employmentStatus")}
                          />
                          <FormPLabel>Condición laboral:</FormPLabel>
                        </ContainerField>
                      </div>

                      <div className="row">
                        <ContainerField className="form-group col-md-6">
                          <FormPSelect
                            {...register("salaryRangeId")}
                            className="form-control"
                          >
                            <option value="1" disabled selected></option>
                            <option value="1-2">1-2</option>
                            <option value="2-3">2-3</option>
                            <option value="3-4">3-4</option>
                            <option value="+4">+4</option>
                          </FormPSelect>
                          <FormPLabel>Salario:</FormPLabel>
                        </ContainerField>
                        <ContainerField className="form-group col-md-6">
                          <FormPSelect
                            {...register("maritalStatusId")}
                            className="form-control"
                          >
                            <option value="1" disabled selected></option>
                            <option value="Soltero/a">Soltero/a</option>
                            <option value="Casado/a">Casado/a</option>
                            <option value="Unión libre">Unión libre</option>
                          </FormPSelect>
                          <FormPLabel>Estado Civil:</FormPLabel>
                        </ContainerField>
                      </div>

                      <div className="row">
                        <ContainerField className="form-group col-md-6">
                          <FormPInput
                            type="number"
                            className="form-control"
                            {...register("children", { min: 0, max: 99 })}
                          />
                          <FormPLabel>Hijos:</FormPLabel>
                          <MessageError>
                            {errors.children?.type === "min" &&
                              "*Hijos mínima es 0"}
                          </MessageError>
                          <MessageError>
                            {errors.children?.type === "max" &&
                              "*Hijos máximo es 20"}
                          </MessageError>
                        </ContainerField>

                        <ContainerField className="form-group col-md-6">
                          <FormPInput
                            type="number"
                            className="form-control"
                            {...register("prospectAge", { min: 10, max: 99 })}
                          />
                          <FormPLabel>Edad:</FormPLabel>
                          <MessageError>
                            {errors.prospectAge?.type === "min" &&
                              "*La edad mínima es 10"}
                          </MessageError>
                          <MessageError>
                            {errors.prospectAge?.type === "max" &&
                              "*La edad máxima es 99"}
                          </MessageError>
                        </ContainerField>
                      </div>
                      <div className="row">
                        <ContainerField className="form-group col-md-6">
                          <FormPInput
                            type="text"
                            className="form-control"
                            {...register("sourceDescription")}
                          />
                          <FormPLabel>
                            ¿Por dónde se enteró de Eyetrade?
                          </FormPLabel>
                        </ContainerField>
                        <ContainerField className="form-group col-md-6">
                          <FormPSelect
                            {...register("tradingExperience")}
                            className="form-control"
                          >
                            <option value="1" disabled selected></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </FormPSelect>
                          <FormPLabel>
                            Nivel de experiencia en trading:
                          </FormPLabel>
                        </ContainerField>
                      </div>
                    </>
                  ) : (
                    ""
                  )}

                  {/* CITA */}
                  {statusProspect == "sDHVFGS-sjSzVNLIdZyvY" ? (
                    <>
                      <div className="row">
                        <ContainerField className="form-group col-md-6">
                          <FormPInput
                            type="text"
                            className="form-control"
                            {...register("address")}
                          />
                          <FormPLabel>Dirección:</FormPLabel>
                        </ContainerField>
                        <ContainerField className="form-group col-md-6">
                          <FormPInput
                            type="text"
                            className="form-control"
                            {...register("prospectCC")}
                          />
                          <FormPLabel>Cédula:</FormPLabel>
                        </ContainerField>
                      </div>
                      <div className="row">
                        <ContainerField className="form-group col-md-6">
                          <FormPInput
                            type="text"
                            className="form-control"
                            {...register("mentor")}
                          />
                          <FormPLabel>Mentor:</FormPLabel>
                        </ContainerField>
                        
                        <ContainerField className="form-group col-md-6">
                          <FormPInput
                            type="text"
                            className="form-control"
                            {...register("trainingType")}
                          />
                          <FormPLabel>Tipo de entrenamiento:</FormPLabel>
                        </ContainerField>
                      </div>
                      <div className="row">

                        <ContainerField className="form-group col-md-6">
                          <FormPInput
                            type="text"
                            className="form-control"
                            {...register("totalValue")}
                          />
                          <FormPLabel>Valor total del entrenamiento:</FormPLabel>
                        </ContainerField>

                        <ContainerField className="form-group col-md-6">
                          <FormPInput
                            type="text"
                            className="form-control"
                            {...register("contractNumber")}
                          />
                          <FormPLabel>Número de contrato:</FormPLabel>
                        </ContainerField>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  {/* Fin Cita */}
                  <div className="row">
                    <ContainerField className="form-group">
                      <FormPInput
                        className="form-control"
                        rows="2"
                        {...register("observation")}
                      ></FormPInput>
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
  );
};
