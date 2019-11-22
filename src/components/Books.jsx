import React from 'react';
import { Header } from './Header';
import { Content } from './Content';

export const Books = () => {

  function renderContent() {
    return <div>Books section</div>
  }

  return <div>
    <Header title='Books' />
    <Content renderFn={renderContent} />
  </div>;
}