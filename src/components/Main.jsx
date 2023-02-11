import React from 'react';
import Meta from '../Meta/MetaTag';
import MainBox from './article/MainBox';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Visual from './layout/Visual';

const Main = () => {
    const metaData = {
        title: '카트라이더 아카이브',
		robots: 'index, follow'
    }

    return ( 
        <>  
            <Meta data={metaData}/>
            <Header/>
            <main role="main">
                <Visual/>
                <MainBox/>
            </main>
            <Footer/>
        </>
    );
}

export default Main;