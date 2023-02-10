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
            <main role="main">
                <SubVisual/>
                <SubTab commonContents={props.commonContents} />
                <SpeedContents speedContents={props.speedContents}/>
                <Footer/>
            </main>
        </>
     );
}

export default SubSpeed;