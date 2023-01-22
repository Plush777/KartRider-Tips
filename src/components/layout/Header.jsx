import styled from 'styled-components';
import logoBlack from '../svg/ico-kart-logo-black.svg';
import { Link } from 'react-router-dom';

const Headers = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 50px;
    background-color: #fff;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
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
    position: relative;
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

const Header = (props) => {
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
                            {props.gnbList.map((item, index) => {
                                return(
                                    <GnbItem key={index}>
                                        <Link to={item.link}>{item.name}</Link>
                                    </GnbItem>
                                )})
                            }
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