import React from 'react';
import HeaderComp from './comp/HeaderComp';
import CoverComp from './comp/CoverComp';
import BlogComp from './comp/BlogComp';

import './App.css';

const App = () => {
  return (
    <div className='app'>
      <HeaderComp />
      <CoverComp />
      <BlogComp/>
    </div>
  )
}
export default App