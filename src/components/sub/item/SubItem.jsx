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
            <Header/>
            <main role="main">
                <SubVisual/>
                <SubTab commonContents={props.commonContents}/>
                <ItemContents itemContents={props.itemContents}/>
                <Footer/>
            </main>
        </>
    );
}

export default SubItem;