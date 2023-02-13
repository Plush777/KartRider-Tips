import React from 'react';
import SubTab from '../../SubTab';
import SubVisual from '../../SubVisual';
import Header from '../../../layout/Header';
import Footer from '../../../layout/Footer';
import SubCommonContents from './SubCommonContents';
import Meta from '../../../../Meta/MetaTag';

const SubCommonKartbody = (props) => {

    const metaData = {
        title: '카트라이더 아카이브 | 카트바디 | 일반',
        robots: 'index, follow'
    }

    return ( 
        <>
            <Meta data={metaData}/>
            <Header/>
            <main id='main' role="main">
                <SubVisual/>
                <SubTab commonContents={props.commonContents}/>
                <SubCommonContents commonContents={props.commonContents}/>
                <Footer/>
            </main>
        </>
     );
}

export default SubCommonKartbody;