import styled from 'styled-components';
import logoBlack from '../svg/ico-kart-logo-black.svg';
import { Link } from 'react-router-dom';

const Headers = styled.header`
    width: 100%;
    height: 50px;
    background-color: #fff;
`

const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    width: 1300px;
    height: 100%;
    margin: 0 auto;
`

const Logo = styled.h1`
    
`

const Gnb = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-left: 40px;
`

const GnbList = styled.ul`
    display: flex;
    align-items: center;
    column-gap: 30px; 
    width: 100%;
`

const GnbItem = styled.li`
    font-size: 14px;
    font-family: 'Noto Sans';
    color: #000;
`

const ShortArea = styled.div`
    display: flex;
    width: 100%;
    font-size: 12px;
    font-family: 'Noto Sans';
    color: #6C7A89;
`

const ShortLink = styled.a`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`

const Header = () => {
    return(
       <>
         <Headers>
                <HeaderInner>
                    <Logo>
                        <Link to="/">
                            <img src={logoBlack} alt="카트라이더 아카이브 로고"/>
                        </Link>
                    </Logo>
                    <Gnb>
                        <GnbList>
                            <GnbItem>
                                <Link to="/mode">모드</Link>
                            </GnbItem>
                            <GnbItem>
                                <Link to="/kart">카트바디</Link>
                            </GnbItem>
                            <GnbItem>
                                <Link to="/character">캐릭터</Link>
                            </GnbItem>
                            <GnbItem>
                                <Link to="/track">트랙</Link>
                            </GnbItem>
                        </GnbList>
                    </Gnb>
                    <ShortArea>
                        <ShortLink href="https://kartdrift.nexon.com/kartdrift/ko/main" target="_blank" rel='noopener noreferrer'>카트라이더 홈페이지 바로가기</ShortLink>
                    </ShortArea>    
                </HeaderInner>
            </Headers>
       </>
    )
}

export default Header;