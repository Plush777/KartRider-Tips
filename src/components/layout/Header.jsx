import logoBlack from '../svg/ico-kart-logo-black.svg';
import { Link } from 'react-router-dom';
import * as Headerstyled from "../style/Header.style";

const Header = (props) => {
    return(
       <>
         <Headerstyled.Headers>
                <Headerstyled.HeaderInner>
                    <Headerstyled.Logo>
                        <Link to="/">
                            <img src={logoBlack} alt="카트라이더 아카이브 로고"/>
                        </Link>
                    </Headerstyled.Logo>
                    <Headerstyled.Gnb>
                        <Headerstyled.GnbList>
                            {props.gnb.map((item, index) => {
                                return(
                                    <Headerstyled.GnbItem key={index}>
                                        <Link to={item.link}>{item.name}</Link>
                                    </Headerstyled.GnbItem>
                                )})
                            }
                        </Headerstyled.GnbList>
                    </Headerstyled.Gnb>
                    <Headerstyled.ShortArea>
                        <a href="https://kartdrift.nexon.com/kartdrift/ko/main" target="_blank" rel='noopener noreferrer'>카트라이더 홈페이지 바로가기</a>
                    </Headerstyled.ShortArea>    
                </Headerstyled.HeaderInner>
            </Headerstyled.Headers>
       </>
    )
}

export default Header;