import styled from "styled-components";
import mixins from 'components/style/mixins';

export const TabWrap = styled.div`
    margin-top: ${props => props.mt};
    border-top: 7px solid var(--tabKartGroupStroke);
    border-bottom: var(--tabKartGroupStroke);
    background-color: var(--tabKartGroupBg);

    ${({ theme }) => theme.tablet`
        display: none;
    `};
`

export const TabInner = styled.div`
    padding: 20px;
`

export const TabList = styled.ul`
    ${mixins.aic}
    gap: 10px;
    flex-wrap: wrap;
    overflow-y: auto;
    max-height: 280px;

    &::-webkit-scrollbar-track{
        display: none;
    }
`

export const TabItemImg = styled.img`
    position: absolute;
    left: 10px;
    width: 32px !important;
    height: 32px !important;

    &.porsche{
        width: 50px !important;
        height: 30px !important;
        object-position: -14px 0;
    }
    
    &.bt21{
        width: 38px !important;
        height: 17px !important;
    }
`

export const TabItem = styled.li`
    width: calc(100% / 5 - 10px);
    height: 48px;
    border: 1px solid var(--tabKartStroke);
    border-radius: 20px;

    &:nth-child(15){
        ${TabItemImg}{
            width: 27px !important;
            height: 27px !important;
        }
    }

    &:nth-child(26){
        >a{
            padding: 0 62px;
            text-align: center;

            ${({ theme }) => theme.laptopL`
                padding: 0 22px;
            `}

            ${({ theme }) => theme.laptop`
                padding: 0 42px;
            `}
        }
    }

    >a{
        position: relative;
        ${mixins.fc}
        ${mixins.whFull}
        padding: 10px;
        font-size: ${({ theme }) => theme.fontSizes.f18};
        ${mixins.font('nexonLv1Gothic', 'var(--tabKartTextColor)')};
        border-radius: inherit;
        background-color: var(--tabKartBg);

        &.active{
            color: #000;
            background-color: var(--tabKartActiveBg);
        }
    }

    ${({ theme }) => theme.laptop`
        width: calc(100% / 4 - 10px);
        height: 44px;

        >a{
            font-size: ${({ theme }) => theme.fontSizes.f16};
            &::before{
                width: 28px;
                height: 28px;
                background-size: 28px;
            }

            &[data-name="play"]::before{background-size: 22px;}
            &[data-name="ios"]::before{background-size: 26px;}
            &[data-name="steam"]::before{background-size: 28px;}
        }
    `};

    @media (max-width: 900px){
        width: calc(100% / 3 - 10px);
    }
`

export const TabContentWrap = styled.div`

`

export const TabContentInner = styled.div`
    max-width: 980px;
    margin: 0 auto;
    padding: 80px 0;

    ${({ theme }) => theme.tablet`
       max-width: initial;
       padding: 0;
       padding-top: 25px;
    `};
`

export const TabContnetBox = styled.div`
    ${mixins.aifs}
    justify-content: space-between;
    column-gap: 90px;

    ${({ theme }) => theme.laptop`
        align-items: center;
    `};

    ${({ theme }) => theme.tablet`
       flex-direction: column;
       align-items: flex-start;
    `};
`

export const TabContent = styled.div`
    position: relative;
    flex: 1;

    ${({ theme }) => theme.tablet`
        width: 100%;
    `};
`