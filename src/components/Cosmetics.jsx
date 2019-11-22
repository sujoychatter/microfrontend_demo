import React from 'react';
import { Header } from './Header';
import { Content } from './Content';

export const Cosmetics = () => {

  function renderContent() {
    return <div>Cosmetics section</div>
  }

  return <div>
    <Header title='Cosmetics' />
    <Content renderFn={renderContent} />
  </div>;
}
