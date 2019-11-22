import React from 'react';
import { Header } from 'ms-common';
import { Content } from 'ms-common';
import '../css/Clothing.css';

export const Clothing = () => {

  function renderContent() {
    return <div className='clothing'>Clothing section</div>
  }

  return <div>
    <Header title='Clothing' />
    <Content renderFn={renderContent} />
  </div>;
}