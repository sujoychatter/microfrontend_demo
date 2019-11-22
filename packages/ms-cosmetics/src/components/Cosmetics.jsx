import React from 'react';
import { Header } from 'ms-common';
import { Content } from 'ms-common';
import '../css/Cosmetics.css';

export const Cosmetics = () => {

  function renderContent() {
    return <div className='cosmetics'>Cosmetics section</div>
  }

  return <div>
    <Header title='Cosmetics' />
    <Content renderFn={renderContent} />
  </div>;
}
