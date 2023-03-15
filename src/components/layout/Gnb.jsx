import * as Headerstyled from "components/style/layout/Header.style";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useLayoutEffect,useState } from "react";
import { useLocation } from "react-router-dom";

const Gnb = () => {

    let gnbData = useSelector(state => state.gnb);  
    let [countIndex, setCountIndex] = useState(null);

    const handleClick = (e,index) => {
        setCountIndex(index);
    }

    const { pathname } = useLocation();

    useLayoutEffect(() => {
        if(pathname.startsWith('/mode')){
            setCountIndex(0);
        } else if(pathname.startsWith('/kartbody')){
            setCountIndex(1);
        } else if(pathname.startsWith('/character')){
            setCountIndex(2);
        } else if (pathname.startsWith('/track')){
            setCountIndex(3);
        }
    },[pathname])

    return ( 
        <Headerstyled.Gnb id="gnb">
            <Headerstyled.GnbList>
                {gnbData.map((item,index) => {
                    return(
                        <Headerstyled.GnbItem className={countIndex === index ? 'active' : item.className} 
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