import React from 'react'
import { useState } from 'react'
import Formik from '../components/Formik'
import Tiny from '../components/Tiny'
import { useTranslation } from 'react-i18next';
import RecoilBtn from '../components/RecoilBtn';
import fontSizeState from '../state/atomBtn';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function CountButton() {
  const [count, setCount] = useState(0)
  return (
    <section className='w-3/4 mx-auto'>
      <h3>State</h3>
      <button 
        className='p-2 mx-2 border rounded text-white !bg-indigo-500 hover:!bg-indigo-800' 
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
    </section>
  )
}

function Text() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return <p style={{fontSize}}>This text will increase in size too.</p>;
}

function pageContact() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h1>{t('contact_p')}</h1>
      <Tiny />
      <Formik />
      <CountButton />
      <RecoilBtn />
      <Text />
    </div>
  )
}

export default pageContact