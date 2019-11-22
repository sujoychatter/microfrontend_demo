import React from 'react';
import { Header } from 'ms-common';
import { Content } from 'ms-common';
import '../css/Food.css';

export const Food = () => {

  function renderContent() {
    return <div className='food'>Food section</div>
  }

  return <div>
    <Header title='Food' />
    <Content renderFn={renderContent} />
  </div>;
}