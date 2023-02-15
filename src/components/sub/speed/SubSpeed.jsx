import React from 'react';
import SubTab from '../SubTab';
import SubVisual from '../SubVisual';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import SpeedContents from './SpeedConents';
import Meta from '../../../Meta/MetaTag';
import FootSupport from '../../article/FootSupport';

const SubSpeed = (props) => {

    const metaData = {
        title: 'KartRider Tips | 모드 | 스피드전',
        robots: 'index, follow'
    }
    
    return ( 
        <>
            <Meta data={metaData}/>
            <Header/>
            <main role="main" id='main'>
                <SubVisual/>
                <SubTab commonContents={props.commonContents} />
                <SpeedContents speedContents={props.speedContents}/>
                <FootSupport/>
                <Footer/>
            </main>
        </>
     );
}

export default SubSpeed;