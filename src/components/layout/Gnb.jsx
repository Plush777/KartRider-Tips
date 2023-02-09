import * as Headerstyled from "../style/layout/Header.style";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Gnb = () => {

    let gnbData = useSelector(state => state.gnb);

    return ( 
        <>
            <Headerstyled.Gnb>
                <Headerstyled.GnbList>
                    {gnbData.map((item,index) => {
                        return(
                            <Headerstyled.GnbItem className={item.className} key={index} onClick={() => {index === 3 && alert('준비중인 콘텐츠에요.')}}>
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