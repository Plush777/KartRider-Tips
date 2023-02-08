import styled from "styled-components";
import mixins from './mixins';

export const SubContentsWrap = styled.main`
    width: 100%;
    background-color: #f2f2f2;
`

export const SubContentsInner = styled.div`
    width: 1300px;
    margin: 0 auto;
    padding: 80px 0;
`

export const SubContainer = styled.div`
  
`

export const TitleArea = styled.div`

`

export const SubTitle = styled.h3`  
    font-size: ${({theme}) => theme.fontSizes.t42};
    ${mixins.font('nexonLv1Gothic','#000')}
`

export const SubDesc = styled.p`
    line-height: 23px;
    margin-top: 20px;
    ${mixins.font('nexonLv1Gothic','#333')}
    font-size: ${({theme}) => theme.fontSizes.t16};
`

export const SmallDesc = styled.p`
    margin-top: 20px;
    line-height: 23px;
    font-size: ${(props) => props.fz1 ? '18px' : '16px'};
    ${mixins.font('nexonLv1Gothic','#333')}
`

export const GroupList = styled.ul`

`

export const GroupContainer = styled.div`
    &+&{margin-top: 60px;}
    ${GroupList}{
        margin-top: 25px;
    }

`
export const ImgWrap = styled.div`
    ${mixins.fcol};
    margin-top: 60px;

    +${GroupContainer}{
        margin-top: 60px;
    }
`

export const GroupBox = styled.div`
    &+&{margin-top: 60px;}
`

export const GroupItem = styled.li`
    position: relative;
    margin-top: ${(props) => props.mt};
    
    ${SmallDesc}{
        padding-left: ${(props) => props.bullet && '15px'};
        margin-top: ${(props) => props.bullet && '0'};
    }

    &::before{
        content: ${(props) => props.bullet};
        position: absolute;
        top: 7px;
        left: 0;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #000;
    }
`

export const SmallTitle = styled.h4`
    ${mixins.aic};
    font-size: ${(props) => props.fz1 ? '28px' : '24px'};
    ${mixins.font('nexonLv1Gothic','#000')}

    &::before{
        content: ${(props) => props.bullet ? 'none' : ''};
        display: inline-block;
        width: 16px;
        height: 4px;
        border-radius: 4px;
        margin-right: 10px;
        background-color: #333;
    }
`

export const MediumTitle = styled.h5`
    ${({theme}) => theme.fontSizes.t20};
    ${mixins.font('nexonLv1Gothic','#333')}

    +${SmallDesc}{
        margin-top: 10px;
    }
`

export const ImgBox = styled.figure`
    margin-left: ${(props) => props.ml};
    margin-top: ${(props) => props.mt};
`

export const CommonImg = styled.img`
    width: ${(props) => props.wd01 ? '80%' : '100%'};
    transition: all 0.3s ease-in-out;
`

export const ImgCaption = styled.figcaption`

`

export const ImgGroup = styled.div`
    ${mixins.aic};
    column-gap: 30px;
    margin-top: 20px;
`

export const TipGroup = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin-top: ${(props) => props.mt};
    row-gap: 10px;
`

export const TipWrap = styled.div`
    display: flex;
`

export const TipBox = styled.div`
    padding: 20px;
    background-color: #DEDDDD;
    border-radius: 2px;
`

export const TipTxt = styled.p`
    position: relative;
    padding-left: 10px;
    ${({theme}) => theme.fontSizes.t14};
    ${mixins.font('nexonLv1Gothic','#111')};

    &::before{
        content: '*';
        position: absolute;
        top: -1px;
        left: 0;
        color: ${(props) => props.red && '#FF0000'};
    }
`

export const ExArea = styled.div`
    display: inline-flex;
    margin-top: ${(props) => props.mt};
`

export const ExTxt = styled.button.attrs({type: 'button'})`
    ${mixins.aic};
    ${({theme}) => theme.fontSizes.t12};
    ${mixins.font('nexonLv1Gothic','#555')};

    &::before{
        content: '';
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-right: 5px;
        background: ${(props) => props.video && 'url(/images/common/ico-video.svg) no-repeat center'};
    }
`

export const TableArea = styled.div`
    margin-top: ${(props) => props.mt};
`

export const Td = styled.td`
    border-bottom-color: ${(props) => props.bbc};
    color: ${(props) => props.color};
    background-color: ${(props) => props.bg};
`

export const ListContainer = styled.div`
    width: 100%;
    border: 1px solid ${({theme}) => theme.colors.ddd};
    border-radius: 4px;
    margin-top: 20px;

    +${GroupContainer}{
        margin-top: 60px;
    }
`

export const ListContainerInner = styled.div`
    padding: 50px 60px 50px 60px;
    border-radius: 4px;
    background-color: ${({theme}) => theme.colors.fff};
`

export const ListWrap = styled.div`

`

export const ListBox = styled.ul`
    ${mixins.aic};
    flex-wrap: wrap;
    row-gap: 50px;
`

export const ListItem = styled.li`
   ${mixins.aic};
   column-gap: 25px;
   width: calc(100% / 2);
`

export const ItemImgBox = styled.div`
    position: relative;
    ${mixins.fc};
    width: 126px;
    height: 126px;
    border: 1px solid #eee;
    border-radius: 50%;
    z-index: 10;

    &::after{
        content: '';
        ${mixins.posCenter};
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: #eee;
        z-index: 1;
    }
`

export const ItemImg = styled.img`
    position: relative;
    z-index: 10;
    ${mixins.fc};
    width:57px;
    height:57px;
    object-fit: none;
`

export const ItemBox = styled.div`
    ${mixins.fcol}
    row-gap: 10px;
`

export const ItemName = styled.strong` 
    font-size: ${({theme}) => theme.fontSizes.d18};
    ${mixins.font('nexonLv1Gothic','#333')};
`

export const ItemDesc = styled.p`
    font-size: ${({theme}) => theme.fontSizes.d14};
    ${mixins.font('nexonLv1Gothic','#888')};
    line-height: 19px;
`

export const ItemTip = styled.span`
    ${mixins.aic};
    font-size: ${({theme}) => theme.fontSizes.d12};
    ${mixins.font('nexonLv1Gothic','#999')};

    &::before{
        content: '*';
        display: inline-block;
        margin-right: 3px;
        color: #FF0000;
    }
`

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
        font-size: ${({theme}) => theme.fontSizes.d18};
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
    ${mixins.aic}
    justify-content: space-between;
    column-gap: 90px;
`

export const TabContent = styled.div`
    flex: 1;
`

export const Top = styled.div`
    padding-bottom: 35px;
    border-bottom: 2px solid ${({theme}) => theme.colors.c000};
`

export const Bottom = styled.div`
    display: flex;
    padding: 30px 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.dede};
`

export const PreviewArea = styled.div`
    ${mixins.fc}
    height: 305px;
    border-radius: 4px;
    background-color: #D9D9D9;
    box-shadow: 0px 5px 5px ${({theme}) => theme.colors.rgbaBlack};
    ${mixins.skeleton};
`

export const PreviewImg = styled.img`
    ${mixins.whFull}
    border-radius: inherit;
`

export const Row = styled.div`
    ${mixins.fcol}
`

export const RowDesc = styled.span`
    display: block;
    min-width: ${(props) => props.mwd ? '158px' : 'auto'};
    min-height: 46px;
    font-size: ${({theme}) => theme.fontSizes.d20};
    margin-top: ${(props) => props.mt};
    ${mixins.font('nexonLv1Gothic','#000')};
`

export const StarWrap = styled.div`
    position: relative;
    width: 143px;
    height: 31px;
`

export const StarArea = styled.div`
    position: absolute;
    width: ${(props) => props.width};
    height: 100%;
    top: -5px;
    left: ${(props) => props.left};
    overflow: ${(props) => props.overflow};
    z-index: ${(props) => props.zIndex};
`

export const StarBox = styled.div`
    ${mixins.whFull}
    background-image: ${(props) => props.bgUrl};
    background-repeat: no-repeat;
`