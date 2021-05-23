import React, { useState, useEffect } from "react";
import useProspect from "../../../Hooks/useProspect";
import { useForm } from "react-hook-form";
import { ToastContainer, toast} from "react-toastify";
import PageLoading from "../../PageLoadign/PageLoading";
import { ModalFormFormat } from '../ModalFormFormat'
export const ModalFormComercial = ({role, userId, statusProspect, stateprospectId}) => {
  const [itemsForm, setItemsForm] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { update, hasError, isLoading, data } = useProspect();
  useEffect(() => {
    if (hasError) toast.error(`'🚀 Faltas datos por llenar!'`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }, [hasError]);
  useEffect(() => {
    if (data) 
    {
      toast.success('🚀 Prospecto Actualizado!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      reset();
    }
  }, [data]);
  const onSubmit = (data) => {
    if(statusProspect=='zDc_TzqP7g5n-8WyH_TL9'){
      data = {
        "userId": "",
        "object":{
          "userId": "",
          "prospectId": stateprospectId,
		      "statusId" : data.statusId
        }
      };
      update(data);
    }else {
      console.log(data);
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {isLoading && <PageLoading />}
      {!isLoading && (
        <ModalFormFormat 
        itemsForm={itemsForm} 
        setItemsForm={setItemsForm} 
        register={register} 
        handleSubmit={handleSubmit}
        errors={errors} 
        onSubmit={onSubmit} 
        role={role}
        statusProspect={statusProspect}
        />
      )}
    </>
  );
};