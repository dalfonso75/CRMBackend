import React, { useState, useEffect } from "react";
import useProspect from "../../../Hooks/useProspect";
import useComercialGet from "../../../Hooks/useComercialBox";
import { useForm } from "react-hook-form";
import { ToastContainer, toast} from "react-toastify";
import PageLoading from "../../PageLoadign/PageLoading";
import { FormFormat } from '../FormFormat'
export const FormCommunity = ({role}) => {
  const [itemsForm, setItemsForm] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { create, hasError, isLoading, data } = useProspect();
  useEffect(() => {
    if (hasError) toast.error(`'🚀 El número de teléfono ya existe!'`, {
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
      toast.success('🚀 Prospecto Registrado!', {
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
    if(!itemsForm){
      data = {
        "userId": "",
        "object":{
          "prospectName": data.prospectName, 
          "prospectLastName": data.prospectLastName,
          "prospectCellPhone": data.prospectCellPhone, 
          "prospectEmail": data.prospectEmail, 
          "observation": data.observation, 
          "statusId": "7SbAE5zx27Prfpl92pOFP",
          "digitalSourceId": "H9Ee6DQ7cumAnjHmHkJfO",
          "userId" : "j64Jq329nj4g1F3ATosQs",
        }
      };
      console.log(data);
      create(data);
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
        <FormFormat 
        itemsForm={itemsForm} 
        setItemsForm={setItemsForm} 
        register={register} 
        handleSubmit={handleSubmit}
        errors={errors} 
        onSubmit={onSubmit} 
        role={role}
        />
      )}
    </>
  );
};