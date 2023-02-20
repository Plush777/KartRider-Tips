import React from 'react';
import SubTab from 'components/sub/SubTab';
import SubVisual from 'components/sub/SubVisual';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import SpeedContents from 'components/sub/speed/SpeedConents';
import Meta from 'Meta/MetaTag';
import FootSupport from 'components/article/FootSupport';
import FootNotice from 'components/article/FootNotice';

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
                <FootNotice/>
                <Footer/>
            </main>
        </>
     );
}

export default SubSpeed;