import styled from "styled-components";
import mixins from '../mixins';

export const Title = styled.h3`
    font-size: ${({theme}) => theme.fontSizes.f42};
    ${mixins.font('nexonLv1Gothic','#000')}
`

export const Desc = styled.p`
    line-height: 23px;
    margin-top: 20px;
    ${mixins.font('nexonLv1Gothic','#333')}
    font-size: ${({theme}) => theme.fontSizes.f16};
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

export const SmallDesc = styled.p`
    margin-top: 20px;
    line-height: 23px;
    font-size: ${(props) => props.fz1 ? '18px' : '16px'};
    ${mixins.font('nexonLv1Gothic','#333')}
`

export const MediumTitle = styled.h5`
    ${({theme}) => theme.fontSizes.f20};
    ${mixins.font('nexonLv1Gothic','#333')}

    +${SmallDesc}{
        margin-top: 10px;
    }
`

export const Wrap = styled.div`
    width: 100%;
    background-color: #f2f2f2;
`

export const Inner = styled.div`
    ${mixins.inner}
    padding: 80px 0;
`

export const SkeletonArea = styled.div`
    width: ${(props) => props.wd};
    height: ${(props) => props.ht};
`

export const GroupContainer = styled.div`
    &+&{margin-top: 60px;}
    .groupList{
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

    +${SkeletonArea}{
        margin-top: 20px;
    }
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

export const ImgBox = styled.figure`
    margin-left: ${(props) => props.ml};
    margin-top: ${(props) => props.mt};
`

export const CommonImg = styled.img`
    width: ${(props) => props.wd01 ? '80%' : '100%'};
    transition: all 0.3s ease-in-out;
`

export const ImgGroup = styled.div`
    ${mixins.aic};
    column-gap: 30px;
    margin-top: 20px;
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

export const TableArea = styled.div`
    margin-top: ${(props) => props.mt};
`

export const Td = styled.td`
    border-bottom-color: ${(props) => props.bbc};
    color: ${(props) => props.color};
    background-color: ${(props) => props.bg};
`
export const TitleArea = styled.div`
    padding-bottom: ${(props) => props.pb && '20px'};
    border-bottom: ${(props) => props.bb && '7px solid #dedede'};
`