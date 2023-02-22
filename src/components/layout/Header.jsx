// import logoBlack from 'components/svg/ico-kart-logo-black.svg';
import logoBlackBeta from 'components/svg/ico-kart-logo-black-beta.svg';
import { Link } from 'react-router-dom';
import * as Headerstyled from "components/style/layout/Header.style";
import Gnb from './Gnb';
import { M768 } from 'components/style/mobile/MediaQuery';
import OpenInNew from 'components/mobile/OpenInNew';

const Header = () => {
    return(
        <Headerstyled.Headers>
            <Headerstyled.HeaderInner>
                <Headerstyled.Logo>
                    <Link to="/" title="카트라이더 팁스 로고">
                        <img src={logoBlackBeta} alt="카트라이더 팁스 로고"/>
                    </Link>
                </Headerstyled.Logo>
                <Gnb/>
                <Headerstyled.ShortArea>
                    <a href="https://kartdrift.nexon.com/kartdrift/ko/main" target="_blank" rel='noopener noreferrer'>카트라이더 홈페이지 바로가기</a>
                </Headerstyled.ShortArea>
                <M768>
                    <OpenInNew/>
                </M768> 
            </Headerstyled.HeaderInner>
        </Headerstyled.Headers>
    )
}

export default Header;