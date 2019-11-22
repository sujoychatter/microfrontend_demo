import React from 'react';
import { Link } from "react-router-dom";
import '../css/Home.css';
import Food from '../images/food.jpg';
import Electronics from '../images/electronics.jpg';
import Books from '../images/books.jpg';
import Cosmetics from '../images/cosmetics.jpg';

export const Home = () => {
  return <div className='home-wrapper'>
    <Link to='/books'><div className='tile' style={{backgroundImage: `url('${Books}')`, fontSize: `${ 280 / 4 }px`}}><span className='home-title'>Books</span></div></Link>
    <Link to='/electronics'><div className='tile' style={{backgroundImage: `url('${Electronics}')`, fontSize: `${ 280 / 4 }px`}}><span className='home-title'>Electronics</span></div></Link>
    <Link to='/cosmetics'><div className='tile' style={{backgroundImage: `url('${Cosmetics}')`, fontSize: `${ 280 / 4 }px`}}><span className='home-title'>Cosmetics</span></div></Link>
    <Link to='/food'><div className='tile' style={{backgroundImage: `url('${Food}')`, fontSize: `${ 280 / 4 }px`}}><span className='home-title'>Food</span></div></Link>
  </div>
}