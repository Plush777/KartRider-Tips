import React from 'react';
import SubTab from '../../SubTab';
import SubVisual from '../../SubVisual';
import Header from '../../../layout/Header';
import Footer from '../../../layout/Footer';
import SubCommonContents from './SubCommonContents';

const SubCommonKartbody = (props) => {
    return ( 
        <>
            <Header gnb={props.gnb}/>
            <SubVisual gnb={props.gnb} subTitle={props.subTitle} setSubTitle={props.setSubTitle}/>
            <SubTab/>
            <SubCommonContents/>
            <Footer/>
        </>
     );
}

export default SubCommonKartbody;