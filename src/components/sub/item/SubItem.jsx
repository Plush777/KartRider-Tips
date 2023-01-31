import React from 'react';
import SubTab from '../SubTab';
import SubVisual from '../SubVisual';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ItemContents from './ItemContents';
import Meta from '../../../Meta/MetaTag';

const SubItem = (props) => {

    const metaData = {
        title: '카트라이더 아카이브 | 모드 | 아이템전',
        robots: 'index, follow'
    }

    return (  
        <>
            <Meta data={metaData}/>
            <Header gnb={props.gnb}/>
            <SubVisual gnb={props.gnb} subTitle={props.subTitle} setSubTitle={props.setSubTitle}/>
            <SubTab/>
            <ItemContents itemContents={props.itemContents}/>
            <Footer/>
        </>
    );
}

export default SubItem;