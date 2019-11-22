import React from 'react';
import { Header } from '../../common/components/Header';
import { Content } from '../../common/components/Content';
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