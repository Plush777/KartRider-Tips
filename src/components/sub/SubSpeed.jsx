import React from 'react';
import SubTab from './SubTab';
import SubVisual from './SubVisual';
import Header from '../layout/Header';
import gnbData from '../../data/gnb/gnb.js';
import { useState } from 'react';
import SubContents from './SubConents';

const SubSpeed = () => {
   
    let [subTitle, setSubTitle] = useState('');
    let [gnb] = useState(gnbData);

    return ( 
        <>
            <Header gnb={gnb}/>
            <SubVisual gnb={gnb} subTitle={subTitle} setSubTitle={setSubTitle}/>
            <SubTab/>
            <SubContents/>
        </>
     );
}

export default SubSpeed;