import React from 'react';
import SubTab from 'components/sub/SubTab';
import SubVisual from 'components/sub/SubVisual';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import SpeedContents from 'components/sub/speed/SpeedConents';
import Meta from 'Meta/MetaTag';
import FootSupport from 'components/article/FootSupport';
import FootNotice from 'components/article/FootNotice';
import Alert from "components/mobile/Alert";
import { useSelector } from "react-redux";
import { M768 } from 'components/style/mobile/MediaQuery';
import BottomNavigation from "components/mobile/BottomNavigation";

const SubSpeed = props => {

    const metaData = {
        title: 'KartRider Tips | 모드 | 스피드전',
        robots: 'index, follow',
        image: '/og/og-mode.jpg',
        width: '1200',
        height: '630',
    }

    let openInNewAlert = useSelector(state => state.openInNew);
    
    return ( 
        <>
            <Meta data={metaData}/>
            <Header/>
            <main id='main'>
                <SubVisual/>
                <SubTab commonContents={props.commonContents} />
                <SpeedContents speedContents={props.speedContents}/>
                <FootSupport/>
                <FootNotice/>
                <Footer/>
            </main>
            <M768>
                <BottomNavigation/>
            </M768>
            {openInNewAlert && <Alert/>}
        </>
     );
}

export default SubSpeed;