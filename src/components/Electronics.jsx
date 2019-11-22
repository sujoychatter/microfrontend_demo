import React from 'react';
import { Header } from './Header';
import { Content } from './Content';

export const Electronics = () => {

  function renderContent() {
    return <div>Electronics section</div>
  }

  return <div>
    <Header title='Electronics' />
    <Content renderFn={renderContent} />
  </div>;
}