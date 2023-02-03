import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import Meta from '../Meta/MetaTag';
import mixins from "./style/mixins";

const FlexContainer = styled.div`
    ${mixins.fcc}
    height: 100%;
`
const ImgArea = styled.div`
    ${mixins.jcc}
`

const ErrorImg = styled.img`
    width: 50%;
`

const TxtArea = styled.div`
    margin-top: 30px;
    text-align: center;
`

const ErrorTitle = styled.h1`
    ${mixins.font('nexonLv1Gothic','#333')}
    font-size: 2rem;
`

const ErrorDesc = styled.p`
    ${mixins.font('nexonLv1Gothic','#666')}
    font-size: 1.125rem;
    margin-top: 10px;
`

const BtnArea = styled.div`
    ${mixins.jcc}
    margin-top: 40px;
`

const BtnRedirect = styled.button.attrs({type: 'button'})`
    height: 40px;
    padding: 0 15px;
    border-radius: 4px;
    font-size: 1rem;
    background-color: #333;
    ${mixins.font('nexonLv1Gothic','#fff')}
`

const Notfound = () => {

    const navigate = useNavigate();

    const metaData = {
        title: '카트라이더 아카이브 | 404',
        robots: 'noindex, nofollow'
    }

    const errData = {
        title: '찾을 수 없는 페이지입니다.',
        desc: '요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하신 것 같아요.',
        link: '홈으로 이동'
    }

    return ( 
        <>
            <Meta data={metaData}/>
            <FlexContainer>
                <ImgArea>
                    <ErrorImg src="/images/common/img-notfound.webp" alt="에러 이미지" />
                </ImgArea>
                <TxtArea>
                    <ErrorTitle>{errData.title}</ErrorTitle>
                    <ErrorDesc>{errData.desc}</ErrorDesc>
                </TxtArea>
                <BtnArea>
                    <BtnRedirect onClick={() => navigate('/')}>{errData.link}</BtnRedirect>
                </BtnArea>
            </FlexContainer>
        </>
    );
}

export default Notfound;