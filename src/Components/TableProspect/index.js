import React, { useEffect, useState } from "react";
import { TableFormat } from './TableFormat'
import useProspect from "../../Hooks/useProspect";
import { FaUserEdit, FaUserClock } from "react-icons/fa";
export const TableProspect = ({role}) => {
  const { getAll, data, isLoading, hasError, success } = useProspect();
  const [optionsAction, setOptionsAction] = useState([]);
  const [colums, setColums] = useState([]);
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
  useEffect(()=>{
    if(datos && (role == "D_hTgWm55CoUMacxbNWvO" || role == "FJ2A4JD7z92rkR6-8qmyg") ){
     setColums([
        {
          title: "Observacion",
          field: "observation",
        },
        {
          title: "Nombre",
          field: "prospectName",
          render:(datos) =>{
            return `${datos.prospectName} ${datos.prospectLastName}`
          }
        },
        {
          title: "Télefono",
          field: "prospectCellphone",
        },
        {
          title: "Comercial",
          field: "userName",
        },
        {
          title: "Estado",
          field: "statusName",
          render:(row)=><div className={row.statusName == 'Sentado' ? 'sentado statusNameRow': 
                                        row.statusName == 'Sin asignar' ? 'sinAsignar statusNameRow':
                                        row.statusName == 'Llamada'? 'llamada statusNameRow':
                                        row.statusName == 'Cita'? 'cita statusNameRow':
                                        row.statusName == 'Cerrado'? 'cerrado statusNameRow':
                                        row.statusName == 'Inicio'? 'inicio statusNameRow':
                                        row.statusName == 'statusNameRow'
                                      }>{row.statusName}</div>
        },
      ])
    } 
  },[datos])
  return (
    <>
      <TableFormat isLoading={isLoading} success={success} datos={datos} optionsAction={optionsAction} colums={colums} />
    </>
  );
};
