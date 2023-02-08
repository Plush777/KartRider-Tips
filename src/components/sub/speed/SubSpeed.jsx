import React from 'react';
import SubTab from '../SubTab';
import SubVisual from '../SubVisual';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import SpeedContents from './SpeedConents';
import Meta from '../../../Meta/MetaTag';

const SubSpeed = (props) => {

    const metaData = {
        title: '카트라이더 아카이브 | 모드 | 스피드전',
        robots: 'index, follow'
    }
    
    return ( 
        <>
            <Meta data={metaData}/>
            <Header/>
            <SubVisual subTitle={props.subTitle} setSubTitle={props.setSubTitle}/>
            <SubTab commonContents={props.commonContents} />
            <SpeedContents speedContents={props.speedContents}/>
            <Footer/>
        </>
     );
}

export default SubSpeed;