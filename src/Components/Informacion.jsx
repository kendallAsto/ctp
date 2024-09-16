import React, { Children } from 'react'
import { useTranslation } from "react-i18next";


export default function Informacion(props) {
  const { t, i18n } = useTranslation("information");

  return (
    <div className='mb-14'>
        <h1 className='font-bold font-Poppins text-Atlantis md:text-4xl'>{props.title}</h1>
        <p className='text-2xl text-pretty mb-6'>{props.body}</p>
        <p className='text-2xl text-pretty mb-6'>{props?.body2}</p>
        <p className='text-2xl text-pretty mb-6'>{props?.body3}</p>
        <div className='mt-4'>
        {props.extra}
        </div>
    </div>
  )
}
