import React, { useEffect, useState } from "react";
// import MaterialTable from "material-table";
// import PageLoading from "../PageLoadign/PageLoading";
import { TableFormat } from './TableFormat'
import useProspect from "../../Hooks/useProspect";
// import { ContainerCard, ContainerTable, TableCardHeader, TitleHeader, TableCardBody } from "./styles";
import { FaUserEdit, FaUserShield, FaUserClock } from "react-icons/fa";
// import './style.css'
// const colums = [
//   {
//     title: "Nombre",
//     field: "prospectName",
//   },
//   {
//     title: "LastName",
//     field: "prospectLastName",
//   },
//   {
//     title: "Télefono",
//     field: "prospectCellphone",
//   },
//   {
//     title: "Estado",
//     field: "statusName",
//     render:(row)=><div className={row.statusName == 'Sentado' ? 'sentado statusNameRow': 
//                                   row.statusName == 'Sin asignar' ? 'sinAsignar statusNameRow':
//                                   row.statusName == 'Llamada'? 'llamada statusNameRow':
//                                   row.statusName == 'Cita'? 'cita statusNameRow':
//                                   row.statusName == 'Cerrado'? 'cerrado statusNameRow':
//                                   row.statusName == 'statusNameRow'
//                                 }>{row.statusName}</div>
//   },
// ];
export const TableProspect = ({role}) => {
  const { getAll, data, isLoading, hasError, success } = useProspect();
  const [optionsAction, setOptionsAction] = useState([]);
    useEffect(()=>{
      if (role == "D_hTgWm55CoUMacxbNWvO") {
        setOptionsAction([
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
      } else if (role == "FJ2A4JD7z92rkR6-8qmyg") {
        setOptionsAction([
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
      }
    },[role])
  
  const [datos, setDatos] = useState();

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    if (data) {
      setDatos(data);
    }
    console.log(data);
  }, [data]);

  return (
    <>
      <TableFormat isLoading={isLoading} success={success} datos={datos} optionsAction={optionsAction} />
    </>
  );
};
