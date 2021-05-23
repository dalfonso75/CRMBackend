import React from "react";
import MaterialTable from "material-table";
import PageLoading from "../../PageLoadign/PageLoading";
import { ContainerCard, ContainerTable, TableCardHeader, TitleHeader, TableCardBody } from "./styles";
import './style.css'

export const TableFormat = ({isLoading, success, datos, optionsAction, colums}) => {
  
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
                      actions={optionsAction}
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
