import * as Headerstyled from "../style/Header.style";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Gnb = (props) => {

    const [gnbData] = useState(props.gnb);

    return ( 
        <>
            <Headerstyled.Gnb>
                <Headerstyled.GnbList>
                    {gnbData.map((item,index) => {
                        return(
                            <Headerstyled.GnbItem className={item.className} key={index}>
                                <Link to={item.link}>{item.name}</Link>
                            </Headerstyled.GnbItem>
                        )
                    })}
                </Headerstyled.GnbList>
            </Headerstyled.Gnb>
        </>
     );
}

export default Gnb;