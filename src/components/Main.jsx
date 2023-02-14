import React, { useEffect } from 'react';
import Meta from '../Meta/MetaTag';
import MainBox from './article/MainBox';
import FootDonate from './article/FootDonate';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Visual from './layout/Visual';
import Started from '../components/Started';
import { useDispatch , useSelector } from "react-redux";
import { setStartState } from '../redux/store/store';

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
		robots: 'index, follow'
    }

    return ( 
        <>  
            {
                started ? <Started/> 
                :
                <React.Fragment>
                    <Meta data={metaData}/>
                    <Header/>
                    <main role="main" id='main'>
                        <Visual/>
                        <MainBox/>
                    </main>
                    <FootDonate/>
                    <Footer/>
                </React.Fragment>
            }
        </>
    );
}

export default Main;