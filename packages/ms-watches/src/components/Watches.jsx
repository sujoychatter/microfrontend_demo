import React from 'react';
import { Header } from 'ms-common';
import { Content } from 'ms-common';
import '../css/Books.css';

export const Watches = () => {

  function renderContent() {
    return <div className='watches'>Watches section</div>
  }

  return <div>
    <Header title='Watches' />
    <Content renderFn={renderContent} />
  </div>;
}