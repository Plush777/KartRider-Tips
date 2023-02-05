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
            <Header gnb={props.gnb}/>
            <SubVisual gnb={props.gnb} subTitle={props.subTitle} setSubTitle={props.setSubTitle}/>
            <SubTab commonContents={props.commonContents}/>
            <SubCommonContents commonContents={props.commonContents}/>
            <Footer/>
        </>
     );
}

export default SubCommonKartbody;