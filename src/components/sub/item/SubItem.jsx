import React from 'react';
import SubTab from '../SubTab';
import SubVisual from '../SubVisual';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ItemContents from './ItemContents';

const SubItem = (props) => {

    return (  
        <>
            <Header gnb={props.gnb}/>
            <SubVisual gnb={props.gnb} subTitle={props.subTitle} setSubTitle={props.setSubTitle}/>
            <SubTab/>
            <ItemContents itemContents={props.itemContents}/>
            <Footer/>
        </>
    );
}

export default SubItem;