import React from 'react';
import '../css/Header.css';

export const Header = ({ title }) => {
  return <div className='header'><h1>{title}</h1></div>;
}