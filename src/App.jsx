import React from 'react';
import GlobalStyle from './GlobalStyle';
import './index.scss';
import CommonRoute from './Routes/CommonRoute';

const App = () => {
  return (
    <>
        <GlobalStyle/>
        <CommonRoute/>
    </>  
  );
}

export default App;
