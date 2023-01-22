import React from 'react';
import SubTab from './SubTab';
import SubVisual from './SubVisual';
import Header from '../layout/Header';
import { useState } from 'react';
import gnb from '../../data/gnb/gnb.js';

const Sub = () => {

    let [gnbList] = useState(gnb);

    return ( 
        <>
            <Header gnbList={gnbList}/>
            <SubVisual gnbList={gnbList}/>
            <SubTab/>
        </>
     );
}

export default Sub;