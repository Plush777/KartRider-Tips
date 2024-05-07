'use client';

import styled from "styled-components";
import { useRouter } from "next/navigation";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 16px;

    ${({ theme }) => theme.laptopL`
        height: calc(100vh - 120px);
    `}
`
const ImgArea = styled.div`
    display: flex;
    justify-content: center;
`

const ErrorImg = styled.img`
    width: 710px !important;
    height: 413px !important;

    ${({ theme }) => theme.tablet`
        width: 358px !important;
    `}

    ${({ theme }) => theme.small`
         width: 100%;
        max-width: calc(100vw - 32px);
    `}
`

const TxtArea = styled.div`
    margin-top: 30px;
    text-align: center;
`

const ErrorTitle = styled.h1`
    font-family: 'nexonLv1Gothic';
    font-size: 2rem;
    color: var(--text2);

    ${({ theme }) => theme.laptopL`
       font-size: 1.75rem
    `}

    ${({ theme }) => theme.tablet`
       font-size: 1.5rem;
    `}
`

const ErrorDesc = styled.p`
    font-family: 'nexonLv1Gothic';
    font-size: 1.125rem;
    margin-top: 10px;
    color: var(--text1);

    ${({ theme }) => theme.laptopL`
       font-size: 1rem;
    `}

    ${({ theme }) => theme.tablet`
       font-size: 0.875rem;
    `}
`

const BtnArea = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;

    ${({ theme }) => theme.laptopL`
       margin-top: 30px;
    `}

    ${({ theme }) => theme.tablet`
       margin-top: 20px;
    `}
`

const BtnRedirect = styled.button.attrs({ type: 'button' })`
    height: 40px;
    padding: 0 15px;
    border-radius: 4px;
    font-size: 1rem;
    background-color: #333;
    color: #fff;

    ${({ theme }) => theme.laptopL`
       font-size: 0.875rem;
    `}
`

export default function NotFound() {
    const router = useRouter();

    return ( 
        <FlexContainer>
            <ImgArea>
                <ErrorImg src="/images/common/img-notfound.webp" alt="에러 이미지" />
            </ImgArea>
            <TxtArea>
                <ErrorTitle className="errorTitle">찾을 수 없는 페이지입니다.</ErrorTitle>
                <ErrorDesc className="errorDesc">요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하신 것 같아요.</ErrorDesc>
            </TxtArea>
            <BtnArea>
                <BtnRedirect onClick={() => router.push('/')}>홈으로 이동</BtnRedirect>
            </BtnArea>
        </FlexContainer>
    );
}