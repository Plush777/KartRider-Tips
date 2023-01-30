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

export const SmallDesc = styled.p`
    font-family: 'nexonLv1Gothic';
    margin-top: 20px;
    line-height: 23px;
    font-size: 16px;
    color: #333;
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
    display: flex;
    flex-direction: column;
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

export const MediumTitle = styled.h5`
    font-size: 20px;
    font-family: 'nexonLv1Gothic';
    color: #333;

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

export const ListContainer = styled.div`
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 20px;

    +${GroupContainer}{
        margin-top: 60px;
    }
`

export const ListContainerInner = styled.div`
    padding: 50px 60px 50px 60px;
    border-radius: 4px;
    background-color: #fff;
`

export const ListWrap = styled.div`

`

export const ListBox = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 50px;
`

export const ListItem = styled.li`
   display: flex;
   align-items: center;
   column-gap: 25px;
   width: calc(100% / 2);
`

export const ItemImgBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 126px;
    height: 126px;
    border: 1px solid #eee;
    border-radius: 50%;
    z-index: 10;

    &::after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
    display: flex;
    align-items: center;
    justify-content: center;
    width:57px;
    height:57px;
    object-fit: none;
`

export const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

export const ItemName = styled.strong` 
    font-size: 18px;
    font-family: 'nexonLv1Gothic';
    color: #333;
`

export const ItemDesc = styled.p`
    font-size: 14px;
    font-family: 'nexonLv1Gothic';
    color: #888;
    line-height: 19px;
`

export const ItemTip = styled.span`
    display: flex;
    align-items: center;
    font-size: 12px;
    font-family: 'nexonLv1Gothic';
    color: #999;

    &::before{
        content: '*';
        display: inline-block;
        margin-right: 3px;
        color: #FF0000;
    }
`