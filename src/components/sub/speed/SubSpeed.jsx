import React from 'react';
import SubTab from '../SubTab';
import SubVisual from '../SubVisual';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import SpeedContents from './SpeedConents';

const SubSpeed = (props) => {
    return ( 
        <>
            <Header gnb={props.gnb}/>
            <SubVisual gnb={props.gnb} subTitle={props.subTitle} setSubTitle={props.setSubTitle}/>
            <SubTab/>
            <SpeedContents speedContents={props.speedContents}/>
            <Footer/>
        </>
     );
}

export default SubSpeed;