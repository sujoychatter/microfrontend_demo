import React from 'react';
import { Link } from "react-router-dom";
import '../css/Home.css';
// import Food from '../images/food.jpg';
// import Electronics from '../images/electronics.jpg';
// import Books from '../images/books.jpg';
// import Cosmetics from '../images/cosmetics.jpg';
// import Clothing from '../images/clothing.jpg';
import { allConfig } from './App';

export const Home = () => {
  return <div className='home-wrapper'>
    {allConfig.map(({ image, title, url }) => {
      return <Link key={url} to={url}><div className='tile' style={{backgroundImage: `url('${image}')`, fontSize: `${ 280 / allConfig.length }px`}}><span className='home-title'>{title}</span></div></Link>
    })}
  </div>
}
