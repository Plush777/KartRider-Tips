import logoBlack from '../svg/ico-kart-logo-black.svg';
import { Link,useParams } from 'react-router-dom';
import * as Headerstyled from "../style/Header.style";
import Gnb from './Gnb';

const Header = (props) => {

    let {id} = useParams();
    parseInt(id);

    return(
       <>
         <Headerstyled.Headers>
                <Headerstyled.HeaderInner>
                    <Headerstyled.Logo>
                        <Link to="/">
                            <img src={logoBlack} alt="카트라이더 아카이브 로고"/>
                        </Link>
                    </Headerstyled.Logo>
                    <Gnb gnb={props.gnb}/>
                    <Headerstyled.ShortArea>
                        <a href="https://kartdrift.nexon.com/kartdrift/ko/main" target="_blank" rel='noopener noreferrer'>카트라이더 홈페이지 바로가기</a>
                    </Headerstyled.ShortArea>    
                </Headerstyled.HeaderInner>
            </Headerstyled.Headers>
       </>
    )
}

export default Header;