import styled from "styled-components";
import mixins from 'components/style/mixins';

export const TabWrap = styled.div`
    margin-top: ${props => props.mt};
    border-top: 7px solid ${({theme}) => theme.colors.dede};
    border-bottom: 1px solid ${({theme}) => theme.colors.dede};
    background-color: #EEEDED;

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
`

export const TabItem = styled.li`
    width: calc(100% / 5 - 10px);
    height: 48px;
    border: 1px solid #DBDBDB;
    border-radius: 20px;

    >a{
        position: relative;
        ${mixins.fc}
        ${mixins.whFull}
        padding: 10px;
        font-size: ${({theme}) => theme.fontSizes.f18};
        ${mixins.font('nexonLv1Gothic','#000')};
        border-radius: inherit;
        background-color: #E4E3E3;

        &::before{
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 10px;
            width: 32px;
            height: 32px;
            ${mixins.bgOption};
        }

        &[data-name="cotton"]::before{background-image: url('/images/common/ico-cotton.webp');}
        &[data-name="marathon"]::before{background-image: url('/images/common/ico-marathon.webp')}
        &[data-name="saver"]::before{background-image: url('/images/common/ico-saver.webp')}
        &[data-name="burst"]::before{background-image: url('/images/common/ico-burst.webp')}
        &[data-name="solid"]::before{background-image: url('/images/common/ico-solid.webp')}
        &[data-name="play"]::before{background-image: url('/images/common/ico-play.webp'); background-size: 24px;}
        &[data-name="nexon"]::before{background-image: url('/images/common/ico-nexon.webp')}
        &[data-name="ios"]::before{background-image: url('/images/common/ico-ios.webp'); background-size: 28px;}
        &[data-name="steam"]::before{background-image: url('/images/common/ico-steam.webp'); background-size: 32px;}

        &.active{
            background-color: ${({theme}) => theme.colors.fff};
        }
    }

    ${({ theme }) => theme.laptop`
        width: calc(100% / 4 - 10px);
        height: 44px;

        >a{
            font-size: ${({theme}) => theme.fontSizes.f16};
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
    flex: 1;

    ${({ theme }) => theme.tablet`
        width: 100%;
    `};
`