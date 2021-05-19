import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import PageLoading from "../PageLoadign/PageLoading";
import useProspect from "../../Hooks/useProspect";
import { ContainerCard, ContainerTable, TableCardHeader, TitleHeader, TableCardBody } from "./styles";
import { FaUserEdit, FaUserShield, FaUserClock } from "react-icons/fa";
import './style.css'
const colums = [
  {
    title: "Nombre",
    field: "prospectName",
  },
  {
    title: "LastName",
    field: "prospectLastName",
  },
  {
    title: "Télefono",
    field: "prospectCellphone",
  },
  {
    title: "Estado",
    field: "statusName",
    render:(row)=><div className={row.statusName == 'Sentado' ? 'sentado statusNameRow': 
                                  row.statusName == 'Sin asignar' ? 'sinAsignar statusNameRow':
                                  row.statusName == 'Llamada'? 'llamada statusNameRow':
                                  row.statusName == 'Cita'? 'cita statusNameRow':
                                  row.statusName == 'Cerrado'? 'cerrado statusNameRow':
                                  row.statusName == 'statusNameRow'
                                }>{row.statusName}</div>
  },
];
export const TableProspect = () => {
  const { getAll, data, isLoading, hasError, success } = useProspect();

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
      {isLoading && <PageLoading />}
      {!isLoading && (
        <ContainerCard className="row d-flex justify-content-center">
          <ContainerTable className="card col-md-10">
            <TableCardHeader className="card-header">
              <TitleHeader>Tabla de Prospectos</TitleHeader>
            </TableCardHeader>
            <TableCardBody className="card-body">
              <div className="row">
                <div className="col table-m">
                  {success && (
                    <MaterialTable
                      title="Prospectos"
                      columns={colums}
                      data={datos}
                      actions={[
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
                      ]}
                      options={{
                        actionsColumnIndex: -1,
                      }}
                      localization={{
                        header: {
                          actions: "Acciones",
                        },
                      }}
                    />
                  )}
                </div>
              </div>
            </TableCardBody>
          </ContainerTable>
        </ContainerCard>
      )}
    </>
  );
};
