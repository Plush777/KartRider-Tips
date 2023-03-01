import styled from "styled-components";
import mixins from "components/style/mixins";
// import logoBlack from 'components/svg/ico-kart-logo-black.svg';
import logoBlackBeta from 'components/svg/files/ico-kart-logo-black-beta.svg';

const Wrap = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${mixins.whFull}
    background-color: #fff;
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
    width: 100%;
    margin: 0 auto;
`

const TxtArea = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
`

const Txt = styled.p`
    ${mixins.font('nexonLv1Gothic','#333')}
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

const Started = () => {
    return ( 
        <Wrap>
            <Contents>
                <div className="imgArea">
                    <Img src={logoBlackBeta} alt="logo"/>
                </div>
                <TxtArea>
                    <Txt>카트라이더 초심자를 위한<br/>여러가지 정보들을 제공합니다.</Txt>
                </TxtArea>
            </Contents>
        </Wrap>
    );
}

export default Started;