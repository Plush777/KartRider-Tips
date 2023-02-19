import styled from "styled-components";
import mixins from 'components/style/mixins';

export const TabWrap = styled.div`
    margin-top: ${props => props.mt};
    border-top: 7px solid ${({theme}) => theme.colors.dede};
    border-bottom: 1px solid ${({theme}) => theme.colors.dede};
    background-color: #EEEDED;
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
    width: 243px;
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
`

export const TabContentWrap = styled.div`

`

export const TabContentInner = styled.div`
    width: 980px;
    margin: 0 auto;
    padding: 80px 0;
`

export const TabContnetBox = styled.div`
    ${mixins.aifs}
    justify-content: space-between;
    column-gap: 90px;
`

export const TabContent = styled.div`
    flex: 1;
`