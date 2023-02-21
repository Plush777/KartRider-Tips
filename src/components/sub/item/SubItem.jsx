import React from 'react';
import SubTab from 'components/sub/SubTab';
import SubVisual from 'components/sub/SubVisual';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import ItemContents from 'components/sub/item/ItemContents';
import Meta from 'Meta/MetaTag';
import FootSupport from 'components/article/FootSupport';
import FootNotice from 'components/article/FootNotice';

const SubItem = props => {

    const metaData = {
        title: 'KartRider Tips | 모드 | 아이템전',
        robots: 'index, follow'
    }

    return (  
        <>
            <Meta data={metaData}/>
            <Header/>
            <main id='main'>
                <SubVisual/>
                <SubTab commonContents={props.commonContents}/>
                <ItemContents itemContents={props.itemContents}/>
                <FootSupport/>
                <FootNotice/>
                <Footer/>
            </main>
        </>
    );
}

export default SubItem;