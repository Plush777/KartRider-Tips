import React from 'react';
import MainBox from './article/MainBox';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Visual from './layout/Visual';
import gnbData from '../data/gnb/gnb.js';
import { useState } from 'react';

const Main = () => {

    let [gnb] = useState(gnbData);

    return ( 
        <>
            <Header gnb={gnb}/>
            <Visual/>
            <MainBox/>
            <Footer/>
        </>
    );
}

export default Main;