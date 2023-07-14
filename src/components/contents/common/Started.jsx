'use client';

import styled from "styled-components";
import mixins from "components/style/mixins";
import { useTranslation } from 'react-i18next';
import etc from 'locales/ko/etc/etc.json';

const Wrap = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${mixins.whFull}
    background-color: var(--bgColor);
    z-index: 999999999;
`

const Contents = styled.main`
    display: grid;
    place-items: center;
    height: 100%;
    padding: 0 16px;
    animation: fadeIn 1.5s ease-in-out;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

const Img = styled.img`
    width: 316px !important;
    height: 70px !important;
    margin: 0 auto;

    ${({ theme }) => theme.tablet`
        width: 250px !important;
        height: 50px !important;
    `}
`

const TxtArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
`

const Txt = styled.p`
    ${mixins.font('nexonLv1Gothic','var(--text)')}
    font-size: 1.75rem;
    text-align: center;
    line-height: 35px;
    word-break: keep-all;

    ${({ theme }) => theme.tablet`
       font-size: 1.125rem;
       line-height: 25px;
    `}

    ${({ theme }) => theme.mobile`
       font-size: 0.875rem;
       line-height: 21px;
    `}

    ${({ theme }) => theme.small`
       font-size: 0.75rem;
       line-height: 17.5px;
    `}
`

const Started = ({ themeMode }) => {

    const { t } = useTranslation();

    return ( 
        <Wrap>
            <Contents>
                <div className="imgArea">
                    {
                        themeMode === 'dark' ?
                        <Img src="/ico-kart-logo-white-beta.svg" alt="logo" width="316" height="70"/>
                        :
                        <Img src="/ico-kart-logo-black-beta.svg" alt="logo" width="316" height="70"/>
                    }
                </div>
                <TxtArea>
                    {Object.values(etc.start.group1).map((item,index) => {
                        return(
                            <Txt key={index}>{t(`start.group1.txt${index+1}`)}</Txt>
                        )
                    })}
                </TxtArea>
            </Contents>
        </Wrap>
    );
}

export default Started;