import React from 'react';
import HeaderComp from './comp/HeaderComp';
import CoverComp from './comp/CoverComp';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <HeaderComp />
      <CoverComp />
    </div>
  )
}
export default App