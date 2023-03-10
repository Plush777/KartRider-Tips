import React, { useEffect } from 'react';
import Meta from 'Meta/MetaTag';
import MainBox from 'components/article/MainBox';
import FootSupport from 'components/article/FootSupport';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Visual from 'components/layout/Visual';
import Started from 'components/Started';
import { useDispatch , useSelector } from "react-redux";
import { setStartState } from 'redux/store/store';
import FootNotice from './article/FootNotice';

const Main = () => {
    let dispatch = useDispatch();
    let started = useSelector(state => state.startState);

    useEffect(() => {
        let timer = setTimeout(() => {
            dispatch(setStartState(false));
            return () => clearTimeout(timer);
        }, 3000);
    },[dispatch])

    const metaData = {
        title: 'KartRider Tips',
		robots: 'index, follow',
        image: '/og/og.png',
        width: '1200',
        height: '630',
    }

    return ( 
        <>  
            <Meta data={metaData}/>
            {
                started ? <Started/> 
                :
                <React.Fragment>
                    <Header/>
                    <main id='main'>
                        <Visual/>
                        <MainBox/>
                    </main>
                    <FootSupport/>
                    <FootNotice/>
                    <Footer/>
                </React.Fragment>
            }
        </>
    );
}

export default Main;