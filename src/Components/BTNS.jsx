import React from 'react'
import { useTranslation } from "react-i18next";



export default function BTNS({tipo,href,texto}) {

  function tipoBoton(tipo){
    if(tipo == "informativo"){
      return "bg-Blue-Dianne md:text-xl text-White p-3 rounded-lg hover:bg-Fuscous transition-colors duration-200 hover:text-White hover:scale-125"
    }
    else if(tipo == "Delete"){
      return "bg-red-500 md:text-xl text-White p-3 rounded-lg hover:bg-Fuscous transition-colors duration-200 hover:text-White hover:scale-125"
    }
    else if(tipo == "Edit"){
      return "bg-yellow-500 md:text-xl text-White p-3 rounded-lg hover:bg-Fuscous transition-colors duration-200 hover:text-White hover:scale-125"
    }
    else if(tipo == "Add"){
      return "bg-Atlantis md:text-xl text-White p-3 rounded-lg hover:bg-Fuscous transition-colors duration-200 hover:text-White hover:scale-125"
    }
  }

  return (
    <div>
      <a  className={tipoBoton(tipo)} href={href}>{texto}</a>
    </div>
  )
}
