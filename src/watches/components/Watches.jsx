import React from 'react';
import { Header } from '../../common/components/Header';
import { Content } from '../../common/components/Content';
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