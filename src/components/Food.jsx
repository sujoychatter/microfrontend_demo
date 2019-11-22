import React from 'react';
import { Header } from './Header';
import { Content } from './Content';

export const Food = () => {

  function renderContent() {
    return <div>Food section</div>
  }

  return <div>
    <Header title='Food' />
    <Content renderFn={renderContent} />
  </div>;
}