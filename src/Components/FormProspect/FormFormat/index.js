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
export const FormFormat = ({
  itemsForm,
  setItemsForm,
  register,
  handleSubmit,
  errors,
  onSubmit,
  dataComercial,
  role,
}) => {
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
                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <ContainerField className="form-group col-md-6">
                      <FormPInput
                        type="text"
                        className="form-control"
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
                        {...register("prospectCellPhone", {
                          required: true,
                          minLength: 6,
                          maxLength: 12,
                        })}
                      />
                      <FormPLabel className="labelP">Teléfono:</FormPLabel>
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
                  {role == "D_hTgWm55CoUMacxbNWvO" ||
                  role == "zr_Cj9nB5LkJx-j_MVcdg" ? (
                    <div className="row">
                      <ContainerField className="form-group">
                        <FormPSelect
                          {...register("statusId", { required: true })}
                          className="form-control"
                        >
                          <option value="1" disabled selected></option>
                          <option value="hjVZQez4R60tY6DBP8Sm-">Llamada</option>
                          <option value="ScE_14_PKWYSA4PHa-u6y">Cita</option>
                          {/* <option value="sDHVFGS-sjSzVNLIdZyvY">Sentado</option>
                          <option value="kO9lZo_OsMaHdVA5dCClf">Cerrado</option> */}
                        </FormPSelect>
                        <FormPLabel>Estado de proceso:</FormPLabel>
                        <MessageError>
                          {errors.statusId?.type === "required" &&
                            "*El estado es obligatorio"}
                        </MessageError>
                      </ContainerField>
                    </div>
                  ) : (
                    ""
                  )}
                  {role == "D_hTgWm55CoUMacxbNWvO" ? (
                    <div className="row">
                      <ContainerField className="form-group">
                        <FormPSelect
                          {...register("userId", { required: true })}
                          className="form-control"
                        >
                          {dataComercial
                            ? dataComercial.map((dataComercial) => (
                                <option
                                  key={dataComercial.userId}
                                  value={dataComercial.userId}
                                >
                                  {dataComercial.userName}
                                </option>
                              ))
                            : ""}
                        </FormPSelect>
                        <FormPLabel>Asignar Comercial</FormPLabel>
                        <MessageError>
                          {errors.userId?.type === "required" &&
                            "*Asignar Comercial es obligatorio"}
                        </MessageError>
                      </ContainerField>
                    </div>
                  ) : (
                    ""
                  )}
                  <FcPlus
                    className={itemsForm ? "active" : ""}
                    onClick={() => {
                      setItemsForm(!itemsForm);
                    }}
                  />
                  {itemsForm && (
                    <FormPAddItems>
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
                    </FormPAddItems>
                  )}
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
