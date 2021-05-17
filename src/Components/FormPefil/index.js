import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import PageLoading from "../PageLoadign/PageLoading";

export const FormPefil = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // useEffect(() => {
  //     if (hasError) toast.error(`'🚀 El número de teléfono ya existe!'`, {
  //       position: "top-right",
  //       autoClose: 1500,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       });
  //   }, [hasError]);
  //   useEffect(() => {
  //     if (data)
  //     {
  //       toast.success('🚀 Prospecto Registrado!', {
  //       position: "top-right",
  //       autoClose: 1500,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       });
  //       reset();
  //     }
  //   }, [data]);
  // const onSubmit = (data) => {
  //     if(!itemsForm){
  //       data = {
  //         "userId": "",
  //         "object":{
  //           "prospectName": data.prospectName,
  //           "prospectLastName": data.prospectLastName,
  //           "prospectCellPhone": data.prospectCellPhone,
  //           "prospectEmail": data.prospectEmail,
  //           "observation": data.observation,
  //           "statusId": "7SbAE5zx27Prfpl92pOFP"
  //         }
  //       };
  //       create(data);
  //     }else {
  //       console.log(data);
  //     }
  // };
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


    </>
  );
};
