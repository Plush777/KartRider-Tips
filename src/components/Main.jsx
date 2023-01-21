import React from 'react';
import MainBox from './article/MainBox';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Visual from './layout/Visual';

const Main = () => {
    return ( 
        <>
            <Header/>
            <Visual/>
            <MainBox/>
            <Footer/>
        </>
    );
}

export default Main;