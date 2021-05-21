import React, { useEffect, useState } from "react";
import { TableFormat } from '../TableFormat'
import useProspect from "../../../Hooks/useProspect";
import { FaUserEdit, FaUserShield, FaUserClock } from "react-icons/fa";

export const TableComercial = () => {
  const { get, data, isLoading, hasError, success } = useProspect();
  const [optionsAction, setOptionsAction] = useState([
    {
      icon: () => <FaUserEdit />,
      tooltip: "Editar Prospecto",
      onClick: (event, rowData) => {
        alert(
          `has presionado editar al prospecto ${rowData.prospectName}`
        );
      },
    },
    {
      icon: () => <FaUserShield />,
      tooltip: "Editar Estado Prospecto",
      onClick: (event, rowData) => {
        alert(
          `has presionado editar al prospecto ${rowData.prospectName}`
        );
      },
    },
    {
      icon: () => <FaUserClock />,
      tooltip: "Ver Tracking",
      onClick: (event, rowData) => {
        alert(
          `has presionado editar al prospecto ${rowData.prospectName}`
        );
      },
    },
  ]);
    
  const [datos, setDatos] = useState();

  useEffect(() => {
    get();
  }, []);

  useEffect(() => {
    if (data) {
      setDatos(data);
    }
  }, [data]);

  return (
    <>
      <TableFormat isLoading={isLoading} success={success} datos={datos} optionsAction={optionsAction} />
    </>
  );
};
