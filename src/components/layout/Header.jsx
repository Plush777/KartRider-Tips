import logoBlack from '../svg/ico-kart-logo-black.svg';
import { Link,useParams } from 'react-router-dom';
import * as Headerstyled from "../style/layout/Header.style";
import Gnb from './Gnb';

const Header = () => {

    let {id} = useParams();
    parseInt(id);

    return(
       <>
         <Headerstyled.Headers role="banner">
                <Headerstyled.HeaderInner>
                    <Headerstyled.Logo>
                        <Link to="/" title="카트라이더 아카이브 로고">
                            <img src={logoBlack} alt="카트라이더 아카이브 로고"/>
                        </Link>
                    </Headerstyled.Logo>
                    <Gnb/>
                    <Headerstyled.ShortArea>
                        <a href="https://kartdrift.nexon.com/kartdrift/ko/main" target="_blank" rel='noopener noreferrer' title='카트라이더 홈페이지 바로가기 새 창 열림'>카트라이더 홈페이지 바로가기</a>
                    </Headerstyled.ShortArea>    
                </Headerstyled.HeaderInner>
            </Headerstyled.Headers>
       </>
    )
}

export default Header;