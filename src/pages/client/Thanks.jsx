import React, { useContext } from 'react'
import { LangContext } from '../../context/langContext';

const Thanks = () => {
  const  [lang] = useContext(LangContext);

  return (
    <div className='container d-flex align-items-center justify-content-center pb-5'>
        <h1 className='text-success'>{lang==='en' ? 'Thank You!' : 'Təşəkkür Edirik!'}</h1>
    </div>
  )
}

export default Thanks