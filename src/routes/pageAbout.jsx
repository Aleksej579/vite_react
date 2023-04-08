import React from 'react'
import Tools from '../components/componentList'
import { useTranslation } from 'react-i18next';
import Xata from '../components/Xata'

function pageAbout() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h1>{t('about_p')}</h1>
      <Tools />
      <Xata />
    </div>
  )
}

export default pageAbout
