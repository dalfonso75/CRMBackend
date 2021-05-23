import React, { useEffect, useState } from "react";
import { TableFormat } from "../TableFormat";
import { ModalForm } from "../../ModalForm";
import { ModalFormComercial } from "../../ModalFormProspect/ModalFormComercial";
import useProspect from "../../../Hooks/useProspect";
import { FaUserEdit, FaUserClock } from "react-icons/fa";

export const TableComercial = () => {
  const [showModal, setShowModal] = useState(false);
  const [statusProspect, setStatusProspect] = useState("");
  const [stateprospectId, setStateprospectId] = useState("");
  const { get, data, isLoading, hasError, success } = useProspect();
  const [colums, setColums] = useState([]);
  const [optionsAction, setOptionsAction] = useState([
    {
      icon: () => <FaUserEdit />,
      tooltip: "Editar Estado",
      onClick: (event, rowData) => {
        setShowModal(true);
        setStatusProspect(rowData.statusId);
        setStateprospectId(rowData.prospectId);
      },
    },
    {
      icon: () => <FaUserClock />,
      tooltip: "Ver Tracking",
      onClick: (event, rowData) => {
        alert(`has presionado editar al prospecto ${rowData.prospectName}`);
      },
    },
  ]);

  const [datos, setDatos] = useState();

  const handleClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    get();
  }, []);

  useEffect(() => {
    if (data) {
      setDatos(data);
    }
  }, [data]);
  useEffect(() => {
    setColums([
      { title: "prospectId", 
        field: "prospectId", 
        hidden: "false" },
      {
        title: "Observacion",
        field: "observation",
      },
      {
        title: "Nombre",
        field: "prospectName",
        render: (datos) => {
          return `${datos.prospectName} ${datos.prospectLastName}`;
        },
      },
      {
        title: "Télefono",
        field: "prospectCellphone",
      },
      {
        title: "Estado",
        field: "statusName",
        render: (row) => (
          <div
            className={
              row.statusName == "Sentado"
                ? "sentado statusNameRow"
                : row.statusName == "Sin asignar"
                ? "sinAsignar statusNameRow"
                : row.statusName == "Llamada"
                ? "llamada statusNameRow"
                : row.statusName == "Cita"
                ? "cita statusNameRow"
                : row.statusName == "Cerrado"
                ? "cerrado statusNameRow"
                : row.statusName == "Inicio"
                ? "inicio statusNameRow"
                : row.statusName == "statusNameRow"
            }
          >
            {row.statusName}
          </div>
        ),
      },
    ]);
  }, [datos]);

  return (
    <>
      {showModal && (
        <ModalForm onClose={handleClose}>
          <ModalFormComercial statusProspect={statusProspect} stateprospectId={stateprospectId}/>
        </ModalForm>
      )}
      <TableFormat
        isLoading={isLoading}
        success={success}
        datos={datos}
        optionsAction={optionsAction}
        colums={colums}
      />
    </>
  );
};
