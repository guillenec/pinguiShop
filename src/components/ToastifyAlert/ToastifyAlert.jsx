import React from 'react'
import { toast } from 'react-toastify';

const ToastifyAlert = ( {val, msj } ) => {

  const notify = (msj) => toast.success(`🥰🥰 ${msj}`, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const errToast = ( msj ) => toast.error(`😡😡 ${msj}`, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
  })

  notify(cant, objeto.nombre);

  return (
    <>
      { val ? notify(msj) : errToast(msj) }
    </>
  )
}

export default ToastifyAlert

/**
 * 
 * https://youtu.be/H_vEJt5Id_I
 */