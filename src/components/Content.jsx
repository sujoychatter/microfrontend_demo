import React from 'react';
import '../css/Content.css';

export const Content = ( {renderFn} ) => {
  return <div className='content'>{renderFn()}</div>;
}
