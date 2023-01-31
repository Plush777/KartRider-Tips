import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`
const ImgArea = styled.div`
    display: flex;
    justify-content: center;
`

const ErrorImg = styled.img`
    width: 50%;
`

const TxtArea = styled.div`
    margin-top: 30px;
    text-align: center;
`

const ErrorTitle = styled.h1`
    font-size: 32px;
    font-family: 'nexonLv1Gothic';
    color: #333;
`

const ErrorDesc = styled.p`
    font-size: 18px;
    font-family: 'nexonLv1Gothic';
    color: #666;
    margin-top: 10px;
`

const BtnArea = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`

const BtnRedirect = styled.button.attrs({type: 'button'})`
    height: 40px;
    padding: 0 10px;
    border-radius: 4px;
    font-size: 16px;
    color: #fff;
    font-family: 'nexonLv1Gothic';
    background-color: #333;
`

const Notfound = () => {

    const navigate = useNavigate();

    return ( 
        <>
            <FlexContainer>
                <ImgArea>
                    <ErrorImg src="../../images/common/img-notfound01.webp" alt="에러 이미지" />
                </ImgArea>
                <TxtArea>
                    <ErrorTitle>찾을 수 없는 페이지입니다.</ErrorTitle>
                    <ErrorDesc>요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하신 것 같아요.</ErrorDesc>
                </TxtArea>
                <BtnArea>
                    <BtnRedirect onClick={() => navigate('/')}>홈으로 이동</BtnRedirect>
                </BtnArea>
            </FlexContainer>
        </>
    );
}

export default Notfound;