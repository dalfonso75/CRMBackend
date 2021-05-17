import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import PageLoading from "../PageLoadign/PageLoading";
import useProspect from "../../Hooks/useProspect";
import { ContainerCard, ContainerTable, TableCardHeader } from "./styles";
const colums = [
  {
    title: "Id",
    field: "prospectId",
  },
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
  },
];
export const TableProspect = () => {
  const { getAll, data, isLoading, hasError, success } = useProspect();
  const [datos, setDatos] = useState([]);
  console.log('--');
  useEffect(() => {
    console.log('-');
    getAll()
  }, []);

  useEffect(() => {
    if (data) 
    {
      setDatos(data);
    }
    console.log(data);
  }, [data]);
  
  return (
    <>
      {/* {isLoading && <PageLoading />} */}
      {/* {!isLoading && ( */}
        <ContainerCard className="row d-flex justify-content-center">
          <ContainerTable className="card col-md-10">
            <TableCardHeader className="card-header">
              Tabla de Prospectos
            </TableCardHeader>
            <div className="card-body">
              <p>Tabla para ver todos los prospectos</p>
              <div className="row">
                <div className="col">
                  {success && (
                    <MaterialTable
                      title="Prospectos"
                      columns={colums}
                      data={datos}
                      actions={[
                        {
                          icon: "edit",
                          tooltip: "Editar Prospecto",
                          onClick: (event, rowData) => {
                            alert(
                              `has presionado editar al prospecto ${rowData.prospectName}`
                            );
                          },
                        },
                      ]}
                      options={{
                        actionsColumnIndex: -1,
                        exportButton: true,
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
            </div>
          </ContainerTable>
        </ContainerCard>
      {/* )} */}
    </>
  );
};
