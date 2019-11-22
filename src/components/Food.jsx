import React from 'react';
import { Header } from './Header';
import { Content } from './Content';
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