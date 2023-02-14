import React from 'react';
import SubTab from '../../SubTab';
import SubVisual from '../../SubVisual';
import Header from '../../../layout/Header';
import Footer from '../../../layout/Footer';
import SubCommonContents from './SubCommonContents';
import Meta from '../../../../Meta/MetaTag';

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
                <Footer/>
            </main>
        </>
     );
}

export default SubCommonKartbody;