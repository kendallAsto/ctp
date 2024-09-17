import React from 'react'
import { useTranslation } from "react-i18next";


export default function BTNS() {
    const { t, i18n } = useTranslation("information");

  return (
    <div>
      <a  className='bg-Blue-Dianne text-2xl text-White p-3 rounded-lg hover:bg-Fuscous transition-colors duration-200 hover:text-White' href="/facilities">{t('Mission.btn')}</a>
    </div>
  )
}
