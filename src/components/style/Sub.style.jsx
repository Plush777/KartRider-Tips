import styled from "styled-components";

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
    font-size: 42px;
    font-family: 'nexonLv1Gothic';
    color: #000;
`

export const SubDesc = styled.p`
    line-height: 23px;
    margin-top: 20px;
    font-family: 'nexonLv1Gothic';
    font-size: 16px;
    color: #333;
`

export const ImgWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
`

export const GroupBox = styled.div`
    
`

export const SmallTitle = styled.h4`
    display: flex;
    align-items: center;
    font-size: 24px;
    font-family: 'nexonLv1Gothic';
    color: #000;

    &::before{
        content: '';
        display: inline-block;
        width: 16px;
        height: 4px;
        border-radius: 4px;
        margin-right: 10px;
        background-color: #333;
    }
`

export const SmallDesc = styled.p`
    font-family: 'nexonLv1Gothic';
    margin-top: 20px;
    line-height: 23px;
    font-size: 16px;
    color: #333;
`

export const ImgBox = styled.figure`
    margin-left: ${(props) => props.ml};
    margin-top: ${(props) => props.mt};
`

export const ImgCaption = styled.figcaption`

`

export const ImgGroup = styled.div`
    display: flex;
    align-items: center;
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
    font-size: 14px;
    color: #111;
    font-family: 'nexonLv1Gothic';
    padding-left: 10px;

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
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #555;
    font-family: 'nexonLv1Gothic';

    &::before{
        content: '';
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-right: 5px;
        background: ${(props) => props.video && 'url(../images/common/ico-video.svg) no-repeat center'};
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