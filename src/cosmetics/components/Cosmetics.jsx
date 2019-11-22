import React from 'react';
import { Header } from '../../common/components/Header';
import { Content } from '../../common/components/Content';
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
