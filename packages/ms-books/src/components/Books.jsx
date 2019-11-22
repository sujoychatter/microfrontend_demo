import React from 'react';
import { Header } from 'ms-common';
import { Content } from 'ms-common';
import '../css/Books.css';

export const Books = () => {

  function renderContent() {
    return <div className='books'>Books section</div>
  }

  return <div>
    <Header title='Books' />
    <Content renderFn={renderContent} />
  </div>;
}
