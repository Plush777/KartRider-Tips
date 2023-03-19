import * as Headerstyled from "components/style/layout/Header.style";
import { useSelector , useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { setGnbActive } from "redux/store/store";

const Gnb = () => {

    let gnbData = useSelector(state => state.gnb);  
    let gnbActiveState = useSelector(state => state.gnbActive);
    const dispatch = useDispatch();

    const handleClick = (e,index) => {
        dispatch(setGnbActive(index));
    }

    const { pathname } = useLocation();

    useLayoutEffect(() => {
        if(pathname.startsWith('/mode')){
            dispatch(setGnbActive(0));
        } else if(pathname.startsWith('/kartbody')){
            dispatch(setGnbActive(1));
        } else if(pathname.startsWith('/character')){
            dispatch(setGnbActive(2));
        } else if (pathname.startsWith('/track')){
            dispatch(setGnbActive(3));
        }
    },[pathname,dispatch])

    return ( 
        <Headerstyled.Gnb id="gnb">
            <Headerstyled.GnbList>
                {gnbData.map((item,index) => {
                    return(
                        <Headerstyled.GnbItem className={gnbActiveState === index ? 'active' : item.className} 
                        key={index} onClick={e => handleClick(e, index)}>
                            <Link to={item.link} title={item.name} >{item.name}</Link>
                        </Headerstyled.GnbItem>
                    )
                })}
            </Headerstyled.GnbList>
        </Headerstyled.Gnb>
     );
}

export default Gnb;