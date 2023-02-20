import React from 'react';
import SubTab from 'components/sub/SubTab';
import SubVisual from 'components/sub/SubVisual';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import SubCommonContents from 'components/sub/kartbody/common/SubCommonContents';
import Meta from 'Meta/MetaTag';
import FootSupport from 'components/article/FootSupport';
import FootNotice from 'components/article/FootNotice';

const SubCommonKartbody = (props) => {

    const metaData = {
        title: 'KartRider Tips | 카트바디 | 일반',
        robots: 'index, follow'
    }

    return ( 
        <>
            <Meta data={metaData}/>
            <Header/>
            <main id='main' role="main">
                <SubVisual/>
                <SubTab/>
                <SubCommonContents commonContents={props.commonContents}/>
                <FootSupport/>
                <FootNotice/>
                <Footer/>
            </main>
        </>
     );
}

export default SubCommonKartbody;